"use client"

import { Button } from "@/components/ui/button"
import { Sparkles, Users, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-4xl mx-auto text-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-glass border border-glass-border mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm text-muted-foreground">Communauté Gaming Premium</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Bienvenue sur notre{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-neon-mauve bg-clip-text text-transparent">
            communauté
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Rejoignez des milliers de joueurs passionnés sur notre serveur Discord gaming. 
          Événements exclusifs, serveur Minecraft, et une communauté active 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 rounded-xl text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-105"
          >
            <Users className="w-5 h-5 mr-2" />
            Rejoindre Discord
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-glass-border bg-glass hover:bg-secondary text-foreground font-semibold px-8 py-6 rounded-xl text-lg transition-all duration-300 backdrop-blur-sm"
          >
            Voir les rôles
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">2.5K+</div>
            <div className="text-sm text-muted-foreground">Membres</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">50+</div>
            <div className="text-sm text-muted-foreground">Events</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">24/7</div>
            <div className="text-sm text-muted-foreground">Actif</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground mx-auto" />
        </div>
      </div>
    </section>
  )
}
