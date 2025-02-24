import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, BookOpen, Coffee, Code, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">About Me</h2>
      <div className="grid gap-8 md:grid-cols-[1fr,2fr]">
        <div className="max-w-sm mx-auto w-full">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-square w-full max-w-[280px] mx-auto overflow-hidden">
                <img
                  src="/placeholder.svg?height=280&width=280"
                  alt="Profile picture"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-xl leading-relaxed">
              I'm a passionate Software Engineer based in New York City with over 5 years of experience in building web
              applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through technical writing and mentoring.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Clean Code</h3>
                  <p className="text-sm text-muted-foreground">Writing maintainable code</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Web Development</h3>
                  <p className="text-sm text-muted-foreground">Full-stack expertise</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Continuous Learning</h3>
                  <p className="text-sm text-muted-foreground">Always improving</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Coffee className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Problem Solving</h3>
                  <p className="text-sm text-muted-foreground">Analytical thinking</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

