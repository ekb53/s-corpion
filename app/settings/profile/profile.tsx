import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  return (
    <div className="container py-12 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your profile details</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add form for profile information */}
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </div>
  )
}