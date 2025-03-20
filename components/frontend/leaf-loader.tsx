"use client"

import { Leaf } from "lucide-react"
import Logo from "../global/Logo"

export interface LeafLoaderProps {
  size?: number
  color?: string
  className?: string
}

export function LeafLoader({
  size = 32,
  color = "#22c55e", // green-500
  className = "",
}: LeafLoaderProps) {
  return (
    <div className={`animate-spin ${className}`}>
        <Logo/>
      {/* <Leaf size={size} style={{ color }} /> */}
    </div>
  )
}

