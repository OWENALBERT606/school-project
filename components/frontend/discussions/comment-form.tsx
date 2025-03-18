"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface CommentFormProps {
  onSubmit: (content: string) => void
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (comment.trim()) {
      onSubmit(comment)
      setComment("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Avatar className="h-10 w-10 border">
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Your avatar" />
        <AvatarFallback>YA</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-2">
        <Textarea
          placeholder="Share your thoughts or experiences..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-h-[100px]"
        />
        <div className="flex justify-end">
          <Button type="submit" disabled={!comment.trim()}>
            Post Comment
          </Button>
        </div>
      </div>
    </form>
  )
}

