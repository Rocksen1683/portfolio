import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 dark:text-dark-text">Name</label>
            <Input id="name" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 dark:text-dark-text">Email</label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 dark:text-dark-text">Message</label>
            <Textarea id="message" placeholder="Your message here..." className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  )
}

