"use client"

import { calculateExploitStats, exploits } from "@/lib/data"
import { StatsCard } from "@/components/dashboard/stats-card"
import { ExploitTypeChart } from "@/components/dashboard/exploit-type-chart"
import { ExploitsTimeline } from "@/components/dashboard/exploits-timeline"
import { SeverityChart } from "@/components/dashboard/severity-chart"
import { FundsChart } from "@/components/dashboard/funds-chart"
import { RecentExploits } from "@/components/dashboard/recent-exploits"
import { LiveAlert } from "@/components/dashboard/live-alert"
import { AlertTriangle, Clock, DollarSign, Shield } from "lucide-react"

export default function Home() {
  const stats = calculateExploitStats()

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight">Security Dashboard</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Comprehensive analytics and tracking of security exploits in the Solana ecosystem
        </p>
      </div>

      <LiveAlert />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          title="Total Exploits"
          value={stats.totalExploits}
          description="Tracked security incidents"
          icon={<Shield className="h-4 w-4" />}
          trend={{ value: 15, isPositive: false }}
        />
        <StatsCard
          title="Funds Lost"
          value={stats.totalFundsLost}
          description="Total value impacted"
          icon={<DollarSign className="h-4 w-4" />}
          trend={{ value: 25, isPositive: false }}
        />
        <StatsCard
          title="Avg Response Time"
          value={`${stats.avgResponseTime}h`}
          description="From detection to mitigation"
          icon={<Clock className="h-4 w-4" />}
          trend={{ value: 10, isPositive: true }}
        />
        <StatsCard
          title="Critical Incidents"
          value={stats.exploitsBySeverity.Critical}
          description="High-severity exploits"
          icon={<AlertTriangle className="h-4 w-4" />}
          trend={{ value: 5, isPositive: false }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ExploitsTimeline stats={stats} />
        <FundsChart stats={stats} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ExploitTypeChart stats={stats} />
        <SeverityChart stats={stats} />
        <RecentExploits exploits={exploits} />
      </div>
    </div>
  )
}