import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Mail, Phone, MapPin, Recycle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary/10 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src={"/images/logo.png"} alt="Prorecycler Logo image" width={100} height={80}/>
            <p className="mt-4 text-sm text-muted-foreground">
              Transforming Nigeria's waste challenges into sustainable opportunities through innovative recycling
              solutions.
            </p>
            <div className="mt-6 flex space-x-4">
              {/* <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link> */}
              <Link href="https://www.instagram.com/prorecyclers?igsh=MTZzdHdqajNyYnk5bg==" target="_blank" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://x.com/prorecyclers" target="_blank" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://wa.me/2349040020889?text=Hi%20Prorecycler,%20I'd%20like%20to%20schedule%20a%20recycling%20pickup." target="_blank" className="text-muted-foreground hover:text-primary">
                <Image src={"/images/whatsapp-icon.png"} alt="Whatsapp icon" width={5} height={5} className="h-5 w-5" />
                <span className="sr-only">Whatsapp</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>
              {/* <li>
                <Link href="/impact" className="text-sm text-muted-foreground hover:text-primary">
                  Impact
                </Link>
              </li> */}
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Plastic Recycling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Cardboard Recycling
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Can Recycling
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/2349040020889?text=Hi%20Prorecycler,%20I'd%20like%20to%20schedule%20a%20recycling%20pickup." className="text-sm text-muted-foreground hover:text-primary">
                  Schedule Pickup
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-muted-foreground">
                  25, Opa Farm Street, Off Agelasho Ajara Vetho, Badagry, Lagos State.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <p className="text-sm text-muted-foreground">+234 904 0020 889,<br/> +234 810 9891 479</p>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">prorecyclersng@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © 2025 Prorecycler. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
