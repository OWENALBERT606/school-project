import Link from 'next/link'
import React from 'react'

export default function RecentDiscussion({discussions}:{discussions:any}) {
  return (
    <div>
        <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold">Recent Discussions</h2>
                        <Link href="/community/topics" className="text-green-700 hover:text-green-800 font-medium text-sm">
                          View All Topics →
                        </Link>
                      </div>
    </div>
  )
}
