
"use client"
import {  MessageSquare, Eye, Clock,LeafyGreen, List } from 'lucide-react'
import { Avatar, AvatarImage} from '@/components/ui/avatar'
import Link from 'next/link'
// import { incrementQuestionView } from '@/actions/questions'
import { useRouter } from 'next/navigation'
import { QuestionAlertForm } from '../Forms/question-alert-form'
import { SessionRedirectForm } from '../Forms/session-redirect'
import FrontQuestionForm from '../Forms/front-question-form'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button";




export default function QuestionList({ session,questions,answers,subcategories,categories}:{questions:any,answers:any,session:any,categories:any,subcategories:any}) {
  const router=useRouter();
  const userSession=session

  function formatDate(dateString: string) {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  
//   const handleQuestionClick = async (e: React.MouseEvent<HTMLAnchorElement>, questionId: string) => {
//   if (session?.user?.id) {
//     e.preventDefault();
//     try {
//       // await fetch("/api/questions/view", {
//       //   method: "POST",
//       //   body: JSON.stringify({ questionId, userId: session.user.id }),
//       //   headers: {
//       //     "Content-Type": "application/json"
//       //   }
//       // });
//     } catch (error) {
//       // handle error silently or show toast
//     } finally {
//       router.push(`/qa/${questionId}`);
//     }
//   }
// };

  // const handleQuestionClick = async (e: React.MouseEvent<HTMLAnchorElement>, questionId: string) => {
    
  //   if (session?.user?.id) {
  //     e.preventDefault(); 
      
  //     try {
  //       // Increment the view count
  //       await incrementQuestionView(questionId, session.user.id);
  //       router.push(`/qa/${questionId}`);
  //     } catch (error) {
  //       router.push(`/qa/${questionId}`);
  //     }
  //   }

  // };

  return (
    <div className="space-y-6 py-6">
      <div className="flex justify-between items-center sticky top-0  dark:from-gray-900 dark:to-gray-800 py-4 z-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Top Questions</h2>
          {!session ? (
  <SessionRedirectForm session={session} />
) : (
      <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="bg-green-900 hover:bg-green-600 text-white">Post Question</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="!w-[800px]">
                    <FrontQuestionForm session={session} subcategories={subcategories} categories={categories} />
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                     
                    </AlertDialogContent>
                  </AlertDialog>
)}
          
      </div>
      <ul className="space-y-4 overflow-y-scroll max-h-[800px]">
        {questions.map((question:any,i:any) => (
          <li key={question.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-start space-x-4">
              
              <div className="flex-grow">
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-400 mb-2">
                  {/* <Link href={`/qa/${question.id}`} onClick={(e) => session && handleQuestionClick(e, question.id)} className="hover:underline">{question.title}</Link> */}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{question.content}</p>
                <div className="space-y-4">
                  <div className="md:flex items-center justify-between">
                    <div className="flex flex-wrap items-center space-x-2">
                      <Avatar className="h-8 w-8 bg-black">
                        <AvatarImage src={question.user.image} alt={question.user.name} />
                      </Avatar>
                      <div className="text-sm sm:flex">
                        <span className="text-black dark:text-gray-400">Posted by </span>
                        <a href="#" className="font-medium mr-3 ml-5 text-green-600 dark:text-green-400 hover:underline">
                          {question.user.name}
                        </a>
                      </div>
                      <div className="flex items-center text-sm text-black dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" /> <span className='ml-2 mr-2'>Date Posted: </span>
                        {formatDate(question.createdAt)}
                      </div>
                      <span className="flex items-center">
                      <Eye size={16} className="mr-1" /> 
                      {question.views.length} views
                    </span>
                    </div>
                  </div>
                  <div className="flex items-center  flex-wrap justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">

                   <div>
                   <span className="flex items-center text-green-900">
                      <LeafyGreen size={16} className="mr-1" />
                      {question.category.title}
                    </span>
                   </div>
                   <div>
                   <span className="flex items-center">
                      <List size={16} className="mr-1" />
                      {question.subcategory.title}
                    </span>
                   </div>
                   <Link href={`/qa/${question.id}`}>
                   <span className="flex items-center">
                      <MessageSquare size={16} className="mr-1" />
                      {question.answers.length} answers
                    </span>
                   </Link>
                   
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}



