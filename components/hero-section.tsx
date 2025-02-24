import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { heroContent } from "@/content/hero"

export function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Hi, I'm <span className="text-primary">{heroContent.name}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal sm:text-2xl sm:leading-normal">
          {heroContent.description}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild>
            <a href={`mailto:${heroContent.email}`}>
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={heroContent.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={heroContent.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

