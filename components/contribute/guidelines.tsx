import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  AlertTriangle,
  CheckCircle2,
  FileText,
  Link,
  Search,
  ShieldCheck,
} from "lucide-react"

export function ContributionGuidelines() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contribution Guidelines</h2>
        <p className="text-muted-foreground">
          Follow these guidelines to ensure your contributions are accepted
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-start space-y-0">
            <CheckCircle2 className="h-6 w-6 mr-4 text-green-600" />
            <div>
              <CardTitle>Accuracy is Critical</CardTitle>
              <CardDescription>
                Ensure all information is accurate and verified from reliable
                sources.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start space-y-0">
            <FileText className="h-6 w-6 mr-4 text-primary" />
            <div>
              <CardTitle>Use the Templates</CardTitle>
              <CardDescription>
                Follow the provided templates for consistency across all
                entries.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start space-y-0">
            <Link className="h-6 w-6 mr-4 text-blue-500" />
            <div>
              <CardTitle>Provide Sources</CardTitle>
              <CardDescription>
                Include links to original sources, post-mortems, and technical
                analyses.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start space-y-0">
            <AlertTriangle className="h-6 w-6 mr-4 text-yellow-500" />
            <div>
              <CardTitle>Responsible Disclosure</CardTitle>
              <CardDescription>
                Only publish details of exploits that have been publicly
                disclosed.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start space-y-0">
            <Search className="h-6 w-6 mr-4 text-primary" />
            <div>
              <CardTitle>Detailed Analysis</CardTitle>
              <CardDescription>
                Provide comprehensive technical details on how exploits occurred.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-start space-y-0">
            <ShieldCheck className="h-6 w-6 mr-4 text-green-600" />
            <div>
              <CardTitle>Add Preventive Measures</CardTitle>
              <CardDescription>
                Include information on how similar exploits can be prevented.
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}