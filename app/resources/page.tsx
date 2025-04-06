"use client";

import { useState } from "react";
import { BookOpen, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ResourceCard } from "@/components/resource-card";

const resources = [
  {
    id: 1,
    title: "Introduction to Data Structures",
    type: "video",
    duration: "45 min",
    level: "beginner",
    category: "programming",
    rating: 4.8,
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 2,
    title: "Advanced JavaScript Concepts",
    type: "article",
    duration: "20 min",
    level: "intermediate",
    category: "web",
    rating: 4.5,
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 3,
    title: "Database Design Fundamentals",
    type: "course",
    duration: "3 hours",
    level: "beginner",
    category: "database",
    rating: 4.9,
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 4,
    title: "Algorithms and Problem Solving",
    type: "interactive",
    duration: "1.5 hours",
    level: "intermediate",
    category: "programming",
    rating: 4.7,
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 5,
    title: "Web Development with React",
    type: "course",
    duration: "8 hours",
    level: "intermediate",
    category: "web",
    rating: 4.6,
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 6,
    title: "Introduction to Machine Learning",
    type: "video",
    duration: "1 hour",
    level: "advanced",
    category: "ai",
    rating: 4.9,
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((f) => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const filteredResources = resources.filter((resource) => {
    // Apply search filter
    if (
      searchQuery &&
      !resource.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Apply category filters
    if (
      activeFilters.length > 0 &&
      !activeFilters.includes(resource.category)
    ) {
      return false;
    }

    return true;
  });

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Learning Resources</h1>
        <p className="text-muted-foreground">
          Discover curated learning materials tailored to your career path.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search resources..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button variant="outline" className="md:w-auto">
          <Filter className="mr-2 h-4 w-4" />
          Filters
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge variant="outline" className="cursor-pointer hover:bg-primary/10">
          All
        </Badge>
        {["programming", "web", "database", "ai"].map((category) => (
          <Badge
            key={category}
            variant={activeFilters.includes(category) ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => toggleFilter(category)}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Badge>
        ))}
      </div>

      <Tabs defaultValue="recommended" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-md">
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="popular">Popular</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="saved">Saved</TabsTrigger>
        </TabsList>

        <TabsContent value="recommended" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                index={index}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .sort((a, b) => b.rating - a.rating)
              .map((resource, index) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  index={index}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="new" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources
              .sort((a, b) => b.id - a.id)
              .map((resource, index) => (
                <ResourceCard
                  key={resource.id}
                  resource={resource}
                  index={index}
                />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <Card>
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-medium mb-2">No saved resources yet</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Save resources to access them offline and organize your
                  learning materials.
                </p>
                <Button variant="outline" size="sm">
                  Browse Recommended Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
