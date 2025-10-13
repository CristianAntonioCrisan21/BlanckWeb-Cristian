"use client"

import { Button } from "../ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "motion/react"

export function CTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>¿Listo para dar el salto?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl">
              ¿Listo para conseguir más clientes desde Google y WhatsApp?
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Miles de búsquedas relacionadas con tu negocio ocurren cada mes en Lleida. 
              Asegúrate de que te encuentren a ti.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={() => scrollToSection("contacto")}
              size="lg" 
              className="bg-sky-500 hover:bg-sky-600 text-white group"
            >
              Pide presupuesto gratis
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              onClick={() => scrollToSection("portfolio")}
              variant="outline" 
              size="lg"
            >
              Ver más ejemplos
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">3-7 días</div>
              <div className="text-sm text-muted-foreground">Tiempo de entrega</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">100%</div>
              <div className="text-sm text-muted-foreground">Webs responsive</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">24h</div>
              <div className="text-sm text-muted-foreground">Respuesta garantizada</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}