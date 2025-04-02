import Link from "next/link"
import { ChevronRight, Leaf, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export default function AllKbCategories({categories}:{categories:any}) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
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

