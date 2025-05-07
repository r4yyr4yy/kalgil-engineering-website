import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b bg-white z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Kalgil Engineering Solutions Logo" width={40} height={40} />
          <span className="text-xl font-semibold">Kalgil Engineering Solutions</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link href="#about" className="text-sm hover:text-gray-600">
            About
          </Link>
          <Link href="#services" className="text-sm hover:text-gray-600">
            Services
          </Link>
          <Link href="#contact" className="text-sm hover:text-gray-600">
            Contact
          </Link>
          <Button variant="outline" size="sm">
            Request a Call
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden">
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
