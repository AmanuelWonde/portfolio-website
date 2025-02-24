import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { education } from "@/content/education"

export function EducationSection() {
  return (
    <section id="education" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Education</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        {education.map((item) => (
          <Card key={item.degree}>
            <CardHeader>
              <div className="flex items-start gap-4 sm:items-center">
                <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle className="text-base sm:text-lg">{item.degree}</CardTitle>
                  <CardDescription>{item.school}</CardDescription>
                </div>
                <CardDescription className="ml-auto shrink-0">{item.period}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.courses.map((course) => (
                      <Badge key={course} variant="secondary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

