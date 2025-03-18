// import { DiscussionList } from "@/components/discussion-list"
// import { NewDiscussionForm } from "@/components/new-discussion-form"
// import { CategoryFilters } from "@/components/category-filters"
import { CategoryFilters } from "@/components/frontend/discussions/category-filters"
import { DiscussionList } from "@/components/frontend/discussions/discussion-list"
import { NewDiscussionForm } from "@/components/frontend/discussions/new-discussion-form"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen mx-auto px-4 md:px-12 lg:px-24 bg-slate-50">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <NewDiscussionForm />
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Discussions</h2>
                <Link href="/topics" className="text-green-700 hover:text-green-800 font-medium text-sm">
                  View All Topics →
                </Link>
              </div>
              <CategoryFilters />
              <DiscussionList />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Popular Topics</h2>
                <Link href="/community/topics" className="text-green-700 hover:text-green-800 text-sm">
                  View All →
                </Link>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link href="/topics/sustainable-farming" className="text-green-700 hover:underline">
                    Sustainable Farming
                  </Link>
                </li>
                <li>
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
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Community Guidelines</h2>
              <p className="text-gray-600">
                Please keep discussions respectful and on-topic. Share your knowledge and experiences to help fellow
                farmers and agricultural enthusiasts.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6 mt-6">
              <h2 className="text-xl font-semibold mb-4">Browse by Category</h2>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/topics/crops"
                  className="bg-green-100 text-green-800 px-3 py-2 rounded-md hover:bg-green-200 text-center"
                >
                  Crops
                </Link>
                <Link
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

