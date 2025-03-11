"use server";

import { db } from "@/prisma/db";
import { SubCategoryProps } from "@/types/types";
import { revalidatePath } from "next/cache";

export async function createSubCategory(data: SubCategoryProps) {
  const slug = data.slug;
  try {
    const existingSubCategory = await db.subCategory.findUnique({
      where: {
        slug,
      },
    });
    if (existingSubCategory) {
      return existingSubCategory;
    }
    const newSubCategory = await db.subCategory.create({
      data,
    });
    // console.log(newCategory);
    revalidatePath("/dashboard/subcategories");
    return newSubCategory;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function getAllSubCategories() {
  try {
    const subCategories = await db.subCategory.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include:{
        questions:true,
        preferences:true,
        category:true,
        articles:true
      }
    });

    return subCategories;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export async function updateSubCategoryById(id: string, data: SubCategoryProps) {
  try {
    const updatedSubCategory = await db.subCategory.update({
      where: {
        id,
      },
      data,
    });
    revalidatePath("/dashboard/subcategories");
    return updatedSubCategory;
  } catch (error) {
    console.log(error);
  }
}
export async function getSubCategoryById(id: string) {
  try {
    const subCategory = await db.subCategory.findUnique({
      where: {
        id,
      },include:{
        questions:true,
        preferences:true
      }
    });
    return subCategory;
  } catch (error) {
    console.log(error);
  }
}
export async function deleteSubCategory(id: string) {
  try {
    const deletedSubCategory = await db.subCategory.delete({
      where: {
        id,
      },
    });

    return {
      ok: true,
      data: deletedSubCategory,
    };
  } catch (error) {
    console.log(error);
  }
}
export async function createBulkCategories(subCategories: SubCategoryProps[]) {
  try {
    for (const subCategory of subCategories) {
      await createSubCategory(subCategory);
    }
  } catch (error) {
    console.log(error);
  }
}
