"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertCircle, ArrowRight, Bell, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function LivePage() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-bold tracking-tight">Live Incident Tracker</h1>
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </div>
        </div>
        <p className="text-muted-foreground">
          Real-time monitoring of potential security incidents in the Solana ecosystem
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-red-500/50 md:col-span-2">
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-red-500 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Active Incident: XYZ Protocol
                </CardTitle>
                <CardDescription className="mt-1">
                  Last updated: 10 minutes ago
                </CardDescription>
              </div>
              <Badge className="bg-red-500 text-white">Investigating</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Description</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple large unauthorized withdrawals have been observed from XYZ Protocol's liquidity pools. The protocol team has acknowledged the issue and is currently investigating.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">On-chain Activity</h3>
                <p className="text-sm text-muted-foreground">
                  Approximately $2.5M in assets have been withdrawn to unknown wallets in the last 30 minutes. The protocol's TVL has dropped by 15%.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-1">Recommended Actions</h3>
                <p className="text-sm text-muted-foreground">
                  Users are advised to avoid interacting with the protocol until further notice. If you have funds in the protocol, do not attempt to withdraw as transactions may fail or could potentially worsen the situation.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="gap-1" asChild>
                  <a href="https://twitter.com/xyzprotocol" target="_blank" rel="noopener noreferrer">
                    Official Twitter <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-1" asChild>
                  <a href="https://discord.gg/xyzprotocol" target="_blank" rel="noopener noreferrer">
                    Discord Updates <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="gap-1" asChild>
                  <a href="https://explorer.solana.com" target="_blank" rel="noopener noreferrer">
                    Solana Explorer <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Incident Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-2 border-red-500 pl-4 pb-4 relative">
                <div className="absolute w-3 h-3 bg-red-500 rounded-full -left-[7px] top-0"></div>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Initial Detection</h3>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 10 min ago
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Unusual withdrawal patterns detected by on-chain monitoring.
                </p>
              </div>
              
              <div className="border-l-2 border-muted pl-4 pb-4 relative">
                <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-0"></div>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Team Notification</h3>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 8 min ago
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Protocol team notified and begins investigation.
                </p>
              </div>
              
              <div className="border-l-2 border-muted pl-4 relative">
                <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-0"></div>
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Public Announcement</h3>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> 5 min ago
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Initial public disclosure via Twitter and Discord.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Live Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="official">
              <TabsList className="mb-4">
                <TabsTrigger value="official">Official</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>
              <TabsContent value="official" className="space-y-4">
                <div className="border-l-2 border-primary pl-4 pb-4 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">XYZ Protocol</h3>
                    <span className="text-xs text-muted-foreground">4 min ago</span>
                  </div>
                  <p className="text-sm mt-1">
                    "We're aware of the ongoing situation and investigating. Please do not interact with the protocol at this time."
                  </p>
                </div>
                
                <div className="border-l-2 border-primary pl-4 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-0"></div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">XYZ Protocol</h3>
                    <span className="text-xs text-muted-foreground">2 min ago</span>
                  </div>
                  <p className="text-sm mt-1">
                    "Our security team has identified the potential vulnerability and is working on emergency mitigation measures."
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="community" className="space-y-4">
                <div className="border-l-2 border-muted pl-4 pb-4 relative">
                  <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-0"></div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">@solana_researcher</h3>
                    <span className="text-xs text-muted-foreground">7 min ago</span>
                  </div>
                  <p className="text-sm mt-1">
                    "Watching unusual token movements from XYZ Protocol. Multiple large withdrawals in quick succession to unknown wallets."
                  </p>
                </div>
                
                <div className="border-l-2 border-muted pl-4 relative">
                  <div className="absolute w-3 h-3 bg-muted rounded-full -left-[7px] top-0"></div>
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">@defi_watcher</h3>
                    <span className="text-xs text-muted-foreground">3 min ago</span>
                  </div>
                  <p className="text-sm mt-1">
                    "Initial analysis suggests a possible logic error in the latest contract update. Looking at transactions now."
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-muted/50 border-dashed">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Stay Informed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                Subscribe to receive real-time alerts for new security incidents and important updates.
              </p>
            </div>
            <Button
              onClick={() => setIsSubscribed(!isSubscribed)}
              variant={isSubscribed ? "outline" : "default"}
              className="min-w-[140px]"
            >
              {isSubscribed ? "Unsubscribe" : "Subscribe"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center pt-4">
        <h2 className="text-2xl font-bold">Recent Incidents</h2>
        <Button variant="ghost" size="sm" asChild>
          <Link href="/exploits" className="gap-1">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-lg">DEX Protocol Incident</CardTitle>
              <Badge variant="outline">Resolved</Badge>
            </div>
            <CardDescription>2 days ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Flash loan attack exploiting price oracle manipulation. Protocol paused and vulnerability patched.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-lg">NFT Marketplace Incident</CardTitle>
              <Badge variant="outline">Resolved</Badge>
            </div>
            <CardDescription>5 days ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Frontend hijack redirecting transaction signatures. Fixed within 1 hour of detection.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <CardTitle className="text-lg">Lending Platform Incident</CardTitle>
              <Badge variant="outline">Resolved</Badge>
            </div>
            <CardDescription>1 week ago</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Price manipulation of collateral assets. Emergency liquidation prevention measures deployed.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}