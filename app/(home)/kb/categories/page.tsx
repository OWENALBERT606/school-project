import Link from "next/link"
import { ChevronRight, Leaf, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This represents our category structure
const categories = [
  {
    id: "crop-production",
    name: "Crop Production",
    description: "Information on growing and managing various crops",
    articleCount: 156,
    icon: "/placeholder.svg?height=40&width=40&text=🌾",
    subcategories: [
      { id: "cereals", name: "Cereals", articleCount: 42 },
      { id: "fruits", name: "Fruits", articleCount: 38 },
      { id: "vegetables", name: "Vegetables", articleCount: 45 },
      { id: "oilseeds", name: "Oilseeds", articleCount: 21 },
      { id: "pulses", name: "Pulses", articleCount: 18 },
      { id: "fiber-crops", name: "Fiber Crops", articleCount: 12 },
    ],
  },
  {
    id: "livestock-management",
    name: "Livestock Management",
    description: "Raising and caring for farm animals",
    articleCount: 124,
    icon: "/placeholder.svg?height=40&width=40&text=🐄",
    subcategories: [
      { id: "cattle", name: "Cattle", articleCount: 35 },
      { id: "poultry", name: "Poultry", articleCount: 28 },
      { id: "sheep-goats", name: "Sheep & Goats", articleCount: 22 },
      { id: "swine", name: "Swine", articleCount: 18 },
      { id: "aquaculture", name: "Aquaculture", articleCount: 15 },
      { id: "beekeeping", name: "Beekeeping", articleCount: 6 },
    ],
  },
  {
    id: "soil-science",
    name: "Soil Science",
    description: "Understanding and managing soil health and fertility",
    articleCount: 98,
    icon: "/placeholder.svg?height=40&width=40&text=🌱",
    subcategories: [
      { id: "soil-types", name: "Soil Types", articleCount: 15 },
      { id: "soil-fertility", name: "Soil Fertility", articleCount: 22 },
      { id: "soil-conservation", name: "Soil Conservation", articleCount: 18 },
      { id: "soil-testing", name: "Soil Testing", articleCount: 12 },
      { id: "composting", name: "Composting", articleCount: 16 },
      { id: "soil-biology", name: "Soil Biology", articleCount: 15 },
    ],
  },
  {
    id: "irrigation-water",
    name: "Irrigation & Water Management",
    description: "Water conservation and irrigation techniques",
    articleCount: 87,
    icon: "/placeholder.svg?height=40&width=40&text=💧",
    subcategories: [
      { id: "irrigation-systems", name: "Irrigation Systems", articleCount: 24 },
      { id: "water-conservation", name: "Water Conservation", articleCount: 18 },
      { id: "drainage", name: "Drainage", articleCount: 12 },
      { id: "water-quality", name: "Water Quality", articleCount: 15 },
      { id: "rainwater-harvesting", name: "Rainwater Harvesting", articleCount: 10 },
      { id: "drought-management", name: "Drought Management", articleCount: 8 },
    ],
  },
  {
    id: "pest-disease",
    name: "Pest & Disease Management",
    description: "Controlling pests and diseases in crops and livestock",
    articleCount: 112,
    icon: "/placeholder.svg?height=40&width=40&text=🐛",
    subcategories: [
      { id: "insect-pests", name: "Insect Pests", articleCount: 28 },
      { id: "plant-diseases", name: "Plant Diseases", articleCount: 32 },
      { id: "weeds", name: "Weeds", articleCount: 18 },
      { id: "biological-control", name: "Biological Control", articleCount: 15 },
      { id: "chemical-control", name: "Chemical Control", articleCount: 12 },
      { id: "integrated-pest-management", name: "Integrated Pest Management", articleCount: 7 },
    ],
  },
  {
    id: "farm-technology",
    name: "Farm Technology & Equipment",
    description: "Modern tools and technology for farming",
    articleCount: 76,
    icon: "/placeholder.svg?height=40&width=40&text=🚜",
    subcategories: [
      { id: "tractors-machinery", name: "Tractors & Machinery", articleCount: 22 },
      { id: "precision-agriculture", name: "Precision Agriculture", articleCount: 18 },
      { id: "drones-robotics", name: "Drones & Robotics", articleCount: 12 },
      { id: "irrigation-technology", name: "Irrigation Technology", articleCount: 10 },
      { id: "farm-software", name: "Farm Software", articleCount: 8 },
      { id: "renewable-energy", name: "Renewable Energy", articleCount: 6 },
    ],
  },
  {
    id: "sustainable-agriculture",
    name: "Sustainable Agriculture",
    description: "Environmentally friendly farming practices",
    articleCount: 94,
    icon: "/placeholder.svg?height=40&width=40&text=♻️",
    subcategories: [
      { id: "organic-farming", name: "Organic Farming", articleCount: 25 },
      { id: "conservation-agriculture", name: "Conservation Agriculture", articleCount: 18 },
      { id: "agroforestry", name: "Agroforestry", articleCount: 15 },
      { id: "permaculture", name: "Permaculture", articleCount: 12 },
      { id: "regenerative-agriculture", name: "Regenerative Agriculture", articleCount: 14 },
      { id: "carbon-sequestration", name: "Carbon Sequestration", articleCount: 10 },
    ],
  },
  {
    id: "agricultural-economics",
    name: "Agricultural Economics",
    description: "Financial aspects of farming and agribusiness",
    articleCount: 82,
    icon: "/placeholder.svg?height=40&width=40&text=💰",
    subcategories: [
      { id: "farm-management", name: "Farm Management", articleCount: 20 },
      { id: "agricultural-marketing", name: "Agricultural Marketing", articleCount: 18 },
      { id: "agricultural-policy", name: "Agricultural Policy", articleCount: 15 },
      { id: "risk-management", name: "Risk Management", articleCount: 12 },
      { id: "agricultural-finance", name: "Agricultural Finance", articleCount: 10 },
      { id: "value-chains", name: "Value Chains", articleCount: 7 },
    ],
  },
  {
    id: "climate-agriculture",
    name: "Climate & Agriculture",
    description: "Climate impacts and adaptation strategies",
    articleCount: 68,
    icon: "/placeholder.svg?height=40&width=40&text=🌡️",
    subcategories: [
      { id: "climate-change-impacts", name: "Climate Change Impacts", articleCount: 18 },
      { id: "adaptation-strategies", name: "Adaptation Strategies", articleCount: 15 },
      { id: "greenhouse-gas-emissions", name: "Greenhouse Gas Emissions", articleCount: 12 },
      { id: "weather-forecasting", name: "Weather Forecasting", articleCount: 10 },
      { id: "seasonal-planning", name: "Seasonal Planning", articleCount: 8 },
      { id: "climate-resilient-crops", name: "Climate-Resilient Crops", articleCount: 5 },
    ],
  },
  {
    id: "post-harvest",
    name: "Post-Harvest Management",
    description: "Handling, storage, and processing of agricultural products",
    articleCount: 72,
    icon: "/placeholder.svg?height=40&width=40&text=🏭",
    subcategories: [
      { id: "storage", name: "Storage", articleCount: 18 },
      { id: "processing", name: "Processing", articleCount: 16 },
      { id: "packaging", name: "Packaging", articleCount: 12 },
      { id: "transportation", name: "Transportation", articleCount: 10 },
      { id: "food-safety", name: "Food Safety", articleCount: 10 },
      { id: "value-addition", name: "Value Addition", articleCount: 6 },
    ],
  },
]

export default function CategoriesPage() {
  return (
    <div className="flex min-h-screen flex-col px-4 md:px-12 lg:px-24">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Knowledge Categories</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Browse our comprehensive collection of agricultural knowledge organized by categories
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search categories..."
                    className="w-full bg-white pl-8 rounded-lg border-green-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category) => (
                <Card
                  key={category.id}
                  className="overflow-hidden border-green-100 hover:border-green-300 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <img
                        src={category.icon || "/placeholder.svg"}
                        alt={category.name}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <CardTitle className="text-xl">{category.name}</CardTitle>
                        <CardDescription className="mt-1">{category.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">{category.articleCount} articles</span>
                      <Badge variant="outline" className="bg-green-50">
                        {category.subcategories.length} subcategories
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.subcategories.slice(0, 4).map((subcategory) => (
                        <Link
                          key={subcategory.id}
                          href={`/categories/${category.id}/${subcategory.id}`}
                          className="text-sm hover:underline flex items-center gap-1"
                        >
                          <ChevronRight className="h-3 w-3 text-muted-foreground" />
                          {subcategory.name}
                          <span className="text-xs text-muted-foreground">({subcategory.articleCount})</span>
                        </Link>
                      ))}
                    </div>
                    {category.subcategories.length > 4 && (
                      <div className="mt-2 text-right">
                        <Button variant="link" size="sm" asChild className="h-auto p-0">
                          <Link href={`/categories/${category.id}`}>
                            View all {category.subcategories.length} subcategories
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
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

