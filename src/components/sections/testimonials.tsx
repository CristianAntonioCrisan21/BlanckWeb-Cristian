"use client"

import { Card, CardContent } from "../ui/card"
import { Star } from "lucide-react"
import { motion } from "motion/react"

const testimonials = [
  {
    name: "Maria Pons",
    business: "Panadería Sant Blai",
    text: "Desde que tenemos la web, recibimos muchas más consultas por WhatsApp y los clientes ya saben nuestros horarios antes de venir. Jorge nos ayudó mucho durante todo el proceso.",
    rating: 5
  },
  {
    name: "Carles Ribas", 
    business: "Taller Motor Segarra",
    text: "La web nos ha ahorrado muchas llamadas para pedir cita. Los clientes pueden ver todos nuestros servicios y reservar directamente. Muy recomendable.",
    rating: 5
  },
  {
    name: "Anna Ferrer",
    business: "Asesoría Tàrrega", 
    text: "Aparecemos los primeros en Google cuando buscan asesoría en Tàrrega. El blog nos ha ayudado mucho a conseguir clientes nuevos. Servicio excelente.",
    rating: 5
  }
]

export function Testimonials() {
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
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Historias reales de negocios que han crecido con nuestras webs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-4 w-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-muted-foreground italic">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-border pt-4">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.business}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}