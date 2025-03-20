"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ThumbsDown, ThumbsUp } from "lucide-react"
import { CommentForm } from "./comment-form"

// Mock data for a single discussion with comments
const discussionData = {
  id: 1,
  title: "Best practices for crop rotation in small farms",
  content:
    "I've been experimenting with different crop rotation patterns on my 5-acre farm. Would love to hear what's working for others in similar climate zones (Zone 6b).\n\nCurrently, I'm using a 4-year rotation with:\n- Year 1: Tomatoes, peppers, eggplants, potatoes\n- Year 2: Beans, peas, other legumes\n- Year 3: Leafy greens, brassicas\n- Year 4: Root vegetables, alliums\n\nI'm particularly interested in how others are incorporating cover crops into their rotations and managing soil fertility without excessive inputs.",
  author: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  date: "March 15, 2025",
  likes: 24,
  dislikes: 2,
  tags: ["Crop Rotation", "Small Farms"],
  comments: [
    {
      id: 1,
      author: {
        name: "Robert Miller",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "March 15, 2025",
      content:
        "I'm in zone 6a and have had great success with a similar rotation. One thing I'd suggest is adding buckwheat as a summer cover crop between early spring and fall plantings. It suppresses weeds incredibly well and attracts beneficial insects.",
      likes: 8,
      dislikes: 0,
    },
    {
      id: 2,
      author: {
        name: "Maria Garcia",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "March 16, 2025",
      content:
        "Have you considered integrating animal rotations? We've had amazing results with chickens following our vegetable rotations. They clean up pests, add manure, and help turn the soil.",
      likes: 12,
      dislikes: 1,
    },
    {
      id: 3,
      author: {
        name: "James Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "March 16, 2025",
      content:
        "For cover crops, I've been using a mix of crimson clover and winter rye after my fall harvest. The clover fixes nitrogen and the rye provides organic matter when tilled in spring. My soil structure has improved dramatically over the past few years.",
      likes: 15,
      dislikes: 0,
    },
  ],
}

export function DiscussionDetail({discussion}:{discussion:any}) {
  const [likes, setLikes] = useState(discussionData.likes)
  const [dislikes, setDislikes] = useState(discussionData.dislikes)
  const [comments, setComments] = useState(discussionData.comments)

  const handleLike = () => {
    setLikes(likes + 1)
  }

  const handleDislike = () => {
    setDislikes(dislikes + 1)
  }

  const handleCommentLike = (commentId: number) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, likes: comment.likes + 1 } : comment)),
    )
  }

  const handleCommentDislike = (commentId: number) => {
    setComments(
      comments.map((comment) => (comment.id === commentId ? { ...comment, dislikes: comment.dislikes + 1 } : comment)),
    )
  }

  const addComment = (content: string) => {
    const newComment = {
      id: comments.length + 1,
      author: {
        name: "You",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "Just now",
      content,
      likes: 0,
      dislikes: 0,
    }

    setComments([...comments, newComment])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={discussionData.author.avatar} alt={discussionData.author.name} />
              <AvatarFallback>{discussionData.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <div className="flex items-center">
                <span className="font-medium">{discussionData.author.name}</span>
                <span className="text-muted-foreground text-xs ml-2">• {discussionData.date}</span>
              </div>
              <h1 className="text-2xl font-bold">{discussionData.title}</h1>
              <div className="flex flex-wrap gap-2">
                {discussionData.tags.map((tag) => (
                  <span key={tag} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="whitespace-pre-line text-muted-foreground">{discussionData.content}</div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleLike}>
              <ThumbsUp className="h-4 w-4" />
              <span>{likes}</span>
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={handleDislike}>
              <ThumbsDown className="h-4 w-4" />
              <span>{dislikes}</span>
            </Button>
          </div>
        </CardFooter>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Comments ({comments.length})</h2>
        <CommentForm onSubmit={addComment} />

        <div className="mt-6 space-y-4">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader className="p-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-8 w-8 border">
                    <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                    <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <span className="font-medium">{comment.author.name}</span>
                      <span className="text-muted-foreground text-xs ml-2">• {comment.date}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground">{comment.content}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => handleCommentLike(comment.id)}
                  >
                    <ThumbsUp className="h-4 w-4" />
                    <span>{comment.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => handleCommentDislike(comment.id)}
                  >
                    <ThumbsDown className="h-4 w-4" />
                    <span>{comment.dislikes}</span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

