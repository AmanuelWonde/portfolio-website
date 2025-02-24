import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Project One</CardTitle>
            <CardDescription>A full-stack web application</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg bg-muted mb-4">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Project screenshot"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Built a modern web application with React, Node.js, and PostgreSQL.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>PostgreSQL</Badge>
              <Badge>TypeScript</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </div>
          </CardContent>
        </Card>
        {/* Add more project cards here */}
      </div>
    </section>
  )
}

