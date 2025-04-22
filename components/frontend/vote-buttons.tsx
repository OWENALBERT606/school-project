'use client'

import { ThumbsDown, ThumbsUp } from 'lucide-react'
import { useState, useTransition } from 'react'
import clsx from 'clsx'
import { voteOnAnswer } from '@/actions/answers'

export default function VoteButtons({ answer, userId }: { answer: any, userId: string }) {
  const [upvotes, setUpvotes] = useState(answer.upVotes)
  const [downvotes, setDownvotes] = useState(answer.downVotes)
  const [userVote, setUserVote] = useState(answer.userVoteType) // 'UP' | 'DOWN' | null
  const [isPending, startTransition] = useTransition()

  const handleVote = (type: 'UP' | 'DOWN') => {
    startTransition(async () => {
      const res = await voteOnAnswer({
        answerId: answer.id,
        userId,
        type,
      })

      setUpvotes(res.upVotes)
      setDownvotes(res.downVotes)
      setUserVote(res.currentVoteType)
    })
  }

  return (
    <span className="flex space-x-3 justify-center items-center">
      <button
        onClick={() => handleVote('UP')}
        disabled={isPending}
        className={clsx(
          'flex justify-center items-center space-x-1',
          userVote === 'UP' ? 'text-green-700 font-bold' : 'text-gray-700'
        )}
      >
        <ThumbsUp className="w-4 h-4" />
        <span>{upvotes}</span>
      </button>

      <button
        onClick={() => handleVote('DOWN')}
        disabled={isPending}
        className={clsx(
          'flex justify-center items-center space-x-1',
          userVote === 'DOWN' ? 'text-red-700 font-bold' : 'text-gray-700'
        )}
      >
        <ThumbsDown className="w-4 h-4"/>
        <span>{downvotes}</span>
      </button>
    </span>
  )
}
