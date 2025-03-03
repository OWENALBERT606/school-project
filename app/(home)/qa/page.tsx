// import MainSidebar from "@/components/frontend/main-sidebar";
// import QaHero from "@/components/frontend/qa-hero";
// import QuestionList from "@/components/frontend/question-list";
// import RightSidebar from "@/components/frontend/right-sidebar";

import MainSidebar from "@/components/frontend/main-sidebar";
import QuestionList from "../../../components/frontend/question-list";
import QaHero from "@/components/frontend/qa-hero";
import { AnswerProps, QuestionProps } from "@/types/types";
import { getAllQuestions } from "@/actions/questions";
import { getAllAnswers } from "@/actions/answers";
import RightSidebar from "@/components/frontend/right-sidebar";



export default async function Home() {
  const questions: QuestionProps[] = (await getAllQuestions()) || [];
  const answers: AnswerProps[] = (await getAllAnswers()) || [];

  // console.log(questions);
  return (
  <div className="">
    <div className="bg-[url(/img/mountains.jpg)]">
    <QaHero/>
    </div>
      <div className="min-h-screen flex flex-col bg-slate-100">
      <main className="flex-grow flex overflow-hidden">
        <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 h-full">
          <MainSidebar className="w-full lg:w-64 shrink-0 overflow-y-auto lg:sticky lg:top-8"/>
          <div className="flex-grow">
            <QuestionList questions={questions} answers={answers}/>
          </div>
          <RightSidebar className="w-full lg:w-80 shrink-0 overflow-y-auto lg:sticky lg:top-8" />
        </div>
      </main>
    </div>

  </div>
  )
}

