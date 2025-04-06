// import Image from "next/image"
// import Link from "next/link"
// import { Clock, Eye, Calendar, ChartBarIcon, MessageSquare, MessageSquareText } from "lucide-react"
// import { Badge } from "@/components/ui/badge"
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination"


// function formatDate(dateString: string) {
//   const date = new Date(dateString)
//   return date.toLocaleDateString('en-US', {
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
//   })
// }

// export default function ArticleList({articles}:{articles:any}) {
//   return (
//     <div className="">
//       <div className="space-y-6 ">
//         {articles.map((article:any) => (
//           <article key={article.id} className="border-b pb-6 last:border-0">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="md:w-3/4">
//                 <div className="flex flex-wrap gap-2 mb-2">
//                   <Badge variant="secondary"> {article.category.title}</Badge>
//                   <Badge variant="outline">
//                      {article.subcategory.title}
//                     </Badge>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">
//                   <Link href={`#article-${article.id}`} className="hover:text-primary">
//                     {article.title}
//                   </Link>
//                 </h3>
//                 <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: article.content }} />
//                 <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
//                   <span>By {article.user.name}</span>
//                   <span className="flex items-center gap-1">
//                     <Calendar className="h-3 w-3" />
//                     {formatDate(article.createdAt)}
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <MessageSquareText className="h-3 w-3" />
//                     {article.comments.length} comments
//                   </span>
//                   <span className="flex items-center gap-1">
//                     <Link href={`/kb/${article.id}`} className="bg-green-900 py-1 rounded-lg text-white px-6">View Article</Link>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>

//       <Pagination className="mt-8">
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious href="#" />
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#" isActive>
//               1
//             </PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">2</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationLink href="#">3</PaginationLink>
//           </PaginationItem>
//           <PaginationItem>
//             <PaginationNext href="#" />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
//     </div>
//   )
// }

"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, MessageSquareText, ChevronDown, ThumbsUp, ThumbsDown } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function ArticleList({articles}:{articles:any}) {
  // State to track liked/disliked status for each article
  const [interactions, setInteractions] = useState<Record<string, {liked: boolean, disliked: boolean}>>(
    articles.reduce((acc: any, article: any) => {
      acc[article.id] = { liked: false, disliked: false };
      return acc;
    }, {})
  );

  // Handle like action
  const handleLike = (articleId: string) => {
    setInteractions(prev => ({
      ...prev,
      [articleId]: { 
        liked: !prev[articleId].liked, 
        disliked: prev[articleId].disliked && !prev[articleId].liked ? false : prev[articleId].disliked 
      }
    }));
  };

  // Handle dislike action
  const handleDislike = (articleId: string) => {
    setInteractions(prev => ({
      ...prev,
      [articleId]: { 
        liked: prev[articleId].liked && !prev[articleId].disliked ? false : prev[articleId].liked, 
        disliked: !prev[articleId].disliked 
      }
    }));
  };

  return (
    <div className="">
      <div className="space-y-6 ">
        {articles.map((article:any) => (
          <article key={article.id} className="border-b pb-6 last:border-0">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-3/4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">{article.category.title}</Badge>
                  <Badge variant="outline">
                    {article.subcategory.title}
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`#article-${article.id}`} className="hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: article.content }} />
                
                {/* Interaction Section: Likes, Dislikes, Comments & View Article */}
                <div className="flex flex-wrap items-center text-sm gap-4 mt-3">
                  {/* Author and Date */}
                  <span className="text-gray-500">By {article.user.name}</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {formatDate(article.createdAt)}
                  </span>
                  
                  {/* Like Button */}
                  <button 
                    onClick={() => handleLike(article.id)}
                    className={`flex items-center gap-1 hover:text-primary transition-colors ${
                      interactions[article.id]?.liked ? 'text-primary font-medium' : 'text-gray-500'
                    }`}
                    aria-label="Like article"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{(article.likes || 0) + (interactions[article.id]?.liked ? 1 : 0)}</span>
                  </button>
                  
                  {/* Dislike Button */}
                  <button 
                    onClick={() => handleDislike(article.id)}
                    className={`flex items-center gap-1 hover:text-red-500 transition-colors ${
                      interactions[article.id]?.disliked ? 'text-red-500 font-medium' : 'text-gray-500'
                    }`}
                    aria-label="Dislike article"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    <span>{(article.dislikes || 0) + (interactions[article.id]?.disliked ? 1 : 0)}</span>
                  </button>
                  
                  {/* Comments Count */}
                  <span className="flex items-center gap-1 text-gray-500">
                    <MessageSquareText className="h-4 w-4" />
                    {article.comments.length} comments
                  </span>
                  
                  {/* View Article Button */}
                  <span className="flex items-center gap-1">
                    <Link href={`/kb/${article.id}`} className="bg-green-900 py-1 rounded-lg text-white px-6">
                      View Article
                    </Link>
                  </span>
                </div>
                
                {/* Comments Preview Section */}
                {article.comments.length > 0 && (
                  <div className="mt-4 pl-4 border-l-2 border-gray-200">
                    <p className="text-sm font-medium text-gray-700 mb-2">Recent Comments</p>
                    
                    {/* Display the first two comments */}
                    {article.comments.slice(0, 2).map((comment: any) => (
                      <div key={comment.id} className="mb-3 last:mb-1">
                        <div className="flex items-center gap-2 mb-1">
                          <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                            {comment.user.avatar ? (
                              <Image 
                                src={comment.user.avatar} 
                                alt={comment.user.name} 
                                width={24} 
                                height={24} 
                              />
                            ) : (
                              <span className="text-xs font-bold">
                                {comment.user.name.charAt(0)}
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-medium">{comment.user.name}</p>
                          <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
                          
                          {/* Comment interaction buttons could go here if needed */}
                        </div>
                        <p className="text-sm text-gray-600 pl-8">{comment.content.length > 120 ? 
                          `${comment.content.substring(0, 120)}...` : comment.content}</p>
                      </div>
                    ))}
                    
                    {/* Show all comments link */}
                    {article.comments.length > 2 && (
                      <div className="mt-2 pl-8">
                        <Link 
                          href={`/kb/${article.id}#comments`} 
                          className="flex items-center text-xs text-primary hover:underline"
                        >
                          Show all {article.comments.length} comments
                          <ChevronDown className="ml-1 h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}