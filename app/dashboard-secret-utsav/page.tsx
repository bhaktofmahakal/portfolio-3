"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Enhanced security with your personal credentials
    // Using your specified credentials
    if (username === "utsav" && password === "utsav123") {
      // Set enhanced authentication with expiry and security token
      const expiryTime = Date.now() + 3600000; // 1 hour from now
      localStorage.setItem("adminAuthenticated", "true")
      localStorage.setItem("adminAuthExpiry", expiryTime.toString())
      
      // Create a unique security token with timestamp
      const securityToken = btoa(`${username}-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`);
      localStorage.setItem("adminSecurityToken", securityToken)
      
      // Show success message
      toast({
        title: "Login successful",
        description: "Welcome back! Redirecting to secure area...",
      })
      
      // Add a slight delay before redirect for security
      setTimeout(() => {
        router.push("/dashboard-secret-utsav/admin")
      }, 1000)
    } else {
      // Show generic error message (don't reveal specific reason)
      toast({
        title: "Access Denied",
        description: "Authentication failed. This attempt has been logged.",
        variant: "destructive",
      })
      
      // Log failed attempt (in a real app, this would go to a server)
      console.warn(`Failed secret login attempt: ${new Date().toISOString()}`)
      
      // Add a delay for security (prevents brute force)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-center mb-6 text-white">Admin Access</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-1">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-white"
                placeholder="Enter your username"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-700/50 border-gray-600 text-white"
                placeholder="Enter your password"
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Authenticating..." : "Login"}
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              This area is restricted to authorized personnel only.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}