import { Resource } from "@/lib/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, BookOpen, PenTool as Tool, Video, Users, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResourceCardProps {
  resource: Resource
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Guide":
        return <BookOpen className="h-4 w-4" />
      case "Tool":
        return <Tool className="h-4 w-4" />
      case "Video":
        return <Video className="h-4 w-4" />
      case "Community":
        return <Users className="h-4 w-4" />
      case "Article":
        return <FileText className="h-4 w-4" />
      default:
        return <FileText className="h-4 w-4" />
    }
  }

  return (
    <Card className="h-full flex flex-col transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl">{resource.title}</CardTitle>
          <Badge variant="outline" className="flex items-center gap-1.5">
            {getCategoryIcon(resource.category)}
            {resource.category}
          </Badge>
        </div>
        <CardDescription className="line-clamp-2">
          {resource.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2 mt-2">
          {resource.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" className="w-full" asChild>
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            View Resource <ExternalLink className="ml-2 h-3 w-3" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}