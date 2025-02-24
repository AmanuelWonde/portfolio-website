export interface NavItem {
  title: string
  href: string
}

export interface HeroContent {
  name: string
  title: string
  description: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

export interface AboutContent {
  imageSrc: string
  description: string
  secondaryDescription: string
  cvUrl: string
  features: {
    icon: string
    title: string
    description: string
  }[]
}

export interface Project {
  title: string
  description: string
  imageSrc: string
  longDescription: string
  tags: string[]
  githubUrl: string
  demoUrl: string
}

export interface SkillCategory {
  title: string
  description: string
  skills: string[]
}

export interface Experience {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

export interface Education {
  degree: string
  school: string
  period: string
  courses: string[]
  description: string
}

export interface SiteConfig {
  title: string
  description: string
}

