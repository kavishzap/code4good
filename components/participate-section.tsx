"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { FileText, CheckCircle2, Users2, Calendar } from "lucide-react"

export function ParticipateSection() {
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

  return (
    <section id="participate" ref={sectionRef} className="py-24 px-4 -mt-15">
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            How to <span className="text-primary">Participate</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Three simple steps: submit your proposal → get selected → attend the workshops (Nov 8–9) → build & demo on hackathon day!
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {/* 1) Registration + Proposal */}
          <AccordionItem
            value="registration-proposal"
            className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="text-primary" size={20} />
                </div>
                <span className="text-xl font-semibold">Registration & Proposal</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Register and upload a short proposal outlining your idea. Keep it focused on impact and feasibility.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Click <strong>Register Now</strong> and complete the form (team of 3–4).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>
                      Upload a <strong>1–2 page proposal</strong> (problem, solution, tech stack, expected outcome,
                      SDG alignment if applicable).
                    </span>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 2) Selection of Top 10 */}
          <AccordionItem
            value="selection"
            className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users2 className="text-primary" size={20} />
                </div>
                <span className="text-xl font-semibold">Selection — Top 10 Teams</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Proposals will be reviewed for clarity, feasibility, innovation, and potential impact. The <strong>Top 10
                  teams</strong> selected will be notified by email or by Admin Contact.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Evaluation factors: problem fit, solution design, technical plan, and expected outcomes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Shortlist announcement: <strong>The Top 10</strong> teams will also be announced on Uom Oracle Club Social Media.</span>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* 3) Workshops on Nov 8–9 */}
          <AccordionItem
            value="workshops"
            className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
          >
            <AccordionTrigger className="hover:no-underline">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="text-primary" size={20} />
                </div>
                <span className="text-xl font-semibold">Workshops — November 8th–9th</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pt-4 pb-2">
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Two focused workshops will be held for shortlisted teams to sharpen ideas and prepare them for the main event.
                </p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span><strong>Nov 8th:</strong> Python Workshop 1 (title to be announced)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span><strong>Nov 9th:</strong> Python Workshop 2 (title to be announced)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span>Attendance is required for all team members.</span>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
