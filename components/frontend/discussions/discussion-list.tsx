import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageSquare, ThumbsDown, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock data for discussions
const discussions = [
  {
    id: 1,
    title: "Best practices for crop rotation in small farms",
    content:
      "I've been experimenting with different crop rotation patterns on my 5-acre farm. Would love to hear what's working for others in similar climate zones (Zone 6b).",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 hours ago",
    likes: 24,
    dislikes: 2,
    comments: 8,
    tags: ["Crop Rotation", "Small Farms"],
  },
  {
    id: 2,
    title: "Dealing with this season's unusual rainfall patterns",
    content:
      "We've had nearly twice the normal rainfall this spring in the Midwest. I'm concerned about soil erosion and nutrient runoff. Has anyone implemented successful strategies to mitigate these issues?",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "5 hours ago",
    likes: 42,
    dislikes: 0,
    comments: 15,
    tags: ["Weather", "Soil Management"],
  },
  {
    id: 3,
    title: "Organic pest control for tomato plants",
    content:
      "My tomato plants are being attacked by hornworms. I'm trying to stay organic - what are your best natural remedies that actually work?",
    author: {
      name: "Elena Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "Yesterday",
    likes: 36,
    dislikes: 3,
    comments: 21,
    tags: ["Organic", "Pest Control", "Tomatoes"],
  },
  {
    id: 4,
    title: "New sustainable irrigation system - my results after one season",
    content:
      "I installed a drip irrigation system with rainwater collection last spring, and I want to share my water usage data and crop yield comparisons...",
    author: {
      name: "David Williams",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    date: "2 days ago",
    likes: 89,
    dislikes: 4,
    comments: 32,
    tags: ["Irrigation", "Sustainability"],
  },
]

export function DiscussionList() {
  return (
    <div className="space-y-4">
      {discussions.map((discussion) => (
        <Card key={discussion.id} className="overflow-hidden">
          <CardHeader className="p-4 pb-0">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={discussion.author.avatar} alt={discussion.author.name} />
                <AvatarFallback>{discussion.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <div className="flex items-center">
                  <span className="font-medium">{discussion.author.name}</span>
                  <span className="text-muted-foreground text-xs ml-2">• {discussion.date}</span>
                </div>
                <h3 className="font-semibold text-lg">{discussion.title}</h3>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <p className="text-muted-foreground">{discussion.content}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {discussion.tags.map((tag) => (
                <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ThumbsUp className="h-4 w-4" />
                <span>{discussion.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <ThumbsDown className="h-4 w-4" />
                <span>{discussion.dislikes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{discussion.comments}</span>
              </Button>
            </div>
            <Link
              href={`/discussion/${discussion.id}`}
              className="text-green-700 hover:text-green-800 text-sm font-medium"
            >
              View Discussion
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

