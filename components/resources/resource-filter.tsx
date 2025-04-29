"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface ResourceFilterProps {
  title: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

export function ResourceFilter({
  title,
  options,
  value,
  onChange,
}: ResourceFilterProps) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between min-w-[150px]"
        >
          {value ? value : `All ${title}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search ${title.toLowerCase()}...`} />
          <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              value="all"
              onSelect={() => {
                onChange("")
                setOpen(false)
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  !value ? "opacity-100" : "opacity-0"
                )}
              />
              All {title}
            </CommandItem>
            {options.map((option) => (
              <CommandItem
                key={option}
                value={option}
                onSelect={() => {
                  onChange(option)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === option ? "opacity-100" : "opacity-0"
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

interface ResourceFiltersProps {
  onFilterChange: (filters: {
    category: string
    tag: string
  }) => void
  filters: {
    category: string
    tag: string
  }
  categories: string[]
  tags: string[]
}

export function ResourceFilters({ onFilterChange, filters, categories, tags }: ResourceFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <ResourceFilter
        title="Categories"
        options={categories}
        value={filters.category}
        onChange={(value) => onFilterChange({ ...filters, category: value })}
      />
      <ResourceFilter
        title="Tags"
        options={tags}
        value={filters.tag}
        onChange={(value) => onFilterChange({ ...filters, tag: value })}
      />
    </div>
  )
}