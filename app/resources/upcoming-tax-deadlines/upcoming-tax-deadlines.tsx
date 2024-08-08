import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function UpcomingTaxDeadlinesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Upcoming Tax Deadlines</h1>
      <Card>
        <CardHeader>
          <CardTitle>Deadlines Overview</CardTitle>
          <CardDescription>Stay on top of important tax filing deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Federal Income Tax</span>
                <span>April 15, 2024</span>
              </div>
              <Progress value={80} />
            </div>
            {/* Add more deadline items */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}