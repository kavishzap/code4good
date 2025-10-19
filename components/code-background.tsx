"use client"

import { useEffect, useRef } from "react"

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Code snippets to display
    const codeSnippets = [
      "const hack = () => {}",
      "function build()",
      "import React",
      "export default",
      "<Component />",
      "npm install",
      "git commit",
      "async await",
      "return true",
      "{ code }",
    ]

    // Particle class
    class CodeParticle {
      x: number
      y: number
      text: string
      speed: number
      opacity: number
      fontSize: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)]
        this.speed = 0.2 + Math.random() * 0.5
        this.opacity = 0.1 + Math.random() * 0.2
        this.fontSize = 12 + Math.random() * 8
      }

      update() {
        this.y -= this.speed
        if (this.y < -50) {
          this.y = canvas.height + 50
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        if (!ctx) return
        ctx.font = `${this.fontSize}px 'Geist Mono', monospace`
        ctx.fillStyle = `rgba(0, 255, 255, ${this.opacity})`
        ctx.fillText(this.text, this.x, this.y)
      }
    }

    // Create particles
    const particles: CodeParticle[] = []
    for (let i = 0; i < 30; i++) {
      particles.push(new CodeParticle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-30" style={{ zIndex: 1 }} />
}
