import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ThumbsDown, ThumbsUp } from 'lucide-react';
import VoteButtons from './vote-buttons';

export default function AnswerListing({answers,session}:{session:any,answers:any}) {
    const formatDate = (date:any) => {
        return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      };

  return (
    <div>
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
                            <VoteButtons answer={item} userId={session.user.id} />
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
  )
}
