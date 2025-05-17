"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import dt from "@/assets/dt.jpg";
import crm from "@/assets/crm.webp";
import lms from "@/assets/lms.webp";
import analytics from "@/assets/analytics.webp";
import cdp from "@/assets/cdp.jpg";
import sis from "@/assets/sis.png";
import cert from "@/assets/cert.webp";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Learning Management System",
      tagline: "Empower Learning Seamlessly",
      description:
        "An all-in-one platform to create, deliver, and engage students with courses efficiently.",
      icon: lms,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Customer Relationship Management",
      tagline: "Connect and Communicate Effectively",
      description:
        "Optimize interactions with students, parents, and stakeholders through streamlined communication.",
      icon: crm,
      color: "from-teal-600 to-teal-400",
    },
    {
      title: "Content Delivery Platform",
      tagline: "Effortless Multi-Channel Distribution",
      description:
        "Deliver educational content smoothly across various devices and channels.",
      icon: cdp,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Student Information System",
      tagline: "Centralize Student Data Management",
      description:
        "Manage student records, attendance, and performance in a secure, unified database.",
      icon: sis,
      color: "from-purple-600 to-purple-400",
    },
    {
      title: "Training Assessment & Certifications",
      tagline: "Measure and Recognize Learning Success",
      description:
        "Assess training outcomes accurately and issue official certifications.",
      icon: cert,
      color: "from-teal-600 to-teal-400",
    },
    {
      title: "Analytics & Reporting",
      tagline: "Insight-Driven Educational Excellence",
      description:
        "Leverage data analytics to enhance student performance and institutional effectiveness.",
      icon: analytics,
      color: "from-blue-600 to-blue-400",
    },
    {
      title: "Digital Transformation",
      tagline: "Innovate Education Digitally",
      description:
        "Deliver end-to-end digital solutions enabling schools and universities to modernize.",
      icon: dt,
      color: "from-purple-600 to-purple-400",
    },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section
      id="home"
      className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-background to-background/80"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-purple-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                Transforming Education Through Technology
              </h1>
              <p className="mt-4 text-muted-foreground text-lg md:text-xl">
                TECHMATE EDUSERVE provides innovative digital solutions to
                transform educational institutions and enhance the learning
                experience.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600 text-white">
                <a href="#services">Explore Our Solutions</a>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
              setApi={(api) => {
                api?.on("select", () => {
                  setActiveIndex(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent>
                {services.map((service, index) => (
                  <CarouselItem key={index} className="basis-full">
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl border border-muted">
                    {/* The image */}
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="h-full w-full object-cover"
                    />
                
                    {/* Overlay gradient (optional) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                    {/* Text block */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/5 backdrop-blur-sm rounded-md p-4">
                      <h3 className="text-white text-xl font-bold">{service.title}</h3>
                      <p className="text-white mt-1">{service.tagline}</p>
                      <p className="text-white mt-2 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4" />
              <CarouselNext className="right-2 md:right-4" />
            </Carousel>

            <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-purple-600/30 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-teal-500/30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
