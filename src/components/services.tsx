"use client"

import { BookOpen, Users, FileText, Database, Award, BarChart, Building } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalSlides = 7

  const services = [
    {
      icon: <BookOpen className="h-10 w-10 text-purple-600" />,
      title: "Learning Management System",
      description: "Comprehensive platform for course creation, delivery, and student engagement.",
    },
    {
      icon: <Users className="h-10 w-10 text-teal-500" />,
      title: "Customer Relationship Management",
      description: "Streamline communication with students, parents, and stakeholders.",
    },
    {
      icon: <FileText className="h-10 w-10 text-blue-600" />,
      title: "Content Delivery Platform",
      description: "Distribute educational content efficiently across multiple channels and devices.",
    },
    {
      icon: <Database className="h-10 w-10 text-purple-600" />,
      title: "Student Information System",
      description: "Centralized database for managing student records, attendance, and performance.",
    },
    {
      icon: <Award className="h-10 w-10 text-teal-500" />,
      title: "Training Assessment & Certifications",
      description: "Evaluate learning outcomes and provide recognized certifications.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to improve educational outcomes and institutional performance.",
    },
    {
      icon: <Building className="h-10 w-10 text-purple-600" />,
      title: "Digital Transformation",
      description: "Comprehensive solutions for schools and universities to embrace digital innovation.",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
            Comprehensive EdTech solutions designed to transform educational institutions and enhance learning
            experiences.
          </p>
        </div>

        <div className="relative px-4 md:px-12 lg:px-16 xl:px-20 mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSlideChange={setActiveIndex}
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none shadow-lg bg-gradient-to-br from-background to-muted hover:shadow-xl transition-shadow duration-300 h-full">
                    <CardHeader>
                      <div className="mb-2">{service.icon}</div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4 lg:-left-8" />
            <CarouselNext className="right-0 md:-right-4 lg:-right-8" />
          </Carousel>

          {/* <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "w-2 h-2 p-0 rounded-full",
                  activeIndex === index ? "bg-purple-600" : "bg-muted-foreground/30",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
