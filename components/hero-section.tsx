import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Hi, I'm <span className="text-primary">John Doe</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal sm:text-2xl sm:leading-normal">
          A passionate software engineer specializing in building exceptional digital experiences.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}

