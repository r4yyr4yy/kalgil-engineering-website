"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FixedHeader() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-blue-900 text-white z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-white">
          Kalgil Engineering Solutions
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link href="#services" className="text-sm hover:text-blue-200 transition-colors">
            Services
          </Link>
          <Link href="#projects" className="text-sm hover:text-blue-200 transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-sm hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-blue-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}
