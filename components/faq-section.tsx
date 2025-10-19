"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const faqs = [
    {
      question: "Who can participate in Code4Good 2025?",
      answer:
        "Open to all undergraduate students. You’ll need a valid student ID to register and check in.",
    },
    {
      question: "What is the team size?",
      answer:
        "Teams must consist of 3–4 members. If you don’t have a team yet, you can still register and we’ll help you match up.",
    },
    {
      question: "What should I bring to the hackathon?",
      answer:
        "Bring your laptop, charger, and any hardware you might need for your project. We recommend bringing a sleeping bag if you plan to stay overnight.",
    },
    {
      question: "Will there be food and drinks?",
      answer:
        "Yes! We provide meals, snacks, and beverages throughout the 24-hour event. We accommodate dietary restrictions—just let us know during registration.",
    },
    {
      question: "Can I start working on my project before the hackathon?",
      answer:
        "No. All code must be written during the 24-hour event period. You may come with ideas and do research beforehand.",
    },
    {
      question: "What if I have no experience?",
      answer:
        "That’s perfectly fine! We have workshops, mentors, and resources to help beginners. Hackathons are great learning experiences.",
    },
    {
      question: "How are projects judged?",
      answer:
        "Projects are judged on innovation, technical complexity, design, and presentation. Each challenge track has specific criteria that will be shared at the event.",
    },
  ]

  return (
    <section id="faq" ref={sectionRef} className="py-24 px-4 bg-card/30  -mt-15">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">Got questions? We've got answers!</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={`bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-all duration-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="hover:no-underline text-left">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
