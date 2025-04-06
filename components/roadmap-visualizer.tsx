"use client"
import { motion } from "framer-motion"

export function RoadmapVisualizer() {
  return (
    <div className="relative py-4">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>

      {[
        { title: "Fundamentals", duration: "3 months", current: true },
        { title: "Core Programming", duration: "4 months", current: false },
        { title: "Web Development", duration: "6 months", current: false },
        { title: "Advanced Topics", duration: "5 months", current: false },
        { title: "Projects & Portfolio", duration: "Ongoing", current: false },
      ].map((milestone, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="relative pl-10 pb-8 last:pb-0"
        >
          <div
            className={`absolute left-4 top-0 w-4 h-4 rounded-full -translate-x-1/2 ${
              milestone.current ? "bg-primary border-4 border-primary/20" : "bg-muted border border-muted-foreground/30"
            }`}
          ></div>

          <div className={`rounded-lg p-4 ${milestone.current ? "bg-primary/10 border border-primary/20" : "bg-card"}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium">{milestone.title}</h3>
              <span className="text-xs bg-muted px-2 py-1 rounded-full">{milestone.duration}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {milestone.current
                ? "You are here. Focus on learning programming basics and computer science fundamentals."
                : "Future milestone in your learning journey."}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

