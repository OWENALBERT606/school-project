
import MainSidebar from "@/components/frontend/main-sidebar";
import QuestionList from "../../../components/frontend/question-list";
import QaHero from "@/components/frontend/qa-hero";
import { AnswerProps, QuestionProps, UserProps } from "@/types/types";
import { getAllQuestions } from "@/actions/questions";
import { getAllAnswers } from "@/actions/answers";
import RightSidebar from "@/components/frontend/right-sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/config/auth";
import { getAllUsers } from "@/actions/users";
import { getAllArticles } from "@/actions/article";
import { getAllDiscussions } from "@/actions/discussions";
import AskQuestionForm from "@/components/frontend/askQuestionForm";
import { Category, SubCategory } from "@prisma/client";
import { getAllCategories } from "@/actions/categories";
import { getAllSubCategories } from "@/actions/subcategories";



export default async function Home() {
  const questions: QuestionProps[] = (await getAllQuestions()) || [];
  const users: any[] = (await getAllUsers()) || [];
  const discussions: any[] = (await getAllDiscussions()) || [];
  const articles: any[] = (await getAllArticles()) || [];
  const answers: AnswerProps[] = (await getAllAnswers()) || [];
  const session = await getServerSession(authOptions);
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
  <div className="">
    <div className="bg-[url(/img/mountains.jpg)]">
    <QaHero />
    </div>
      <div className="min-h-screen flex flex-col bg-slate-100">
      <main className="flex-grow flex overflow-hidden">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 h-full">
          <MainSidebar className="w-full lg:w-64 shrink-0 overflow-y-auto lg:sticky lg:top-8"/>
          <div className="flex-grow overflow-y-auto">
           
             
            <QuestionList session={session} subcategories={subcategories} categories={categories} questions={questions} answers={answers}/>
          </div>
          <RightSidebar discussions={discussions} articles={articles} answers={answers} questions={questions} users={users} className="w-full lg:w-80 shrink-0 overflow-y-auto lg:sticky lg:top-8" />
        </div>
      </main>
    </div>
    
  </div>
  )
}

