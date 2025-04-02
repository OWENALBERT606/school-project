"use client"

import type React from "react"

import { Search } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Search articles..."
        className="pl-10 pr-4 py-2 w-full"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Button type="submit" size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2">
        Search
      </Button>
    </form>
  )
}

