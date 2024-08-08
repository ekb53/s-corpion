import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BusinessRolesPage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Business Roles</h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Roles</CardTitle>
          <CardDescription>Assign and manage tax-related business roles</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button>Accountant</Button>
            <Button>Tax Preparer</Button>
            <Button>Payroll Manager</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
