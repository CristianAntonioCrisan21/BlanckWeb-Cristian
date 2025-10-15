import { Mail, Phone, MapPin } from "lucide-react"
import { Separator } from "../ui/separator"
import { ImageWithFallback } from "../figma/ImageWithFallback"
import blanckwebIcon from "../../assets/blanckIcon.png"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <ImageWithFallback 
                src={blanckwebIcon}
                alt="BlanckWeb Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold">BlanckWeb</span>
            </div>
            <p className="text-muted-foreground">
              Webs rápidas y minimalistas para atraer clientes. Hecho en Lleida.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3>Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>[info@blanckweb.eu]</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+34 642 168 097</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>[Lleida, España]</span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h3>Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                Next.js
              </span>
              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                Vercel
              </span>
              <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} BlanckWeb. Todos los derechos reservados.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidad
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}