"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExploitStats } from "@/lib/types"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts"

interface SeverityChartProps {
  stats: ExploitStats
}

export function SeverityChart({ stats }: SeverityChartProps) {
  const data = Object.entries(stats.exploitsBySeverity).map(
    ([severity, count]) => ({
      severity,
      count,
    })
  )

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Severity Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis
              dataKey="severity"
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <PolarRadiusAxis
              angle={30}
              domain={[0, 'auto']}
              tick={{ fill: "hsl(var(--muted-foreground))" }}
            />
            <Radar
              name="Exploits"
              dataKey="count"
              stroke="hsl(var(--chart-3))"
              fill="hsl(var(--chart-3))"
              fillOpacity={0.5}
              animationDuration={1500}
            />
            <Tooltip 
              formatter={(value: number) => [`${value} exploits`, 'Count']}
              contentStyle={{ 
                background: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}