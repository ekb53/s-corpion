"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NUgxP3pJGnI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

// `app/contact/page.tsx` is the UI for the `/contact` URL

import React from 'react';
import { useState } from 'react';
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, navigationMenuTriggerStyle, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { supabase } from '@/lib/supabase'
import { ChevronsUpDown } from "lucide-react"

export default function Component() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert({ name, email, message })
  
    if (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your message. Please try again.",
        variant: "destructive",
      })
    } else {
      toast({
        title: "Message Sent!",
        description: `Thank you, ${name}. We'll get back to you soon.`,
      })
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('email_subscriptions')
      .insert({ email: email })
  
    if (error) {
      if (error.code === '23505') { // unique_violation
        toast({
          title: "Already subscribed",
          description: "This email is already subscribed to our newsletter.",
        })
      } else {
        toast({
          title: "Error",
          description: "There was an error subscribing. Please try again.",
          variant: "destructive",
        })
      }
    } else {
      toast({
        title: "Subscribed!",
        description: `You've been subscribed with email: ${email}`,
      })
      setEmail('');
    }
  };


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
        <Link href="/settings/login" prefetch={false}>
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
              <Link href="/settings/profile" className="w-full">
                Profile
              </Link>
            </DropdownMenuItem>
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
          <div className="grid gap-8">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="text-muted-foreground">Have a question or need assistance? Get in touch with our team.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-2">
        <label htmlFor="name">Name</label>
        <Input 
          id="name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name" 
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email">Email</label>
        <Input 
          id="email" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email" 
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message">Message</label>
        <Textarea 
          id="message" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message" 
          rows={5} 
        />
      </div>
      <Button type="submit">Submit</Button>
    </form>
    <div className="grid gap-4">
      <h2 className="text-2xl font-bold">Newsletter Signup</h2>
      <p className="text-muted-foreground">Stay up-to-date with the latest tax news and updates.</p>
      <form onSubmit={handleSubscribe} className="flex gap-2">
        <Input 
          type="email" 
          value={newsletterEmail}
          onChange={(e) => setNewsletterEmail(e.target.value)}
          placeholder="Enter your email" 
        />
        <Button type="submit">Subscribe</Button>
      </form>
    </div>
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

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function SnailIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
      <circle cx="10" cy="13" r="8" />
      <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
      <path d="M18 3 19.1 5.2" />
      <path d="M22 3 20.9 5.2" />
    </svg>
  )
}
