import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import { Banner } from "@/components/banner"
import { AmbientParticles } from "@/components/ambient-particles"
import { cn } from "@workspace/ui/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
}

const BASE_URL = "https://silantrolabs.com"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SILANTRO LABS — Software, Proyectos & Laboratorio de Programación",
    template: "%s — SILANTRO LABS",
  },
  description:
    "SILANTRO LABS es un laboratorio de desarrollo de software, productos digitales y experimentos de programación creado por Silantro. Código abierto, arquitectura y tutoriales.",
  applicationName: "SILANTRO LABS",
  authors: [{ name: "Silantro", url: BASE_URL }],
  generator: "Next.js",
  keywords: [
    "Silantro",
    "Silantro Labs",
    "SilantroLabs",
    "Silantro programación",
    "Silantro software",
    "Silantro bot discord",
    "laboratorio de software",
    "desarrollo web",
    "programación en python",
    "ingeniería de software",
    "proyectos open source",
    "desarrollador de software",
  ],
  creator: "Silantro",
  publisher: "SILANTRO LABS",
  alternates: {
    canonical: `${BASE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "SILANTRO LABS — Software, Proyectos & Laboratorio de Programación",
    description:
      "Laboratorio de desarrollo de software, productos digitales y experimentos de programación creado por Silantro.",
    url: `${BASE_URL}/`,
    siteName: "SILANTRO LABS",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "SILANTRO LABS — Software & Laboratorio de Programación",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SILANTRO LABS — Software, Proyectos & Laboratorio de Programación",
    description:
      "Laboratorio de desarrollo de software, productos digitales y experimentos de programación creado por Silantro.",
    images: ["/logo.jpg"],
    creator: "@silantrolabs",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "url": `${BASE_URL}/`,
      "name": "SILANTRO LABS",
      "alternateName": ["Silantro", "SilantroLabs", "Silantro Labs Software"],
      "description":
        "Laboratorio de desarrollo de software, productos digitales y experimentos de programación creado por Silantro.",
      "inLanguage": "es-ES",
      "publisher": {
        "@id": `${BASE_URL}/#organization`,
      },
    },
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "SILANTRO LABS",
      "alternateName": ["Silantro", "SilantroLabs"],
      "url": `${BASE_URL}/`,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/logo.jpg`,
      },
      "image": `${BASE_URL}/logo.jpg`,
      "founder": {
        "@id": `${BASE_URL}/#founder`,
      },
      "sameAs": [
        "https://github.com/SilantroX",
        "https://www.youtube.com/@SilantroLabs",
        "https://www.tiktok.com/@silantrolabs",
      ],
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      "name": "Silantro",
      "alternateName": ["SilantroX", "Silantro Labs"],
      "jobTitle": "Creador & Desarrollador de Software",
      "url": `${BASE_URL}/`,
      "sameAs": [
        "https://github.com/SilantroX",
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", inter.variable, "font-sans")}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative flex min-h-svh flex-col bg-white text-black dark:bg-white dark:text-black transition-colors duration-300">
        {/* Google AdSense */}
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${
            process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-XXXXXXXXXXXXXXXX"
          }`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        <ThemeProvider>
          <AmbientParticles />
          <Nav />
          <div className="relative z-10 flex-1">
            {children}
          </div>
          <Banner />
        </ThemeProvider>
      </body>
    </html>
  )
}
