
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

    // const filteredQuestions = (questions).filter((item) => 
    //   item.course.title.toLowerCase() === question.course.title.toLowerCase() &&
    //   item.id !== id
    // );

    return (
      <div className='mt-4'>
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


// // app/(home)/qa/[id]/page.tsx
// import { getAllAnswers } from '@/actions/answers';
// import { getAllQuestions, getQuestionById } from '@/actions/questions';
// import QuestionDetail from '@/components/frontend/question-details';
// import { authOptions } from '@/config/auth';
// import { AnswerProps } from '@/types/types';
// import { getServerSession } from 'next-auth';
// import { Metadata, ResolvingMetadata } from 'next';
// import { notFound } from 'next/navigation';

// // Define Page Props
// type PageProps = {
//   params: { id: string };
// };

// // ✅ Fetch Question, Answers, and Session Concurrently
// export default async function Page({ params }: PageProps) {
//   // Fetch all data in parallel with error handling
//   const [questionResult, questionsResult, answersResult, sessionResult] = await Promise.allSettled([
//     getQuestionById(params.id),
//     getAllQuestions(),
//     getAllAnswers(),
//     getServerSession(authOptions),
//   ]);

//   // Extract values from settled promises
//   const question = questionResult.status === 'fulfilled' ? questionResult.value : null;
//   const questions = questionsResult.status === 'fulfilled' ? questionsResult.value : [];
//   const answers = answersResult.status === 'fulfilled' ? answersResult.value : [];
//   const session = sessionResult.status === 'fulfilled' ? sessionResult.value : null;

//   // If question is not found, show 404 page
//   if (!question) {
//     notFound();
//   }

//   // Filter answers specific to the question
//   const filteredAnswers = answers?.filter((answer: AnswerProps) => answer.questionId === question.id);

//   return (
//     <div>
//       <QuestionDetail 
//         question={question}
//         answers={filteredAnswers}
//         session={session}
//       />
//     </div>
//   );
// }

// // ✅ Metadata Generation (Optimized for Next.js 15.2)
// export async function generateMetadata(
//   { params }: { params: Promise<{ id: string }> },
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   try {
//     const { id } = await params;
//     const question = await getQuestionById(id);

//     if (!question) {
//       return {
//         title: 'Question Not Found',
//         description: 'The requested question could not be loaded',
//       };
//     }

//     // Extend parent metadata
//     const previousImages = (await parent).openGraph?.images || [];

//     return {
//       title: question.title,
//       description: question.content,
//       openGraph: {
//         images: ['/some-specific-page-image.jpg', ...previousImages],
//       },
//     };
//   } catch (error) {
//     console.error('Metadata Error:', error);
//     return {
//       title: 'Error Loading Question',
//       description: 'There was an issue loading this question.',
//     };
//   }
// }
