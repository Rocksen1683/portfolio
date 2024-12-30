export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Tech Corp",
      period: "2020 - Present",
      description: "Developed and maintained web applications using React and Node.js."
    },
    {
      title: "Junior Developer",
      company: "Startup Inc",
      period: "2018 - 2020",
      description: "Assisted in the development of mobile applications using React Native."
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-24 bg-muted dark:bg-dark-bg">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-cream dark:bg-midnight-purple p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-muted-foreground dark:text-dark-text/70">{exp.company} | {exp.period}</p>
              <p className="mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

