import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prorecycler | Sustainable Recycling Services in Badagry, Nigeria",
  description:
    "Prorecycler provides eco-friendly recycling services for plastic, paper, metal, e-waste and more in Badagry, Nigeria. Schedule a pickup today and join our mission for a cleaner, waste-free Nigeria.",
  keywords:
    "recycling, eco-friendly, sustainability, waste management, plastic recycling, paper recycling, metal recycling, e-waste, Nigeria, Badagry, circular economy",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
