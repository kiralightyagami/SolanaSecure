"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Github, GitPullRequest, GitFork, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContributionSteps() {
  const steps = [
    {
      title: "1. Fork the repository",
      description:
        "Start by forking the repository to your GitHub account. This creates a copy of the project that you can modify.",
      icon: <GitFork className="h-12 w-12 text-muted-foreground" />,
    },
    {
      title: "2. Make your changes",
      description:
        "Add a new exploit or update existing information in the correct format. Be sure to follow the contribution guidelines.",
      icon: <CheckCircle2 className="h-12 w-12 text-muted-foreground" />,
    },
    {
      title: "3. Create a pull request",
      description:
        "Submit your changes back to the main repository by creating a pull request. Our team will review it promptly.",
      icon: <GitPullRequest className="h-12 w-12 text-muted-foreground" />,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">How to Contribute</h2>
        <p className="text-muted-foreground">
          Follow these simple steps to submit new exploits, updates, or resources
          to the security dashboard
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="flex flex-col items-center text-center pb-2">
              <div className="mb-2">{step.icon}</div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-sm">
                {step.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Button size="lg" className="gap-2" asChild>
          <a
            href="https://github.com/kiralightyagami/SolanaSecure"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-5 w-5" />
            <span>View on GitHub</span>
          </a>
        </Button>
      </div>
    </div>
  )
}