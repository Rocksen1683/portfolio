import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1 and its key features.",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=200&width=300"
    },
    {
      title: "Project 2",
      description: "An overview of Project 2 and its main objectives.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=200&width=300"
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="bg-cream dark:bg-midnight-purple hover:bg-coffee-light/10 transition-colors">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.technologies.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="mb-4 rounded-md"
                />
                <p>{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

