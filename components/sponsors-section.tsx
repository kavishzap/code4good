"use client";

import { useEffect, useRef, useState } from "react";
import cana from "../assets/2ca.png";
import bdo from "../assets/bdo.png";
import nx from "../assets/nx.png";
import pop from "../assets/pop.png";
import alta from "../assets/alta.png";
import kl from "../assets/kl.png";
import dev from "../assets/dev.png";

import kfc from "../assets/kfc.png";
import zeko from "../assets/zeko.png";
import mug from "../assets/mug.png";
import mt from "../assets/mt.png";
import vi from "../assets/vi.png";


export function SponsorsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sponsors = [
    { name: "TechCorp", logo: cana },
    { name: "CloudBase", logo: bdo },
    { name: "DataFlow", logo: nx },
    { name: "CodeLabs", logo: pop },
    { name: "StartupX", logo: kl },
    { name: "DevTools", logo: mug },
    { name: "InnovateCo", logo: dev },
    { name: "AILabs", logo: zeko },
    { name: "CodeSpace", logo: kfc },
    { name: "WebFlow", logo: mt },
    { name: "AppForge", logo: alta},
    { name: "ByteWorks", logo: vi },
  ];

  return (
    <section id="sponsors" ref={sectionRef} className="py-24 px-4 -mt-15">
      <div className="container mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Our <span className="text-primary">Sponsors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thank you to our amazing sponsors who make this event possible
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-lg p-6 flex items-center justify-center hover:border-primary/50 transition-all duration-300 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <img
                src={
                  typeof sponsor.logo === "string"
                    ? sponsor.logo
                    : (sponsor.logo as any)?.src || "/placeholder.svg"
                }
                alt={sponsor.name}
                className="h-16 w-auto max-w-full grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
