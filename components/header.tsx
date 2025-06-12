"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  // { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 py-10 px-4 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image src={"/images/logo.png"} alt="Prorecycler Logo image" width={100} height={80}/>
            {/* <Recycle className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Prorecycler</span> */}
          </Link>
        </div>

        <nav className="hidden md:flex md:gap-6 md:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium transition-colors hover:text-primary group"
            >
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
            </Link>
          ))}
          <Button asChild>
            <a
              href="https://wa.me/2349040020889?text=Hi%20Prorecycler,%20I'd%20like%20to%20schedule%20a%20recycling%20pickup."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Schedule Pickup
            </a>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="default" className="h-8 w-8">
              <Menu className="text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-lg font-medium transition-colors hover:text-primary group inline-block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              ))}
              <Button asChild size="lg">
                <a
                  href="https://wa.me/2349040020889?text=Hi%20Prorecycler,%20I'd%20like%20to%20schedule%20a%20recycling%20pickup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule Pickup
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
