"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminRedirect() {
  const router = useRouter()
  
  useEffect(() => {
    // Redirect to the secret admin panel
    router.push("/dashboard-secret-utsav/admin")
  }, [router])
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Admin Panel...</h1>
        <p>Please wait while we redirect you to the admin dashboard.</p>
      </div>
    </div>
  )
}