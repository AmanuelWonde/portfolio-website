import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function EducationSection() {
  return (
    <section id="education" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Education</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-start gap-4 sm:items-center">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-base sm:text-lg">Master of Science in Computer Science</CardTitle>
                <CardDescription>Stanford University</CardDescription>
              </div>
              <CardDescription className="ml-auto shrink-0">2017 - 2019</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Advanced Algorithms</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Distributed Systems</Badge>
                  <Badge variant="secondary">Cloud Computing</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Specialized in Artificial Intelligence and Software Engineering. Graduated with honors and completed a
                thesis on distributed systems.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start gap-4 sm:items-center">
              <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <div className="space-y-1">
                <CardTitle className="text-base sm:text-lg">Bachelor of Engineering in Computer Science</CardTitle>
                <CardDescription>MIT</CardDescription>
              </div>
              <CardDescription className="ml-auto shrink-0">2013 - 2017</CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Data Structures</Badge>
                  <Badge variant="secondary">Operating Systems</Badge>
                  <Badge variant="secondary">Computer Networks</Badge>
                  <Badge variant="secondary">Software Engineering</Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Graduated summa cum laude. Active member of the Computer Science Club and participated in multiple
                hackathons.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

