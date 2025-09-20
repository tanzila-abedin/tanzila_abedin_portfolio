import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Tee-Store",
      description:
        "A platform for customers to buy products online, featuring a product page and a single product detail page with a seamless shopping experience.",
      image: "/modern-ecommerce-interface.png",
      technologies: ["React", "JavaScript", "CSS3", "E-commerce"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      title: "DevLaps",
      description:
        "A full-stack web application for finding the best laptops, where users can create and delete reviews for each laptop with comprehensive search functionality.",
      image: "/task-management-dashboard.png",
      technologies: ["React", "Node.js", "Full-Stack", "Reviews System"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Movie Mania",
      description:
        "A web application to search for popular movies, which fetches data from the IMDB API providing detailed movie information and ratings.",
      image: "/preview/project4.png",
      technologies: ["React", "IMDB API", "JavaScript", "CSS3"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Super Runner",
      description:
        "A platform game where users can submit their score and view it on a scoreboard, featuring engaging gameplay and competitive elements.",
      image: "/modern-portfolio-website.png",
      technologies: ["JavaScript", "Game Development", "HTML5", "CSS3"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Book Store",
      description:
        "A web application for adding and removing books by category, providing an organized way to manage book collections with categorization features.",
      image: "/placeholder.jpg",
      technologies: ["React", "JavaScript", "CRUD Operations", "CSS3"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Bye Stress",
      description:
        "A web application for following and unfollowing users, creating short advice, and liking and commenting on advice with social networking features.",
      image: "/placeholder.svg",
      technologies: ["React", "Social Features", "JavaScript", "CSS3"],
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills and experience in frontend development and
            modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-card-foreground">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild size="sm" className="bg-accent hover:bg-accent/90">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
