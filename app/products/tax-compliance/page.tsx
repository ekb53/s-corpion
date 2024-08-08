// `app/products/tax-compliance/page.tsx` is the UI for the `/products/tax-compliance` URL

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/8x38ogQI5yO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle,NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

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
                <CardTitle>IRS Updates</CardTitle>
                <CardDescription>Stay up-to-date with the latest IRS news and regulations.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium">New Tax Credits for Small Businesses</h3>
                    <p className="text-sm text-muted-foreground">
                      The IRS has introduced new tax credits to help small businesses offset the cost of providing
                      health insurance to their employees.
                    </p>
                    <Link href="https://www.irs.gov/affordable-care-act/employers/small-business-health-care-tax-credit-and-the-shop-marketplace" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Changes to Retirement Contribution Limits</h3>
                    <p className="text-sm text-muted-foreground">
                      The IRS has announced increases to the annual contribution limits for 401(k) and IRA accounts,
                      effective January 1, 2024.
                    </p>
                    <Link href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-401k-and-profit-sharing-plan-contribution-limits" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">New Guidance on Qualified Business Income Deduction</h3>
                    <p className="text-sm text-muted-foreground">
                      The IRS has released updated guidance on the Qualified Business Income (QBI) deduction, providing
                      clarity for small business owners.
                    </p>
                    <Link href="https://www.irs.gov/newsroom/qualified-business-income-deduction" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>State Tax Changes</CardTitle>
                <CardDescription>Keep track of the latest state tax updates and changes.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium">California Increases Sales Tax Rate</h3>
                    <p className="text-sm text-muted-foreground">
                      California has announced a 0.5% increase to the state sales tax rate, effective July 1, 2024.
                    </p>
                    <Link href="https://www.cdtfa.ca.gov/taxes-and-fees/sales-use-tax-rates.htm" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">New York Expands Paid Family Leave</h3>
                    <p className="text-sm text-muted-foreground">
                      New York has passed legislation to expand its Paid Family Leave program, providing more benefits
                      to eligible employees.
                    </p>
                    <Link href="https://paidfamilyleave.ny.gov/" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Texas Introduces New Franchise Tax Exemption</h3>
                    <p className="text-sm text-muted-foreground">
                      Texas has implemented a new franchise tax exemption for small businesses, effective January 1,
                      2024.
                    </p>
                    <Link href="https://comptroller.texas.gov/taxes/franchise/ntd-rpt-updates-2024.php" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Audit Preparation</CardTitle>
                <CardDescription>Learn how to prepare for a tax audit and minimize your risk.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h3 className="text-lg font-medium">Documenting Your Expenses</h3>
                    <p className="text-sm text-muted-foreground">
                      Ensure you have proper documentation for all business expenses to support your tax filings.
                    </p>
                    <Link href="https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Responding to IRS Information Requests</h3>
                    <p className="text-sm text-muted-foreground">
                      Learn the best practices for responding to IRS information requests during an audit.
                    </p>
                    <Link href="https://www.irs.gov/taxtopics/tc654" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Understanding Your Rights as a Taxpayer</h3>
                    <p className="text-sm text-muted-foreground">
                      Familiarize yourself with your rights and protections as a taxpayer during an audit.
                    </p>
                    <Link href="https://www.irs.gov/taxpayer-bill-of-rights" className="text-primary" prefetch={false}>
                      Read more
                    </Link>
                  </div>
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