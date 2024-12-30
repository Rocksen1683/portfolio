import Link from 'next/link'
import { Github, Linkedin, Mail, FileText } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t bg-background dark:bg-dark-bg dark:text-dark-text">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="mailto:your.email@example.com" className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>Email</span>
          </Link>
          <Link href="https://linkedin.com/in/yourprofile" className="flex items-center space-x-2">
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </Link>
          <Link href="https://github.com/yourusername" className="flex items-center space-x-2">
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </Link>
          <Link href="https://twitter.com/yourusername" className="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>X</span>
          </Link>
          <Link href="/path-to-your-resume.pdf" className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Resume</span>
          </Link>
        </div>
        <p className="text-center text-sm leading-loose md:text-left dark:text-dark-text/70">
          © 2023 Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

