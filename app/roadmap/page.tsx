"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Brain, Check, ChevronRight, Compass, Lightbulb, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RoadmapVisualizer } from "@/components/roadmap-visualizer"

export default function RoadmapPage() {
  const [careerInput, setCareerInput] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isGenerated, setIsGenerated] = useState(false)

  const handleGenerateRoadmap = () => {
    if (!careerInput) return

    setIsGenerating(true)

    // Simulate AI generation
    setTimeout(() => {
      setIsGenerating(false)
      setIsGenerated(true)
    }, 2000)
  }

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AI Career Roadmap</h1>
        <p className="text-muted-foreground">
          Generate a personalized career roadmap based on your interests and goals.
        </p>
      </div>

      <Tabs defaultValue="generate" className="w-full">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="generate">Generate</TabsTrigger>
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-primary" />
                    AI Roadmap Generator
                  </CardTitle>
                  <CardDescription>
                    Tell us your career goals, and our AI will create a personalized learning roadmap for you.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="career">What career are you interested in?</Label>
                      <Input
                        id="career"
                        placeholder="e.g., Software Engineer, Data Scientist, UX Designer"
                        value={careerInput}
                        onChange={(e) => setCareerInput(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="education">Current education level</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="justify-start">
                          High School
                        </Button>
                        <Button variant="outline" className="justify-start">
                          College
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Bachelor's
                        </Button>
                        <Button variant="outline" className="justify-start">
                          Master's+
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label>Time commitment</Label>
                      <div className="grid grid-cols-3 gap-2">
                        <Button variant="outline" className="justify-start">
                          <span>5-10 hrs/week</span>
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <span>10-20 hrs/week</span>
                        </Button>
                        <Button variant="outline" className="justify-start">
                          <span>20+ hrs/week</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" onClick={handleGenerateRoadmap} disabled={!careerInput || isGenerating}>
                    {isGenerating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Roadmap...
                      </>
                    ) : (
                      <>
                        Generate Roadmap
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isGenerated ? 1 : 0, y: isGenerated ? 0 : 20 }}
              transition={{ duration: 0.4 }}
            >
              {isGenerated && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Compass className="h-5 w-5 text-primary" />
                      Your Software Engineering Roadmap
                    </CardTitle>
                    <CardDescription>
                      A personalized learning path to help you become a Software Engineer.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RoadmapVisualizer />

                    <div className="mt-6 space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Key Skills to Develop</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "Programming Fundamentals",
                            "Data Structures",
                            "Algorithms",
                            "Web Development",
                            "Databases",
                            "Version Control",
                          ].map((skill, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-medium mb-2">Recommended Resources</h3>
                        <div className="space-y-2">
                          {[
                            "CS50: Introduction to Computer Science",
                            "The Odin Project",
                            "LeetCode for Algorithm Practice",
                          ].map((resource, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <Lightbulb className="h-4 w-4 text-primary" />
                              <span>{resource}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Save Roadmap</Button>
                    <Button>
                      View Detailed Plan
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </motion.div>
          </div>
        </TabsContent>

        <TabsContent value="explore" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Software Engineering",
              "Data Science",
              "UX/UI Design",
              "Digital Marketing",
              "Cybersecurity",
              "Product Management",
            ].map((career, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">{career}</CardTitle>
                    <CardDescription>Popular career path</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-32 bg-muted rounded-md mb-4"></div>
                    <p className="text-sm text-muted-foreground">
                      Explore the learning path and skills needed for a career in {career.toLowerCase()}.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">
                      View Roadmap
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Your Saved Roadmaps</CardTitle>
              <CardDescription>Access your previously generated career roadmaps</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center py-8">
                <div className="text-center">
                  <Compass className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-medium mb-2">No saved roadmaps yet</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Generate a roadmap to get started on your learning journey.
                  </p>
                  <Button variant="outline" size="sm">
                    Generate Your First Roadmap
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

