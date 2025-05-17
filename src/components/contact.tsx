import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
            Have questions about our services? Reach out to us and our team will get back to you shortly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 via-teal-500/20 to-blue-600/20 p-1 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 via-teal-500/80 to-blue-600/80 opacity-20 blur-3xl"></div>
                <div className="h-full w-full rounded-xl bg-background/95 p-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-purple-100 p-2">
                        <Mail className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-start">Email</h3>
                        <p className="text-muted-foreground">info@techmateeduserve.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-teal-100 p-2">
                        <Phone className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-start">Phone</h3>
                        <p className="text-muted-foreground">+91 9437386374</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="rounded-full bg-blue-100 p-2">
                        <MapPin className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-start">Address</h3>
                        <p className="text-muted-foreground">Technology Corridor, Infocity, Chandrasekharpur, Bhubaneswar, Odisha 751024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-purple-600/30 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-teal-500/30 blur-2xl"></div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
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
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
              </div>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
