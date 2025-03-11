import Link from "next/link"
import { ChevronRight, Leaf, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// This represents our category structure
// const categories = [
//   {
//     id: "crop-production",
//     name: "Crop Production",
//     description: "Information on growing and managing various crops",
//     articleCount: 156,
//     icon: "/placeholder.svg?height=40&width=40&text=🌾",
//     subcategories: [
//       { id: "cereals", name: "Cereals", articleCount: 42 },
//       { id: "fruits", name: "Fruits", articleCount: 38 },
//       { id: "vegetables", name: "Vegetables", articleCount: 45 },
//       { id: "oilseeds", name: "Oilseeds", articleCount: 21 },
//       { id: "pulses", name: "Pulses", articleCount: 18 },
//       { id: "fiber-crops", name: "Fiber Crops", articleCount: 12 },
//     ],
//   },
//   {
//     id: "livestock-management",
//     name: "Livestock Management",
//     description: "Raising and caring for farm animals",
//     articleCount: 124,
//     icon: "/placeholder.svg?height=40&width=40&text=🐄",
//     subcategories: [
//       { id: "cattle", name: "Cattle", articleCount: 35 },
//       { id: "poultry", name: "Poultry", articleCount: 28 },
//       { id: "sheep-goats", name: "Sheep & Goats", articleCount: 22 },
//       { id: "swine", name: "Swine", articleCount: 18 },
//       { id: "aquaculture", name: "Aquaculture", articleCount: 15 },
//       { id: "beekeeping", name: "Beekeeping", articleCount: 6 },
//     ],
//   },
//   {
//     id: "soil-science",
//     name: "Soil Science",
//     description: "Understanding and managing soil health and fertility",
//     articleCount: 98,
//     icon: "/placeholder.svg?height=40&width=40&text=🌱",
//     subcategories: [
//       { id: "soil-types", name: "Soil Types", articleCount: 15 },
//       { id: "soil-fertility", name: "Soil Fertility", articleCount: 22 },
//       { id: "soil-conservation", name: "Soil Conservation", articleCount: 18 },
//       { id: "soil-testing", name: "Soil Testing", articleCount: 12 },
//       { id: "composting", name: "Composting", articleCount: 16 },
//       { id: "soil-biology", name: "Soil Biology", articleCount: 15 },
//     ],
//   },
//   {
//     id: "irrigation-water",
//     name: "Irrigation & Water Management",
//     description: "Water conservation and irrigation techniques",
//     articleCount: 87,
//     icon: "/placeholder.svg?height=40&width=40&text=💧",
//     subcategories: [
//       { id: "irrigation-systems", name: "Irrigation Systems", articleCount: 24 },
//       { id: "water-conservation", name: "Water Conservation", articleCount: 18 },
//       { id: "drainage", name: "Drainage", articleCount: 12 },
//       { id: "water-quality", name: "Water Quality", articleCount: 15 },
//       { id: "rainwater-harvesting", name: "Rainwater Harvesting", articleCount: 10 },
//       { id: "drought-management", name: "Drought Management", articleCount: 8 },
//     ],
//   },
//   {
//     id: "pest-disease",
//     name: "Pest & Disease Management",
//     description: "Controlling pests and diseases in crops and livestock",
//     articleCount: 112,
//     icon: "/placeholder.svg?height=40&width=40&text=🐛",
//     subcategories: [
//       { id: "insect-pests", name: "Insect Pests", articleCount: 28 },
//       { id: "plant-diseases", name: "Plant Diseases", articleCount: 32 },
//       { id: "weeds", name: "Weeds", articleCount: 18 },
//       { id: "biological-control", name: "Biological Control", articleCount: 15 },
//       { id: "chemical-control", name: "Chemical Control", articleCount: 12 },
//       { id: "integrated-pest-management", name: "Integrated Pest Management", articleCount: 7 },
//     ],
//   },
//   {
//     id: "farm-technology",
//     name: "Farm Technology & Equipment",
//     description: "Modern tools and technology for farming",
//     articleCount: 76,
//     icon: "/placeholder.svg?height=40&width=40&text=🚜",
//     subcategories: [
//       { id: "tractors-machinery", name: "Tractors & Machinery", articleCount: 22 },
//       { id: "precision-agriculture", name: "Precision Agriculture", articleCount: 18 },
//       { id: "drones-robotics", name: "Drones & Robotics", articleCount: 12 },
//       { id: "irrigation-technology", name: "Irrigation Technology", articleCount: 10 },
//       { id: "farm-software", name: "Farm Software", articleCount: 8 },
//       { id: "renewable-energy", name: "Renewable Energy", articleCount: 6 },
//     ],
//   },
//   {
//     id: "sustainable-agriculture",
//     name: "Sustainable Agriculture",
//     description: "Environmentally friendly farming practices",
//     articleCount: 94,
//     icon: "/placeholder.svg?height=40&width=40&text=♻️",
//     subcategories: [
//       { id: "organic-farming", name: "Organic Farming", articleCount: 25 },
//       { id: "conservation-agriculture", name: "Conservation Agriculture", articleCount: 18 },
//       { id: "agroforestry", name: "Agroforestry", articleCount: 15 },
//       { id: "permaculture", name: "Permaculture", articleCount: 12 },
//       { id: "regenerative-agriculture", name: "Regenerative Agriculture", articleCount: 14 },
//       { id: "carbon-sequestration", name: "Carbon Sequestration", articleCount: 10 },
//     ],
//   },
//   {
//     id: "agricultural-economics",
//     name: "Agricultural Economics",
//     description: "Financial aspects of farming and agribusiness",
//     articleCount: 82,
//     icon: "/placeholder.svg?height=40&width=40&text=💰",
//     subcategories: [
//       { id: "farm-management", name: "Farm Management", articleCount: 20 },
//       { id: "agricultural-marketing", name: "Agricultural Marketing", articleCount: 18 },
//       { id: "agricultural-policy", name: "Agricultural Policy", articleCount: 15 },
//       { id: "risk-management", name: "Risk Management", articleCount: 12 },
//       { id: "agricultural-finance", name: "Agricultural Finance", articleCount: 10 },
//       { id: "value-chains", name: "Value Chains", articleCount: 7 },
//     ],
//   },
//   {
//     id: "climate-agriculture",
//     name: "Climate & Agriculture",
//     description: "Climate impacts and adaptation strategies",
//     articleCount: 68,
//     icon: "/placeholder.svg?height=40&width=40&text=🌡️",
//     subcategories: [
//       { id: "climate-change-impacts", name: "Climate Change Impacts", articleCount: 18 },
//       { id: "adaptation-strategies", name: "Adaptation Strategies", articleCount: 15 },
//       { id: "greenhouse-gas-emissions", name: "Greenhouse Gas Emissions", articleCount: 12 },
//       { id: "weather-forecasting", name: "Weather Forecasting", articleCount: 10 },
//       { id: "seasonal-planning", name: "Seasonal Planning", articleCount: 8 },
//       { id: "climate-resilient-crops", name: "Climate-Resilient Crops", articleCount: 5 },
//     ],
//   },
//   {
//     id: "post-harvest",
//     name: "Post-Harvest Management",
//     description: "Handling, storage, and processing of agricultural products",
//     articleCount: 72,
//     icon: "/placeholder.svg?height=40&width=40&text=🏭",
//     subcategories: [
//       { id: "storage", name: "Storage", articleCount: 18 },
//       { id: "processing", name: "Processing", articleCount: 16 },
//       { id: "packaging", name: "Packaging", articleCount: 12 },
//       { id: "transportation", name: "Transportation", articleCount: 10 },
//       { id: "food-safety", name: "Food Safety", articleCount: 10 },
//       { id: "value-addition", name: "Value Addition", articleCount: 6 },
//     ],
//   },
// ]

export default function KbCategories({categories}:{categories:any}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
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
        </section> */}
        <h2 className="text-green-900 font-bold text-xl md:text-3xl">Explore Categories</h2>


        <section className="w-full py-12">
          <div className="">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category:any,i:any) => (
                <div className="" key={category.id}>
                  <Card
                  key={category.id}
                  className="overflow-hidden border-green-100 hover:border-green-300 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-4">
                      <img
                        src={category.imageUrl}
                        alt={category.title}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <CardDescription className="mt-1">{category.description.slice(0,30)}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">{category.articles.length} articles</span>
                      <Badge variant="outline" className="bg-green-50">
                        {category.subcategories.length} subcategories
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {category.subcategories.slice(0, 4).map((subcategory:any,i:any) => (
                        <Link
                          key={subcategory.id}
                          href={`/kb/${category.id}/${subcategory.id}`}
                          className="text-sm hover:underline flex items-center gap-1"
                        >
                          <ChevronRight className="h-3 w-3 text-muted-foreground" />
                          {subcategory.title}
                          <span className="text-xs text-muted-foreground">({subcategory.articles?.length})</span>
                        </Link>
                        
                      ))}
                    </div>
                    {category.subcategories.length > 0 && (
                      <div className="mt-2 text-right">
                        <Button variant="link" size="sm" asChild className="h-auto p-0">
                          <Link href={`/kb/${category.id}`}>
                            View all {category.subcategories.length} subcategories
                          </Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
                 
                </div>
                
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

