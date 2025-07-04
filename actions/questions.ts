"use server";

import { authOptions } from "@/config/auth";
import { db } from "@/prisma/db";
import { QuestionProps, SubCategoryProps } from "@/types/types";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export async function createQuestion(data: QuestionProps) {
  try {
    const newQuestion = await db.question.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/questions");
    return newQuestion;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllQuestions() {
  try {
    const questions = await db.question.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        answers:true,
        views:true,
        subcategory:true,
        category:true,
        user:true
      }
    });

    return questions;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateQuestionById(id: string, data: QuestionProps) {
  try {
    const updatedQuestion = await db.question.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/questions");
    return updatedQuestion;
  } catch (error) {
    console.log(error);
  }
}
export async function getQuestionById(id: string) {
  try {
    const question = await db.question.findUnique({
      where: {
        id,
      },
    include:{
      user:true,
      category:true,
      subcategory:true,
      views:true,
      answers:true
    }
    });
    return question;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteQuestion(id: string) {
  try {
    const deletedQuestion = await db.question.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedQuestion,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkQuestions(questions:QuestionProps[]) {
  try {
    for (const question of questions) {
      await createQuestion(question);
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getTrendingQuestions() {
  try {
    const questions = await db.question.findMany({
      include: {
        answers: true,
        subcategory: true,
        category: true,
        user: true,
        _count: {
          select: { answers: true },
        },
      },
    });

    // Calculate score based on answer count (and optionally stars)
    const sortedQuestions = questions
      .map((question) => ({
        ...question,
        score: question._count.answers, // or add stars: (question.stars * 2) + question._count.answers
      }))
      .sort((a, b) => b.score - a.score);

    return sortedQuestions;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function incrementQuestionView(questionId: string, userId: string) {
  // First, check if this user has already viewed this question
  const existingView = await db.questionView.findUnique({
    where: {
      questionId_userId: {
        questionId,
        userId,
      },
    },
  });

  // If the user hasn't viewed this question before, create a new view record
  if (!existingView) {
    await db.questionView.create({
      data: {
        question: {
          connect: { id: questionId },
        },
        user: {
          connect: { id: userId },
        },
      },
    });
  }

  // Return the question with the updated view count
  const question = await db.question.findUnique({
    where: { id: questionId },
    include: {
      _count: {
        select: {
          views: true, // This gives us the count of views
        },
      },
    },
  });

  return question;
}


