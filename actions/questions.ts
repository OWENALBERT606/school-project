"use server";

import { db } from "@/prisma/db";
import { QuestionProps, SubCategoryProps } from "@/types/types";
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
      }});
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
