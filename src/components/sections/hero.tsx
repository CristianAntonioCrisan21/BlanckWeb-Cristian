"use client"

import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Zap, Globe, Search } from "lucide-react"
import { motion } from "motion/react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight">
                Webs <span className="text-sky-500">rápidas</span> y minimalistas para atraer clientes
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Hecho en Lleida. Páginas que cargan en milisegundos y convierten visitas en <strong>clientes</strong>.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                onClick={() => scrollToSection("contacto")}
                size="lg" 
                className="bg-sky-500 hover:bg-sky-600 text-white"
              >
                Pide presupuesto
              </Button>
              <Button 
                onClick={() => scrollToSection("portfolio")}
                variant="outline" 
                size="lg"
              >
                Ver ejemplos
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Badge variant="secondary" className="flex items-center space-x-2">
                <Zap className="h-3 w-3" />
                <span>Core Web Vitals en verde</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2">
                <Globe className="h-3 w-3" />
                <span>Despliegue en Vercel</span>
              </Badge>
              <Badge variant="secondary" className="flex items-center space-x-2">
                <Search className="h-3 w-3" />
                <span>SEO local</span>
              </Badge>
            </motion.div>
          </motion.div>

          {/* Mockup */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/20 dark:to-sky-800/20 rounded-2xl p-8 shadow-2xl">
              <div className="bg-background rounded-xl shadow-lg overflow-hidden">
                <div className="flex items-center space-x-2 p-3 bg-muted/50 border-b">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="flex-1 bg-muted rounded px-3 py-1 text-xs text-muted-foreground text-center">
                    blanckweb.eu
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gradient-to-r from-sky-500 to-transparent rounded w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-2 bg-muted rounded w-full"></div>
                    <div className="h-2 bg-muted rounded w-5/6"></div>
                    <div className="h-2 bg-muted rounded w-4/5"></div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-8 bg-sky-500 rounded w-24"></div>
                    <div className="h-8 bg-muted rounded w-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}