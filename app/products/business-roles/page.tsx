// `app/products/business-roles/page.tsx` is the UI for the `/products/business-roles` URL

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NdaRS5FF5iR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import React from 'react'
import { useState } from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle,NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CartesianGrid, XAxis, Line, LineChart, Area, AreaChart } from "recharts"
import { type ChartConfig, ChartTooltipContent, ChartTooltip, ChartContainer } from "@/components/ui/chart"

// Define an interface for the business role
interface BusinessRole {
  id: number;
  title: string;
  description: string;
  averageSalary: number;
  medianSalary: number;
  salaryRange: {
    min: number;
    max: number;
  };
  jobGrowth: number;
  jobOutlook: string;
}

interface AreachartChartProps {
  className?: string;
}

export default function Component() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRoles, setSelectedRoles] = useState<BusinessRole[]>([])
  const businessRoles: BusinessRole[] = [
    {
      id: 1,
      title: "Accountant",
      description: "Responsible for financial reporting and tax preparation.",
      averageSalary: 75000,
      medianSalary: 68000,
      salaryRange: {
        min: 55000,
        max: 95000,
      },
      jobGrowth: 6,
      jobOutlook: "Faster than average",
    },
    {
      id: 2,
      title: "Tax Preparer",
      description: "Specializes in preparing and filing tax returns.",
      averageSalary: 45000,
      medianSalary: 42000,
      salaryRange: {
        min: 35000,
        max: 60000,
      },
      jobGrowth: 4,
      jobOutlook: "Average",
    },
    {
      id: 3,
      title: "Payroll Manager",
      description: "Manages the company's payroll system and processes.",
      averageSalary: 60000,
      medianSalary: 55000,
      salaryRange: {
        min: 45000,
        max: 75000,
      },
      jobGrowth: 7,
      jobOutlook: "Faster than average",
    },
    {
      id: 4,
      title: "Tax Auditor",
      description: "Examines tax returns and financial records for compliance.",
      averageSalary: 65000,
      medianSalary: 60000,
      salaryRange: {
        min: 50000,
        max: 85000,
      },
      jobGrowth: 5,
      jobOutlook: "Average",
    },
    {
      id: 5,
      title: "Tax Consultant",
      description: "Provides tax planning and advisory services to clients.",
      averageSalary: 85000,
      medianSalary: 78000,
      salaryRange: {
        min: 65000,
        max: 110000,
      },
      jobGrowth: 8,
      jobOutlook: "Faster than average",
    },
  ]
  const filteredRoles = businessRoles.filter((role) => 
    role.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleRoleSelect = (role: BusinessRole) => {
    if (selectedRoles.some(r => r.id === role.id)) {
      setSelectedRoles(selectedRoles.filter((r) => r.id !== role.id))
    } else {
      setSelectedRoles([...selectedRoles, role])
    }
  }

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
                <CardTitle>Business Roles</CardTitle>
                <CardDescription>Manage and assign tax-related business roles.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input
                    type="search"
                    placeholder="Search business roles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <div className="grid gap-2">
                    {filteredRoles.map((role) => (
                      <div
                        key={role.id}
                        className={`flex items-center justify-between rounded-md bg-muted p-3 ${
                          selectedRoles.includes(role) ? "bg-primary text-primary-foreground" : ""
                        }`}
                        onClick={() => handleRoleSelect(role)}
                      >
                        <div>
                          <h3 className="text-sm font-medium">{role.title}</h3>
                          <p className="text-xs text-muted-foreground">{role.description}</p>
                        </div>
                        <Button 
                          variant={selectedRoles.some(r => r.id === role.id) ? "default" : "outline"} 
                          size="icon"
                          onClick={() => handleRoleSelect(role)}
                        >
                          {selectedRoles.some(r => r.id === role.id) ? (
                          <CheckIcon className="h-4 w-4" />
                          ) : (
                          <PlusIcon className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            {selectedRoles.length > 0 && (
              <div className="col-span-2 lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Selected Business Roles</CardTitle>
                    <CardDescription>View wage data and job outlook for the selected roles.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-8">
                      {selectedRoles.map((role) => (
                        <div key={role.id} className="grid gap-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium">{role.title}</h3>
                            <Button variant="outline" size="icon" onClick={() => handleRoleSelect(role)}>
                              <XIcon className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="text-sm font-medium">Average Salary</h4>
                              <p className="text-2xl font-bold">${role.averageSalary}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Median Salary</h4>
                              <p className="text-2xl font-bold">${role.medianSalary}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Salary Range</h4>
                              <p className="text-sm">
                                ${role.salaryRange.min} - ${role.salaryRange.max}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">Job Growth</h4>
                              <p className="text-sm">
                                {role.jobGrowth}% ({role.jobOutlook})
                              </p>
                            </div>
                          </div>
                          <div>
                            <AreachartChart className="aspect-[16/9]" />
                            <LinechartChart className="aspect-[16/9]" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button>
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      Generate PDF Report
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            )}
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

function AreachartChart({ className }: AreachartChartProps) {
  const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig: ChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};
  return (
    <ChartContainer config={chartConfig} className={`min-h-[300px] ${className}`}>
      <AreaChart
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="natural"
          dataKey="desktop"
          fill="var(--color-desktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
        />
      </AreaChart>
    </ChartContainer>
  );
}


function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 6 9 17l-5-5" />
    </svg>
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


function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}

interface LinechartChartProps extends React.HTMLAttributes<HTMLDivElement> {
  svgProps?: React.SVGProps<SVGSVGElement>;
}

function LinechartChart({ svgProps, ...divProps }: LinechartChartProps) {
  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  const chartConfig: ChartConfig = {
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
  };
  return (
    <div {...divProps}>
      <ChartContainer config={chartConfig}>
        <LineChart
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
          {...svgProps}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip content={<ChartTooltipContent hideLabel />} />
          <Line 
            type="natural"
            dataKey="desktop"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  )
}


function PlusIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
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
