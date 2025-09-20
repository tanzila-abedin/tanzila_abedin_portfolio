import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Front-End Developer",
      company: "The Project Media & Advertising",
      location: "Middle East",
      period: "Sept 2023 - Present",
      description:
        "Manages the Audi and Volkswagen CMS (Adobe Experience Manager) for the Middle East market, ensuring content is current and follows brand guidelines.",
      achievements: [
        "Designs and develops in-house applications, like file storage systems, to improve efficiency",
        "Creates custom features for the Audi website using React and Tailwind, such as the Audi Match system and the Audi Mood Color Changer",
        "Designs responsive EDM templates for Volkswagen compatible with various email clients and devices",
        "Utilizes Jira and Trello for task tracking and project management",
        "Maintains documentation on Confluence and collaborates using Git for version control",
      ],
    },
    {
      title: "Front-End Developer",
      company: "WAMLY",
      location: "Remote",
      period: "May 2023 - August 2024",
      description:
        "Developed responsive React components from designs and managed React state and data using Hooks and Redux.",
      achievements: [
        "Collaborated with backend developers and UI/UX designers",
        "Implemented mobile responsiveness for web applications",
        "Refactored code for improved readability and maintainability",
        "Followed Agile methodologies and participated in daily stand-up meetings",
        "Used Jira for project management and task tracking",
        "Maintained documentation and used Git for version control",
        "Monitored and contributed to the build process on AWS for smooth deployment",
      ],
    },
    {
      title: "Junior Front-End Developer/Designer",
      company: "ReveNew MARKETING",
      location: "Remote",
      period: "Jan 2022 - Apr 2023",
      description:
        "Worked on websites from start to finish, using Figma for planning and ensuring websites were user-friendly using HTML, CSS, and JavaScript.",
      achievements: [
        "Refined websites from initial versions to the final product",
        "Improved online stores on Shopify by adding features to enhance usability",
        "Managed the look and function of WordPress sites for clients, ensuring they worked on different devices and browsers",
      ],
    },
    {
      title: "Technical Javascript Reviewer",
      company: "MICROVERSE",
      location: "Remote",
      period: "Mar 2021 - Dec 2021",
      description:
        "Guided researchers and developers in reviewing JavaScript code, providing feedback and assistance.",
      achievements: [
        "Offered consultations to improve and maintain the quality of JavaScript programs",
        "Enhanced JavaScript code runtime performance through optimizations",
      ],
    },
    {
      title: "Public Relations Officer",
      company: "HELLO GROUP",
      location: "Remote",
      period: "Feb 2018 - Dec 2018",
      description:
        "Managed client projects, prepared budget reports, and created call center scripts for new campaigns.",
      achievements: [
        "Analyzed industry trends and optimized ad platform strategies",
        "Developed risk management reports for campaigns",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Work Experience</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            My professional journey in frontend development and the impact I've made at various organizations.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <CardTitle className="text-xl font-bold text-card-foreground">{experience.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-1" />
                    {experience.period}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-accent font-medium">
                  <span>{experience.company}</span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-pretty">{experience.description}</p>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-pretty">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
