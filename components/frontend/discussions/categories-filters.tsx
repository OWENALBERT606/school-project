import Link from 'next/link'
import React from 'react'

export default function CommunityCategoryFilters({subcategories}:{subcategories:any}) {
  return (
    <div>
        <div className="bg-white rounded-lg shadow p-6 mt-6">
                      <h2 className="text-xl font-semibold mb-4">Browse by Sub Category</h2>
                      <div className="grid grid-cols-2 gap-2 overflow-y-scroll h-[600px]">
                        {
                            subcategories.map((item:any,i:any)=>{
                                return(
                                    <Link
                          href={`/community/subcategory/${item.id}`}
                          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200 text-center"
                        >
                          {item.title}
                        </Link>
                                )
                            })
                        }
                        {/* <Link
                          href="/topics/livestock"
                          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200 text-center"
                        >
                          Livestock
                        </Link>
                        <Link
                          href="/topics/equipment"
                          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200 text-center"
                        >
                          Equipment
                        </Link>
                        <Link
                          href="/topics/soil"
                          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200 text-center"
                        >
                          Soil
                        </Link>
                        <Link
                          href="/topics/weather"
                          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200 text-center"
                        >
                          Weather
                        </Link>
                        <Link
                          href="/topics/market"
                          className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200 text-center"
                        >
                          Market
                        </Link> */}
                      </div>
                    </div>
    </div>
  )
}
