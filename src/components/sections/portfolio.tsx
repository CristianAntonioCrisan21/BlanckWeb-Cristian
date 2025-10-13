"use client"

import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { Badge } from "../ui/badge"
import { ExternalLink, TrendingUp, Users, Clock } from "lucide-react"
import { motion } from "motion/react"
import { ImageWithFallback } from "../figma/ImageWithFallback"

const portfolioItems = [
  {
    id: 1,
    title: "Panadería Sant Blai",
    description: "Landing con horarios, mapa y catálogo simple",
    category: "Alimentación",
    image: "https://images.unsplash.com/photo-1759503262406-8243637a4f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBicmVhZCUyMGludGVyaW9yfGVufDF8fHx8MTc1OTkyMDgwOXww&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "40% más clientes nuevos en 3 meses",
      "Llamadas directas +65%", 
      "Tiempo de carga: 0.8 segundos"
    ],
    technologies: ["Next.js", "SEO Local", "Google Maps"],
    url: "#"
  },
  {
    id: 2,
    title: "Taller Motor Segarra", 
    description: "Servicios, formulario de cita y WhatsApp",
    category: "Automoción",
    image: "https://images.unsplash.com/photo-1711386689622-1cda23e10217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjByZXBhaXIlMjBnYXJhZ2V8ZW58MXx8fHwxNzU5OTIwODEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "25% más citas online",
      "Reducción del 50% en llamadas administrativas",
      "Score SEO: 95/100"
    ],
    technologies: ["React", "Formularios", "WhatsApp API"],
    url: "#"
  },
  {
    id: 3,
    title: "Asesoría Tàrrega",
    description: "Blog básico y captación de leads",
    category: "Servicios",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBjb25zdWx0YXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTk5MjA4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    results: [
      "300% más consultas cualificadas",
      "Tiempo en página +120%",
      "Posición #1 en 'asesoría Tàrrega'"
    ],
    technologies: ["Next.js", "MDX Blog", "Lead Forms"],
    url: "#"
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl">
            Casos de éxito reales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Negocios locales que han crecido con nuestras webs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-sky-600 dark:text-sky-400 font-medium">
                          Ver detalles
                        </span>
                        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-sky-500 transition-colors" />
                      </div>
                    </CardContent>
                  </Card>
                </DialogTrigger>

                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    
                    <div>
                      <h4 className="flex items-center space-x-2 mb-4">
                        <TrendingUp className="h-5 w-5 text-sky-500" />
                        <span>Resultados obtenidos</span>
                      </h4>
                      <ul className="space-y-2">
                        {item.results.map((result, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-sky-500 rounded-full mt-2 shrink-0"></div>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center space-x-2 mb-4">
                        <Users className="h-5 w-5 text-sky-500" />
                        <span>Tecnologías utilizadas</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-sky-500 hover:bg-sky-600">
                        Solicitar presupuesto similar
                      </Button>
                      <Button variant="outline">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver web
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button variant="outline" size="lg">
            Ver más proyectos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}