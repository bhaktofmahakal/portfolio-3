import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import AdminShortcut from '@/components/admin-shortcut'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Utsav Mishra - Full Stack Web Developer',
  description: 'Portfolio of Utsav Mishra, a Full Stack Web Developer specializing in React, Next.js, and modern web technologies.',
  keywords: ['web developer', 'full stack', 'react', 'next.js', 'portfolio', 'utsav mishra'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AdminShortcut />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
