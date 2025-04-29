"use client"

import { useState } from "react"
import { resources } from "@/lib/data"
import { ResourceCard } from "@/components/resources/resource-card"
import { ResourceFilters } from "@/components/resources/resource-filter"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    tag: "",
  })

  
  const categories = [...new Set(resources.map((r) => r.category))]
  const allTags = resources.flatMap((r) => r.tags)
  const tags = [...new Set(allTags)]

  
  const filteredResources = resources.filter((resource) => {
    
    const searchLower = searchQuery.toLowerCase()
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchLower) ||
      resource.description.toLowerCase().includes(searchLower)

    
    const matchesCategory =
      filters.category === "" || resource.category === filters.category

    
    const matchesTag =
      filters.tag === "" || resource.tags.includes(filters.tag)

    return matchesSearch && matchesCategory && matchesTag
  })

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Security Resources</h1>
        <p className="text-muted-foreground">
          Guides, tools, and best practices for securing Solana projects
        </p>
      </div>

      <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <ResourceFilters
          filters={filters}
          onFilterChange={setFilters}
          categories={categories}
          tags={tags}
        />
      </div>

      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">No resources found</h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  )
}