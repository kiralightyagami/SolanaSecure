"use client"

import { useState, useEffect } from "react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function LiveAlert() {
  const [isVisible, setIsVisible] = useState(true)
  const [timeAgo, setTimeAgo] = useState("Just now")

  useEffect(() => {
    
    const alertTime = new Date(Date.now() - 10 * 60 * 1000)
    
    const interval = setInterval(() => {
      const seconds = Math.floor((Date.now() - alertTime.getTime()) / 1000)
      
      if (seconds < 60) {
        setTimeAgo(`${seconds} seconds ago`)
      } else if (seconds < 3600) {
        setTimeAgo(`${Math.floor(seconds / 60)} minutes ago`)
      } else if (seconds < 86400) {
        setTimeAgo(`${Math.floor(seconds / 3600)} hours ago`)
      } else {
        setTimeAgo(`${Math.floor(seconds / 86400)} days ago`)
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <Alert className="border-destructive bg-destructive/10 animate-pulse mb-6">
      <AlertCircle className="h-4 w-4 text-destructive" />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <AlertTitle className="text-destructive flex items-center">
            <span className="relative mr-2 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            LIVE: Potential exploit detected
          </AlertTitle>
          <span className="text-xs text-muted-foreground">{timeAgo}</span>
        </div>
        <AlertDescription className="mt-2">
          <p>Unusual activity detected on XYZ Protocol. Multiple large withdrawals observed on-chain. Investigation in progress.</p>
          <div className="flex gap-2 mt-3">
            <Button variant="destructive" size="sm" asChild>
              <Link href="/live">View Details</Link>
            </Button>
            <Button variant="outline" size="sm" onClick={() => setIsVisible(false)}>
              Dismiss
            </Button>
          </div>
        </AlertDescription>
      </div>
    </Alert>
  )
}