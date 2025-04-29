"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExploitStats } from "@/lib/types"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { formatCurrency } from "@/lib/utils"

interface FundsChartProps {
  stats: ExploitStats
}

export function FundsChart({ stats }: FundsChartProps) {
  const data = [
    {
      name: "Funds Status",
      lost: stats.totalFundsLost - stats.totalRecovered,
      recovered: stats.totalRecovered,
    },
  ]

  return (
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Funds Impact (USD)</CardTitle>
      </CardHeader>
      <CardContent className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{
              top: 20,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis 
              type="number" 
              stroke="hsl(var(--muted-foreground))"
              tickFormatter={(value) => formatCurrency(value, 0)}
            />
            <YAxis type="category" dataKey="name" stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              formatter={(value: number) => [formatCurrency(value), 'Amount']}
              contentStyle={{ 
                background: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: 'var(--radius)',
              }}
            />
            <Legend 
              formatter={(value) => <span className="capitalize">{value}</span>}
            />
            <Bar 
              dataKey="lost" 
              name="Funds Lost" 
              stackId="a" 
              fill="hsl(var(--destructive))" 
              animationDuration={1500}
            />
            <Bar 
              dataKey="recovered" 
              name="Funds Recovered" 
              stackId="a" 
              fill="hsl(var(--chart-2))" 
              animationDuration={1500}
              animationBegin={300}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}