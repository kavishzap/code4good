"use client";

import { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Building2,
  Leaf,
  Fish,
  Network,
  Gauge,
  Database,
  ShieldCheck,
} from "lucide-react";

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const sdgChips = [
    { id: 9, label: "Industry, Innovation & Infrastructure", icon: Building2 },
    { id: 13, label: "Climate Action", icon: Leaf },
    { id: 14, label: "Life Below Water", icon: Fish },
  ];

  const features = [
    {
      icon: Building2,
      title: "Industry, Innovation & Infrastructure (SDG 9)",
      description:
        "E.g Use computer vision and anomaly detection to monitor bridges, roads, and utilities; predict failures; and prioritize maintenance with data-driven impact scores.",
    },
    {
      icon: Leaf,
      title: "Climate Action (SDG 13)",
      description:
        "E.g Train models for extreme-weather forecasting, energy-usage optimization, and carbon-intensity tracking to help organizations act before crises hit.",
    },
    {
      icon: Fish,
      title: "Life Below Water(SDG 14)",
      description:
        "E.g Detect illegal fishing, track algal blooms, and map coastal erosion using imagery + ML—then surface alerts to NGOs and local authorities in real time.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            About <span className="text-primary">Code4Good</span>
          </h2>

          {/* SDG Chips */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {sdgChips.map((chip) => (
              <span
                key={chip.id}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm"
              >
                <chip.icon className="h-4 w-4 text-primary" />
                <span className="font-mono text-primary">SDG {chip.id}</span>
                <span className="text-muted-foreground hidden sm:inline">
                  • {chip.label}
                </span>
              </span>
            ))}
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Code4Good challenges teams to apply{" "}
            <span className="text-foreground font-medium">AI for impact</span>:
            build robust infrastructure tools (SDG&nbsp;9), accelerate climate
            mitigation and adaptation (SDG&nbsp;13), and protect ocean
            ecosystems (SDG&nbsp;14). You’ll work with open datasets, ethical AI
            practices, and real-time evaluations—turning ideas into field-ready
            prototypes that matter.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card border border-border rounded-2xl p-6 hover:border-primary/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${index * 0.06 + 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
