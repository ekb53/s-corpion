import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TaxCompliancePage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Tax Compliance</h1>
      <Card>
        <CardHeader>
          <CardTitle>Compliance Resources</CardTitle>
          <CardDescription>Stay up-to-date with tax regulations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button>IRS Updates</Button>
            <Button>State Tax Changes</Button>
            <Button>Audit Preparation</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}