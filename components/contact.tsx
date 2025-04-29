"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { type FormEvent, useEffect, useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("contact")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      setIsSubmitting(false)
      return
    }

    // Store submission in local storage
    const submission = {
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
    }

    // Get existing submissions or initialize empty array
    const existingSubmissions = JSON.parse(localStorage.getItem("contactSubmissions") || "[]")

    // Add new submission
    existingSubmissions.push(submission)

    // Save back to local storage
    localStorage.setItem("contactSubmissions", JSON.stringify(existingSubmissions))

    // Reset form
    setName("")
    setEmail("")
    setMessage("")
    setIsSubmitting(false)

    // Show success message
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <div
          className={`grid gap-8 md:grid-cols-2 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800/50 border-gray-700 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800/50 border-gray-700 focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full rounded-md border border-gray-700 bg-gray-800/50 px-3 py-2 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                  rows={4}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  suppressHydrationWarning
                />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Feel free to reach out with any questions or opportunities. I'm always open to new connections and
                collaborations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span>utsavmishraa005@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-primary mr-3" />
                  <a href="https://github.com/bhaktofmahakal" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    github.com/bhaktofmahakal
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-primary mr-3" />
                  <a href="https://linkedin.com/in/utsav-mishra1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin.com/in/utsav-mishra1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
