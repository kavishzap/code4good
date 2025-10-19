"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Clock } from "lucide-react"

export function ScheduleSection() {
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

  const schedule = [
    {
      day: "Morning",
      date: "March 15",
      events: [
        { time: "08:00 AM", title: "Registration & Check-in", description: "Get your badge and swag" },
        { time: "09:00 AM", title: "Opening Ceremony", description: "Kickoff and keynote speakers" },
        { time: "10:00 AM", title: "Team Formation", description: "Find your teammates" },
        { time: "10:30 AM", title: "Hacking Begins!", description: "Start building your project" },
      ],
    },
    {
      day: "Afternoon",
      date: "March 15",
      events: [
        { time: "12:00 PM", title: "Lunch Break", description: "Fuel up for the day" },
        { time: "01:00 PM", title: "Workshop: AI/ML", description: "Learn from experts" },
        { time: "03:00 PM", title: "Mentor Sessions", description: "Get guidance on your project" },
        { time: "05:00 PM", title: "Mini Games", description: "Take a break and have fun" },
      ],
    },
    {
      day: "Evening",
      date: "March 15",
      events: [
        { time: "06:00 PM", title: "Dinner", description: "Evening meal and networking" },
        { time: "08:00 PM", title: "Submissions Due", description: "Submit your project" },
        { time: "08:30 PM", title: "Judging & Demos", description: "Present to judges" },
        { time: "10:00 PM", title: "Awards Ceremony", description: "Winners announced" },
        { time: "11:00 PM", title: "Closing & Networking", description: "Celebrate and connect" },
      ],
    },
  ]

  return (
    <section id="schedule" ref={sectionRef} className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Event <span className="text-primary">Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            One day packed with coding, learning, and networking
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${dayIndex * 0.2}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="text-primary" size={24} />
                  <div>
                    <h3 className="text-2xl font-bold">{day.day}</h3>
                    <p className="text-muted-foreground">{day.date}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {day.events.map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={`p-4 rounded-lg border border-border transition-all duration-300 cursor-pointer ${
                        hoveredIndex === dayIndex * 10 + eventIndex
                          ? "bg-primary/10 border-primary/50 scale-105"
                          : "bg-background/50"
                      }`}
                      onMouseEnter={() => setHoveredIndex(dayIndex * 10 + eventIndex)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="flex items-start gap-3">
                        <Clock className="text-primary mt-1 flex-shrink-0" size={16} />
                        <div>
                          <div className="font-mono text-sm text-primary mb-1">{event.time}</div>
                          <div className="font-semibold mb-1">{event.title}</div>
                          <div className="text-sm text-muted-foreground">{event.description}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
