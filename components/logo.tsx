import { Shield, AlertTriangle } from "lucide-react"

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <Shield className="h-8 w-8 text-primary" />
        <AlertTriangle className="absolute -top-1 -right-1 h-4 w-4 text-destructive" />
      </div>
      <span className="font-bold text-xl">SolanaSecure</span>
    </div>
  )
}