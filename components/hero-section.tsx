"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import Logo from "../assets/_D99439EB-D03A-4895-9BAA-7550B3A2E620_-removebg-preview.png";
import Logo1 from "../assets/_1EC14206-041D-4D95-9BED-EA5E9AE3A331_-removebg-preview.png";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Code4Good";
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carouselImages = [
    { url: "/developers-coding-at-hackathon.jpg", alt: "Developers coding" },
    { url: "/team-collaboration-at-tech-event.jpg", alt: "Team collaboration" },
    {
      url: "/hackathon-presentation-and-demo.jpg",
      alt: "Project presentation",
    },
    { url: "/networking-at-developer-conference.jpg", alt: "Networking event" },
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typingIndex < fullText.length) {
        setDisplayText(fullText.slice(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      } else if (!isDeleting && typingIndex === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typingIndex > 0) {
        setDisplayText(fullText.slice(0, typingIndex - 1));
        setTypingIndex(typingIndex - 1);
      } else if (isDeleting && typingIndex === 0) {
        setIsDeleting(false);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typingIndex, isDeleting]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById("schedule");
    if (scheduleSection) {
      scheduleSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container mx-auto -mt-10">
        <div className="flex justify-center mb-5">
          <img
            src={Logo1.src}
            alt="CodeHack Logo"
            className="h-28 w-auto"
          />
        </div>
        <div className="text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary text-sm font-mono">
              THE HIVE workplace Nouvelle Usine, November 15, 2025 
            </span>

          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-mono">
            <span className="text-primary">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            24 hours of innovation, collaboration, and code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group text-lg px-8 py-6"
            >
              Register Now
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "10 Teams", label: "Competing" },
              { value: "Rs 85K", label: "In Prizes" },
              { value: "24 Hours", label: "Of coding" },
            ].map((stat, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1 + 0.5}s`,
                  animationFillMode: "both",
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
