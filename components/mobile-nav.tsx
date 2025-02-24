"use client"

import type React from "react"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function MobileNav({ className }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  const handleNavClick = () => {
    setOpen(false)
  }

  return (
    <div className={cn("flex", className)}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="flex flex-col gap-4">
            <a href="#home" className="text-sm font-medium hover:underline underline-offset-4" onClick={handleNavClick}>
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={handleNavClick}
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={handleNavClick}
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={handleNavClick}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={handleNavClick}
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={handleNavClick}
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4"
              onClick={handleNavClick}
            >
              Contact
            </a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}

