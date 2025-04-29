import { ContributionSteps } from "@/components/contribute/contribution-steps"
import { ContributionTemplates } from "@/components/contribute/contribution-templates"
import { ContributionGuidelines } from "@/components/contribute/guidelines"
import { Separator } from "@/components/ui/separator"

export default function ContributePage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Contribute</h1>
        <p className="text-lg text-muted-foreground">
          Help improve the security dashboard by contributing new exploits, updates, and resources
        </p>
      </div>

      <ContributionSteps />
      
      <Separator className="my-8" />
      
      <ContributionGuidelines />
      
      <Separator className="my-8" />
      
      <ContributionTemplates />
    </div>
  )
}