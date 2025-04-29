"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, LogOut, MessageSquare, User } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Submissions from "../submissions"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Function to get cookie value by name
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    // Enhanced security check with multiple validations using cookies
    const adminAuthenticated = getCookie("adminAuthenticated")
    const adminAuthExpiry = getCookie("adminAuthExpiry")
    const securityToken = getCookie("adminSecurityToken")
    const currentTime = Date.now()
    
    // Check for all required security elements
    if (adminAuthenticated !== "true" || !adminAuthExpiry || !securityToken) {
      handleSecurityFailure("Missing authentication data")
      return
    }
    
    // Check if session has expired
    if (parseInt(adminAuthExpiry) < currentTime) {
      handleSecurityFailure("Session expired")
      return
    }
    
    // Additional security check - token must be valid base64
    try {
      const decodedToken = atob(securityToken)
      if (!decodedToken.includes("-")) {
        handleSecurityFailure("Invalid security token format")
        return
      }
    } catch (e) {
      handleSecurityFailure("Corrupted security token")
      return
    }
    
    // If all checks pass, set as authenticated
    setIsAuthenticated(true)
    setIsLoading(false)
    
    // Auto-refresh session every 30 minutes if active
    const sessionRefreshInterval = setInterval(() => {
      const newExpiryTime = Date.now() + 3600000; // extend by another hour
      document.cookie = `adminAuthExpiry=${newExpiryTime}; path=/; max-age=3600; samesite=strict`;
    }, 1800000); // 30 minutes
    
    return () => clearInterval(sessionRefreshInterval);
  }, [router, toast])
  
  // Handle security failures
  const handleSecurityFailure = (reason: string) => {
    // Clear all auth data by setting expired cookies
    document.cookie = "adminAuthenticated=; path=/; max-age=0";
    document.cookie = "adminAuthExpiry=; path=/; max-age=0";
    document.cookie = "adminSecurityToken=; path=/; max-age=0";
    
    // Log the reason (in a real app, this would go to a server)
    console.warn(`Security check failed: ${reason} at ${new Date().toISOString()}`)
    
    // Redirect to login
    router.push("/dashboard-secret-utsav/admin")
    toast({
      title: "Access denied",
      description: "Please login to access the admin dashboard",
      variant: "destructive",
    })
    
    setIsLoading(false)
  }

  const handleLogout = () => {
    // Clear all authentication data by setting expired cookies
    document.cookie = "adminAuthenticated=; path=/; max-age=0";
    document.cookie = "adminAuthExpiry=; path=/; max-age=0";
    document.cookie = "adminSecurityToken=; path=/; max-age=0";
    
    // Redirect to login page
    router.push("/dashboard-secret-utsav/admin")
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    })
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4">Loading...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null // Router will redirect
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Back to website</span>
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Secret Admin Dashboard</h1>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="messages" className="space-y-4">
          <TabsList className="grid grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="messages">
              <MessageSquare className="mr-2 h-4 w-4" />
              Messages
            </TabsTrigger>
            <TabsTrigger value="profile">
              <User className="mr-2 h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="messages" className="space-y-4">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle>Contact Form Submissions</CardTitle>
                <CardDescription>View and manage messages from visitors</CardDescription>
              </CardHeader>
              <CardContent>
                <Submissions />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Manage your portfolio information</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400 mb-4">
                  This is a placeholder for profile settings. In a real application, you would be able to update your
                  portfolio information here.
                </p>
                <Button disabled>Save Changes</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}