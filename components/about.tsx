import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Smartphone, Zap } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-accent" />,
      title: "Full-Stack Development",
      description: "Expert in React, Ruby on Rails, JavaScript, TypeScript, and modern web frameworks",
    },
    {
      icon: <Palette className="h-8 w-8 text-accent" />,
      title: "CMS & Design",
      description: "Experience with Adobe Experience Manager, WordPress, and design tools like Figma",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-accent" />,
      title: "Responsive Development",
      description: "Building mobile-first applications with Tailwind, Bootstrap, and responsive design principles",
    },
    {
      icon: <Zap className="h-8 w-8 text-accent" />,
      title: "DevOps & Tools",
      description: "Proficient with AWS, Git, JIRA, databases (PostgreSQL, MySQL), and deployment platforms",
    },
  ]

  const technologies = [
    // Languages
    "HTML5",
    "CSS3",
    "JavaScript (ES6)",
    "TypeScript",
    "SQL",
    "Ruby",
    
    // Frameworks & Libraries
    "React",
    "Redux",
    "Ruby on Rails",
    "GraphQL",
    "Bootstrap",
    "SASS",
    "Material UI",
    "Tailwind CSS",
    
    // Databases
    "PostgreSQL",
    "MySQL",
    "SQLite3",
    
    // Tools & Technologies
    "Git",
    "GitHub",
    "BitBucket",
    "AWS",
    "Visual Studio",
    "Figma",
    "JIRA",
    "Heroku",
    "Netlify",
    "Adobe Experience Manager",
    "WordPress",
    "RESTful API",
    "Chrome Dev Tools",
    "Linux CLI",
    
    // Professional Skills
    "Responsive Development",
    "TDD",
    "Pair Programming",
    "Google Analytics",
    "Google Ads",
    "Slack",
    "Microsoft Office",
    "Canva",
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm Tanzila Abedin, a passionate frontend developer based in Johannesburg, South Africa. With expertise in
            modern web technologies, I love creating innovative digital solutions that make a difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{skill.icon}</div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
