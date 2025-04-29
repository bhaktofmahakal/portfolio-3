"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award } from "lucide-react"
import { useEffect, useState } from "react"

const certifications = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "Mar 2024",
    icon: Award,
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    icon: Award,
  },
  {
    name: "Google Cloud Certified Professional Data Engineer",
    issuer: "Google Cloud",
    date: "Apr 2024",
    icon: Award,
  },
  {
    name: "The Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "Dec 2023",
    icon: Award,
  },
  {
    name: "PHP & Laravel Development Certification",
    issuer: "Udemy",
    date: "Oct 2023",
    icon: Award,
  },
  {
    name: "React.js Frontend Development",
    issuer: "Coursera",
    date: "Feb 2024",
    icon: Award,
  },
  {
    name: "Data Structures & Algorithms with Java",
    issuer: "Apna College",
    date: "Sep 2023",
    icon: Award,
  },
]

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false)

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

    const section = document.getElementById("certifications")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12">
          <span className="text-primary">Certifications</span> & Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((certification, index) => (
            <Card
              key={certification.name}
              className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <certification.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{certification.name}</h3>
                <p className="text-sm text-gray-400">
                  {certification.issuer} • {certification.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}