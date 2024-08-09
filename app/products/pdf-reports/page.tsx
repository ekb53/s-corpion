"use client";
// `app/products/pdf-reports/page.tsx` is the UI for the `/products/pdf-reports` URL

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ab2CDFqT5Ht
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import * as React from "react"
import { NextResponse } from 'next/server'
import axios from 'axios'
import { Check, ChevronsUpDown } from "lucide-react"
import { useState, useEffect } from 'react'
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { useAuth } from '@/contexts/AuthContext'
import { supabase } from '@/lib/supabase'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter } from 'next/navigation'
import jsPDF from 'jspdf'
import { fetchBusinessRoles, BusinessRole } from '@/lib/bls-api';
import { useCallback } from 'react';
import Image from 'next/image';

interface BusinessRole {
  role: string;
  hours: number;
  salary: number;
}

export default function PDFReportsPage() {
  const [companyName, setCompanyName] = useState('')
  const [revenue, setRevenue] = useState(0)
  const [roleOptions, setRoleOptions] = useState<{ role: string; salary: number }[]>([])
  const [businessRoles, setBusinessRoles] = useState<BusinessRole[]>([{ role: '', hours: 0, salary: 0 }]);
  const [includeChart, setIncludeChart] = useState(false)
  const [templates, setTemplates] = useState<Template[]>([]);
  const { toast } = useToast()
  const { user } = useAuth() as { user: User | null };
  const [isLoginPromptOpen, setIsLoginPromptOpen] = useState(false)
  const [open, setOpen] = useState(false)
  const [roleValue, setRoleValue] = useState("")
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false);

  interface User {
  id: string;
  // Add other properties as needed
}
  
  interface BusinessRole {
  role: string;
  hours: number;
  salary: number;
}

  interface Template {
  id: number;
  user_id: string;
  company_name: string;
  revenue: number;
  include_chart: boolean;
  business_roles: BusinessRole[];
}

  interface ComboboxDemoProps {
    index: number;
    value: string;
    onChange: (index: number, value: string, salary: number) => void;
    roleOptions: { role: string; salary: number }[];
  }


   const ComboboxDemo: React.FC<ComboboxDemoProps> = ({ index, value, onChange, roleOptions }) => {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [localRoleOptions, setLocalRoleOptions] = useState<{ role: string; salary: number; description?: string }[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      const fetchOptions = async () => {
        if (searchTerm.length >= 2) {
          setIsLoading(true);
          try {
            const roles = await fetchBusinessRoles(searchTerm);
            setLocalRoleOptions(roles);
          } catch (error) {
            console.error('Error fetching roles:', error);
            toast({
              title: "Error",
              description: "Failed to fetch business roles. Please try again.",
              variant: "destructive",
            });
          } finally {
            setIsLoading(false);
          }
        } else {
          setLocalRoleOptions([]);
        }
      };

      fetchOptions();
    }, [searchTerm]);

    

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between"
          >
            {value || "Select business role..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput 
              placeholder="Search business role..." 
              onValueChange={setSearchTerm}
            />
            {isLoading ? (
              <div className="p-2 text-center">Loading...</div>
            ) : (
              <>
                <CommandEmpty>No role found.</CommandEmpty>
                <CommandGroup>
                  {localRoleOptions.map((role) => (
                    <CommandItem
                      key={role.role}
                      value={role.role}
                      onSelect={() => {
                        onChange(index, role.role, role.salary);
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          "mr-2 h-4 w-4",
                          value === role.role ? "opacity-100" : "opacity-0"
                        )}
                      />
                      <div>
                        <div>{role.role}</div>
                        {role.description && <div className="text-sm text-gray-500">{role.description}</div>}
                        <div className="text-sm font-semibold">${role.salary.toLocaleString()}/year</div>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </>
            )}
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
  
  const fetchRoleOptions = async () => {
    try {
      const roles = await fetchBusinessRoles()
      console.log('Fetched roles:', roles)
      setRoleOptions(roles)
    } catch (error) {
      console.error('Error fetching roles:', error)
      toast({
        title: "Error",
        description: "Failed to fetch business roles. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleRoleChange = (index: number, role: string, salary: number) => {
    const updatedRoles = [...businessRoles];
    updatedRoles[index] = { ...updatedRoles[index], role, salary };
    setBusinessRoles(updatedRoles);
  };

  const handleHoursChange = (index: number, value: number[]) => {
  const updatedRoles = [...businessRoles];
  updatedRoles[index] = { ...updatedRoles[index], hours: value[0] };
  setBusinessRoles(updatedRoles);
};

  const addBusinessRole = () => {
  setBusinessRoles([...businessRoles, { role: '', hours: 0, salary: 0 }]);
};

  const removeBusinessRole = (index: number) => {
  const updatedRoles = businessRoles.filter((_, i) => i !== index);
  setBusinessRoles(updatedRoles);
};

  const fetchTemplates = useCallback(async () => {
  if (!user) {
    console.log('User not logged in');
    return;
  }

  const { data, error } = await supabase
    .from('report_templates')
    .select('*')
    .eq('user_id', user.id);

  if (error) {
    toast({
      title: "Error",
      description: "Failed to fetch templates",
      variant: "destructive",
    });
  } else {
    setTemplates(data as Template[] || []);
  }
}, [user, toast, supabase]);

  useEffect(() => {
  if (user) {
    fetchTemplates();
  }
}, [fetchTemplates, user]);

  const generatePDF = () => {
    const doc = new jsPDF()
    
    doc.setFontSize(22)
    doc.text('Tax Report', 105, 20, { align: 'center' })
    
    doc.setFontSize(16)
    doc.text(`Company: ${companyName}`, 20, 40)
    doc.text(`Revenue: $${revenue.toLocaleString()}`, 20, 50)
    
    doc.setFontSize(14)
    doc.text('Business Roles:', 20, 70)
    
    businessRoles.forEach((role, index) => {
      doc.text(`${role.role}: ${role.hours} hours - $${role.salary.toLocaleString()}/year`, 30, 80 + (index * 10))
    })

    if (includeChart) {
      // Here you would generate and add a chart
      doc.text('Chart included', 20, 80 + (businessRoles.length * 10) + 20)
    }
    
    doc.save('tax-report.pdf')
    
    toast({
      title: "PDF Generated",
      description: "Your tax report has been generated and downloaded.",
    })
  }

  const saveTemplate = async () => {
  if (!user) {
    toast({
      title: "Error",
      description: "You must be logged in to save templates",
      variant: "destructive",
    });
    return;
  }

  const { data, error } = await supabase
    .from('report_templates')
    .insert({
      user_id: user.id,
      company_name: companyName,
      revenue: revenue,
      include_chart: includeChart,
      business_roles: businessRoles
    });

  if (error) {
    toast({
      title: "Error",
      description: "Failed to save template",
      variant: "destructive",
    });
  } else {
    toast({
      title: "Success",
      description: "Template saved successfully",
    });
    fetchTemplates();
  }
};

  const handleSaveTemplate = () => {
    if (user) {
      saveTemplate()
    } else {
      setIsLoginPromptOpen(true)
    }
  }

  const loadTemplate = (template: Template) => {
  setCompanyName(template.company_name);
  setRevenue(template.revenue);
  setIncludeChart(template.include_chart);
  setBusinessRoles(template.business_roles || [{ role: '', hours: 0, salary: 0 }]);
};

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
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 py-12 md:py-16">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>PDF Reports</CardTitle>
                <CardDescription>Generate and download tax-related PDF reports.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Button variant="outline">
                    <FileIcon className="mr-2 h-4 w-4" />
                    Income Tax Return
                  </Button>
                  <Button variant="outline">
                    <FileIcon className="mr-2 h-4 w-4" />
                    Payroll Tax Report
                  </Button>
                  <Button variant="outline">
                    <FileIcon className="mr-2 h-4 w-4" />
                    Sales Tax Report
                  </Button>
                </div>
              </CardContent>
            </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generate Tax Report</CardTitle>
          <CardDescription>Enter your company details to generate a PDF report.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="companyName">Company Name</label>
            <Input
              id="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Enter company name"
            />
          </div>
          <div>
            <label htmlFor="revenue">Revenue</label>
            <Slider
              id="revenue"
              min={0}
              max={1000000}
              step={1000}
              value={[revenue]}
              onValueChange={(value) => setRevenue(value[0])}
            />
            <p>Current value: ${revenue.toLocaleString()}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="includeChart"
              checked={includeChart}
              onCheckedChange={(checked) => setIncludeChart(checked as boolean)}
            />
            <label htmlFor="includeChart">Include revenue chart</label>
          </div>
          {businessRoles.map((role, index) => (
        <div key={index} className="space-y-2">
          <ComboboxDemo
            index={index}
            value={role.role}
            onChange={handleRoleChange}
            roleOptions={roleOptions}
          />
          <Slider
            min={0}
            max={40}
            step={1}
            value={[role.hours]}
            onValueChange={(value) => handleHoursChange(index, value)}
          />
          <p>Hours: {role.hours}</p>
          {role.salary > 0 && (
            <p>Average Salary: ${role.salary.toLocaleString()}/year</p>
          )}
          <Button onClick={() => removeBusinessRole(index)} variant="outline" size="sm">Remove Role</Button>
        </div>
      ))}
      <Button onClick={addBusinessRole}>Add Business Role</Button>
    </CardContent>
        <CardFooter>
          <Button onClick={generatePDF} className="mr-2">Generate PDF</Button>
          <Button onClick={saveTemplate} variant="outline">Save Template</Button>
        </CardFooter>
      </Card>
      
      <div className="grid gap-4">
      <Card>
      <CardHeader>
        <CardTitle>PDF Preview</CardTitle>
        <CardDescription>A preview of your generated report will appear here.</CardDescription>
      </CardHeader>
      <CardContent>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-[400px] overflow-auto">
      {companyName || revenue > 0 || businessRoles.some(role => role.role || role.hours > 0) ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Tax Report</h2>
          <p><strong>Company:</strong> {companyName}</p>
          <p><strong>Revenue:</strong> ${revenue.toLocaleString()}</p>
          <h3 className="text-xl font-bold mt-4 mb-2">Business Roles:</h3>
          {businessRoles.map((role, index) => (
            <p key={index}>
              {role.role}: {role.hours} hours
              {role.salary !== undefined && role.salary !== 0 && ` - $${role.salary.toLocaleString()}/year`}
            </p>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Enter company details to see a preview</p>
      )}
    </div>
      </CardContent>
    </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Saved Templates</CardTitle>
          <CardDescription>Load a previously saved template.</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {templates.map((template) => (
              <li key={template.id} className="flex justify-between items-center">
                <span>{template.company_name}</span>
                <Button onClick={() => loadTemplate(template)} variant="outline" size="sm">
                  Load
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>


            <Card>
              <CardHeader>
                <CardTitle>Compensation Templates</CardTitle>
                <CardDescription>Create and manage employee compensation plans.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  <Button variant="outline">
                    <FileIcon className="mr-2 h-4 w-4" />
                    Salary Structure
                  </Button>
                  <Button variant="outline">
                    <FileIcon className="mr-2 h-4 w-4" />
                    Bonus Structure
                  </Button>
                  <Button variant="outline">
                    <FileIcon className="mr-2 h-4 w-4" />
                    Commission Structure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Income Tax Return</CardTitle>
                <CardDescription>Preview and download your income tax return.</CardDescription>
              </CardHeader>
              <CardContent>
                <Image src="/placeholder.svg" alt="Income Tax Return" width={600} height={800} className="rounded-lg" />
              </CardContent>
              <CardFooter>
                <Button>Download PDF</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>

      <Dialog open={isLoginPromptOpen} onOpenChange={setIsLoginPromptOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              You need to be logged in to save templates. Please log in or sign up to continue.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => router.push('/login')}>Login</Button>
            <Button onClick={() => router.push('/signup')}>Sign Up</Button>
          </div>
        </DialogContent>
      </Dialog>

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


function FileIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
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
