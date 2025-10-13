"use client"

import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { Moon, Sun, Menu } from "lucide-react"
import { useTheme } from "next-themes"
import { ImageWithFallback } from "../figma/ImageWithFallback"
import blanckwebIcon from "../../assets/blanckIcon.png"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/40" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("inicio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection("precios")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Precios
            </button>
            <button 
              onClick={() => scrollToSection("contacto")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contacto
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:inline-flex"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            
            <Button 
              onClick={() => scrollToSection("contacto")}
              className="hidden sm:inline-flex bg-sky-500 hover:bg-sky-600"
            >
              Pide presupuesto
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-6">
                  <button 
                    onClick={() => scrollToSection("inicio")}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Inicio
                  </button>
                  <button 
                    onClick={() => scrollToSection("portfolio")}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Portfolio
                  </button>
                  <button 
                    onClick={() => scrollToSection("precios")}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Precios
                  </button>
                  <button 
                    onClick={() => scrollToSection("contacto")}
                    className="text-left text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contacto
                  </button>
                  
                  <div className="pt-6 border-t border-border">
                    <Button
                      variant="ghost"
                      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                      className="w-full justify-start"
                    >
                      {theme === "dark" ? (
                        <>
                          <Sun className="h-4 w-4 mr-2" />
                          Modo claro
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 mr-2" />
                          Modo oscuro
                        </>
                      )}
                    </Button>
                    
                    <Button 
                      onClick={() => scrollToSection("contacto")}
                      className="w-full mt-4 bg-sky-500 hover:bg-sky-600"
                    >
                      Pide presupuesto
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}