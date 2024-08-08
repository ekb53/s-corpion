import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

export default function StateTaxChangesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">State Tax Changes</h1>
      <Card>
        <CardHeader>
          <CardTitle>State-Specific Updates</CardTitle>
          <CardDescription>Keep track of tax changes in your state</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add content for state tax changes */}
        </CardContent>
      </Card>
    </div>
  )
}