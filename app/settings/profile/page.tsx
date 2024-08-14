// `app/settings/profile/page.tsx` is the UI for the `/settings/profile` URL

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/WKevZzcVxv4
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import React from 'react'
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="flex items-center justify-between bg-background px-4 py-3 shadow-sm sm:px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
{/*           <SnailIcon className="h-6 w-6" /> */}
          <img src="/scorpion.svg" alt="S-Corpion Logo" width="25" height="25" />
          <span className="font-bold">S-corpion</span>
        </Link>
        <nav className="hidden gap-4 md:flex">
          <Button variant="ghost">
          <Link href="/" prefetch={false}>
            Dashboard
          </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-primary">
              <Button variant="ghost">
              Products
              <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="/products/pdf-reports" prefetch={false}>
                  PDF Reports
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products/compensation-templates" prefetch={false}>
                  Compensation Templates
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products/business-roles" prefetch={false}>
                  Business Roles
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/products/tax-compliance" prefetch={false}>
                  Tax Compliance
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 font-medium hover:text-primary">
              <Button variant="ghost">
              Resources
              <ChevronDownIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>
                <Link href="/resources/upcoming-tax-deadlines" prefetch={false}>
                  Upcoming Tax Deadlines
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/tax-preparation-status" prefetch={false}>
                  Tax Preparation Status
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/irs-updates" prefetch={false}>
                  IRS Updates
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/state-tax-changes" prefetch={false}>
                  State Tax Changes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/resources/audit-preparation" prefetch={false}>
                  Audit Preparation
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost">
          <Link href="/about" className="font-medium hover:text-primary" prefetch={false}>
            About
          </Link>
          </Button>
          <Button variant="ghost">
          <Link href="/contact" className="font-medium hover:text-primary" prefetch={false}>
            Contact
          </Link>
          </Button>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/settings/profile" prefetch={false}>
          <Button variant="outline" className="hidden sm:inline-flex">
            Login
          </Button>
        </Link>
        <Link href="/settings/signup" prefetch={false}>
          <Button className="hidden sm:inline-flex">
            Sign Up
          </Button>
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
              <Link href="/settings/preferences" className="w-full">
                Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/settings/logout" className="w-full">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
      <main className="container mx-auto px-4 md:px-0">
        <section className="container py-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-1">
            <Card className="w-full">
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Update your profile information.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" defaultValue="John Doe" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="john@example.com" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" defaultValue="+1 (555) 555-5555" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" type="text" defaultValue="Acme Inc" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                      <SelectTrigger id="role" aria-label="Select role">
                        <SelectValue placeholder="Select role" defaultValue="accountant">
                          Accountant
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="accountant">Accountant</SelectItem>
                        <SelectItem value="tax-preparer">Tax Preparer</SelectItem>
                        <SelectItem value="payroll-manager">Payroll Manager</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      defaultValue="I'm a tax professional with 10 years of experience."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="ml-auto">Save</Button>
              </CardFooter>
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

function CurrencyIcon(props: React.SVGProps<SVGSVGElement>) {
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


function SettingsIcon(props: React.SVGProps<SVGSVGElement>) {
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


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
