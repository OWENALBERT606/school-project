"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronRight, FolderOpen, BookOpen, FileText } from "lucide-react"

// Replace the categories array with this agriculture-focused version
// const categories = [
//   {
//     id: 1,
//     name: "Crop Farming",
//     icon: <FolderOpen className="h-4 w-4" />,
//     count: 24,
//     subcategories: [
//       { id: 101, name: "Grains & Cereals", count: 8 },
//       { id: 102, name: "Fruits & Vegetables", count: 10 },
//       { id: 103, name: "Cash Crops", count: 6 },
//     ],
//   },
//   {
//     id: 2,
//     name: "Livestock Management",
//     icon: <FileText className="h-4 w-4" />,
//     count: 18,
//     subcategories: [
//       { id: 201, name: "Cattle & Dairy", count: 7 },
//       { id: 202, name: "Poultry", count: 5 },
//       { id: 203, name: "Aquaculture", count: 3 },
//       { id: 204, name: "Small Ruminants", count: 3 },
//     ],
//   },
//   {
//     id: 3,
//     name: "Sustainable Agriculture",
//     icon: <BookOpen className="h-4 w-4" />,
//     count: 15,
//     subcategories: [
//       { id: 301, name: "Organic Farming", count: 6 },
//       { id: 302, name: "Conservation Practices", count: 5 },
//       { id: 303, name: "Water Management", count: 4 },
//     ],
//   },
//   {
//     id: 4,
//     name: "Agricultural Technology",
//     icon: <FileText className="h-4 w-4" />,
//     count: 12,
//     subcategories: [
//       { id: 401, name: "Farm Equipment", count: 4 },
//       { id: 402, name: "Precision Agriculture", count: 5 },
//       { id: 403, name: "IoT & Sensors", count: 3 },
//     ],
//   },
//   {
//     id: 5,
//     name: "Market & Economics",
//     icon: <FileText className="h-4 w-4" />,
//     count: 10,
//     subcategories: [
//       { id: 501, name: "Pricing & Trading", count: 4 },
//       { id: 502, name: "Supply Chain", count: 3 },
//       { id: 503, name: "Agricultural Policy", count: 3 },
//     ],
//   },
//   {
//     id: 6,
//     name: "Soil Science",
//     icon: <FileText className="h-4 w-4" />,
//     count: 8,
//     subcategories: [
//       { id: 601, name: "Soil Testing", count: 3 },
//       { id: 602, name: "Fertilizers", count: 3 },
//       { id: 603, name: "Soil Conservation", count: 2 },
//     ],
//   },
//   {
//     id: 7,
//     name: "Pest & Disease Control",
//     icon: <FileText className="h-4 w-4" />,
//     count: 14,
//     subcategories: [
//       { id: 701, name: "Integrated Pest Management", count: 5 },
//       { id: 702, name: "Common Crop Diseases", count: 6 },
//       { id: 703, name: "Biological Control", count: 3 },
//     ],
//   },
// ]

export default function CategorySidebar({categories}:{categories:any}) {
  const [expandedCategories, setExpandedCategories] = useState<number[]>([1])

  const toggleCategory = (categoryId: number) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  return (
    <div className="w-full h-[800px] md:w-80 bg-white rounded-lg shadow p-4 mb-6 md:mb-0 overflow-y-scroll">
      <h3 className="font-medium text-lg mb-4">Categories</h3>
      <ul className="space-y-1">
        {categories.map((category:any) => (
          <li key={category.id}>
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-center gap-2">
                <span>{category.title}</span>
                <span className="text-lg text-gray-500">({category.subcategories.length})</span>
              </div>
              {category.subcategories.length > 0 &&
                (expandedCategories.includes(category.id) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                ))}
            </div>

            {expandedCategories.includes(category.id) && category.subcategories.length > 0 && (
              <ul className="ml-6 mt-1 space-y-1">
                {category.subcategories.map((subcategory:any) => (
                  <li key={subcategory.id}>
                    <Link
                      href={`#category-${subcategory.id}`}
                      className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-md"
                    >
                      <span>{subcategory.title}</span>
                      <span className="text-xs text-gray-500">({subcategory.count})</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

