"use server";

import { db } from "@/prisma/db";
import { TopicProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createTopic(data: TopicProps) {
  try {
    const newTopic = await db.topic.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/topics");
    return newTopic;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllTopics() {
  try {
    const topics = await db.topic.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        discussions:true,
        user:true
      }
    });

    return topics;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateTopicById(id: string, data: TopicProps) {
  try {
    const updatedTopic = await db.topic.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/topics");
    return updatedTopic;
  } catch (error) {
    console.log(error);
  }
}
export async function getTopicById(id: string) {
  try {
    const topic = await db.topic.findUnique({
      where: {
        id,
      },
    include:{
      user:true,
      discussions:true
    }
    });
    return topic;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteTopic(id: string) {
  try {
    const deletedTopic = await db.topic.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedTopic,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkTopics(topics:TopicProps[]) {
  try {
    for (const topic of topics) {
      await createTopic(topic);
    }
  } catch (error) {
    console.log(error);
  }
}
