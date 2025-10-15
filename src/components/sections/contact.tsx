"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Label } from "../ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Checkbox } from "../ui/checkbox"
import { Mail, Phone, MapPin, MessageCircle, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
import { sendContactEmail, type ContactFormData } from "../../lib/emailjs"

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    privacy: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar formulario
    if (!formData.name || !formData.email || !formData.budget || !formData.privacy) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      console.log("Enviando formulario con datos:", formData)
      const success = await sendContactEmail(formData)
      
      if (success) {
        setSubmitStatus('success')
        // Limpiar formulario
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          budget: "",
          message: "",
          privacy: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl">
            ¿Listo para conseguir más clientes?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cuéntanos tu proyecto y te enviaremos un presupuesto personalizado en 24h
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Solicita tu presupuesto</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Nombre de tu negocio"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+34 600 000 000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Presupuesto orientativo</Label>
                    <Select value={formData.budget} onValueChange={(value: string) => handleInputChange("budget", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="300-500">300-500€</SelectItem>
                        <SelectItem value="500-800">500-800€</SelectItem>
                        <SelectItem value="800-1200">800-1200€</SelectItem>
                        <SelectItem value="1200+">Más de 1200€</SelectItem>
                        <SelectItem value="no-sure">No estoy seguro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Cuéntanos tu proyecto *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Describe tu negocio, qué necesitas y cualquier detalle que creas importante..."
                      rows={5}
                      required
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="privacy"
                      checked={formData.privacy}
                      onCheckedChange={(checked: boolean) => handleInputChange("privacy", checked)}
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                      Acepto la <a href="#" className="text-sky-600 hover:underline">política de privacidad</a> y 
                      el tratamiento de mis datos para responder a mi consulta.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-sky-500 hover:bg-sky-600"
                    disabled={!formData.privacy || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Enviando...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        ¡Enviado!
                      </>
                    ) : (
                      'Enviar solicitud'
                    )}
                  </Button>

                  {/* Mensajes de estado */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                      <CheckCircle className="h-5 w-5" />
                      <span>¡Mensaje enviado correctamente! Te responderemos en 24h.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                      <AlertCircle className="h-5 w-5" />
                      <span>Error al enviar el mensaje. Por favor, verifica los campos obligatorios.</span>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Otras formas de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <a 
                    href="mailto:info@blanckweb.eu"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                  >
                    <Mail className="h-5 w-5 text-sky-500" />
                    <div>
                      <div className="font-medium group-hover:text-sky-600 transition-colors">Email</div>
                      <div className="text-sm text-muted-foreground">info@blanckweb.eu</div>
                    </div>
                  </a>

                  <a 
                    href="https://wa.me/34642168097"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors group"
                  >
                    <MessageCircle className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-medium group-hover:text-green-600 transition-colors">WhatsApp</div>
                      <div className="text-sm text-muted-foreground">+34 642 168 097</div>
                    </div>
                  </a>

                  <div className="flex items-center space-x-3 p-3 rounded-lg border border-border">
                    <MapPin className="h-5 w-5 text-sky-500" />
                    <div>
                      <div className="font-medium">Ubicación</div>
                      <div className="text-sm text-muted-foreground">España, Cataluña</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tiempo de respuesta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Presupuesto</span>
                    <span className="font-medium">24h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consultas</span>
                    <span className="font-medium">2-4h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Soporte técnico</span>
                    <span className="font-medium">1-24h</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}