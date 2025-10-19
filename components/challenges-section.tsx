"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Smartphone } from "lucide-react"

export function ChallengesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const challenges = [
    {
      icon: Brain,
      title: "AI Implementation",
      description:
        "Solve problems using AI models, automation, and data-driven intelligence. Focus on creativity, ethics, and real-world applicability.",
      color: "primary",
    },
    {
      icon: Smartphone,
      title: "Working Prototype (Web or Mobile)",
      description:
        "Develop a functional MVP as a web or mobile application. Your solution should be usable, responsive, and impactful.",
      color: "secondary",
    },
  ]

  return (
    <section id="challenges" ref={sectionRef} className="py-24 px-4 bg-card/30 -mt-15">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Challenge <span className="text-primary">Tracks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your track and build something impactful
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <div
              key={index}
              className={`group relative bg-card border border-border rounded-lg p-8 transition-all duration-500 cursor-pointer ${
                hoveredIndex === index ? "scale-105 border-primary/50 shadow-lg shadow-primary/20" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="relative">
                <div
                  className={`w-16 h-16 bg-${challenge.color}/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <challenge.icon className={`text-${challenge.color}`} size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{challenge.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
