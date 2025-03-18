"use server";

import { db } from "@/prisma/db";
import { DiscussionProps, TopicProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createDiscussion(data: DiscussionProps) {
  try {
    const newDiscussion = await db.discussion.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/discussions");
    revalidatePath("/community");
    
    return newDiscussion;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllDiscussions() {
  try {
    const discussions = await db.discussion.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        responses:true,
        user:true
      }
    });

    return discussions;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateDiscussionById(id: string, data: DiscussionProps) {
  try {
    const updatedDiscussion = await db.discussion.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/discussions");
    return updatedDiscussion;
  } catch (error) {
    console.log(error);
  }
}
export async function getDiscussionById(id: string) {
  try {
    const discussion = await db.discussion.findUnique({
      where: {
        id,
      },
    include:{
      user:true,
      responses:true
    }
    });
    return discussion;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteDiscussion(id: string) {
  try {
    const deletedDiscussion = await db.discussion.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedDiscussion,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkDiscussions(discussions:DiscussionProps[]) {
  try {
    for (const discussion of discussions) {
      await createDiscussion(discussion);
    }
  } catch (error) {
    console.log(error);
  }
}
