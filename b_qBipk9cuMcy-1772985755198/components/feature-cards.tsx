"use client"

import { Crown, Terminal, Pickaxe, Calendar, Copy, Check } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const roles = [
  { name: "Fondateur", color: "from-yellow-400 to-amber-500", description: "Créateur du serveur" },
  { name: "Admin", color: "from-red-400 to-rose-500", description: "Gestion complète" },
  { name: "Modérateur", color: "from-primary to-accent", description: "Modération du chat" },
  { name: "VIP", color: "from-emerald-400 to-teal-500", description: "Membres premium" },
  { name: "Membre", color: "from-slate-400 to-slate-500", description: "Accès standard" },
]

const commands = [
  { cmd: "/help", description: "Affiche toutes les commandes" },
  { cmd: "/rank", description: "Voir votre niveau et XP" },
  { cmd: "/daily", description: "Récompense quotidienne" },
  { cmd: "/minecraft", description: "Infos serveur Minecraft" },
  { cmd: "/ticket", description: "Ouvrir un ticket support" },
]

const events = [
  { title: "Tournoi Valorant", date: "Chaque samedi", participants: "32 joueurs" },
  { title: "Build Battle MC", date: "Dimanche 20h", participants: "Illimité" },
  { title: "Quiz Gaming", date: "Mercredi 21h", participants: "50+ joueurs" },
  { title: "Giveaway mensuel", date: "Fin du mois", participants: "Tous" },
]

export function FeatureCards() {
  const [copied, setCopied] = useState(false)
  const minecraftIP = "play.gamezone.fr"

  const copyIP = () => {
    navigator.clipboard.writeText(minecraftIP)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Découvrez notre serveur
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tout ce que vous devez savoir pour profiter pleinement de notre communauté gaming.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Roles Card */}
          <div 
            id="roles"
            className="group backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-left-8 duration-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Rôles & Grades</h3>
                <p className="text-sm text-muted-foreground">Hiérarchie du serveur</p>
              </div>
            </div>
            <div className="space-y-3">
              {roles.map((role, index) => (
                <div 
                  key={role.name}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${role.color}`} />
                  <span className="font-medium text-foreground">{role.name}</span>
                  <span className="text-sm text-muted-foreground ml-auto">{role.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commands Card */}
          <div 
            id="commands"
            className="group backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-right-8 duration-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-neon-mauve flex items-center justify-center">
                <Terminal className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Commandes Bot</h3>
                <p className="text-sm text-muted-foreground">Commandes utiles</p>
              </div>
            </div>
            <div className="space-y-3">
              {commands.map((command, index) => (
                <div 
                  key={command.cmd}
                  className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <code className="text-accent font-mono text-sm bg-background/50 px-2 py-1 rounded">{command.cmd}</code>
                  <span className="text-sm text-muted-foreground">{command.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Minecraft Card */}
          <div 
            id="minecraft"
            className="group backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-left-8 duration-700 delay-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Pickaxe className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Serveur Minecraft</h3>
                <p className="text-sm text-muted-foreground">Survival & Mini-jeux</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-secondary/50 border border-glass-border">
                <p className="text-sm text-muted-foreground mb-2">Adresse IP du serveur</p>
                <div className="flex items-center gap-3">
                  <code className="text-lg font-mono text-foreground bg-background/50 px-4 py-2 rounded-lg flex-1">
                    {minecraftIP}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyIP}
                    className="border-glass-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-secondary/50 text-center">
                  <div className="text-2xl font-bold text-foreground">1.20.4</div>
                  <div className="text-xs text-muted-foreground">Version</div>
                </div>
                <div className="p-3 rounded-xl bg-secondary/50 text-center">
                  <div className="text-2xl font-bold text-foreground">128</div>
                  <div className="text-xs text-muted-foreground">Joueurs en ligne</div>
                </div>
              </div>
            </div>
          </div>

          {/* Events Card */}
          <div 
            id="events"
            className="group backdrop-blur-xl bg-glass border border-glass-border rounded-2xl p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-right-8 duration-700 delay-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Events Communautaires</h3>
                <p className="text-sm text-muted-foreground">Événements réguliers</p>
              </div>
            </div>
            <div className="space-y-3">
              {events.map((event, index) => (
                <div 
                  key={event.title}
                  className="flex items-center justify-between p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
                    <span className="font-medium text-foreground block">{event.title}</span>
                    <span className="text-xs text-muted-foreground">{event.date}</span>
                  </div>
                  <span className="text-sm text-accent">{event.participants}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
