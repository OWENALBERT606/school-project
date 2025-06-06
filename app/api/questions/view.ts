// app/api/questions/view.ts
import { NextRequest, NextResponse } from 'next/server'
import { incrementQuestionView } from '@/actions/questions'

export async function POST(req: NextRequest) {
  const { questionId, userId } = await req.json()
  try {
    await incrementQuestionView(questionId, userId)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to increment views" }, { status: 500 })
  }
}
