import Link from "next/link"
import { ArrowLeft, ChevronRight, Filter, Leaf, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

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
        articles: [
          {
            id: "wheat-growing-guide",
            title: "Complete Guide to Wheat Cultivation",
            description: "Learn everything about growing wheat from seed to harvest",
            date: "2023-10-15",
            readTime: "12 min",
            tags: ["Wheat", "Cereals", "Cultivation"],
          },
          {
            id: "rice-farming-techniques",
            title: "Modern Rice Farming Techniques",
            description: "Discover the latest methods for efficient rice production",
            date: "2023-11-02",
            readTime: "10 min",
            tags: ["Rice", "Cereals", "Techniques"],
          },
          {
            id: "corn-varieties",
            title: "Selecting the Right Corn Varieties for Your Region",
            description: "A comprehensive guide to corn varieties and their suitability for different climates",
            date: "2023-09-18",
            readTime: "8 min",
            tags: ["Corn", "Maize", "Varieties"],
          },
          {
            id: "cereal-crop-rotation",
            title: "Effective Crop Rotation Strategies for Cereal Crops",
            description: "How to implement crop rotation to improve soil health and yield",
            date: "2023-10-28",
            readTime: "15 min",
            tags: ["Crop Rotation", "Soil Health", "Cereals"],
          },
          {
            id: "barley-production",
            title: "Barley Production: From Planting to Harvest",
            description: "Step-by-step guide to growing barley successfully",
            date: "2023-08-12",
            readTime: "11 min",
            tags: ["Barley", "Cereals", "Production"],
          },
          {
            id: "oat-cultivation",
            title: "Oat Cultivation Best Practices",
            description: "Learn the best practices for growing oats with high yields",
            date: "2023-09-05",
            readTime: "9 min",
            tags: ["Oats", "Cereals", "Best Practices"],
          },
        ],
      },
      // Other subcategories would be defined here
    ],
  },
  // Other categories would be defined here
]

export default function SubcategoryPage({ params }: { params: { categoryId: string; subcategoryId: string } }) {
  // Find the category and subcategory that match the URL parameters
  const category = categories.find((cat) => cat.id === params.categoryId)
  const subcategory = category?.subcategories.find((sub) => sub.id === params.subcategoryId)

  // If category or subcategory doesn't exist, you might want to handle that case
  if (!category || !subcategory) {
    return <div>Category or subcategory not found</div>
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
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/categories" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Categories
              </Link>
            </Button>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/categories/${category.id}`} className="text-muted-foreground hover:text-foreground">
                {category.name}
              </Link>
            </Button>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{subcategory.name}</span>
          </div>

          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-tight">{subcategory.name}</h1>
            <p className="text-xl text-muted-foreground mt-2">{subcategory.description}</p>
            <Badge variant="secondary" className="mt-4">
              {subcategory.articleCount} articles
            </Badge>
          </div>

          <div className="grid gap-10 md:grid-cols-[250px_1fr]">
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={`Search in ${subcategory.name}...`}
                  className="w-full pl-8 rounded-lg"
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Filter className="mr-2 h-4 w-4" /> Filter by Topic
                </h3>
                <div className="space-y-3">
                  {subcategory.topics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                        />
                        <span className="text-sm">{topic}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(subcategory.articles.flatMap((article) => article.tags))).map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Articles</h2>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Sort by:</span>
                  <select className="text-sm border rounded p-1">
                    <option>Most Recent</option>
                    <option>Most Popular</option>
                    <option>Alphabetical</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6">
                {subcategory.articles.map((article) => (
                  <Card
                    key={article.id}
                    className="overflow-hidden border-green-100 hover:border-green-300 transition-colors"
                  >
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                      </div>
                      <CardDescription className="mt-1">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="pb-3">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.tags.map((tag, index) => (
                          <Badge key={index} variant="secondary" className="bg-green-50 text-green-800">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Published: {article.date}</span>
                        <span>{article.readTime} read</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/article/${article.id}`}>Read Article</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              <div className="flex items-center justify-center space-x-2 py-4">
                <Button variant="outline" size="icon" disabled>
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
                    <path d="m15 18-6-6 6-6"></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </Button>
                <Button variant="outline" size="sm" className="bg-green-50">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="icon">
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
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </Button>
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

