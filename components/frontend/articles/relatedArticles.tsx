import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { MessageSquare, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function RelatedArticles({filteredArticles}:{filteredArticles:any}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredArticles.map((article:any) => (
                    <Card key={article.id} className="h-full flex flex-col">
                      <CardHeader className="pb-2">
                        <Link href={`/articles/${article.id}`} className="hover:underline">
                          <h3 className="font-semibold">{article.title}</h3>
                        </Link>
                      </CardHeader>
                      <CardContent className="py-2 flex-grow">
                      <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: article.content }}/>
                      </CardContent>
                      <CardFooter className="pt-2 text-xs text-muted-foreground">
                        <div className="flex items-center gap-3 w-full">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-3 w-3" />
                            <span>{article.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-3 w-3" />
                            <span>{article.comments}</span>
                          </div>
                          <div className="ml-auto">
                            {article.createdAt.toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
  )
}
