import { getAllCategories } from "@/actions/categories";
import { getAllSubCategories } from "@/actions/subcategories";
import { getAllTopics } from "@/actions/topics";
import CreateDiscussionForm from "@/components/Forms/creat-discussion-form";
import QuestionForm from "@/components/Forms/questions-form";
import { authOptions } from "@/config/auth";
import { SubCategory, Topic} from "@prisma/client";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const topicsData: Topic[] = (await getAllTopics()) || [];

  const topics= topicsData.map((item:any,i:any)=>{
    return(
      {
        label:item.title,
        value:item.id
      }
    )
  })

  const session = await getServerSession(authOptions);


  return (
    <div className="p-8">
      <CreateDiscussionForm session={session} topics={topics}/>
    </div>
  );
}
