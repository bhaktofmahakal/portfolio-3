import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Panel - Utsav Mishra Portfolio",
  description: "Admin panel for Utsav Mishra's portfolio website",
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {children}
    </div>
  )
}