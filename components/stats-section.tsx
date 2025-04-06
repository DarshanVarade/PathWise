"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface StatProps {
  value: number
  label: string
  suffix?: string
  duration?: number
}

function Stat({ value, label, suffix = "", duration = 2000 }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const increment = end / (duration / 16) // 60fps

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat value={10000} label="Active Learners" suffix="+" />
          <Stat value={500} label="Career Paths" suffix="+" />
          <Stat value={98} label="Satisfaction Rate" suffix="%" />
          <Stat value={24} label="Support Availability" suffix="/7" />
        </div>
      </div>
    </section>
  )
}

