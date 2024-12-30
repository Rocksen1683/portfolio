import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Your Name"
            width={300}
            height={300}
            className="rounded-full"
          />
          <div>
            <p className="text-lg text-coffee dark:text-dark-text mb-4">
              Hello! I'm [Your Name], a [Your Profession] passionate about [Your Interests]. 
              With [X] years of experience in [Your Field], I specialize in [Your Specialties].
            </p>
            <p className="text-lg text-coffee dark:text-dark-text">
              [Add a brief personal statement or career objective here.]
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

