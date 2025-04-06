"use server";

import { db } from "@/prisma/db";
import { CommentProps, ResponseProps} from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createComment(data: CommentProps) {
  try {
    const newResponse = await db.comment.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath(`/kb/${data.articleId}`);
    
    return newResponse;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllComments() {
  try {
    const comments = await db.comment.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        article:true,
        user:true
      }
    });

    return comments;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateCommentById(id: string, data: CommentProps) {
  try {
    const updatedComment = await db.comment.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/comment");
    return updatedComment;
  } catch (error) {
    console.log(error);
  }
}
export async function getCommentById(id: string) {
  try {
    const comment = await db.comment.findUnique({
      where: {
        id,
      },
    include:{
      user:true,
      article:true
    }
    });
    return comment;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteComment(id: string) {
  try {
    const deletedComment = await db.comment.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedComment,
    };
  } catch (error) {
    console.log(error);
  }
}

