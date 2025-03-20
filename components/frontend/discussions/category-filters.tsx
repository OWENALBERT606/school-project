// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Filter, X } from "lucide-react"

// // List of available categories
// // const categories = [
// //   "All",
// //   "Crop Rotation",
// //   "Soil Management",
// //   "Irrigation",
// //   "Organic Farming",
// //   "Pest Control",
// //   "Weather",
// //   "Equipment",
// //   "Livestock",
// //   "Market",
// // ]

// export function CategoryFilters({categories,subcategories}:{categories:any,subcategories:any}) {
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([])
//   const [isExpanded, setIsExpanded] = useState(false)

//   const toggleCategory = (category: string) => {
//     if (category === "All") {
//       setSelectedCategories([])
//       return
//     }

//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter((c) => c !== category))
//     } else {
//       setSelectedCategories([...selectedCategories, category])
//     }
//   }

//   const clearFilters = () => {
//     setSelectedCategories([])
//   }

//   return (
//     <div className="mb-6">
//       <div className="flex items-center justify-between mb-2">
//         <div className="flex items-center gap-2">
//           <Filter className="h-4 w-4 text-muted-foreground" />
//           <span className="font-medium">Filter by:</span>
//         </div>

//         <Button variant="ghost" size="sm" className="text-sm h-8" onClick={() => setIsExpanded(!isExpanded)}>
//           {isExpanded ? "Show Less" : "Show More"}
//         </Button>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         <Button
//           variant={selectedCategories.length === 0 ? "default" : "outline"}
//           size="sm"
//           className="rounded-full"
//           onClick={() => toggleCategory("All")}
//         >
//           All
//         </Button>

//         {categories.slice(1, isExpanded ? categories.length : 5).map((category:any) => (
//           <Button
//             key={category.id}
//             variant={selectedCategories.includes(category.title) ? "default" : "outline"}
//             size="sm"
//             className="rounded-full"
//             onClick={() => toggleCategory(category.title)}
//           >
//             {category.title}
//           </Button>
//         ))}

//         {selectedCategories.length > 0 && (
//           <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground" onClick={clearFilters}>
//             <X className="h-3 w-3 mr-1" />
//             Clear
//           </Button>
//         )}
//       </div>

//       {selectedCategories.length > 0 && (
//         <div className="mt-3 flex items-center gap-2">
//           <span className="text-sm text-muted-foreground">Active filters:</span>
//           <div className="flex flex-wrap gap-1">
//             {selectedCategories.map((category:any) => (
//               <Badge key={category.id} variant="secondary" className="rounded-full">
//                 {category}
//                 <button className="ml-1 hover:text-destructive" onClick={() => toggleCategory(category.title)}>
//                   <X className="h-3 w-3" />
//                 </button>
//               </Badge>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, X } from "lucide-react"

interface Category {
  id: string;
  title: string;
}

interface CategoryFiltersProps {
  categories: Category[];
  subcategories: any; // You can define the type for subcategories as well if needed
}

export function CategoryFilters({ categories, subcategories }: CategoryFiltersProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      category === "All"
        ? [] // Reset categories when 'All' is selected
        : prev.includes(category)
        ? prev.filter((c) => c !== category) // Remove category from selected
        : [...prev, category] // Add category to selected
    )
  }

  const clearFilters = () => {
    setSelectedCategories([]) // Clear selected categories
  }

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="font-medium">Filter by:</span>
        </div>

        <Button variant="ghost" size="sm" className="text-sm h-8" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategories.length === 0 ? "default" : "outline"}
          size="sm"
          className="rounded-full"
          onClick={() => toggleCategory("All")}
        >
          All
        </Button>

        {categories.slice(1, isExpanded ? categories.length : 5).map((category) => (
          <Button
            key={category.id}
            variant={selectedCategories.includes(category.title) ? "default" : "outline"}
            size="sm"
            className="rounded-full"
            onClick={() => toggleCategory(category.title)}
          >
            {category.title}
          </Button>
        ))}

        {selectedCategories.length > 0 && (
          <Button variant="ghost" size="sm" className="rounded-full text-muted-foreground" onClick={clearFilters}>
            <X className="h-3 w-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      {selectedCategories.length > 0 && (
        <div className="mt-3 flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Active filters:</span>
          <div className="flex flex-wrap gap-1">
            {selectedCategories.map((category) => (
              <Badge key={category} variant="secondary" className="rounded-full">
                {category}
                <button className="ml-1 hover:text-destructive" onClick={() => toggleCategory(category)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
