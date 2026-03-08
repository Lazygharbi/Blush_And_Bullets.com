"use client"

import { Gamepad2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-glass-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Gamepad2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold text-foreground">GameZone</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} GameZone Community. Tous droits réservés.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Discord
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
