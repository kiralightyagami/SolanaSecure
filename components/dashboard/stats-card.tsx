import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"

interface StatsCardProps {
  title: string
  value: string | number
  description?: string
  icon: React.ReactNode
  trend?: {
    value: number
    isPositive: boolean
  }
}

export function StatsCard({
  title,
  value,
  description,
  icon,
  trend,
}: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-5 w-5 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {typeof value === "number" && title.includes("Fund")
            ? formatCurrency(value)
            : value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {trend && (
          <div
            className={`flex items-center text-xs mt-1 ${
              trend.isPositive ? "text-green-500" : "text-destructive"
            }`}
          >
            {trend.isPositive ? "↓" : "↑"} {trend.value}%{" "}
            <span className="ml-1">
              {trend.isPositive ? "decrease" : "increase"}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}