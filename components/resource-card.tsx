"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { BookOpen, Clock, Download, Star, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Resource {
  id: number
  title: string
  type: string
  duration: string
  level: string
  category: string
  rating: number
  thumbnail: string
}

interface ResourceCardProps {
  resource: Resource
  index: number
}

export function ResourceCard({ resource, index }: ResourceCardProps) {
  const [isSaved, setIsSaved] = useState(false)

  const typeIcon = {
    video: <Video className="h-4 w-4" />,
    article: <BookOpen className="h-4 w-4" />,
    course: <BookOpen className="h-4 w-4" />,
    interactive: <BookOpen className="h-4 w-4" />,
  }[resource.type]

  const levelColor = {
    beginner: "bg-green-500/10 text-green-500",
    intermediate: "bg-blue-500/10 text-blue-500",
    advanced: "bg-purple-500/10 text-purple-500",
  }[resource.level]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
        <div className="relative aspect-video">
          <Image src={resource.thumbnail || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
          <div className="absolute top-2 right-2">
            <Badge variant="secondary" className="font-normal">
              {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
            </Badge>
          </div>
        </div>
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-base line-clamp-2">{resource.title}</CardTitle>
          </div>
          <CardDescription className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-3 w-3 fill-primary text-primary mr-1" />
              <span>{resource.rating}</span>
            </div>
            <span>•</span>
            <div className="flex items-center">
              <Clock className="h-3 w-3 mr-1" />
              <span>{resource.duration}</span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="pb-2 flex-1">
          <div className="flex gap-2 mb-2">
            <Badge variant="outline" className={levelColor}>
              {resource.level.charAt(0).toUpperCase() + resource.level.slice(1)}
            </Badge>
            <Badge variant="outline">{resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Perfect for your current learning milestone. AI-recommended based on your roadmap.
          </p>
        </CardContent>
        <CardFooter className="pt-2">
          <div className="flex gap-2 w-full">
            <Button className="flex-1">Start Learning</Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsSaved(!isSaved)}
              className={isSaved ? "text-primary" : ""}
            >
              <Download className="h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

