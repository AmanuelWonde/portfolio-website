import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { experiences } from "@/content/experience"

export function ExperienceSection() {
  return (
    <section id="experience" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Experience</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {experiences.map((experience) => (
          <Card key={experience.title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{experience.title}</CardTitle>
                  <CardDescription>{experience.company}</CardDescription>
                </div>
                <CardDescription>{experience.period}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

