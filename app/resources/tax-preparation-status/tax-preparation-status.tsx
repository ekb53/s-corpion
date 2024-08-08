import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function TaxPreparationStatusPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Tax Preparation Status</h1>
      <Card>
        <CardHeader>
          <CardTitle>Preparation Progress</CardTitle>
          <CardDescription>Track your progress on tax preparation tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span>Income Tax</span>
                <span>75% Complete</span>
              </div>
              <Progress value={75} />
            </div>
            {/* Add more status items */}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}