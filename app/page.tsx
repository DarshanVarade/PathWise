import { BookOpen, Compass, MessageCircle, Trophy } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatsSection } from "@/components/stats-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-background to-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unlock Your Learning Potential</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            PathWise provides personalized learning experiences powered by AI to help you achieve your educational
            goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <FeatureCard
              icon={<Compass className="h-8 w-8 text-primary" />}
              title="AI Career Roadmap"
              description="Get a personalized career roadmap based on your interests and goals."
            />
            <FeatureCard
              icon={<MessageCircle className="h-8 w-8 text-primary" />}
              title="24/7 AI Assistant"
              description="Ask questions and get help anytime with our AI-powered assistant."
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8 text-primary" />}
              title="Learning Resources"
              description="Access curated learning materials tailored to your learning journey."
            />
            <FeatureCard
              icon={<Trophy className="h-8 w-8 text-primary" />}
              title="Gamified Learning"
              description="Earn badges and rewards as you progress through your learning path."
            />
          </div>
        </div>
      </section>

      <TestimonialSection />
      <StatsSection />
      <CTASection />
    </div>
  )
}

