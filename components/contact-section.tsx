"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import mojh from "../assets/mojh.png";
import {
  Mail,
  MessageSquare,
  Send,
  Github,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { PdfViewer } from "./pdf-viewer";
export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState<string>("/docs/privacy-policy.pdf");
  const [pdfTitle, setPdfTitle] = useState<string>("Privacy Policy");

  const openPdf = (src: string, title: string) => {
    setPdfSrc(src);
    setPdfTitle(title);
    setPdfOpen(true);
  };
  return (
    <section id="contact" ref={sectionRef} className="px-4 mt-10">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions? Want to sponsor? We'd love to hear from you!
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className={`w-full max-w-lg transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-2">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:hello@codehack2025.com"
                    className="text-primary hover:underline"
                  >
                    Code4Good@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto mt-24 pt-8 border-t border-border text-center">
        {/* Top Row */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Code4Good. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm mt-2">
            <button
              type="button"
              onClick={() =>
                openPdf("/docs/privacy-policy.pdf", "Privacy Policy")
              }
              className="text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy | Code of Conduct
            </button>
          </div>
        </div>

        {/* Powered By Section */}
        <div className="flex flex-col items-center justify-center mt-8 gap-3">
          <p className="text-muted-foreground text-sm">Website powered by:</p>
          <img
            src={mojh.src} // make sure mojh is imported above
            alt="Powered By"
            className="h-30 w-auto object-contain"
          />
        </div>
      </div>
      <PdfViewer open={pdfOpen} onOpenChange={setPdfOpen} src={pdfSrc} title={pdfTitle} />
    </section>

  );
}
