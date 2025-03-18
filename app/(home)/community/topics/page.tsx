import Link from "next/link"
import { Search, Filter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function TopicsPage() {
  const topics = [
    {
      id: 1,
      title: "Crop Rotation Techniques",
      description: "Learn about effective crop rotation strategies for soil health and pest management",
      category: "Crop Management",
      articles: 24,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      title: "Organic Pest Control",
      description: "Natural methods to control pests without synthetic chemicals",
      category: "Pest Management",
      articles: 18,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      title: "Soil Health Management",
      description: "Techniques to improve and maintain soil fertility and structure",
      category: "Soil Science",
      articles: 32,
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      title: "Water Conservation Methods",
      description: "Strategies to reduce water usage while maintaining crop yields",
      category: "Irrigation",
      articles: 15,
      lastUpdated: "5 days ago",
    },
    {
      id: 5,
      title: "Sustainable Farming Practices",
      description: "Environmentally friendly approaches to agriculture",
      category: "Sustainability",
      articles: 29,
      lastUpdated: "1 day ago",
    },
    {
      id: 6,
      title: "Climate-Smart Agriculture",
      description: "Adapting farming practices to changing climate conditions",
      category: "Climate",
      articles: 21,
      lastUpdated: "4 days ago",
    },
    {
      id: 7,
      title: "Livestock Management",
      description: "Best practices for raising and caring for farm animals",
      category: "Livestock",
      articles: 27,
      lastUpdated: "1 week ago",
    },
    {
      id: 8,
      title: "Agricultural Economics",
      description: "Understanding markets, pricing, and financial management in farming",
      category: "Economics",
      articles: 16,
      lastUpdated: "3 days ago",
    },
  ]

  const categories = [
    { name: "Crop Management", count: 45 },
    { name: "Pest Management", count: 32 },
    { name: "Soil Science", count: 38 },
    { name: "Irrigation", count: 27 },
    { name: "Sustainability", count: 41 },
    { name: "Climate", count: 29 },
    { name: "Livestock", count: 36 },
    { name: "Economics", count: 24 },
    { name: "Technology", count: 31 },
    { name: "Organic Farming", count: 22 },
  ]

  return (
    <div className="flex min-h-screen flex-col px-4 md:px-6 lg:px-8">
      <main className="flex-1">
        <section className="w-full md:px-6 lg:px-8 py-4 md:py-8 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Agricultural Topics</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our comprehensive collection of agricultural knowledge organized by topics
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search topics..."
                    className="w-full bg-white pl-8 rounded-lg border-green-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-[300px_1fr]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Filter className="mr-2 h-4 w-4" /> Filter by Category
                  </h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <div key={category.name} className="flex items-center justify-between">
                        <label className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
                          />
                          <span>{category.name}</span>
                        </label>
                        <span className="text-sm text-muted-foreground">{category.count}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Organic</Badge>
                    <Badge variant="outline">Sustainable</Badge>
                    <Badge variant="outline">Irrigation</Badge>
                    <Badge variant="outline">Soil Health</Badge>
                    <Badge variant="outline">Pest Control</Badge>
                    <Badge variant="outline">Climate</Badge>
                    <Badge variant="outline">Technology</Badge>
                    <Badge variant="outline">Crops</Badge>
                    <Badge variant="outline">Livestock</Badge>
                    <Badge variant="outline">Market</Badge>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">All Topics</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Sort by:</span>
                    <select className="text-sm border rounded p-1">
                      <option>Recently Updated</option>
                      <option>Alphabetical</option>
                      <option>Most Articles</option>
                    </select>
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
                  {topics.map((topic) => (
                    <Card
                      key={topic.id}
                      className="overflow-hidden border-green-100 hover:border-green-300 transition-colors"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle>{topic.title}</CardTitle>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            {topic.category}
                          </Badge>
                        </div>
                        <CardDescription>{topic.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-3">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>{topic.articles} articles</span>
                          <span>Updated {topic.lastUpdated}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full group">
                          Explore Topic
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="sm">
                    5
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
        </section>
      </main>
    </div>
  )
}

