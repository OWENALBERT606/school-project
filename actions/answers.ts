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
       question:true
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
