"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureCards } from "@/components/feature-cards"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 -right-32 w-96 h-96 bg-neon-mauve/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <FeatureCards />
        <Footer />
      </div>
    </main>
  )
}
