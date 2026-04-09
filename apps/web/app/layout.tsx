import { Inter } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Nav } from "@/components/nav"
import { Banner } from "@/components/banner"
import { cn } from "@workspace/ui/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata = {
  title: "Portfolio — Designer & Developer",
  description:
    "A minimal portfolio template for UX/UI designers and developers.",
  authors: [{ name: "Ali Madjaji", url: "https://www.alimadjaji.com" }],
  creator: "Ali Madjaji",
  openGraph: {
    title: "Portfolio — Designer & Developer",
    description:
      "A minimal portfolio template for UX/UI designers and developers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio — Designer & Developer",
    description:
      "A minimal portfolio template for UX/UI designers and developers.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased scroll-smooth", inter.variable, "font-sans")}
    >
      <body className="min-h-svh bg-gradient-to-br from-[#A4D8FF] via-[#c4e4ff] to-[#daeeff] dark:from-[#1a1d1f] dark:via-[#22272b] dark:to-[#2a3035]">
        <ThemeProvider>
          <Nav />
          <div className="pb-12">
            {children}
          </div>
          <Banner />
        </ThemeProvider>
      </body>
    </html>
  )
}
