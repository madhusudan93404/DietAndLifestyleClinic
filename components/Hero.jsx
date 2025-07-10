"use client"

import { useState, useEffect } from "react"
import SlideImage5 from "../public/diet_slider5.avif"
import SlideImage6 from "../public/diet_slider6.avif"
 import SlideImage7 from "../public/diet_slider7.avif"
import { FiPhoneCall } from "react-icons/fi"
const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: SlideImage5,
      title: "Transform Your Life with Proper Nutrition",
      subtitle: "Expert dietitian guidance for a healthier you",
      cta: "Book Consultation",
    },
    {
      image: SlideImage6,
      title: "Personalized Diet Plans",
      subtitle: "Customized nutrition solutions for your lifestyle",
      cta: "Learn More",
    },
    {
      image: SlideImage7,
      title: "Achieve Your Health Goals",
      subtitle: "Professional support every step of the way",
      cta: "Get Started",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
                style={{backgroundImage: `url(${slide.image.src})`}}
            >
              <div className="slide-content">
                <div className="container">
                  <h1 className="slide-title">{slide.title}</h1>
                  <p className="slide-subtitle">{slide.subtitle}</p>
                  <button className="cta-button">{slide.cta}</button>
                </div>
                <a
                    href="tel:+919993888547"
                    className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-lg animate-pulse hover:bg-green-700 transition"
                    aria-label="Call Now"
                >
                  <FiPhoneCall size={24} />
                </a>
              </div>
            </div>
        ))}
      </div>
      <div className="slider-dots">
        {slides.map((_, index) => (
            <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
            />
        ))}
      </div>
    </section>
  )
}

export default Hero
