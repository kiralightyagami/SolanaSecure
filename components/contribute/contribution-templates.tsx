"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Copy } from "lucide-react"

export function ContributionTemplates() {
  const exploitTemplate = `{
  "name": "Project Name Exploit",
  "date": "YYYY-MM-DD",
  "type": "Smart Contract",
  "status": "Confirmed",
  "severity": "Critical",
  "fundsLost": 1000000,
  "projectName": "Project Name",
  "description": "A brief description of the exploit.",
  "technicalDetails": "Detailed technical explanation of how the exploit worked.",
  "transactionHash": "Transaction hash if available",
  "exploitAddress": "Exploit address if available",
  "postMortem": "URL to post-mortem if available",
  "timeline": [
    {
      "date": "YYYY-MM-DDT00:00:00Z",
      "title": "First event",
      "description": "Description of the first event"
    },
    {
      "date": "YYYY-MM-DDT00:00:00Z",
      "title": "Second event",
      "description": "Description of the second event"
    }
  ],
  "tags": ["Tag1", "Tag2", "Tag3"]
}`

  const resourceTemplate = `{
  "title": "Resource Title",
  "description": "A brief description of the resource.",
  "url": "URL to the resource",
  "category": "Guide",
  "tags": ["Tag1", "Tag2", "Tag3"]
}`

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contribution Templates</h2>
        <p className="text-muted-foreground">
          Use these templates to structure your contributions
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="exploit-template">
          <AccordionTrigger className="text-lg font-medium">
            Exploit Template
          </AccordionTrigger>
          <AccordionContent>
            <div className="relative">
              <pre className="p-4 rounded-md bg-muted overflow-x-auto text-sm font-mono">
                {exploitTemplate}
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => {
                  navigator.clipboard.writeText(exploitTemplate)
                }}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="resource-template">
          <AccordionTrigger className="text-lg font-medium">
            Resource Template
          </AccordionTrigger>
          <AccordionContent>
            <div className="relative">
              <pre className="p-4 rounded-md bg-muted overflow-x-auto text-sm font-mono">
                {resourceTemplate}
              </pre>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2"
                onClick={() => {
                  navigator.clipboard.writeText(resourceTemplate)
                }}
              >
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy</span>
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}