import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="space-y-8">
      <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
          <CardDescription>Have a question or want to work together? Send me a message!</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Your message" rows={4} />
            </div>
            <Button className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}

