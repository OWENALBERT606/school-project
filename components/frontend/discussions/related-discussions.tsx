import React from 'react'

export default function RelatedDiscussions({relatedDiscussion}:{relatedDiscussion:any}) {
    const discussion=relatedDiscussion
  return (
    <div>
        <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Related Discussions</h2>
              <ul className="space-y-3">
                {
                    discussion.slice(0,5).map((item:any)=>{
                        return(
                            <li>
                  <a href={`/community/${item.id}`} className="text-green-700 hover:underline">
                    {item.title}
                  </a>
                </li>
                        )
                    })
                }
              </ul>
            </div>
    </div>
  )
}
