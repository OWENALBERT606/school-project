import { getAllCategories } from "@/actions/categories";
import { getAllSubCategories } from "@/actions/subcategories";
import QuestionForm from "@/components/Forms/questions-form";
import SubCategoryForm from "@/components/Forms/subcategories-form";
import TopicForm from "@/components/Forms/topic-form";
import { authOptions } from "@/config/auth";
import { Category, SubCategory} from "@prisma/client";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const session = await getServerSession(authOptions);


  return (
    <div className="p-8">
      <TopicForm session={session}/>
    </div>
  );
}
