"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Check } from "lucide-react"
import { motion } from "motion/react"

const plans = [
  {
    name: "Básico",
    price: "280-390€",
    description: "Perfecto para empezar tu presencia online",
    popular: false,
    features: [
      "Landing de 1-3 secciones",
      "Hero, Servicios, Testimonios, Contacto",
      "1 idioma (ES o CAT)",
      "SEO local básico",
      "Schema LocalBusiness",
      "Hosting en Vercel incluido",
      "El cliente paga dominio",
      "1 revisión de diseño"
    ]
  },
  {
    name: "Profesional",
    price: "490-790€",
    description: "La opción más completa para la mayoría de negocios",
    popular: true,
    features: [
      "Hasta 5 páginas completas",
      "Inicio, Servicios, Nosotros, Blog, Contacto",
      "SEO on-page completo",
      "Analytics (Plausible/GA4)",
      "Blog básico (MDX o CMS ligero)",
      "2 revisiones de diseño",
      "Optimización Core Web Vitals",
      "Formularios de contacto avanzados"
    ]
  },
  {
    name: "Premium",
    price: "900-1.600€",
    description: "Soluciones avanzadas para negocios exigentes",
    popular: false,
    features: [
      "Web dinámica completa",
      "Catálogo, reservas, mini-ecommerce",
      "Integraciones API / CMS",
      "Sanity/Contentful/Supabase",
      "Copy ligero incluido",
      "Sesión de fotos opcional",
      "3 revisiones de diseño",
      "Soporte prioritario 3 meses"
    ]
  }
]

export function Pricing() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="precios" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl">
            Planes que se adaptan a tu negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precios orientativos + IVA. El precio final se ajusta según complejidad y necesidades específicas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full ${
                plan.popular 
                  ? "border-sky-500 shadow-xl scale-105" 
                  : "hover:shadow-lg"
              } transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sky-500 hover:bg-sky-600">
                    Más popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-sky-600 dark:text-sky-400">
                      {plan.price}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {plan.description}
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-sky-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    onClick={() => scrollToSection("contacto")}
                    className={`w-full ${
                      plan.popular 
                        ? "bg-sky-500 hover:bg-sky-600" 
                        : "bg-primary hover:bg-primary/90"
                    }`}
                  >
                    Pedir presupuesto
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            Todos los precios incluyen IVA 21%. Mantenimiento opcional desde 25€/mes.
          </p>
        </motion.div>
      </div>
    </section>
  )
}