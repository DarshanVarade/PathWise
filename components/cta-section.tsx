"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-foreground p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10"
              animate={{
                x: [0, 30, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5"
              animate={{
                x: [0, -40, 0],
                y: [0, 40, 0],
              }}
              transition={{
                duration: 18,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
              <p className="text-white/80 text-lg mb-6">
                Join thousands of students who are discovering their potential and achieving their dreams with
                PathWise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/dashboard">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white/30 hover:bg-white/10"
                  asChild
                >
                  <Link href="/roadmap">Explore Features</Link>
                </Button>
              </div>
            </div>

            <div className="w-full max-w-xs">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-white font-medium mb-4">Join for Free</h3>
                <div className="space-y-3">
                  <div className="h-10 bg-white/10 rounded-md"></div>
                  <div className="h-10 bg-white/10 rounded-md"></div>
                  <Button className="w-full bg-white text-primary hover:bg-white/90">Sign Up</Button>
                </div>
                <p className="text-white/60 text-xs mt-4 text-center">No credit card required</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

