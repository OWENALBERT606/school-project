"use server";

import { db } from "@/prisma/db";
import { AnswerProps, QuestionProps, SubCategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createAnswer(data: AnswerProps) {
  try {
    const newAnswer = await db.answer.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/answers");
    revalidatePath(`/qa/${data.questionId}`);

    return newAnswer;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllAnswers() {
  try {
    const answers = await db.answer.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
       user:true,
       question:true,
      //  votes: {
      //   where: { userId: user.id },
      // },
      }
    });

    return answers;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateAnswerById(id: string, data: AnswerProps) {
  try {
    const updatedAnswer = await db.answer.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/answers");
    return updatedAnswer;
  } catch (error) {
    console.log(error);
  }
}
export async function getAnswerById(id: string) {
  try {
    const answer = await db.answer.findUnique({
      where: {
        id,
      }});
    return answer;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteAnswer(id: string) {
  try {
    const deletedAnswer = await db.answer.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedAnswer,
    };
  } catch (error) {
    console.log(error);
  }
}

type VoteType = 'UP' | 'DOWN'

export async function voteOnAnswer({
  answerId,
  userId,
  type,
}: {
  answerId: string
  userId: string
  type: VoteType
}) {
  const existingVote = await db.vote.findUnique({
    where: {
      userId_answerId: { userId, answerId },
    },
  })

  let currentVoteType: VoteType | null = null

  if (!existingVote) {
    // Create new vote
    await db.vote.create({
      data: {
        userId,
        answerId,
        type,
      },
    })
    if (type === 'UP') {
      await db.answer.update({
        where: { id: answerId },
        data: { upVotes: { increment: 1 } },
      })
    } else {
      await db.answer.update({
        where: { id: answerId },
        data: { downVotes: { increment: 1 } },
      })
    }
    currentVoteType = type
  } else if (existingVote.type === type) {
    // Remove vote (toggle off)
    await db.vote.delete({
      where: {
        userId_answerId: { userId, answerId },
      },
    })
    if (type === 'UP') {
      await db.answer.update({
        where: { id: answerId },
        data: { upVotes: { decrement: 1 } },
      })
    } else {
      await db.answer.update({
        where: { id: answerId },
        data: { downVotes: { decrement: 1 } },
      })
    }
    currentVoteType = null
  } else {
    // Switch vote (from UP to DOWN or vice versa)
    await db.vote.update({
      where: {
        userId_answerId: { userId, answerId },
      },
      data: { type },
    })
    if (type === 'UP') {
      await db.answer.update({
        where: { id: answerId },
        data: {
          upVotes: { increment: 1 },
          downVotes: { decrement: 1 },
        },
      })
    } else {
      await db.answer.update({
        where: { id: answerId },
        data: {
          upVotes: { decrement: 1 },
          downVotes: { increment: 1 },
        },
      })
    }
    currentVoteType = type
  }

  // Optional: Revalidate cache if needed
  revalidatePath(`/question/${answerId}`)

  // Return updated vote state
  const updated = await db.answer.findUnique({
    where: { id: answerId },
    select: {
      upVotes: true,
      downVotes: true,
    },
  })

  return {
    upVotes: updated?.upVotes ?? 0,
    downVotes: updated?.downVotes ?? 0,
    currentVoteType,
  }
}