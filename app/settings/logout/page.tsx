"use client";

import { supabase } from '@/lib/supabase'
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'


export default function SignOut() {
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const handleSignOut = async () => {
      const { error } = await supabase.auth.signOut()

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success",
          description: "You've been signed out",
        })
        // Redirect to home page after successful sign out
        router.push('/')
      }
    }

    handleSignOut()
  }, [toast, router])

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <p>Signing you out...</p>
      <Button variant="outline">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}