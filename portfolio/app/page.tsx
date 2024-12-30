import Layout from '@/components/layout'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Achievements from '@/components/achievements'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <Layout>
      <div className="bg-cream-lightest dark:bg-black text-coffee-medium dark:text-white">
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </div>
    </Layout>
  )
}

