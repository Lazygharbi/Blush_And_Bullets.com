"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Gamepad2 } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-glass border border-glass-border rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                GameZone
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Rôles
              </a>
              <a href="#commands" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Commandes
              </a>
              <a href="#minecraft" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Minecraft
              </a>
              <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                Events
              </a>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold px-6 py-2 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
              >
                Rejoindre Discord
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-glass-border animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col gap-4">
                <a href="#roles" className="text-muted-foreground hover:text-foreground transition-colors">
                  Rôles
                </a>
                <a href="#commands" className="text-muted-foreground hover:text-foreground transition-colors">
                  Commandes
                </a>
                <a href="#minecraft" className="text-muted-foreground hover:text-foreground transition-colors">
                  Minecraft
                </a>
                <a href="#events" className="text-muted-foreground hover:text-foreground transition-colors">
                  Events
                </a>
                <Button 
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-semibold w-full rounded-xl"
                >
                  Rejoindre Discord
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
