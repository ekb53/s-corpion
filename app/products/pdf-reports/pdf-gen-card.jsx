import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function PDFReportGeneration() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2 font-bold" prefetch={false}>
          <CurrencyIcon className="h-6 w-6" />
          <span>Tax Prep</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <img src="/placeholder.svg" width={32} height={32} alt="Avatar" className="rounded-full" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <SettingsIcon className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Notifications</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
    <main className="flex-1">
      <div className="container grid grid-cols-1 gap-8 px-4 py-8 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
    <Card>
            <CardHeader>
              <CardTitle>PDF Report Generation</CardTitle>
              <CardDescription>Generate professional-looking PDF reports for your tax documents.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="business-name">Business Name</Label>
                  <Input id="business-name" placeholder="Enter your business name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="roles">Roles Assumed</Label>
                  <Textarea id="roles" placeholder="Enter the roles you've assumed" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="hours-spent">Hours Spent in Each Role</Label>
                  <Slider
                    id="hours-spent"
                    min={0}
                    max={100}
                    step={1}
                    defaultValue={[50]}
                    aria-label="Hours spent in each role"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select id="industry">
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Provide a description of your business" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="revenue">Annual Revenue</Label>
                  <Input id="revenue" type="number" placeholder="Enter your annual revenue" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="vacation-weeks">Vacation Weeks</Label>
                  <Slider
                    id="vacation-weeks"
                    min={0}
                    max={52}
                    step={1}
                    defaultValue={[4]}
                    aria-label="Number of vacation weeks"
                  />
                </div>
                <Button variant="outline">Generate W-2 Report</Button>
                <Button variant="outline">Generate 1099 Report</Button>
                <Button variant="outline">Generate Tax Return</Button>
              </form>
            </CardContent>
            </main>
      </Card>
          <footer className="bg-muted p-6 md:py-12 w-full">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" prefetch={false}>
              About Us
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
            <Link href="#" prefetch={false}>
              News
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Tax Prep
            </Link>
            <Link href="#" prefetch={false}>
              Payroll
            </Link>
            <Link href="#" prefetch={false}>
              Accounting
            </Link>
            <Link href="#" prefetch={false}>
              Compliance
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" prefetch={false}>
              Blog
            </Link>
            <Link href="#" prefetch={false}>
              Documentation
            </Link>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              FAQs
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookie Policy
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#" prefetch={false}>
              Support
            </Link>
            <Link href="#" prefetch={false}>
              Sales
            </Link>
            <Link href="#" prefetch={false}>
              Partnerships
            </Link>
          </div>
        </div>
      </footer>
          )
          }
