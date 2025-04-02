"use client"

import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { formatDistanceToNow } from "date-fns"

// In a real application, you would fetch this data from your database
const recentQuestions = [
  {
    id: "1",
    title: "How to implement authentication in Next.js?",
    category: "Web Development",
    subcategory: "Next.js",
    stars: 12,
    answers: 5,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "AJ",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
  },
  {
    id: "2",
    title: "Best practices for Prisma schema design?",
    category: "Databases",
    subcategory: "ORM",
    stars: 8,
    answers: 3,
    user: {
      name: "Sarah Miller",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SM",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
  },
  {
    id: "3",
    title: "How to optimize React component rendering?",
    category: "Web Development",
    subcategory: "React",
    stars: 15,
    answers: 7,
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MC",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
  },
  {
    id: "4",
    title: "Implementing real-time features with WebSockets",
    category: "Web Development",
    subcategory: "WebSockets",
    stars: 10,
    answers: 4,
    user: {
      name: "Emily Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "EW",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
  },
  {
    id: "5",
    title: "Best state management solution for large applications?",
    category: "Web Development",
    subcategory: "State Management",
    stars: 18,
    answers: 9,
    user: {
      name: "David Park",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DP",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
  },
]

export function RecentQuestionsTable() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium">Question</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Category</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Stars</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Answers</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Asked by</th>
                <th className="h-12 px-4 text-left align-middle font-medium">When</th>
              </tr>
            </thead>
            <tbody>
              {recentQuestions.map((question) => (
                <tr
                  key={question.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle">
                    <div className="font-medium">{question.title}</div>
                  </td>
                  <td className="p-4 align-middle">
                    <Badge variant="outline" className="mr-1">
                      {question.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {question.subcategory}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle">{question.stars}</td>
                  <td className="p-4 align-middle">{question.answers}</td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={question.user.avatar} alt={question.user.name} />
                        <AvatarFallback>{question.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">{question.user.name}</div>
                    </div>
                  </td>
                  <td className="p-4 align-middle">{formatDistanceToNow(question.createdAt, { addSuffix: true })}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

