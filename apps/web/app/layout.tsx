import { Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import { Banner } from "@/components/banner"
import { AmbientParticles } from "@/components/ambient-particles"
import { cn } from "@workspace/ui/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "SILANTRO LABS",
  description: "Construimos cosas. Productos digitales, software e ideas.",
  authors: [{ name: "SILANTRO LABS", url: "https://silantrolabs.com" }],
  creator: "SILANTRO LABS",
  openGraph: {
    title: "SILANTRO LABS",
    description: "Construimos cosas. Productos digitales, software e ideas.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SILANTRO LABS",
    description: "Construimos cosas. Productos digitales, software e ideas.",
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
      <body className="relative flex min-h-svh flex-col bg-white text-black dark:bg-white dark:text-black transition-colors duration-300">
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
