"use client"

import { useState, useEffect } from "react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="logo">
          <h2>Diet N Life Style Clinic</h2>
        </div>
        <nav className={`nav ${isMobileMenuOpen ? "nav-open" : ""}`}>
          <ul>
            <li>
              <button onClick={() => scrollToSection("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("about")}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("services")}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("healthy-food")}>Nutrition</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("blog")}>Blog</button>
            </li>
            <li>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </li>
          </ul>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header
