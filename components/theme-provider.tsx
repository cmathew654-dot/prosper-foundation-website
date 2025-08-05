"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "prosper-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Start with default theme, then update from localStorage after mount
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts (client-side only)
  useEffect(() => {
    setMounted(true)
    // Only access localStorage after component mounts
    const savedTheme = localStorage?.getItem(storageKey) as Theme
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [storageKey])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme, mounted])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      if (mounted) {
        localStorage?.setItem(storageKey, theme)
      }
      setTheme(theme)
    },
  }

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
