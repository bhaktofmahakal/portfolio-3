import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-8 w-full shrink-0 border-t border-gray-800 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Utsav Mishra</h3>
            <p className="text-sm text-gray-400 mb-4">
              Full Stack Web Developer creating exceptional digital experiences.
            </p>
            <div className="flex items-center space-x-4">
              <Link href="https://github.com/bhaktofmahakal" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/utsav-mishra1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="mailto:utsavmishraa005@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#certifications" className="text-gray-400 hover:text-primary transition-colors">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm text-gray-400 mb-2">Email: utsavmishraa005@gmail.com</p>
            <p className="text-sm text-gray-400">Based in Pratapgarh, Uttar Pradesh, India</p>
            <p className="text-sm text-gray-400 mt-2">Phone: +91 9721607720</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500" suppressHydrationWarning>
            © {new Date().getFullYear()} Utsav Mishra. All rights reserved.
            <span className="invisible hover:visible ml-1 cursor-default">·</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
