import { getAllArticles, getArticleById } from "@/actions/article";
import { getAllComments } from "@/actions/comments";
import { getAllDiscussions, getDiscussionById } from "@/actions/discussions";
import { getAllResponses } from "@/actions/responses";
import RelatedArticles from "@/components/frontend/articles/relatedArticles";
import { DiscussionDetail } from "@/components/frontend/discussions/discussion-details";
import RelatedDiscussions from "@/components/frontend/discussions/related-discussions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authOptions } from "@/config/auth";
import { DiscussionProps, ResponseProps } from "@/types/types";
import { Article, Comment, Discussion, Response } from "@prisma/client";
import { CalendarIcon, Download, MessageSquare, ThumbsDown, ThumbsUp, User } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function ArticlePage({params}: {params: Promise<{ id: string }>}):Promise<any> {
  const {id}= await params;
  const article: any= await getArticleById(id);
  const articles: Article[] = (await getAllArticles()) || [];
  const comments: Comment[] = (await getAllComments()) || [];
  const relatedArticles = articles.filter(
    (q) => q.categoryId === article?.categoryId && q.id !== article.id
  );
          const session = await getServerSession(authOptions);
          const filteredArticles = articles.filter((item: any) => item.categoryId === article.category.id);
  // console.log(filteredArticles);
  
      if (!article) {
        return <div className="p-4 text-center">Article not found</div>;
      }

  return (
    <div className="container px-4 md:px-24 lg:px-36 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content - Article */}
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
          <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: article.content }}/>
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
          <div className="space-y-4 pt-4">
              {article.comments.map((comment:any) => (
                <Card key={comment.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={comment.user.image || undefined} alt={comment.user.name} />
                        <AvatarFallback>
                          <User className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{comment.user.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {comment.createdAt.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{comment.content}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex items-center gap-2 text-sm">
                      <Button variant="ghost" size="sm" className="h-auto p-0">
                        Reply
                      </Button>
                      <span className="text-muted-foreground">•</span>
                      <Button variant="ghost" size="sm" className="h-auto p-0">
                        Like
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}

              <Card>
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-medium">Add a comment</h3>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
                    placeholder="Share your thoughts..."
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Post Comment</Button>
                </CardFooter>
              </Card>
            </div>
          {/* <Tabs defaultValue="comments">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="comments">Comments ({article.comments.length})</TabsTrigger>
              <TabsTrigger value="questions">Questions (3)</TabsTrigger>
            </TabsList>
            <TabsContent value="comments" className="space-y-4 pt-4">
              {article.comments.map((comment:any) => (
                <Card key={comment.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={comment.user.image || undefined} alt={comment.user.name} />
                        <AvatarFallback>
                          <User className="h-3 w-3" />
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-medium">{comment.user.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {comment.createdAt.toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{comment.content}</p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <div className="flex items-center gap-2 text-sm">
                      <Button variant="ghost" size="sm" className="h-auto p-0">
                        Reply
                      </Button>
                      <span className="text-muted-foreground">•</span>
                      <Button variant="ghost" size="sm" className="h-auto p-0">
                        Like
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}

              <Card>
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-medium">Add a comment</h3>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
                    placeholder="Share your thoughts..."
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Post Comment</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="questions" className="space-y-4 pt-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="font-medium">Robert Williams</div>
                    <div className="text-xs text-muted-foreground">2 days ago</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    What's the typical cost range for implementing a small-scale drip irrigation system for a 5-acre
                    vegetable farm?
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-2 text-sm">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      Answer
                    </Button>
                    <span className="text-muted-foreground">•</span>
                    <Badge variant="outline" className="text-green-600">
                      2 answers
                    </Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6">
                      <AvatarFallback>
                        <User className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="font-medium">Lisa Thompson</div>
                    <div className="text-xs text-muted-foreground">5 days ago</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>
                    Are there any government subsidies or grants available for farmers who want to implement
                    water-saving irrigation systems?
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <div className="flex items-center gap-2 text-sm">
                    <Button variant="ghost" size="sm" className="h-auto p-0">
                      Answer
                    </Button>
                    <span className="text-muted-foreground">•</span>
                    <Badge variant="outline" className="text-green-600">
                      1 answer
                    </Badge>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <h3 className="text-lg font-medium">Ask a question</h3>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
                    placeholder="What would you like to know about this topic?"
                  />
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Post Question</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs> */}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <h3 className="font-semibold">Knowledge Base Features</h3>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/articles">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                  </svg>
                  Browse Articles
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/discussions">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Discussions
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/questions">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  Q&A
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/support">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
                  </svg>
                  Support
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/events">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Events & Webinars
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* <Card>
            <CardHeader>
              <h3 className="font-semibold">Recent Discussions</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentDiscussions.map((discussion) => (
                <div key={discussion.id} className="border-b pb-3 last:border-0 last:pb-0">
                  <Link href={`/discussions/${discussion.id}`} className="font-medium hover:underline">
                    {discussion.title}
                  </Link>
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{discussion.replies} replies</span>
                    <span>
                      {discussion.lastActivity.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href="/discussions">View All Discussions</Link>
              </Button>
            </CardContent>
          </Card> */}

          <Card>
            <CardHeader>
              <h3 className="font-semibold">Expert Support</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Need personalized advice on irrigation techniques?</p>
              <Button className="w-full" asChild>
                <Link href="/support/expert-consultation">Request Expert Consultation</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="font-semibold">Related Resources</h3>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/resources/irrigation-calculator">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="12" y1="10" x2="12" y2="16" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                  </svg>
                  Irrigation Calculator
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/resources/water-conservation-guide">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                  Water Conservation Guide
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start" asChild>
                <Link href="/resources/equipment-directory">
                  <svg
                    className="h-4 w-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                  Equipment Directory
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
       
      </div>
      <div className="space-y-4 md:mt-6">
            <h2 className="text-xl font-semibold">Similar Articles</h2>
            <RelatedArticles filteredArticles={filteredArticles}/>
          </div>
    </div>
  )
}



// import { CalendarIcon, Download, MessageSquare, ThumbsDown, ThumbsUp, User } from "lucide-react"
// import Link from "next/link"
// import Image from "next/image"

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// // This would be replaced with your actual data fetching logic
// async function getArticle(id: string) {
//   // Mock data based on the provided model
//   return {
//     id,
//     title: "Sustainable Irrigation Techniques for Arid Regions",
//     content: "", // We'll render this directly in JSX
//     Attachment: "/documents/irrigation-guide.pdf", // This would be a real path in production
//     comments: [
//       {
//         id: "comment1",
//         content: "I've implemented drip irrigation on my farm and saw water usage drop by 40%. Great article!",
//         user: { id: "user2", name: "Maria Garcia", image: null },
//         createdAt: new Date(2023, 10, 15),
//       },
//       {
//         id: "comment2",
//         content:
//           "Could you provide more information about the cost of implementing soil moisture sensors for small farms?",
//         user: { id: "user3", name: "John Smith", image: null },
//         createdAt: new Date(2023, 10, 17),
//       },
//     ],
//     isActive: true,
//     category: { id: "cat1", name: "Irrigation" },
//     subcategory: { id: "subcat1", name: "Water Conservation" },
//     user: { id: "user1", name: "Dr. Ahmed Hassan", image: null },
//     likes: 42,
//     dislikes: 3,
//     createdAt: new Date(2023, 10, 10),
//     updatedAt: new Date(2023, 10, 12),
//   }
// }

// // Mock function to get similar articles
// async function getSimilarArticles(categoryId: string, subcategoryId: string, currentArticleId: string) {
//   return [
//     {
//       id: "article2",
//       title: "Water-Efficient Crop Selection for Drought-Prone Areas",
//       excerpt:
//         "Learn which crops thrive with minimal water requirements while maintaining high nutritional value and market demand.",
//       category: { id: "cat1", name: "Irrigation" },
//       subcategory: { id: "subcat1", name: "Water Conservation" },
//       user: { id: "user4", name: "Dr. Sarah Johnson", image: null },
//       createdAt: new Date(2023, 9, 15),
//       likes: 36,
//       comments: 4,
//     },
//     {
//       id: "article3",
//       title: "Rainwater Harvesting Systems for Small Farms",
//       excerpt:
//         "Practical guide to designing and implementing cost-effective rainwater collection systems tailored to agricultural needs.",
//       category: { id: "cat1", name: "Irrigation" },
//       subcategory: { id: "subcat1", name: "Water Conservation" },
//       user: { id: "user5", name: "Michael Chen", image: null },
//       createdAt: new Date(2023, 8, 22),
//       likes: 29,
//       comments: 7,
//     },
//     {
//       id: "article4",
//       title: "Soil Moisture Monitoring: Tools and Techniques",
//       excerpt:
//         "Comprehensive overview of modern soil moisture sensors and how to interpret their data for optimal irrigation scheduling.",
//       category: { id: "cat1", name: "Irrigation" },
//       subcategory: { id: "subcat4", name: "Technology" },
//       user: { id: "user6", name: "Emma Rodriguez", image: null },
//       createdAt: new Date(2023, 10, 5),
//       likes: 31,
//       comments: 5,
//     },
//   ]
// }

// // Mock function to get recent discussions
// async function getRecentDiscussions() {
//   return [
//     {
//       id: "disc1",
//       title: "Experiences with solar-powered drip irrigation",
//       replies: 12,
//       lastActivity: new Date(2023, 10, 18),
//     },
//     {
//       id: "disc2",
//       title: "Best practices for irrigation scheduling in clay soils",
//       replies: 8,
//       lastActivity: new Date(2023, 10, 16),
//     },
//     {
//       id: "disc3",
//       title: "Water rights and regulations for small farmers",
//       replies: 15,
//       lastActivity: new Date(2023, 10, 14),
//     },
//   ]
// }

// export default async function ArticlePage({ params }: { params: { id: string } }) {
//   const article = await getArticle(params.id)
//   const similarArticles = await getSimilarArticles(article.category.id, article.subcategory.id, article.id)
//   const recentDiscussions = await getRecentDiscussions()

//   return (
//     <div className="container px-4 md:px-12 lg:px-24 py-6">
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Main Content - Article */}
//         <div className="lg:col-span-3 space-y-6">
//           <div className="space-y-2">
//             <div className="flex items-center gap-2">
//               <Link href="/articles" className="text-sm text-muted-foreground hover:underline">
//                 Articles
//               </Link>
//               <span className="text-muted-foreground">/</span>
//               <Link
//                 href={`/categories/${article.category.id}`}
//                 className="text-sm text-muted-foreground hover:underline"
//               >
//                 {article.category.name}
//               </Link>
//               <span className="text-muted-foreground">/</span>
//               <Link
//                 href={`/subcategories/${article.subcategory.id}`}
//                 className="text-sm text-muted-foreground hover:underline"
//               >
//                 {article.subcategory.name}
//               </Link>
//             </div>

//             <h1 className="text-3xl font-bold tracking-tight">{article.title}</h1>

//             <div className="flex flex-wrap items-center gap-4 pt-2">
//               <div className="flex items-center gap-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src={article.user.image || undefined} alt={article.user.name} />
//                   <AvatarFallback>
//                     <User className="h-4 w-4" />
//                   </AvatarFallback>
//                 </Avatar>
//                 <div className="text-sm font-medium">{article.user.name}</div>
//               </div>

//               <div className="flex items-center gap-1 text-sm text-muted-foreground">
//                 <CalendarIcon className="h-4 w-4" />
//                 <time dateTime={article.createdAt.toISOString()}>
//                   {article.createdAt.toLocaleDateString("en-US", {
//                     year: "numeric",
//                     month: "long",
//                     day: "numeric",
//                   })}
//                 </time>
//               </div>

//               <Badge variant="outline" className="ml-auto">
//                 {article.isActive ? "Published" : "Draft"}
//               </Badge>
//             </div>
//           </div>

//           <Separator />

//           <div className="prose prose-green max-w-none">
//             <h2>Introduction</h2>
//             <p>
//               Water scarcity is a growing concern in many agricultural regions around the world. This article explores
//               innovative irrigation techniques that can help farmers in arid regions maximize water efficiency while
//               maintaining crop yields.
//             </p>

//             <h2>Drip Irrigation Systems</h2>
//             <p>
//               Drip irrigation delivers water directly to the plant's root zone, minimizing evaporation and runoff.
//               Studies show that properly designed drip systems can achieve up to 95% water use efficiency compared to
//               conventional flood irrigation methods.
//             </p>

//             <div className="not-prose my-6 rounded-lg overflow-hidden border">
//               <Image
//                 src="/placeholder.svg?height=400&width=800"
//                 alt="Drip irrigation system in operation"
//                 width={800}
//                 height={400}
//                 className="w-full object-cover"
//               />
//               <div className="bg-muted p-2 text-sm text-center text-muted-foreground">
//                 Figure 1: Modern drip irrigation system installed in a vegetable field
//               </div>
//             </div>

//             <h2>Soil Moisture Sensors</h2>
//             <p>
//               Modern soil moisture sensors can be integrated with irrigation systems to provide real-time data on soil
//               conditions. This allows for precise irrigation scheduling based on actual plant needs rather than
//               predetermined schedules.
//             </p>

//             <h2>Deficit Irrigation Strategies</h2>
//             <p>
//               Research has shown that strategic deficit irrigation—deliberately applying less water than the crop's full
//               requirement during drought-tolerant growth stages—can significantly reduce water usage while maintaining
//               acceptable yields.
//             </p>

//             <h2>Conclusion</h2>
//             <p>
//               By combining these techniques with proper crop selection and land management practices, farmers in arid
//               regions can build resilient agricultural systems that thrive despite water limitations.
//             </p>
//           </div>

//           {article.Attachment && (
//             <div className="rounded-lg border bg-card p-4">
//               <div className="flex items-center gap-2">
//                 <svg
//                   className="h-8 w-8 text-muted-foreground"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
//                   <polyline points="14 2 14 8 20 8" />
//                 </svg>
//                 <div>
//                   <div className="font-medium">Attachment</div>
//                   <Button variant="link" className="h-auto p-0 text-green-600">
//                     <Download className="h-4 w-4 mr-1" />
//                     Download resource
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <Button variant="outline" size="sm" className="gap-1">
//                 <ThumbsUp className="h-4 w-4" />
//                 <span>{article.likes}</span>
//               </Button>
//               <Button variant="outline" size="sm" className="gap-1">
//                 <ThumbsDown className="h-4 w-4" />
//                 <span>{article.dislikes}</span>
//               </Button>
//             </div>

//             <div className="flex gap-2">
//               <Button variant="outline" size="sm">
//                 Save
//               </Button>
//               <Button variant="outline" size="sm">
//                 Share
//               </Button>
//             </div>
//           </div>

//           <Separator />

//           <div className="space-y-4">
//             <h2 className="text-xl font-semibold">Similar Articles</h2>
//             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//               {similarArticles.map((article) => (
//                 <Card key={article.id} className="h-full flex flex-col">
//                   <CardHeader className="pb-2">
//                     <Link href={`/articles/${article.id}`} className="hover:underline">
//                       <h3 className="font-semibold">{article.title}</h3>
//                     </Link>
//                   </CardHeader>
//                   <CardContent className="py-2 flex-grow">
//                     <p className="text-sm text-muted-foreground line-clamp-3">{article.excerpt}</p>
//                   </CardContent>
//                   <CardFooter className="pt-2 text-xs text-muted-foreground">
//                     <div className="flex items-center gap-3 w-full">
//                       <div className="flex items-center gap-1">
//                         <ThumbsUp className="h-3 w-3" />
//                         <span>{article.likes}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <MessageSquare className="h-3 w-3" />
//                         <span>{article.comments}</span>
//                       </div>
//                       <div className="ml-auto">
//                         {article.createdAt.toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "short",
//                           day: "numeric",
//                         })}
//                       </div>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               ))}
//             </div>
//           </div>

//           <Tabs defaultValue="comments">
//             <TabsList className="grid w-full grid-cols-2">
//               <TabsTrigger value="comments">Comments ({article.comments.length})</TabsTrigger>
//               <TabsTrigger value="questions">Questions (3)</TabsTrigger>
//             </TabsList>
//             <TabsContent value="comments" className="space-y-4 pt-4">
//               {article.comments.map((comment) => (
//                 <Card key={comment.id}>
//                   <CardHeader className="pb-2">
//                     <div className="flex items-center gap-2">
//                       <Avatar className="h-6 w-6">
//                         <AvatarImage src={comment.user.image || undefined} alt={comment.user.name} />
//                         <AvatarFallback>
//                           <User className="h-3 w-3" />
//                         </AvatarFallback>
//                       </Avatar>
//                       <div className="font-medium">{comment.user.name}</div>
//                       <div className="text-xs text-muted-foreground">
//                         {comment.createdAt.toLocaleDateString("en-US", {
//                           year: "numeric",
//                           month: "short",
//                           day: "numeric",
//                         })}
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent>
//                     <p>{comment.content}</p>
//                   </CardContent>
//                   <CardFooter className="pt-0">
//                     <div className="flex items-center gap-2 text-sm">
//                       <Button variant="ghost" size="sm" className="h-auto p-0">
//                         Reply
//                       </Button>
//                       <span className="text-muted-foreground">•</span>
//                       <Button variant="ghost" size="sm" className="h-auto p-0">
//                         Like
//                       </Button>
//                     </div>
//                   </CardFooter>
//                 </Card>
//               ))}

//               <Card>
//                 <CardHeader className="pb-2">
//                   <h3 className="text-lg font-medium">Add a comment</h3>
//                 </CardHeader>
//                 <CardContent>
//                   <textarea
//                     className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
//                     placeholder="Share your thoughts..."
//                   />
//                 </CardContent>
//                 <CardFooter className="flex justify-end">
//                   <Button>Post Comment</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//             <TabsContent value="questions" className="space-y-4 pt-4">
//               <Card>
//                 <CardHeader className="pb-2">
//                   <div className="flex items-center gap-2">
//                     <Avatar className="h-6 w-6">
//                       <AvatarFallback>
//                         <User className="h-3 w-3" />
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="font-medium">Robert Williams</div>
//                     <div className="text-xs text-muted-foreground">2 days ago</div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p>
//                     What's the typical cost range for implementing a small-scale drip irrigation system for a 5-acre
//                     vegetable farm?
//                   </p>
//                 </CardContent>
//                 <CardFooter className="pt-0">
//                   <div className="flex items-center gap-2 text-sm">
//                     <Button variant="ghost" size="sm" className="h-auto p-0">
//                       Answer
//                     </Button>
//                     <span className="text-muted-foreground">•</span>
//                     <Badge variant="outline" className="text-green-600">
//                       2 answers
//                     </Badge>
//                   </div>
//                 </CardFooter>
//               </Card>

//               <Card>
//                 <CardHeader className="pb-2">
//                   <div className="flex items-center gap-2">
//                     <Avatar className="h-6 w-6">
//                       <AvatarFallback>
//                         <User className="h-3 w-3" />
//                       </AvatarFallback>
//                     </Avatar>
//                     <div className="font-medium">Lisa Thompson</div>
//                     <div className="text-xs text-muted-foreground">5 days ago</div>
//                   </div>
//                 </CardHeader>
//                 <CardContent>
//                   <p>
//                     Are there any government subsidies or grants available for farmers who want to implement
//                     water-saving irrigation systems?
//                   </p>
//                 </CardContent>
//                 <CardFooter className="pt-0">
//                   <div className="flex items-center gap-2 text-sm">
//                     <Button variant="ghost" size="sm" className="h-auto p-0">
//                       Answer
//                     </Button>
//                     <span className="text-muted-foreground">•</span>
//                     <Badge variant="outline" className="text-green-600">
//                       1 answer
//                     </Badge>
//                   </div>
//                 </CardFooter>
//               </Card>

//               <Card>
//                 <CardHeader className="pb-2">
//                   <h3 className="text-lg font-medium">Ask a question</h3>
//                 </CardHeader>
//                 <CardContent>
//                   <textarea
//                     className="w-full min-h-[100px] p-2 rounded-md border border-input bg-background"
//                     placeholder="What would you like to know about this topic?"
//                   />
//                 </CardContent>
//                 <CardFooter className="flex justify-end">
//                   <Button>Post Question</Button>
//                 </CardFooter>
//               </Card>
//             </TabsContent>
//           </Tabs>
//         </div>

//         {/* Sidebar */}
//         <div className="lg:col-span-1 space-y-6">
//           <Card>
//             <CardHeader>
//               <h3 className="font-semibold">Knowledge Base Features</h3>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/articles">
//                   <svg
//                     className="h-4 w-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
//                   </svg>
//                   Browse Articles
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/discussions">
//                   <MessageSquare className="h-4 w-4 mr-2" />
//                   Discussions
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/questions">
//                   <svg
//                     className="h-4 w-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <circle cx="12" cy="12" r="10" />
//                     <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
//                     <path d="M12 17h.01" />
//                   </svg>
//                   Q&A
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/support">
//                   <svg
//                     className="h-4 w-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z" />
//                   </svg>
//                   Support
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/events">
//                   <svg
//                     className="h-4 w-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//                     <line x1="16" y1="2" x2="16" y2="6" />
//                     <line x1="8" y1="2" x2="8" y2="6" />
//                     <line x1="3" y1="10" x2="21" y2="10" />
//                   </svg>
//                   Events & Webinars
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <h3 className="font-semibold">Recent Discussions</h3>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               {recentDiscussions.map((discussion) => (
//                 <div key={discussion.id} className="border-b pb-3 last:border-0 last:pb-0">
//                   <Link href={`/discussions/${discussion.id}`} className="font-medium hover:underline">
//                     {discussion.title}
//                   </Link>
//                   <div className="flex justify-between text-xs text-muted-foreground mt-1">
//                     <span>{discussion.replies} replies</span>
//                     <span>
//                       {discussion.lastActivity.toLocaleDateString("en-US", {
//                         month: "short",
//                         day: "numeric",
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//               <Button variant="outline" size="sm" className="w-full" asChild>
//                 <Link href="/discussions">View All Discussions</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <h3 className="font-semibold">Expert Support</h3>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <p className="text-sm text-muted-foreground">Need personalized advice on irrigation techniques?</p>
//               <Button className="w-full" asChild>
//                 <Link href="/support/expert-consultation">Request Expert Consultation</Link>
//               </Button>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <h3 className="font-semibold">Related Resources</h3>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/resources/irrigation-calculator">
//                   <svg
//                     className="h-4 w-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect x="4" y="2" width="16" height="20" rx="2" />
//                     <line x1="12" y1="10" x2="12" y2="16" />
//                     <line x1="9" y1="13" x2="15" y2="13" />
//                   </svg>
//                   Irrigation Calculator
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/resources/water-conservation-guide">
//                   <svg
//                     className="h-4 w-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
//                   </svg>
//                   Water Conservation Guide
//                 </Link>
//               </Button>
//               <Button variant="ghost" className="w-full justify-start" asChild>
//                 <Link href="/resources/equipment-directory">
//                   <svg
//                     className="h-4 w-4 mr-2"
//                     xmlns="http://www.w3.org/2000/svg"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
//                   </svg>
//                   Equipment Directory
//                 </Link>
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }



