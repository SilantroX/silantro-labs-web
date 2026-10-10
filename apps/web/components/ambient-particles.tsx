"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
  alpha: number
  pulseSpeed: number
  side: "left" | "right"
}

export function AmbientParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let particles: Particle[] = []

    // Helper to initialize particles on both flanks of the screen
    const initParticles = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.scale(dpr, dpr)

      // Margin width on desktop: outside the central content container
      // Central content is max-w-6xl (1152px), so side margins are (width - 1152) / 2
      // If width > 1200px, flank is at least 150px.
      // On smaller screens, flank is 12% - 15% of width.
      // More generous flank width so particles feel part of the environment
      const totalCount = width < 768 ? 24 : 45
      particles = []

      for (let i = 0; i < totalCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.7,
          vy: - (Math.random() * 0.65 + 0.35),
          radius: Math.random() * 2.2 + 1.2,
          baseAlpha: Math.random() * 0.3 + 0.45,
          alpha: Math.random() * 0.3 + 0.45,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          side: "left",
        })
      }
    }

    initParticles()

    let lastTime = performance.now()
    let isRunning = true

    const render = (time: number) => {
      if (!isRunning) return

      const delta = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      ctx.clearRect(0, 0, width, height)

      // Draw connective micro-lines between neighboring particles
      const maxDistance = 90
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        if (!p1) continue

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          if (!p2) continue

          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const lineAlpha = (1 - dist / maxDistance) * 0.28
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(0, 0, 0, ${lineAlpha})`
            ctx.lineWidth = 0.85
            ctx.stroke()
          }
        }
      }

      // Update and draw particles across screen
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        if (!p) continue

        // Smooth position progression with a gentle sine sway
        p.x += (p.vx + Math.sin(time * 0.0015 + i) * 0.2) * (delta * 60)
        p.y += p.vy * (delta * 60)

        // Alpha breathing pulse
        p.alpha = p.baseAlpha + Math.sin(time * p.pulseSpeed) * 0.12

        // Horizontal wrap
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20

        // Vertical wrap (continuous rising flow)
        if (p.y < -20) {
          p.y = height + 20
          p.x = Math.random() * width
        }
        if (p.y > height + 20) p.y = -20

        const currentAlpha = Math.max(0.35, Math.min(0.85, p.alpha))

        // Draw faint outer aura for depth
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${currentAlpha * 0.18})`
        ctx.fill()

        // Draw solid particle core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 0, 0, ${currentAlpha})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    // Pause rendering when tab is hidden to save 100% battery/CPU
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isRunning = false
        cancelAnimationFrame(animationFrameId)
      } else {
        isRunning = true
        lastTime = performance.now()
        animationFrameId = requestAnimationFrame(render)
      }
    }

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(() => {
        initParticles()
      }, 150)
    }

    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 select-none opacity-100"
    />
  )
}
