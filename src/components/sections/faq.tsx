"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import { motion } from "motion/react"

const faqs = [
  {
    question: "¿En cuántos días entregas?",
    answer: "Las landings básicas las entregamos en 3-5 días laborables. Los proyectos más complejos (hasta 5 páginas) pueden tardar entre 1-2 semanas según el alcance y las revisiones necesarias."
  },
  {
    question: "¿Quién gestiona el dominio?",
    answer: "Tú eres el propietario del dominio en todo momento. Te ayudamos a comprarlo y configurarlo, pero siempre estará a tu nombre. También te enseñamos cómo gestionarlo para que seas completamente independiente."
  },
  {
    question: "¿Puedo pedir cambios?",
    answer: "Sí, incluimos 1-2 rondas de revisiones según el plan contratado. Los cambios mayores que modifiquen el alcance inicial se presupuestan aparte, pero siempre te consultamos antes."
  },
  {
    question: "¿Incluye fotos y textos?",
    answer: "Incluimos copywriting básico para todas las secciones. Las fotos profesionales son opcionales (servicio externo). Si ya tienes fotos, las optimizamos y adaptamos a la web."
  },
  {
    question: "¿Qué pasa después de la entrega?",
    answer: "Te damos acceso completo, un videotutorial de cómo gestionar el contenido y 1 mes de soporte técnico gratuito. Después ofrecemos planes de mantenimiento opcionales desde 25€/mes."
  },
  {
    question: "¿Las webs son responsive?",
    answer: "Sí, todas nuestras webs están optimizadas para móviles, tablets y ordenadores. También nos aseguramos de que cumplan los Core Web Vitals de Google para un mejor posicionamiento."
  }
]

export function FAQ() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Resolvemos tus dudas sobre el proceso y nuestros servicios
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}