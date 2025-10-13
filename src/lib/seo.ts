export const siteConfig = {
  name: "BlanckWeb",
  title: "BlanckWeb - Webs rápidas y minimalistas para atraer clientes",
  description: "Hecho en Lleida. Páginas que cargan en milisegundos y convierten visitas en clientes. Diseño claro, SEO local y soporte cercano.",
  url: "https://[DOMAIN]",
  email: "[EMAIL]",
  whatsapp: "[WHATSAPP]",
  location: "Guissona, Lleida",
  keywords: ["diseño web", "páginas web", "SEO local", "Lleida", "Guissona", "webs rápidas", "minimalista"],
  author: "BlanckWeb",
  creator: "BlanckWeb Team"
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "email": siteConfig.email,
  "telephone": siteConfig.whatsapp,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Guissona",
    "addressRegion": "Lleida",
    "addressCountry": "ES"
  },
  "description": siteConfig.description,
  "foundingLocation": {
    "@type": "Place",
    "name": "Guissona, Lleida, España"
  }
}