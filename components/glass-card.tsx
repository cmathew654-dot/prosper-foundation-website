"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className = "", hover = true }: GlassCardProps) {
  return (
    <motion.div
      className={`
        backdrop-blur-md bg-white/10 dark:bg-black/10 
        border border-white/20 dark:border-white/10
        rounded-xl shadow-xl
        ${hover ? "hover:bg-white/20 dark:hover:bg-black/20 hover:shadow-2xl hover:scale-105" : ""}
        transition-all duration-300
        ${className}
      `}
      whileHover={hover ? { y: -5 } : {}}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
