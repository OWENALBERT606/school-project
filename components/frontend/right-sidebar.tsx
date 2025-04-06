import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, TrendingUp, BookOpen, ExternalLink } from 'lucide-react'
import Link from "next/link"

interface RightSidebarProps {
  className?: string,
  users:any,
  questions:any,
  answers:any,
  articles:any,
  discussions:any
  // resources:string[]
}

export default function RightSidebar({ className,discussions,articles,users,questions,answers }: RightSidebarProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Recent Discussions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {discussions.slice(0,5).map((discussion:any) => (
            <div key={discussion.id} className="flex items-start space-x-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={discussion.user.image} alt={discussion.user.name} />
                <AvatarFallback>{discussion.content}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <a href={`/community/${discussion.id}`} className="text-sm font-medium hover:underline block">{discussion.title}</a>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>{discussion.author}</span>
                  <span className="mx-1">•</span>
                  <span>{discussion.responses.length} responses</span>
                </div>
              </div>
            </div>
          ))}
         <Link href="/community">
         <Button variant="ghost" className="w-full text-sm" size="sm">
            View All Discussions
          </Button>
         </Link>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Platform Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { label: "Active Users", value: users.length },
              { label: "Questions Today", value: questions.length },
              { label: "Answers Today", value: answers.length },
              { label: "Knowledge-base Articles", value: articles.length }
            ].map((stat) => (
              <div key={stat.label} className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{stat.label}</span>
                <span className="text-sm font-medium">{stat.value}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

