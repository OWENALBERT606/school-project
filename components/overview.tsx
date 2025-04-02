"use client"

import { useState } from "react"
import {
  Bell,
  BookOpen,
  Calendar,
  ChevronDown,
  Compass,
  FileText,
  HelpCircle,
  Leaf,
  Menu,
  MessageSquare,
  Search,
  SproutIcon as Seedling,
  Settings,
  Sun,
  Users,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import DateColumn from "./DataTableColumns/DateColumn"
import QaOverView from "./dashboard/qa/qa-overview"

export default function DashboardOverview({users,articles,questions}:{users:any,questions:any,articles:any}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex min-h-screen flex-col bg-white">
    
      <div className="flex flex-1">
       
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden absolute left-4 top-4">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0 bg-white">
            <div className="flex h-full flex-col gap-2 p-4">
              <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2">
                  <Seedling className="h-6 w-6 text-green-600" />
                  <span className="text-lg font-semibold">ADE</span>
                </div>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </SheetTrigger>
              </div>
              <div className="flex h-12 items-center gap-2 px-4">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search..." className="h-8" />
              </div>
              <nav className="grid gap-1 px-2">
                <Button variant="ghost" className="justify-start gap-2 text-green-700" asChild>
                  <a href="#">
                    <Leaf className="h-4 w-4" />
                    Dashboard
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start gap-2" asChild>
                  <a href="#">
                    <HelpCircle className="h-4 w-4" />
                    Q&A Platform
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start gap-2" asChild>
                  <a href="#">
                    <BookOpen className="h-4 w-4" />
                    Knowledge Base
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start gap-2" asChild>
                  <a href="#">
                    <Users className="h-4 w-4" />
                    Community
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start gap-2" asChild>
                  <a href="#">
                    <Calendar className="h-4 w-4" />
                    Crop Calendar
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start gap-2" asChild>
                  <a href="#">
                    <MessageSquare className="h-4 w-4" />
                    Messages
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start gap-2" asChild>
                  <a href="#">
                    <Compass className="h-4 w-4" />
                    Market Trends
                  </a>
                </Button>
                <Button variant="ghost" className="justify-start gap-2" asChild>
                  <a href="#">
                    <Settings className="h-4 w-4" />
                    Settings
                  </a>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="flex items-center justify-between">
            </div>
            <Tabs defaultValue="overview">
              <TabsList className="grid w-full grid-cols-4 lg:w-[400px]">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="qa">Q&A</TabsTrigger>
                <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Link href="/dashboard/questions"><Card className="border-green-100">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Questions</CardTitle>
                      <HelpCircle className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-800">{questions.length}</div>
                      {/* <p className="text-xs text-muted-foreground">+8 from last week</p> */}
                    </CardContent>
                  </Card></Link>
                 <Link href="/dashboard/articles"> <Card className="border-green-100">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Knowledge Articles</CardTitle>
                      <BookOpen className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-800">{articles.length}</div>
                      <p className="text-xs text-muted-foreground">+12 from last month</p>
                    </CardContent>
                  </Card></Link>
                 <Link href="/dashboard/users"> <Card className="border-green-100">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Community Members</CardTitle>
                      <Users className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-800">{users.length}</div>
                      <p className="text-xs text-muted-foreground">From Community</p>
                    </CardContent>
                  </Card></Link>
                  <Card className="border-green-100">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Growing Season</CardTitle>
                      <Sun className="h-4 w-4 text-amber-500" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-green-800">Fall</div>
                      <p className="text-xs text-muted-foreground">Winter starts in 32 days</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4 border-green-100">
                    <CardHeader>
                      <CardTitle>Seasonal Activity</CardTitle>
                      <CardDescription>Community engagement across growing seasons</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <div className="h-[200px] w-full bg-green-50 rounded-md flex items-center justify-center">
                        <div className="space-y-4 w-full px-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Spring</span>
                              <span className="text-sm text-muted-foreground">65%</span>
                            </div>
                            <Progress value={65} className="h-2 bg-green-100"/>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Summer</span>
                              <span className="text-sm text-muted-foreground">82%</span>
                            </div>
                            <Progress value={82} className="h-2 bg-green-100"/>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Fall</span>
                              <span className="text-sm text-muted-foreground">78%</span>
                            </div>
                            <Progress value={78} className="h-2 bg-green-100"/>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium">Winter</span>
                              <span className="text-sm text-muted-foreground">45%</span>
                            </div>
                            <Progress value={45} className="h-2 bg-green-100"/>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-3 border-green-100">
                    <CardHeader>
                      <CardTitle>Popular Crops</CardTitle>
                      <CardDescription>Most discussed crops this season</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <Seedling className="w-5 h-5 text-amber-600" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Wheat</p>
                            <p className="text-xs text-muted-foreground">142 discussions this month</p>
                          </div>
                          <Badge className="bg-amber-500">Trending</Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Seedling className="w-5 h-5 text-green-600" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Soybeans</p>
                            <p className="text-xs text-muted-foreground">98 discussions this month</p>
                          </div>
                          <Badge variant="outline" className="text-green-700 border-green-200">
                            Popular
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                            <Seedling className="w-5 h-5 text-yellow-600" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Corn</p>
                            <p className="text-xs text-muted-foreground">87 discussions this month</p>
                          </div>
                          <Badge variant="outline" className="text-green-700 border-green-200">
                            Popular
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                            <Seedling className="w-5 h-5 text-red-600" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Tomatoes</p>
                            <p className="text-xs text-muted-foreground">76 discussions this month</p>
                          </div>
                          <Badge variant="outline" className="text-green-700 border-green-200">
                            Popular
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                        View All Crops
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle>Recent Questions</CardTitle>
                      <CardDescription>Latest questions from the community</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                      {
                        questions.slice(1,5).map((item:any)=>{
                          return(
                            <div key={item.id} className="border-l-4 border-green-500 pl-4 py-1">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">Posted by {item.user.name} • <DateColumn row={{ getValue: (key: string) => item.createdAt }} accessorKey="createdAt" /> • {item.answers.length} answers</p>
                        
                        </div>
                          )
                        })
                      }
                      </div>
                    </CardContent>
                    <CardFooter>
                     <Link href="/dashboard/questions">
                     <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                        View All Questions
                      </Button>
                     </Link>
                    </CardFooter>
                  </Card>
                  <Card className="border-green-100">
                    <CardHeader>
                      <CardTitle>Knowledge Base Highlights</CardTitle>
                      <CardDescription>Popular articles and guides</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                       
                        {
                        articles.slice(1,5).map((item:any)=>{
                          return(
                            <div className="flex gap-3">
                            <div className="w-12 h-12 rounded bg-green-100 flex items-center justify-center shrink-0">
                              <FileText className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.title}</h3>
                              <p className="text-sm text-muted-foreground">{item.comments.length} comments • Updated <DateColumn row={{ getValue: (key: string) => item.createdAt }} accessorKey="createdAt" /></p>
                            </div>
                          </div>
                          )
                        })
                      }
                      </div>
                    </CardContent>
                    <CardFooter>
                     <Link href="/dashboard/articles">
                     <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                        Browse Knowledge Base
                      </Button>
                     </Link>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="qa" className="space-y-4">
               <QaOverView/>
              </TabsContent>
              <TabsContent value="knowledge" className="space-y-4">
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle>Knowledge Base</CardTitle>
                    <CardDescription>Browse agricultural guides, articles, and resources</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[450px] flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="mx-auto h-12 w-12 text-green-600 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Knowledge Base Content</h3>
                      <p className="text-muted-foreground max-w-md">
                        This tab would contain the full knowledge base interface with categorized articles, search
                        functionality, and featured content.
                      </p>
                      <Button className="mt-4 bg-green-600 hover:bg-green-700">Browse Articles</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="community" className="space-y-4">
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle>Community</CardTitle>
                    <CardDescription>Connect with other farmers and agricultural professionals</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[450px] flex items-center justify-center">
                    <div className="text-center">
                      <Users className="mx-auto h-12 w-12 text-green-600 mb-4" />
                      <h3 className="text-lg font-medium mb-2">Community Content</h3>
                      <p className="text-muted-foreground max-w-md">
                        This tab would contain the full community interface with discussion forums, member profiles,
                        regional groups, and event announcements.
                      </p>
                      <Button className="mt-4 bg-green-600 hover:bg-green-700">Join Discussions</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

