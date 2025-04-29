"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

export default function About() {
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

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 to-transparent opacity-70 blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-8">
          About <span className="text-primary">Me</span>
        </h2>
        <Card
          className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-xl transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <CardContent className="grid gap-8 md:grid-cols-2 items-center p-8">
            <div className="text-center md:text-left">
              <Avatar className="w-40 h-40 mx-auto md:mx-0 mb-6 border-4 border-primary/20">
                <AvatarImage src="/placeholder-user.jpg" alt="Utsav Mishra" />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl">UM</AvatarFallback>
              </Avatar>
              <p className="text-gray-300 leading-relaxed mb-4">
                Full-Stack Developer and BCA student skilled in Laravel, React.js, PHP, and AWS, driving performance enhancement in 5+ web applications, including job platforms and e-commerce sites. Built scalable solutions with MySQL and responsive UI/UX, boosting efficiency by 30%.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Certified in AWS Developer Associate and Google Cloud Data Engineer. Seeking internships to innovate cloud-based systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Education</h3>
              <p className="text-gray-300 mb-4">
                <span className="font-medium">Bachelor of Computer Applications (BCA)</span><br />
                Dr. Ram Manohar Lohia Awadh University, Faizabad, Uttar Pradesh<br />
                Expected Aug 2026 | CGPA: 7.5/10 (2nd Year)
              </p>
              
              <h3 className="text-xl font-semibold mb-4 text-primary">Professional Journey</h3>
              <p className="text-gray-300 mb-6">
                As a freelance web developer since October 2023, I've engineered client websites using Laravel, React.js, and Node.js, 
                improving user retention by 20%. I've optimized backend performance with MySQL indexing and collaborated with clients 
                to design intuitive UI/UX experiences.
              </p>
              <h3 className="text-xl font-semibold mb-4 text-primary">Key Traits</h3>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Analytical
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Collaborator
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Leader
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Communicator
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Innovative
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Problem Solver
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
