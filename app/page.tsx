import About from "@/components/about"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import Features from "@/components/features"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects-component"
import Skills from "@/components/skills"

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans antialiased overflow-x-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Features />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
