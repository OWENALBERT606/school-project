import Link from 'next/link'
import React from 'react'

export default function PopularTopics({sortedTopics}:{sortedTopics:any}) {
  return (
   
     <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold">Popular Topics</h2>
                    <Link href="/community/topics" className="text-green-700 hover:text-green-800 text-sm">
                      View All →
                    </Link>
                  </div>
                  <ul className="space-y-2">
                    {
                      sortedTopics.slice(0,5).map((topic:any)=>{
                        return(
                          <li key={topic.id}>
                      <Link href={`/community/${topic.id}`} className="text-green-700 hover:underline">
                       {topic.title}
                      </Link>
                    </li>
                        )
                      })
                    }
                    {/* <li>
                      <Link href="/topics/crop-rotation" className="text-green-700 hover:underline">
                        Crop Rotation
                      </Link>
                    </li>
                    <li>
                      <Link href="/topics/irrigation-systems" className="text-green-700 hover:underline">
                        Irrigation Systems
                      </Link>
                    </li>
                    <li>
                      <Link href="/topics/organic-pest-control" className="text-green-700 hover:underline">
                        Organic Pest Control
                      </Link>
                    </li>
                    <li>
                      <Link href="/topics/soil-health" className="text-green-700 hover:underline">
                        Soil Health
                      </Link>
                    </li> */}
                  </ul>
                </div>
  )
}
