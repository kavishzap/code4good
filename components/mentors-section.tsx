"use client"

import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Twitter } from "lucide-react"

export function MentorsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)
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

  const mentors = [
    {
      name: "Sarah Chen",
      role: "Senior AI Engineer",
      company: "OpenAI",
      bio: "Specializes in machine learning and natural language processing. 10+ years building AI systems.",
      image: "/professional-woman-developer.png",
    },
    {
      name: "Marcus Johnson",
      role: "Lead Developer",
      company: "Meta",
      bio: "Full-stack expert with focus on scalable web applications and cloud architecture.",
      image: "/professional-man-developer.png",
    },
    {
      name: "Priya Patel",
      role: "Security Architect",
      company: "Google",
      bio: "Cybersecurity specialist with expertise in blockchain and cryptography.",
      image: "/professional-woman-security-expert.png",
    },
    {
      name: "Alex Rivera",
      role: "Mobile Lead",
      company: "Apple",
      bio: "iOS and Android development expert. Built apps used by millions worldwide.",
      image: "/professional-developer-mobile.jpg",
    },
  ]

  return (
    <section id="mentors" ref={sectionRef} className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Meet Your <span className="text-primary">Mentors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from industry experts who will guide you throughout the hackathon
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className={`perspective-1000 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div
                className={`relative h-96 cursor-pointer transition-transform duration-500 transform-style-3d ${
                  flippedIndex === index ? "[transform:rotateY(180deg)]" : ""
                }`}
                onClick={() => setFlippedIndex(flippedIndex === index ? null : index)}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="bg-card border border-border rounded-lg overflow-hidden h-full hover:border-primary/50 transition-colors">
                    <div className="h-48 bg-muted overflow-hidden">
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
                      <p className="text-primary text-sm mb-1">{mentor.role}</p>
                      <p className="text-muted-foreground text-sm">{mentor.company}</p>
                      <p className="text-xs text-muted-foreground mt-4">Click to see bio</p>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)]">
                  <div className="bg-card border border-primary/50 rounded-lg p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4">{mentor.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{mentor.bio}</p>
                    </div>
                    <div className="flex gap-4 mt-6">
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
