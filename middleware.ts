import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Enhanced middleware with security features
export function middleware(request: NextRequest) {
  // Get the pathname and IP address
  const path = request.nextUrl.pathname
  // Get IP from headers as request.ip is not available in NextRequest type
  const ip = request.headers.get('x-real-ip') || 
             request.headers.get('x-forwarded-for') || 'unknown'
  const userAgent = request.headers.get('user-agent') || 'unknown'
  
  // Add security headers to all responses
  const response = NextResponse.next({
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
    }
  })
  
  // Check for authentication for protected routes
  if (path.startsWith('/dashboard-secret-utsav/admin/dashboard') || 
      path.startsWith('/dashboard-secret-utsav/admin/submissions')) {
    
    // Get authentication data from cookies
    const adminAuth = request.cookies.get('adminAuthenticated')?.value
    const adminExpiry = request.cookies.get('adminAuthExpiry')?.value
    const securityToken = request.cookies.get('adminSecurityToken')?.value
    
    // If not authenticated or session expired, redirect to login
    if (!adminAuth || !adminExpiry || !securityToken || parseInt(adminExpiry) < Date.now()) {
      // Log unauthorized access attempt
      console.warn(`Unauthorized admin access attempt: ${path} from IP: ${ip}, UA: ${userAgent}`)
      
      // Redirect to login page
      return NextResponse.redirect(new URL('/dashboard-secret-utsav/admin', request.url))
    }
  }
  
  // Log access attempts to admin areas (in a real app, this would go to a server)
  if (path.startsWith('/dashboard-secret-utsav/admin') && 
      path !== '/dashboard-secret-utsav/admin' && 
      path !== '/dashboard-secret-utsav/admin/login') {
    console.warn(`Admin access attempt: ${path} from IP: ${ip}, UA: ${userAgent}`)
  }
  
  return response
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard-secret-utsav/:path*'
  ]
}