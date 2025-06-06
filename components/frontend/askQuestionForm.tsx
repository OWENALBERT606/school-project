import { getAllCategories } from "@/actions/categories";
import { getAllSubCategories } from "@/actions/subcategories";
import QuestionForm from "@/components/Forms/questions-form";
import SubCategoryForm from "@/components/Forms/subcategories-form";
import { authOptions } from "@/config/auth";
import { Category, SubCategory} from "@prisma/client";
import { getServerSession } from "next-auth";
import React from "react";
import FrontQuestionForm from "../Forms/front-question-form";

export default async function AskQuestionForm({session}:{session:any}) {
  const categoriesData: Category[] = (await getAllCategories()) || [];
  const subcategoriesData: SubCategory[] = (await getAllSubCategories()) || [];

  const categories= categoriesData.map((item:any,i:any)=>{
    return(
      {
        label:item.title,
        value:item.id
      }
    )
  })
  const subcategories= subcategoriesData.map((item:any,i:any)=>{
    return(
      {
        label:item.title,
        value:item.id
      }
    )
  })




  return (
    <div className="p-8">
      <FrontQuestionForm session={session} subcategories={subcategories} categories={categories} />
    </div>
  );
}
