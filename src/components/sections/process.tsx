"use client"

import { Card, CardContent } from "../ui/card"
import { MessageCircle, FileText, Code, Rocket } from "lucide-react"
import { motion } from "motion/react"

const steps = [
  {
    icon: MessageCircle,
    title: "Briefing",
    duration: "30-45 min",
    description: "Cuéntanos tu negocio, objetivos y necesidades. Definimos juntos el alcance del proyecto."
  },
  {
    icon: FileText,
    title: "Propuesta",
    duration: "24h",
    description: "Te enviamos un presupuesto detallado con tiempos, funcionalidades y precio cerrado."
  },
  {
    icon: Code,
    title: "Diseño + desarrollo",
    duration: "5-7 días",
    description: "Creamos tu web siguiendo las mejores prácticas de velocidad, SEO y experiencia de usuario."
  },
  {
    icon: Rocket,
    title: "Entrega",
    duration: "1 día",
    description: "Publicamos tu web, te damos acceso y te enseñamos cómo gestionar el contenido."
  }
]

export function Process() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl">
            Nuestro proceso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparente y eficiente. De la idea a la web publicada en una semana.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500/20 via-sky-500 to-sky-500/20 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center font-semibold text-sm z-10">
                  {index + 1}
                </div>
                
                <Card className="mt-4 lg:mt-0 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 space-y-4 text-center lg:text-left">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-sky-100 dark:bg-sky-900/30 rounded-xl mx-auto lg:mx-0">
                      <step.icon className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-1">{step.title}</h3>
                      <p className="text-sm text-sky-600 dark:text-sky-400 font-medium">
                        {step.duration}
                      </p>
                    </div>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}