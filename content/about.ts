import type { AboutContent } from "@/types/content"

export const aboutContent: AboutContent = {
  imageSrc: "/placeholder.svg?height=280&width=280",
  description:
    "I'm a passionate Software Engineer based in New York City with over 5 years of experience in building web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
  secondaryDescription:
    "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.",
  cvUrl: "/cv.pdf",
  features: [
    {
      icon: "Code",
      title: "Clean Code",
      description: "Writing maintainable code",
    },
    {
      icon: "Globe",
      title: "Web Development",
      description: "Full-stack expertise",
    },
    {
      icon: "BookOpen",
      title: "Continuous Learning",
      description: "Always improving",
    },
    {
      icon: "Coffee",
      title: "Problem Solving",
      description: "Analytical thinking",
    },
  ],
}

