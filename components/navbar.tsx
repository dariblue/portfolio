"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Experiencia", href: "/experience" },
    { name: "Contacto", href: "/contact" },
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/">
            <span className="logo-d">D</span>ario<span className="logo-blue">/DariBlue</span>
          </Link>
        </div>
        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? "active" : ""}`} id="navMenu">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="nav-link">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
