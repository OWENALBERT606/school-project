"use server";

import { db } from "@/prisma/db";
import { DiscussionProps, ResponseProps, TopicProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createResponse(data: ResponseProps) {
  try {
    const newResponse = await db.response.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/responses");
    return newResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllResponses() {
  try {
    const responses = await db.response.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        discussion:true,
        user:true
      }
    });

    return responses;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateResponseById(id: string, data: DiscussionProps) {
  try {
    const updatedResponse = await db.response.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/response");
    return updatedResponse;
  } catch (error) {
    console.log(error);
  }
}
export async function getResponseById(id: string) {
  try {
    const response = await db.response.findUnique({
      where: {
        id,
      },
    include:{
      user:true,
      discussion:true
    }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteResponse(id: string) {
  try {
    const deletedResponse = await db.response.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedResponse,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkResponses(responses:ResponseProps[]) {
  try {
    for (const response of responses) {
      await createResponse(response);
    }
  } catch (error) {
    console.log(error);
  }
}
