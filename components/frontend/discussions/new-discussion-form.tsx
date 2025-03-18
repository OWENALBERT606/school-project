"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NewDiscussionForm() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit the new discussion to the backend
    console.log({ title, content, tags: tags.split(",").map((tag) => tag.trim()) })

    // Reset form
    setTitle("")
    setContent("")
    setTags("")
    setIsExpanded(false)
  }

  return (
    <Card>
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Start a New Discussion</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="p-4 pt-0">
          <div className="flex gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
              <AvatarFallback>YA</AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-3">
              {!isExpanded ? (
                <Input placeholder="What's on your mind about farming today?" onFocus={() => setIsExpanded(true)} />
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="Give your discussion a clear title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea
                      id="content"
                      placeholder="Share your knowledge, question, or experience..."
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags (comma separated)</Label>
                    <Input
                      id="tags"
                      placeholder="e.g. Irrigation, Organic, Soil Health"
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </CardContent>
        {isExpanded && (
          <CardFooter className="p-4 pt-0 flex justify-between">
            <Button type="button" variant="ghost" onClick={() => setIsExpanded(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={!title.trim() || !content.trim()}>
              Post Discussion
            </Button>
          </CardFooter>
        )}
      </form>
    </Card>
  )
}

