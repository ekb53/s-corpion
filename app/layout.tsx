// "use client"

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'
import { Analytics } from "@vercel/analytics/react"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S-Corpion Tax Dashboard",
  description: "The premiere AI tax tool for small business owners.",
};

const fontHeading = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
      <Analytics />
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
