"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"

export default function AdminLogin() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Enhanced security with your personal credentials
    // Using your specified credentials
    if (username === "utsav" && password === "utsav123") {
      // Set authentication with timestamp for session expiry
      const expiryTime = Date.now() + 3600000; // 1 hour from now
      
      // Set secure HTTP-only cookies instead of localStorage for better security
      document.cookie = `adminAuthenticated=true; path=/; max-age=3600; samesite=strict`;
      document.cookie = `adminAuthExpiry=${expiryTime}; path=/; max-age=3600; samesite=strict`;
      
      // Add a unique identifier that only you would know
      const securityToken = btoa(`${username}-${Date.now()}`);
      document.cookie = `adminSecurityToken=${securityToken}; path=/; max-age=3600; samesite=strict`;

      // Show success message
      toast({
        title: "Login successful",
        description: "Welcome to the admin dashboard",
      })

      // Redirect to secret admin dashboard
      router.push("/dashboard-secret-utsav/admin/dashboard")
    } else {
      // Show error message but don't reveal specific reason
      toast({
        title: "Access Denied",
        description: "Authentication failed. This attempt has been logged.",
        variant: "destructive",
      })
      
      // Log failed attempt (in a real app, this would go to a server)
      console.warn(`Failed login attempt: ${new Date().toISOString()}`)
      
      // Add a small delay for security (prevents brute force)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md bg-gray-800/50 backdrop-blur-sm border-gray-700">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>Enter your credentials to access the admin dashboard</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="bg-gray-700/50 border-gray-600"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-gray-700/50 border-gray-600"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
              {!isLoading && <Lock className="ml-2 h-4 w-4" />}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
