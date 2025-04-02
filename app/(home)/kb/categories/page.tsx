import Link from "next/link"
import { ChevronRight, Leaf, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Category } from "@prisma/client"
import { getAllCategories } from "@/actions/categories"
import AllKbCategories from "@/components/frontend/allKbCategories"

// This represents our category structure


export default async function CategoriesPage() {
      const categories: Category[] = (await getAllCategories()) || [];
  
  return (
    <div className="flex min-h-screen flex-col px-4 md:px-12 lg:px-24">
      <main className="flex-1">
        <section className="w-full py-4 md:py-6 bg-green-50">
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

        <AllKbCategories categories={categories}/>
      </main>
    </div>
  )
}

