"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  ImageIcon,
  LayoutDashboard,
  Server,
  Smartphone,
  Globe,
  GitBranch,
  Cloud,
  Terminal,
} from "lucide-react"
import { useEffect, useState } from "react"

const skills = [
  { name: "PHP", icon: Code, level: 90 },
  { name: "JavaScript", icon: Code, level: 85 },
  { name: "Python", icon: Code, level: 80 },
  { name: "Java", icon: Code, level: 75 },
  { name: "HTML5/CSS3", icon: Code, level: 95 },
  { name: "React.js", icon: Code, level: 88 },
  { name: "jQuery", icon: Code, level: 85 },
  { name: "Bootstrap", icon: LayoutDashboard, level: 90 },
  { name: "Laravel", icon: Server, level: 92 },
  { name: "Node.js", icon: Server, level: 85 },
  { name: "MySQL", icon: Database, level: 90 },
  { name: "MongoDB", icon: Database, level: 82 },
  { name: "AWS (EC2, S3)", icon: Cloud, level: 85 },
  { name: "Google Cloud", icon: Cloud, level: 80 },
  { name: "Git", icon: GitBranch, level: 88 },
  { name: "Docker", icon: Server, level: 78 },
  { name: "RESTful APIs", icon: Globe, level: 85 },
  { name: "Responsive Design", icon: Smartphone, level: 92 },
  { name: "UI/UX Principles", icon: ImageIcon, level: 85 },
  { name: "Agile Methodology", icon: Terminal, level: 80 },
]

export default function Skills() {
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

    const section = document.getElementById("skills")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-300 transform ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <div className="rounded-full bg-primary/10 p-4 mb-4">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                  <div
                    className="bg-gradient-to-r from-primary to-blue-500 h-2 rounded-full"
                    style={{
                      width: `${isVisible ? skill.level : 0}%`,
                      transition: "width 1s ease-in-out",
                    }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400">{skill.level}%</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
