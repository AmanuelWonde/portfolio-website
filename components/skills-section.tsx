import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Skills & Technologies</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Frontend Development</CardTitle>
            <CardDescription>Building responsive and interactive user interfaces</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>HTML</Badge>
            <Badge>CSS</Badge>
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>Next.js</Badge>
            <Badge>Tailwind CSS</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Backend Development</CardTitle>
            <CardDescription>Creating scalable server-side applications</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>Node.js</Badge>
            <Badge>Express</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>MongoDB</Badge>
            <Badge>REST APIs</Badge>
            <Badge>GraphQL</Badge>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

