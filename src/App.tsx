"use client"

import { ThemeProvider } from "./lib/theme-provider"
import { Navbar } from "./components/layout/navbar"
import { Footer } from "./components/layout/footer"
import { Hero } from "./components/sections/hero"
import { Benefits } from "./components/sections/benefits"
import { Process } from "./components/sections/process"
import { Pricing } from "./components/sections/pricing"
import { Portfolio } from "./components/sections/portfolio"
import { Testimonials } from "./components/sections/testimonials"
import { FAQ } from "./components/sections/faq"
import { Contact } from "./components/sections/contact"
import { CTA } from "./components/sections/cta"
import { organizationSchema } from "./lib/seo"

export default function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {/* JSON-LD Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        
        <main>
          <Hero />
          <Benefits />
          <Process />
          <Pricing />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <Contact />
          <CTA />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}