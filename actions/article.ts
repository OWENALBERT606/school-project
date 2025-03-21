"use server";

import { db } from "@/prisma/db";
import { QuestionProps, SubCategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";
import { ArticleProps } from "../types/types";

export async function createArticle(data: ArticleProps) {
  try {
    const newArticle = await db.article.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/articles");
    return newArticle;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllArticles() {
  try {
    const articles = await db.article.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        comments:true,
        subcategory:true,
        category:true,
        user:true
      }
    });

    return articles;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateArticleById(id: string, data: QuestionProps) {
  try {
    const updatedArticle = await db.article.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/articles");
    return updatedArticle;
  } catch (error) {
    console.log(error);
  }
}
export async function getArticleById(id: string) {
  try {
    const article = await db.article.findUnique({
      where: {
        id,
      },
    include:{
      user:true,
      category:true,
      subcategory:true,
      comments:true
    }
    });
    return article;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteArticle(id: string) {
  try {
    const deletedArticle = await db.article.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedArticle,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkArticles(articles:ArticleProps[]) {
  try {
    for (const article of articles) {
      await createArticle(article);
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getTrendingArticles() {
  try {
    const articles = await db.article.findMany({
      include: {
        comments: true,
        subcategory: true,
        category: true,
        user: true,
        _count: {
          select: { comments: true },
        },
      },
    });

    const sortedArticles = articles
      .map((article) => ({
        ...article,
        score: article._count.comments,
      }))
      .sort((a, b) => b.score - a.score);

    return sortedArticles;
  } catch (error) {
    console.log(error);
    return null;
  }
}

