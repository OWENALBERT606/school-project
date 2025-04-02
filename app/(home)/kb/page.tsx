// import Link from "next/link"
// import { Search, Leaf, BookOpen, Calendar, BarChart, Cloud, Droplets, Sprout } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import KbCategories from "../../../components/frontend/kb-categories"
// import { Category } from "@prisma/client"
// import { getAllCategories } from "@/actions/categories"

import ArticleList from "@/components/frontend/articles/article-list";
import CategorySidebar from "@/components/frontend/articles/category-sidebar";
import SearchBar from "@/components/frontend/articles/search-bar";

// export default async function Home() {
//     const categories: Category[] = (await getAllCategories()) || [];
//   return (
//     <div className="flex min-h-screen px-4 md:px-12 lg:px-24 flex-col">
//       <main className="flex-1">
//         <section className="w-full py-12 md:py-4 lg:py-8 bg-white">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl text-green-900 font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Your Complete Agriculture Knowledge Base
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     Access comprehensive information on crops, farming techniques, weather patterns, and more to improve
//                     your agricultural practices.
//                   </p>
//                 </div>
//                 <div className="flex flex-col gap-2 min-[400px]:flex-row">
//                   <div className="relative w-full max-w-sm">
//                     <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                     <Input
//                       type="search"
//                       placeholder="Search for crops, techniques, or topics..."
//                       className="w-full bg-white pl-8 rounded-lg border-green-200"
//                     />
//                   </div>
//                   <Button className="bg-green-600 hover:bg-green-700">Search</Button>
//                 </div>
//               </div>
//               <img
//                 alt="Agriculture field"
//                 className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
//                 src="/Farming-undergoing-a-trianing-at-Yara-Knowledge-Center-at-Asili-Farm-1068x712.jpg"
//               />
//             </div>
//           </div>
//         </section>
//         <section className="w-full py-12 md:py-4 lg:py-8 flex justify-center items-center gap-7 bg-white">
//          <KbCategories categories={categories}/>
//         </section>

//         {/* <section className="w-full py-4 md:py-6 lg:py-8">
//           <div className="container px-4 md:px-6">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Explore Agricultural Topics</h2>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Browse through our comprehensive collection of agricultural knowledge
//                 </p>
//               </div>
//             </div>
//             <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
//               <Card className="border-green-100 hover:border-green-300 transition-colors">
//                 <CardHeader className="pb-2">
//                   <Sprout className="h-8 w-8 text-green-600 mb-2" />
//                   <CardTitle>Crop Management</CardTitle>
//                   <CardDescription>Planting, growing, and harvesting techniques</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
//                     <li>Soil preparation</li>
//                     <li>Seed selection</li>
//                     <li>Growth stages</li>
//                     <li>Harvesting methods</li>
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="outline" className="w-full">
//                     Explore
//                   </Button>
//                 </CardFooter>
//               </Card>
//               <Card className="border-green-100 hover:border-green-300 transition-colors">
//                 <CardHeader className="pb-2">
//                   <Droplets className="h-8 w-8 text-blue-600 mb-2" />
//                   <CardTitle>Irrigation Systems</CardTitle>
//                   <CardDescription>Water management for optimal crop growth</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
//                     <li>Drip irrigation</li>
//                     <li>Sprinkler systems</li>
//                     <li>Water conservation</li>
//                     <li>Scheduling techniques</li>
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="outline" className="w-full">
//                     Explore
//                   </Button>
//                 </CardFooter>
//               </Card>
//               <Card className="border-green-100 hover:border-green-300 transition-colors">
//                 <CardHeader className="pb-2">
//                   <Cloud className="h-8 w-8 text-slate-600 mb-2" />
//                   <CardTitle>Weather & Climate</CardTitle>
//                   <CardDescription>Understanding weather patterns for farming</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
//                     <li>Seasonal forecasts</li>
//                     <li>Climate adaptation</li>
//                     <li>Frost protection</li>
//                     <li>Drought management</li>
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="outline" className="w-full">
//                     Explore
//                   </Button>
//                 </CardFooter>
//               </Card>
//               <Card className="border-green-100 hover:border-green-300 transition-colors">
//                 <CardHeader className="pb-2">
//                   <BarChart className="h-8 w-8 text-amber-600 mb-2" />
//                   <CardTitle>Market Insights</CardTitle>
//                   <CardDescription>Agricultural economics and market trends</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
//                     <li>Price forecasting</li>
//                     <li>Supply chain management</li>
//                     <li>Market access</li>
//                     <li>Value addition</li>
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="outline" className="w-full">
//                     Explore
//                   </Button>
//                 </CardFooter>
//               </Card>
//               <Card className="border-green-100 hover:border-green-300 transition-colors">
//                 <CardHeader className="pb-2">
//                   <Calendar className="h-8 w-8 text-red-600 mb-2" />
//                   <CardTitle>Seasonal Planning</CardTitle>
//                   <CardDescription>Year-round agricultural planning</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
//                     <li>Crop rotation</li>
//                     <li>Planting calendars</li>
//                     <li>Seasonal activities</li>
//                     <li>Long-term planning</li>
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="outline" className="w-full">
//                     Explore
//                   </Button>
//                 </CardFooter>
//               </Card>
//               <Card className="border-green-100 hover:border-green-300 transition-colors">
//                 <CardHeader className="pb-2">
//                   <BookOpen className="h-8 w-8 text-purple-600 mb-2" />
//                   <CardTitle>Research & Innovation</CardTitle>
//                   <CardDescription>Latest agricultural research and technologies</CardDescription>
//                 </CardHeader>
//                 <CardContent className="pb-2">
//                   <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
//                     <li>New crop varieties</li>
//                     <li>Farming technologies</li>
//                     <li>Sustainable practices</li>
//                     <li>Research findings</li>
//                   </ul>
//                 </CardContent>
//                 <CardFooter>
//                   <Button variant="outline" className="w-full">
//                     Explore
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </div>
//           </div>
//         </section> */}

//         <section className="w-full py-4 md:py-6 lg:py-8">
//           <div className="">
//             <div className="flex flex-col items-center justify-center space-y-4 text-center">
//               <div className="space-y-2">
//                 <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Content</h2>
//                 <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//                   Discover our most popular and recently updated agricultural resources
//                 </p>
//               </div>
//             </div>
//             <Tabs defaultValue="popular" className="mt-8 w-full mx-auto">
//               <TabsList className="grid w-full grid-cols-2">
//                 <TabsTrigger value="popular">Popular</TabsTrigger>
//                 <TabsTrigger value="recent">Recently Updated</TabsTrigger>
//               </TabsList>
//               <TabsContent value="popular" className="mt-6">
//                 <div className="grid gap-6 md:grid-cols-3">
//                   {[1, 2, 3, 4].map((i) => (
//                     <Card key={i} className="overflow-hidden">
//                       <img
//                         src={"/Farming-undergoing-a-trianing-at-Yara-Knowledge-Center-at-Asili-Farm-1068x712.jpg"}
//                         alt={`Popular article ${i}`}
//                         className="w-full h-48 object-cover"
//                       />
//                       <CardHeader>
//                         <CardTitle>Sustainable Farming Practices</CardTitle>
//                         <CardDescription>Learn about eco-friendly farming methods</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-sm text-muted-foreground">
//                           Discover how sustainable farming practices can improve soil health, reduce environmental
//                           impact, and increase long-term productivity.
//                         </p>
//                       </CardContent>
//                       <CardFooter>
//                         <Button variant="outline" className="w-full">
//                           Read More
//                         </Button>
//                       </CardFooter>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//               <TabsContent value="recent" className="mt-6">
//                 <div className="grid gap-6 md:grid-cols-2">
//                   {[1, 2, 3, 4].map((i) => (
//                     <Card key={i} className="overflow-hidden">
//                       <img
//                         src={`/placeholder.svg?height=200&width=400&text=Recent Article ${i}`}
//                         alt={`Recent article ${i}`}
//                         className="w-full h-48 object-cover"
//                       />
//                       <CardHeader>
//                         <CardTitle>Advanced Irrigation Techniques</CardTitle>
//                         <CardDescription>Updated research on water management</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <p className="text-sm text-muted-foreground">
//                           The latest research on precision irrigation systems that can reduce water usage by up to 30%
//                           while maintaining optimal crop yields.
//                         </p>
//                       </CardContent>
//                       <CardFooter>
//                         <Button variant="outline" className="w-full">
//                           Read More
//                         </Button>
//                       </CardFooter>
//                     </Card>
//                   ))}
//                 </div>
//               </TabsContent>
//             </Tabs>
//           </div>
//         </section>
//       </main>
//     </div>
//   )
// }


export default function KnowledgeBasePage() {
  return (
    <div className="min-h-screen px-4 md:px-12 lg:px-24 bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl font-bold">Agricultural Knowledge Base</h1>
            <SearchBar />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <CategorySidebar />
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Agricultural Articles</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <select className="text-sm border rounded-md px-2 py-1">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Alphabetical</option>
                  </select>
                </div>
              </div>
              <ArticleList />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

