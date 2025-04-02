import Image from "next/image"
import Link from "next/link"
import { Clock, Eye, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

// Sample article data
const articles = [
  {
    id: 1,
    title: "Best Practices for Sustainable Rice Cultivation",
    excerpt:
      "Learn about modern techniques for rice farming that maximize yield while minimizing environmental impact.",
    category: "Crop Farming",
    tags: ["Grains & Cereals", "Sustainable"],
    author: "Dr. Maria Chen",
    date: "Mar 15, 2023",
    readTime: "8 min read",
    views: 1245,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Improving Dairy Cattle Health and Productivity",
    excerpt:
      "Comprehensive guide to maintaining healthy dairy herds and optimizing milk production through proper management.",
    category: "Livestock Management",
    tags: ["Cattle & Dairy", "Health"],
    author: "James Wilson",
    date: "Apr 2, 2023",
    readTime: "10 min read",
    views: 982,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Organic Pest Control Methods for Vegetable Gardens",
    excerpt: "Natural and chemical-free approaches to managing common pests in vegetable cultivation.",
    category: "Sustainable Agriculture",
    tags: ["Organic Farming", "Pest Control"],
    author: "Sarah Johnson",
    date: "Apr 10, 2023",
    readTime: "6 min read",
    views: 756,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Implementing Precision Agriculture with Drones",
    excerpt: "How to use drone technology for field mapping, crop monitoring, and optimizing resource application.",
    category: "Agricultural Technology",
    tags: ["Precision Agriculture", "Drones"],
    author: "Michael Rodriguez",
    date: "Apr 18, 2023",
    readTime: "12 min read",
    views: 543,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Understanding Agricultural Commodity Markets",
    excerpt: "Guide to navigating price fluctuations and making informed decisions when selling farm products.",
    category: "Market & Economics",
    tags: ["Pricing & Trading", "Commodities"],
    author: "Emily Brown",
    date: "Apr 25, 2023",
    readTime: "9 min read",
    views: 1102,
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ArticleList() {
  return (
    <div>
      <div className="space-y-6">
        {articles.map((article) => (
          <article key={article.id} className="border-b pb-6 last:border-0">
            <div className="flex flex-col md:flex-row gap-4">
              {/* <div className="md:w-1/4">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full h-40"
                />
              </div> */}
              <div className="md:w-3/4">
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">{article.category}</Badge>
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`#article-${article.id}`} className="hover:text-primary">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-3">{article.excerpt}</p>
                <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
                  <span>By {article.author}</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    {article.views} views
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Pagination className="mt-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

