"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, ExternalLink } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="py-24 md:py-32 lg:py-40 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent opacity-70 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`text-left transition-all duration-1000 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
              Hi, I'm <span className="text-primary">Utsav Mishra</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer and BCA student skilled in Laravel, React.js, PHP, and AWS, driving performance enhancement 
              in 5+ web applications. Built scalable solutions with MySQL and responsive UI/UX, boosting efficiency by 30%.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/resume.pdf" download>
                <Button size="lg" className="group">
                  Download Resume
                  <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" size="lg" className="group">
                  View Projects
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 transform ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl"></div>
              <Image
                src="/developer-illustration.svg"
                alt="Developer Illustration"
                width={500}
                height={500}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
