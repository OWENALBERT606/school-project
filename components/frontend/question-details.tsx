
import { useState } from 'react'
import { MessageSquare, ArrowDownUp, Eye, ThumbsUp, ThumbsDown } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useForm } from 'react-hook-form'
import CreateAnswerForm from './CreateAnswerForm'
import RelatedQuestions from './related-questions'

export default function QuestionDetail({question,relatedQuestion,answers,session}:{question:any,relatedQuestion:any,answers:any,session:any}) {

      const date = new Date(question.createdAt);
      const options = { year: "numeric", month: "long", day: "numeric" };
      const formattedDate = date.toLocaleDateString("en-US");

      const formatDate = (date:any) => {
        return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      };

  
  return (
    <div className="flex py-6 w-100% px-4 md:px-12 lg:px-24 ">
       <div className="container w-60% h-[900px] overflow-y-auto col-span-8 py-4 space-y-8 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {/* Question Card */}
      <Card>
        <CardHeader className="flex flex-row gap-4 space-y-0">
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-2xl font-semibold text-green-800">{question.title}</h1>
              <p className="text-muted-foreground mt-2">
                {question.content}
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>{question.user.image}</AvatarFallback>
                </Avatar>
                <span>Posted by {question.user.name}</span>
              </div>
              <span className="text-muted-foreground">{formatDate(question.createdAt)}</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{question.category.title}</Badge>
              <Badge variant="secondary">{question.subcategory.title}</Badge>
              <div className="flex-1" />
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{answers.length} answers</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  <span>{question.views.length} views</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Answers Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{answers.length} Answers</h2>
        </div>

        {/* Answer Form */}
        <CreateAnswerForm  questionId={question.id} userId={question.user.id}/>

        {/* Answer List */}
        <div className="space-y-4">
          {/* Sample Answer */}
          {
            answers.map((item:any,i:any)=>{
              return(
                <Card key={item.id}>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="flex-1 space-y-4">
                  <p>
                    {item.content}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={item.user.image} />
                        <AvatarFallback>AS</AvatarFallback>
                      </Avatar>
                      <span>Answered by {item.user.name}</span>
                    </div>
                    <span className="text-muted-foreground">{formatDate(item.createdAt)}</span>
                    <span className='flex space-x-3 justify-center items-center'>
                     <button className="flex text-green-900 justify-center items-center space-x-1"> <ThumbsUp/> 23</button>
                     <button className="flex text-green-900 justify-center items-center space-x-1"> <ThumbsDown/> 23</button>
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
              )
            })
          }

         
        </div>
      </div>
    </div>
      <div className="w-30% ml-3 mt-12 col-span-4">
        <RelatedQuestions currentQuestionId={question.id}/>
      </div>
    </div>
   

  )
}

