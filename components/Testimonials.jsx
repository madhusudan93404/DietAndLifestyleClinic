"use client"

import { useState } from "react"
import Image1 from "../public/icon_man1.avif"
import Image2 from "../public/icon_woman1.avif"
import Image3 from "../public/icon_woman2.avif"

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Priya Dhakad",
      role: "Working Professional",
      image: Image2,
      text: "The personalized diet plan helped me lose 15 kg in 6 months. The team at Diet N Life Style Clinic provided excellent support throughout my journey.",
    },
    {
      name: "Chetan Sharma",
      role: "Athlete",
      image: Image1,
      text: "As a professional athlete, proper nutrition is crucial. Their sports nutrition program significantly improved my performance and recovery time.",
    },
    {
      name: "Riya Jain",
      role: "New Mother",
      image: Image3,
      text: "The pregnancy nutrition counseling was invaluable. I had a healthy pregnancy and my baby is thriving thanks to their expert guidance. thank you",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-4">
            <button
                className="text-3xl text-green-700 hover:text-green-900 transition"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="bg-white rounded-lg shadow-md p-6 md:p-8 w-full mx-auto max-w-md md:max-w-lg lg:max-w-xl">
              <img
                  src={testimonials[currentTestimonial].image.src || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <p className="text-gray-700 italic mb-4">"{testimonials[currentTestimonial].text}"</p>
              <h4 className="text-green-800 font-semibold">~ {testimonials[currentTestimonial].name}</h4>
              <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</p>
            </div>

            <button
                className="text-3xl text-green-700 hover:text-green-900 transition"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </section>

  )
}

export default Testimonials
