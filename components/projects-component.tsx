import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  responsibilities: string[]
  period: string
  imageUrl?: string
  demoUrl?: string
  githubUrl?: string
  achievements?: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "Coffeeblend-Online Coffee Store",
    period: "May 2024 – Jul 2024",
    description: "An e-commerce platform for coffee products with shopping cart functionality and customer review system.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    responsibilities: [
      "Created a coffee e-commerce site with PHP, MySQL, and Bootstrap, boosting sales conversions by 20%.",
      "Implemented shopping cart and customer review system, improving user interaction by 25%.",
      "Designed responsive UI with Bootstrap, improving mobile orders by 15%.",
      "Enhanced MySQL queries for product search, reducing load time by 25%."
    ],
    githubUrl: "https://github.com/bhaktofmahakal/coffeeblend-online-coffee-store"
  },
  {
    id: 2,
    title: "Homeland Real Estate Platform",
    period: "Aug 2024 – Oct 2024",
    description: "A real estate marketplace for property listings, search, and inquiries with responsive design.",
    technologies: ["React.js", "Node.js", "MySQL", "PHP", "Laravel", "AWS EC2"],
    responsibilities: [
      "Developed a real estate marketplace using Laravel and MySQL, enhancing property search speed by 20%.",
      "Deployed on AWS EC2, improving uptime by 15% with load balancing.",
      "Implemented RESTful APIs for inquiry management, reducing load time by 15%.",
      "Created mobile-friendly UI, increasing user engagement by 25%."
    ],
    githubUrl: "https://github.com/bhaktofmahakal/homeland--real-estate"
  },
  {
    id: 3,
    title: "Freshcery - Online Grocery Store",
    period: "November 2024 - December 2024",
    description: "An e-commerce platform for grocery products with advanced search filters and streamlined checkout.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "React.js", "AWS S3"],
    responsibilities: [
      "Engineered an e-commerce platform with PHP, React.js, and MySQL, streamlining checkout, reducing cart abandonment by 20%.",
      "Improved product search with filters, improving user navigation speed by 30%.",
      "Integrated AWS S3 for image storage, reducing page load time by 33%.",
      "Designed intuitive UI, achieving positive feedback in user testing by 90%."
    ],
    githubUrl: "https://github.com/bhaktofmahakal/Freshcery-online-grocery-store"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Here are some of the key projects I've developed, showcasing my technical skills and problem-solving abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {projects.map((project) => (
          <Card key={project.id} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex flex-wrap justify-between items-start gap-2">
                <div>
                  <CardTitle className="text-2xl text-primary">{project.title}</CardTitle>
                  <div className="flex items-center text-gray-400 text-sm mt-1">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.period}</span>
                  </div>
                </div>
                {project.githubUrl && (
                  <Button variant="outline" size="sm" className="flex items-center gap-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                )}
              </div>
            </CardHeader>
            
            <CardContent className="pt-2">
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-400 mb-2">Key Responsibilities:</h4>
                <ul className="space-y-2 text-gray-300">
                  {project.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="h-2 w-2 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            
            {project.demoUrl && (
              <CardFooter className="pt-0">
                <Button size="sm" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    View Live Demo
                  </a>
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </section>
  )
}