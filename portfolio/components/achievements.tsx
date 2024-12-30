import { Badge } from "@/components/ui/badge"

export default function Achievements() {
  const achievements = [
    "Awarded 'Employee of the Year' in 2022",
    "Published 3 research papers in leading tech journals",
    "Spoke at 5 international tech conferences",
    "Contributed to open-source projects with over 1000 stars on GitHub"
  ]

  return (
    <section id="achievements" className="py-16 md:py-24 bg-muted dark:bg-dark-bg">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Achievements</h2>
        <ul className="space-y-4">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center">
              <Badge variant="secondary" className="mr-2 bg-coffee-light text-cream-lightest dark:bg-midnight-purple dark:text-dark-text">
                {index + 1}
              </Badge>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

