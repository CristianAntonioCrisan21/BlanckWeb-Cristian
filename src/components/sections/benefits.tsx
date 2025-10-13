"use client"

import { Card, CardContent } from "../ui/card"
import { Zap, Target, Search, HeartHandshake } from "lucide-react"
import { motion } from "motion/react"

const benefits = [
  {
    icon: Zap,
    title: "Carga ultrarrápida",
    description: "Páginas optimizadas que cargan en milisegundos. Core Web Vitals siempre en verde para mejor posicionamiento."
  },
  {
    icon: Target,
    title: "Diseño claro que vende",
    description: "Interfaces minimalistas y funcionales que guían al usuario hacia la conversión de forma natural."
  },
  {
    icon: Search,
    title: "SEO local listo",
    description: "Optimización completa para búsquedas locales. Tu negocio aparecerá cuando te busquen en Google."
  },
  {
    icon: HeartHandshake,
    title: "Soporte cercano",
    description: "Atención personalizada en catalán y castellano. Estamos aquí para hacer crecer tu negocio."
  }
]

export function Benefits() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl">
            ¿Por qué elegir BlanckWeb?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nos especializamos en crear webs que realmente funcionen para tu negocio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl">
                    <benefit.icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                  </div>
                  <h3 className="text-xl">{benefit.title}</h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}