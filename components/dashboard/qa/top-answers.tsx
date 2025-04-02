"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { formatDistanceToNow } from "date-fns"

// In a real application, you would fetch this data from your database
const topAnswers = [
  {
    id: "1",
    content: "You can use NextAuth.js for authentication in Next.js...",
    questionTitle: "How to implement authentication in Next.js?",
    upVotes: 24,
    downVotes: 2,
    user: {
      name: "Taylor Swift",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "TS",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
  },
  {
    id: "2",
    content: "For React component optimization, you should consider memoization...",
    questionTitle: "How to optimize React component rendering?",
    upVotes: 18,
    downVotes: 1,
    user: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3), // 3 days ago
  },
  {
    id: "3",
    content: "When designing Prisma schemas, it's important to consider relations...",
    questionTitle: "Best practices for Prisma schema design?",
    upVotes: 15,
    downVotes: 0,
    user: {
      name: "Lisa Chen",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "LC",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 4), // 4 days ago
  },
  {
    id: "4",
    content: "For state management in large apps, consider Redux Toolkit or Zustand...",
    questionTitle: "Best state management solution for large applications?",
    upVotes: 12,
    downVotes: 3,
    user: {
      name: "Mark Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MJ",
    },
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5), // 5 days ago
  },
]

export function TopAnswersTable() {
  return (
    <div className="space-y-4">
      <div className="rounded-md border">
        <div className="w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-12 px-4 text-left align-middle font-medium">Answer</th>
                <th className="h-12 px-4 text-left align-middle font-medium">Votes</th>
                <th className="h-12 px-4 text-left align-middle font-medium">User</th>
              </tr>
            </thead>
            <tbody>
              {topAnswers.map((answer) => (
                <tr
                  key={answer.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-4 align-middle">
                    <div className="font-medium text-xs text-muted-foreground mb-1">Re: {answer.questionTitle}</div>
                    <div className="line-clamp-2 text-sm">{answer.content}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {formatDistanceToNow(answer.createdAt, { addSuffix: true })}
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <ThumbsUp className="h-4 w-4 mr-1 text-green-500" />
                        <span>{answer.upVotes}</span>
                      </div>
                      <div className="flex items-center">
                        <ThumbsDown className="h-4 w-4 mr-1 text-red-500" />
                        <span>{answer.downVotes}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 align-middle">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={answer.user.avatar} alt={answer.user.name} />
                        <AvatarFallback>{answer.user.initials}</AvatarFallback>
                      </Avatar>
                      <div className="text-sm">{answer.user.name}</div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

