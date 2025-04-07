import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from 'next/link';
import { CalendarIcon, Download, ThumbsDown, ThumbsUp, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import RelatedArticles from './relatedArticles';

export default function ArticleDetails({article}:{article:any}) {
  return (
    <div>
        <div className="lg:col-span-3 space-y-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Link href="/articles" className="text-sm text-muted-foreground hover:underline">
                        Articles
                      </Link>
                      <span className="text-muted-foreground">/</span>
                      <Link
                        href={`/categories/${article.category.id}`}
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        {article.category.name}
                      </Link>
                      <span className="text-muted-foreground">/</span>
                      <Link
                        href={`/subcategories/${article.subcategory.id}`}
                        className="text-sm text-muted-foreground hover:underline"
                      >
                        {article.subcategory.name}
                      </Link>
                    </div>
        
                    <h1 className="text-3xl font-bold tracking-tight">{article.title}</h1>
        
                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={article.user.image || undefined} alt={article.user.name} />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-sm font-medium">{article.user.name}</div>
                      </div>
        
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4" />
                        <time dateTime={article.createdAt.toISOString()}>
                          {article.createdAt.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
        
                      <Badge variant="outline" className="ml-auto">
                        {article.isActive ? "Published" : "Draft"}
                      </Badge>
                    </div>
                  </div>
        
                  <Separator />
        
                  <div className="prose prose-green max-w-none">
                    <h2>Introduction</h2>
                    <p>
                      Water scarcity is a growing concern in many agricultural regions around the world. This article explores
                      innovative irrigation techniques that can help farmers in arid regions maximize water efficiency while
                      maintaining crop yields.
                    </p>
        
                    <h2>Drip Irrigation Systems</h2>
                    <p>
                      Drip irrigation delivers water directly to the plant's root zone, minimizing evaporation and runoff.
                      Studies show that properly designed drip systems can achieve up to 95% water use efficiency compared to
                      conventional flood irrigation methods.
                    </p>
        
                    <div className="not-prose my-6 rounded-lg overflow-hidden border">
                      <Image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Drip irrigation system in operation"
                        width={800}
                        height={400}
                        className="w-full object-cover"
                      />
                      <div className="bg-muted p-2 text-sm text-center text-muted-foreground">
                        Figure 1: Modern drip irrigation system installed in a vegetable field
                      </div>
                    </div>
        
                    <h2>Soil Moisture Sensors</h2>
                    <p>
                      Modern soil moisture sensors can be integrated with irrigation systems to provide real-time data on soil
                      conditions. This allows for precise irrigation scheduling based on actual plant needs rather than
                      predetermined schedules.
                    </p>
        
                    <h2>Deficit Irrigation Strategies</h2>
                    <p>
                      Research has shown that strategic deficit irrigation—deliberately applying less water than the crop's full
                      requirement during drought-tolerant growth stages—can significantly reduce water usage while maintaining
                      acceptable yields.
                    </p>
        
                    <h2>Conclusion</h2>
                    <p>
                      By combining these techniques with proper crop selection and land management practices, farmers in arid
                      regions can build resilient agricultural systems that thrive despite water limitations.
                    </p>
                  </div>
        
                  {article.Attachment && (
                    <div className="rounded-lg border bg-card p-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-8 w-8 text-muted-foreground"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        <div>
                          <div className="font-medium">Attachment</div>
                          <Button variant="link" className="h-auto p-0 text-green-600">
                            <Download className="h-4 w-4 mr-1" />
                            Download resource
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
        
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{article.likes}</span>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ThumbsDown className="h-4 w-4" />
                        <span>{article.dislikes}</span>
                      </Button>
                    </div>
        
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                      <Button variant="outline" size="sm">
                        Share
                      </Button>
                    </div>
                  </div>
        
                  <Separator />
 
                </div>
    </div>
  )
}
