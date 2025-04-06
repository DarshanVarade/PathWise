"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  ChevronRight,
  Clock,
  Compass,
  LineChart,
  MessageCircle,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  const [progress, setProgress] = useState(68)

  return (
    <div className="p-6 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your learning progress.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            April 2025
          </Button>
          <Button>
            <LineChart className="mr-2 h-4 w-4" />
            View Reports
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{progress}%</div>
              <Progress value={progress} className="h-2 mt-2" />
              <p className="text-xs text-muted-foreground mt-2">+12% from last week</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Learning Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14 Days</div>
              <p className="text-xs text-muted-foreground mt-2">Keep it up! You're building great habits.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 Badges</div>
              <p className="text-xs text-muted-foreground mt-2">3 new badges this week</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="roadmap" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="achievements">Badges</TabsTrigger>
        </TabsList>
        <TabsContent value="roadmap" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle>Your Career Path</CardTitle>
                  <CardDescription>Software Engineering</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Compass className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Current Milestone</h4>
                        <p className="text-sm text-muted-foreground">Learning Data Structures</p>
                      </div>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Started: Mar 24, 2025</span>
                      <span>Est. completion: May 15, 2025</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/roadmap">
                      View Full Roadmap
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Milestones</CardTitle>
                  <CardDescription>Your next learning objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mt-1">
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Advanced Algorithms</h4>
                        <p className="text-sm text-muted-foreground mb-2">Learn sorting and searching algorithms</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Est. 3 weeks</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mt-1">
                        <span className="text-sm font-medium">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Database Fundamentals</h4>
                        <p className="text-sm text-muted-foreground mb-2">SQL and database design principles</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>Est. 4 weeks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View All Milestones
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Data Structures Tutorial {i}</CardTitle>
                    <CardDescription>Recommended for your current milestone</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-muted rounded-md mb-4"></div>
                    <div className="flex items-center text-xs text-muted-foreground mb-2">
                      <BookOpen className="h-3 w-3 mr-1" />
                      <span>25 min read</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      Start Learning
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Today's Learning Tasks</CardTitle>
              <CardDescription>Complete these tasks to stay on track</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { title: "Complete Binary Trees Quiz", icon: BookOpen, completed: true },
                  { title: "Watch Linked Lists Tutorial", icon: BookOpen, completed: false },
                  { title: "Practice Coding Challenge", icon: Compass, completed: false },
                  { title: "Review Yesterday's Notes", icon: BookOpen, completed: false },
                ].map((task, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-md hover:bg-muted/50 transition-colors"
                  >
                    <div
                      className={`h-6 w-6 rounded-full border flex items-center justify-center ${task.completed ? "bg-primary border-primary" : "border-muted-foreground"}`}
                    >
                      {task.completed && <div className="h-3 w-3 rounded-full bg-white"></div>}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                        {task.title}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <task.icon className="h-4 w-4" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="mt-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Fast Learner", icon: Trophy, unlocked: true },
              { name: "Consistent", icon: Calendar, unlocked: true },
              { name: "Problem Solver", icon: Compass, unlocked: true },
              { name: "Team Player", icon: MessageCircle, unlocked: false },
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className={`text-center ${!badge.unlocked ? "opacity-50" : ""}`}>
                  <CardHeader className="pb-2">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <badge.icon className={`h-8 w-8 ${badge.unlocked ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-medium">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground">{badge.unlocked ? "Unlocked" : "Locked"}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

