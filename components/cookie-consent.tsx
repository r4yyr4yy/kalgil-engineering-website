"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-white p-6 rounded-lg shadow-lg z-50">
      <h3 className="text-lg font-semibold mb-2">This website uses cookies.</h3>
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to analyze website traffic and optimize your website experience. By accepting our use of cookies,
        your data will be aggregated with all other user data.
      </p>
      <Button onClick={acceptCookies} className="w-full bg-slate-900 hover:bg-slate-800">
        ACCEPT
      </Button>
    </div>
  )
}
