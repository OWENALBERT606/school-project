import Link from "next/link"
import { BarChart3, MessageCircle, Star, TrendingUp, Users } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CategoryDistribution } from "./category-distribution"
import { ActivityChart } from "./activity-chart"
import { RecentQuestionsTable } from "./recent-questions"
import { TopAnswersTable } from "./top-answers"

export default async function QaOverView() {
  // In a real application, you would fetch this data from your database
  // For example using Prisma:
  // const questionCount = await prisma.question.count()
  // const answerCount = await prisma.answer.count()
  // const userCount = await prisma.user.count()
  // const averageStars = await prisma.question.aggregate({ _avg: { stars: true } })

  // For demo purposes, we'll use placeholder data
  const stats = {
    questionCount: 243,
    answerCount: 879,
    userCount: 156,
    averageStars: 3.7,
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Question and answer</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Questions</CardTitle>
                  <MessageCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.questionCount}</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Answers</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.answerCount}</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.userCount}</div>
                  <p className="text-xs text-muted-foreground">+12.5% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Average Stars</CardTitle>
                  <Star className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stats.averageStars}</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Recent Questions</CardTitle>
                  <CardDescription>The most recent questions asked across all categories.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentQuestionsTable/>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Answers</CardTitle>
                  <CardDescription>The most upvoted answers from the community.</CardDescription>
                </CardHeader>
                <CardContent>
                  <TopAnswersTable/>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Category Distribution</CardTitle>
                  <CardDescription>Questions by category and subcategory.</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <CategoryDistribution />
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Activity Over Time</CardTitle>
                  <CardDescription>Questions and answers over the past 30 days.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ActivityChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

