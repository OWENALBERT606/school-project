import Link from "next/link"
import { ArrowLeft, BookOpen, ChevronRight, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

// This is a simplified version - in a real app, you'd fetch this data from an API or database
const categories = [
  {
    id: "crop-production",
    name: "Crop Production",
    description: "Information on growing and managing various crops",
    articleCount: 156,
    icon: "/placeholder.svg?height=40&width=40&text=🌾",
    subcategories: [
      {
        id: "cereals",
        name: "Cereals",
        articleCount: 42,
        description: "Cultivation of grain crops like wheat, rice, corn, barley, and oats",
        topics: [
          "Wheat Production",
          "Rice Cultivation",
          "Corn/Maize Growing",
          "Barley Farming",
          "Oat Production",
          "Rye Cultivation",
          "Sorghum Growing",
          "Millet Varieties",
          "Cereal Crop Rotation",
        ],
      },
      {
        id: "fruits",
        name: "Fruits",
        articleCount: 38,
        description: "Growing and managing fruit trees and plants",
        topics: [
          "Apple Orchards",
          "Citrus Cultivation",
          "Berry Production",
          "Stone Fruit Growing",
          "Tropical Fruit Farming",
          "Grape Vineyards",
          "Fruit Tree Pruning",
          "Orchard Management",
          "Fruit Harvesting Techniques",
        ],
      },
      {
        id: "vegetables",
        name: "Vegetables",
        articleCount: 45,
        description: "Cultivation of vegetable crops for food production",
        topics: [
          "Leafy Greens",
          "Root Vegetables",
          "Tomato Growing",
          "Pepper Cultivation",
          "Cucurbit Production",
          "Brassica Crops",
          "Onion & Garlic",
          "Potato Farming",
          "Vegetable Crop Rotation",
        ],
      },
      {
        id: "oilseeds",
        name: "Oilseeds",
        articleCount: 21,
        description: "Growing crops primarily for oil production",
        topics: [
          "Soybean Production",
          "Canola/Rapeseed",
          "Sunflower Cultivation",
          "Peanut/Groundnut Farming",
          "Sesame Growing",
          "Flaxseed Production",
          "Safflower Cultivation",
          "Castor Bean",
          "Oilseed Processing",
        ],
      },
      {
        id: "pulses",
        name: "Pulses",
        articleCount: 18,
        description: "Cultivation of legume crops harvested for dry seeds",
        topics: [
          "Bean Varieties",
          "Lentil Production",
          "Chickpea Cultivation",
          "Pea Growing",
          "Cowpea Farming",
          "Pigeon Pea",
          "Mung Bean",
          "Fava Bean",
          "Pulse Crop Rotation",
        ],
      },
      {
        id: "fiber-crops",
        name: "Fiber Crops",
        articleCount: 12,
        description: "Growing plants for fiber production",
        topics: [
          "Cotton Cultivation",
          "Flax Growing",
          "Hemp Production",
          "Jute Farming",
          "Sisal Cultivation",
          "Kenaf Growing",
          "Ramie Production",
          "Fiber Processing",
          "Sustainable Fiber Crops",
        ],
      },
    ],
  },
  // Other categories would be defined here
]

export default function CategoryPage({ params }: { params: { categoryId: string } }) {
  // Find the category that matches the URL parameter
  const category = categories.find((cat) => cat.id === params.categoryId)

  // If category doesn't exist, you might want to handle that case
  if (!category) {
    return <div>Category not found</div>
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-2 items-center">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">AgriKnowledge</span>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/">Home</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/categories">Categories</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/topics">Topics</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/resources">Resources</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/about">About</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container px-4 py-8 md:px-6">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/categories" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Link>
          </Button>

          <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
            <img
              src={category.icon || "/placeholder.svg"}
              alt={category.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{category.name}</h1>
              <p className="text-xl text-muted-foreground mt-2">{category.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge variant="secondary" className="text-sm">
                  {category.articleCount} articles
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {category.subcategories.length} subcategories
                </Badge>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <h2 className="text-2xl font-bold mb-6">Subcategories</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {category.subcategories.map((subcategory) => (
              <Card
                key={subcategory.id}
                className="overflow-hidden border-green-100 hover:border-green-300 transition-colors"
              >
                <CardHeader>
                  <CardTitle>{subcategory.name}</CardTitle>
                  <CardDescription>{subcategory.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{subcategory.articleCount} articles</p>
                  <h4 className="text-sm font-medium mb-2">Popular Topics:</h4>
                  <ul className="space-y-1">
                    {subcategory.topics.slice(0, 5).map((topic, index) => (
                      <li key={index} className="text-sm flex items-center">
                        <ChevronRight className="h-3 w-3 text-muted-foreground mr-1 flex-shrink-0" />
                        <Link href="#" className="hover:underline">
                          {topic}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/categories/${category.id}/${subcategory.id}`}>Browse {subcategory.name}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-green-50 rounded-lg p-6">
            <div className="flex items-start gap-4">
              <BookOpen className="h-8 w-8 text-green-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold">Looking for specific information?</h3>
                <p className="text-muted-foreground mt-2">
                  Our knowledge base contains detailed articles, guides, and resources on all aspects of{" "}
                  {category.name.toLowerCase()}. Use the search function or browse through subcategories to find exactly
                  what you need.
                </p>
                <div className="mt-4">
                  <Button className="bg-green-600 hover:bg-green-700">View Latest Articles</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex gap-2 items-center">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="text-lg font-semibold">AgriKnowledge</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} AgriKnowledge. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

