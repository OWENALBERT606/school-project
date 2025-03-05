"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface RelatedQuestion {
  id: string
  title: string
  answers: number
  views: number
  slug: string
}

interface RelatedQuestionsProps {
  currentQuestionId: string
  category?: string
  tags?: string[]
}

export default function RelatedQuestions({
  currentQuestionId,
  category = "gardening",
  tags = ["organic", "pest-control"],
}: RelatedQuestionsProps) {
  // In a real application, you would fetch related questions from an API
  // based on the current question ID, category, and tags
  const [relatedQuestions] = useState<RelatedQuestion[]>([
    {
      id: "q1",
      title: "What are the best companion plants to naturally repel garden pests?",
      answers: 8,
      views: 342,
      slug: "best-companion-plants-repel-garden-pests",
    },
    {
      id: "q2",
      title: "How do I make homemade neem oil spray for my vegetable garden?",
      answers: 12,
      views: 567,
      slug: "homemade-neem-oil-spray-vegetable-garden",
    },
    {
      id: "q3",
      title: "Which beneficial insects should I attract to control aphids naturally?",
      answers: 6,
      views: 289,
      slug: "beneficial-insects-control-aphids-naturally",
    },
    {
      id: "q4",
      title: "What's the most effective organic solution for controlling tomato hornworms?",
      answers: 9,
      views: 412,
      slug: "effective-organic-solution-tomato-hornworms",
    },
    {
      id: "q5",
      title: "How can I use diatomaceous earth safely in my vegetable garden?",
      answers: 7,
      views: 325,
      slug: "use-diatomaceous-earth-safely-vegetable-garden",
    },
  ])

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Related Questions</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-3">
          {relatedQuestions.map((question) => (
            <li key={question.id} className="group">
              <Link
                href={`/questions/${question.slug}`}
                className="flex items-start justify-between hover:bg-muted p-2 rounded-md transition-colors"
              >
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none group-hover:text-primary transition-colors">
                    {question.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {question.answers} answers • {question.views} views
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

