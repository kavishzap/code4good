"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Logo from "../assets/ChatGPT_Image_Oct_19__2025__11_37_51_PM-removebg-preview.png";
import Link from "next/link";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : original || "";
    return () => {
      document.body.style.overflow = original || "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Challenges", href: "#challenges" },
    { label: "Prizes", href: "#prizes" },
    { label: "How to Participate", href: "#participate" },
    { label: "FAQ", href: "#faq" },
  ];

  const navIsSolid = isScrolled || isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        navIsSolid
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img
              src={Logo.src}
              alt="CodeHack Logo"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSd0BrwLwwFWdz6uns4hl4KWkKpEONYTPwdVyuQ--0rlXl3b7A/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-black border-t border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg text-foreground/90 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
