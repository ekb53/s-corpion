// `app/resources/tax-preparation-status/page.tsx` is the UI for the `/resources/tax-preparation-status` URL

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SKsjFFeuiRc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
              <CurrencyIcon className="h-6 w-6" />
              <span className="sr-only">Tax Prep</span>
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
              <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Dashboard
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group hover:text-primary">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] p-2">
                      <NavigationMenuLink
                        href="/products/pdf-reports"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        PDF Reports
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/products/compensation-templates"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        Compensation Templates
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/products/business-roles"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        Business Roles
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/products/tax-compliance"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        Tax Compliance
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group hover:text-primary">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[200px] p-2">
                      <NavigationMenuLink
                        href="/resources/upcoming-tax-deadlines"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        Upcoming Tax Deadlines
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/resources/tax-preparation-status"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        Tax Preparation Status
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/resources/irs-updates"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        IRS Updates
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/resources/state-tax-changes"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        State Tax Changes
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/resources/audit-preparation"
                        className="group rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                      >
                        Audit Preparation
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/settings/login" className="text-sm font-medium" prefetch={false}>
              Login
            </Link>
            <Link
              href="/settings/signup"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
              prefetch={false}
            >
              Sign up
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <SettingsIcon className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/settings/profile" className="group hover:text-primary">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings/preferences" className="group hover:text-primary">
                    Preferences
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/settings/logout" className="group hover:text-primary">
                    Logout
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 md:px-0">
        <section className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tax Deadlines</CardTitle>
                <CardDescription>Stay on top of important tax filing deadlines.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Federal Income Tax</p>
                      <p className="text-sm font-medium">April 15, 2024</p>
                    </div>
                    <Progress value={80} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Payroll Tax</p>
                      <p className="text-sm font-medium">January 31, 2024</p>
                    </div>
                    <Progress value={90} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Sales Tax</p>
                      <p className="text-sm font-medium">March 31, 2024</p>
                    </div>
                    <Progress value={60} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tax Preparation Status</CardTitle>
                <CardDescription>Track your progress on tax preparation tasks.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Income Tax</p>
                      <p className="text-sm font-medium">75% Complete</p>
                    </div>
                    <Progress value={75} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Payroll Tax</p>
                      <p className="text-sm font-medium">90% Complete</p>
                    </div>
                    <Progress value={90} className="mt-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">Sales Tax</p>
                      <p className="text-sm font-medium">65% Complete</p>
                    </div>
                    <Progress value={65} className="mt-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>IRS Updates</CardTitle>
                <CardDescription>Stay up-to-date with the latest IRS regulations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    New Tax Laws
                  </Button>
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    Audit Guidance
                  </Button>
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    Compliance Updates
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>State Tax Changes</CardTitle>
                <CardDescription>Stay informed about state-level tax updates.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    California
                  </Button>
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    New York
                  </Button>
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    Texas
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Audit Preparation</CardTitle>
                <CardDescription>Get ready for potential tax audits.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    Document Checklist
                  </Button>
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    Audit Response Strategies
                  </Button>
                  <Button variant="outline">
                    <ShieldIcon className="mr-2 h-4 w-4" />
                    IRS Audit Process
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-sm">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>&copy; 2024 Reasonable Salary. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-4">
            <Link href="/policies/privacy" className="hover:underline" prefetch={false}>
              Privacy
            </Link>
            <Link href="/policies/terms" className="hover:underline" prefetch={false}>
              Terms
            </Link>
            <Link href="/policies/support" className="hover:underline" prefetch={false}>
              Support
            </Link>
            <Link href="/resources/irs-updates" className="hover:underline" prefetch={false}>
              IRS Updates
            </Link>
            <Link href="/resources/state-tax-changes" className="hover:underline" prefetch={false}>
              State Tax Changes
            </Link>
            <Link href="/resources/audit-preparation" className="hover:underline" prefetch={false}>
              Audit Preparation
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function CurrencyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}