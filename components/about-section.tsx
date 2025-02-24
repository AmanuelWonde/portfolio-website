import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Coffee, Code, Download, Globe } from "lucide-react"
import { aboutContent } from "@/content/about"

const iconMap = {
  Code,
  Globe,
  BookOpen,
  Coffee,
} as const

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
                  src={aboutContent.imageSrc || "/placeholder.svg"}
                  alt="Profile picture"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <Button className="w-full" variant="outline" asChild>
                  <a href={aboutContent.cvUrl} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <div className="prose dark:prose-invert">
            <p className="text-xl leading-relaxed">{aboutContent.description}</p>
            <p className="text-muted-foreground">{aboutContent.secondaryDescription}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutContent.features.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap]
              return (
                <Card key={feature.title}>
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

