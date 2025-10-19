"use client"

import { useEffect, useRef, useState } from "react"
import { Trophy, Award, Medal, Gift } from "lucide-react"

export function PrizesSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const prizes = [
    {
      icon: Trophy,
      place: "1st Place",
      amount: "Rs 40,000",
      description: "Grand prize winner",
      color: "text-yellow-400",
    },
    {
      icon: Award,
      place: "2nd Place",
      amount: "Rs 25,000",
      description: "Runner-up prize",
      color: "text-gray-300",
    },
    {
      icon: Medal,
      place: "3rd Place",
      amount: "Rs 30,000",
      description: "Third place prize",
      color: "text-orange-400",
    },
    {
      icon: Gift,
      place: "Track Winners",
      amount: "Shield Worth Rs 5,000",
      description: "Best project",
      color: "text-primary",
    },
  ]

  return (
    <section id="prizes" ref={sectionRef} className="py-24 px-4 -mt-15">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Prizes & <span className="text-primary">Rewards</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Over $50,000 in prizes and rewards for the best projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <prize.icon className={prize.color} size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{prize.place}</h3>
              <div className="text-4xl font-bold text-primary mb-4 font-mono">{prize.amount}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
