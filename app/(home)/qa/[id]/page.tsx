
// app/(home)/qa/[id]/page.tsx
import { getAllAnswers } from '@/actions/answers';
import { getAllQuestions, getQuestionById } from '@/actions/questions';
import QuestionDetail from '@/components/frontend/question-details';
import { authOptions } from '@/config/auth';
import { AnswerProps, QuestionProps } from '@/types/types';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
// import { getData } from '@/lib/getData';
// import { getSingleDataItem } from '@/lib/getSingleDataItem';


export default async function Page({params}: {params: Promise<{ id: string }>}):Promise<any> {

  const {id}=await params;
  

  try {
    const question: any= await getQuestionById(id);
    const questions: QuestionProps[] = (await getAllQuestions()) || [];
      const answers: AnswerProps[] = (await getAllAnswers()) || [];


      const relatedQuestions = questions.filter(
  (q) => q.categoryId === question?.category?.id);
        const session = await getServerSession(authOptions);
      
  
      console.log(question);
  
      const filteredAnswers = answers.filter((item: any) => item.questionId === question.id);
  

    if (!question) {
      return <div className="p-4 text-center">Question not found</div>;
    }

    

console.log(filteredAnswers);

    console.log(answers);



    return (
      <div className='mt-4 container mx-auto'>
        <QuestionDetail 
          question={question}
          answers={filteredAnswers}
          session={session}
          relatedQuestion={relatedQuestions}
        />
      </div>
    );
  } catch (error) {
    console.error('Error loading question:', error);

    
    return (
      <div className="p-4 text-center text-red-600">
        Error loading question. Please try again later.
      </div>
    );
  }
}

