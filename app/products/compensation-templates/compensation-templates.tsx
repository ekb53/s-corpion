import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CompensationTemplatesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Compensation Templates</h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Templates</CardTitle>
          <CardDescription>Create and edit compensation templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button>Salary Structure</Button>
            <Button>Bonus Structure</Button>
            <Button>Commission Structure</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}