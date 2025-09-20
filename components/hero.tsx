"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/WhatsApp Image 2025-09-20 at 14.06.18.jpeg"
              alt="Tanzila Abedin"
              fill
              className="rounded-full object-cover border-4 border-accent/20"
              style={{ objectPosition: "30% 30%" }}
            />
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
            Tanzila Abedin
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">Frontend Developer</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span className="text-lg text-muted-foreground">South Africa</span>
          </div>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Creating beautiful, responsive, and user-friendly web experiences with modern technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={scrollToProjects}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg"
          >
            View My Work
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="px-8 py-3 text-lg bg-transparent"
          >
            <a 
              href="https://drive.google.com/drive/folders/1mBtIa0icQHT1yI-_CiCt3U_6GkOzkky4?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/tanzila-abedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/tanzila-abedin/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-accent transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="mailto:tanzilaabedin01@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
