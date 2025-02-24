import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { ThemeToggle } from "@/components/theme-toggle"
import { MobileNav } from "@/components/mobile-nav"
import { navItems } from "@/content/nav"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50">
        <div className="container flex items-center justify-between h-16">
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium hover:underline underline-offset-4">
                {item.title}
              </a>
            ))}
          </nav>
          <MobileNav className="md:hidden" />
          <ThemeToggle />
        </div>
      </header>
      <main className="container py-20 space-y-32">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}

