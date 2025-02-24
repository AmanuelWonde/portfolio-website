import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Senior Software Engineer</CardTitle>
                <CardDescription>Tech Company Inc.</CardDescription>
              </div>
              <CardDescription>2021 - Present</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Led development of key features for the company's main product</li>
              <li>Mentored junior developers and conducted code reviews</li>
              <li>Implemented best practices and improved development workflows</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Software Engineer</CardTitle>
                <CardDescription>Startup XYZ</CardDescription>
              </div>
              <CardDescription>2019 - 2021</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              <li>Developed and maintained multiple client-facing applications</li>
              <li>Collaborated with cross-functional teams to deliver projects</li>
              <li>Improved application performance and user experience</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

