import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Prosper Foundation - Professional Development Center",
  description: "Professional testing center and learning facility for FINRA, MCAT, CPA and other certifications.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="prosper-ui-theme">
          <Navigation />
          {children}
          <Footer />
          <AIChatAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}
