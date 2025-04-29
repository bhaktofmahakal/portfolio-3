"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Cloud, Database, Lightbulb, Rocket, Server, Users } from "lucide-react"
import { useEffect, useState } from "react"

const services = [
  {
    title: "Web Application Development",
    description: "Creating responsive, interactive web applications with Laravel, React.js, and modern frameworks.",
    icon: Code,
  },
  {
    title: "E-commerce Solutions",
    description: "Building online stores with shopping carts, payment integration, and inventory management systems.",
    icon: Server,
  },
  {
    title: "Database Optimization",
    description: "Designing and optimizing MySQL and MongoDB databases for improved performance and scalability.",
    icon: Database,
  },
  {
    title: "Cloud Deployment",
    description: "Deploying applications on AWS (EC2, S3) and Google Cloud with proper security and scaling configurations.",
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive, user-friendly interfaces that enhance user engagement and conversion rates.",
    icon: Lightbulb,
  },
  {
    title: "Performance Optimization",
    description: "Improving application speed and efficiency through code refactoring and infrastructure enhancements.",
    icon: Rocket,
  },
]

export default function Features() {
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

    const section = document.getElementById("services")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent opacity-70 blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12">
          My <span className="text-primary">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-500 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
