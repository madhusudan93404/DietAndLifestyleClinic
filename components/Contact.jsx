"use client"

import { useState } from "react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [showToast, setShowToast] = useState(false)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="contact">


        {showToast && (
            <div
                className="fixed top-5 lg:top-16 right-5 bg-green-500 text-white px-4 py-3 rounded shadow-lg animate-slide-in">
              ✅ Thank you! We’ll get back to you soon.
            </div>
        )}


      <div className="container">
        <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">Get In Touch</h3>
        <p className="section-subtitle">Ready to start your health journey? Contact us today!</p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>

            <div className="contact-item">
              <strong>📍 Main Clinic Address:</strong>
              <p>
                LG-9, Cross Road, Building,
                <br/>
                Vijay Nagar Square, Indore, Madhya Pradesh 452010
              </p>
            </div>

            <div className="contact-item">
              <strong>📍 Second Clinic Address:</strong>
              <p>
                6B, Annapurna Rd,
                <br/>
                Bhawanipur Colony, Indore, Madhya Pradesh 452009
              </p>
              <p className="mt-1 text-sm text-gray-600">
                <em>Available only on Sunday: 10:30 AM – 3:00 PM</em>
              </p>
            </div>

            <div className="contact-item">
              <strong>📞 Phone:</strong>
              <p>+91 99938 88547</p>
            </div>

            <div className="contact-item">
              <strong>✉️ Email:</strong>
              <p>info@dietlifestyleclinic.com</p>
            </div>

            <div className="contact-item">
              <strong>🕒 Hours:</strong>
              <p>
                Mon-Sat: 6:00 PM – 9:00 PM
                <br/>
                Sun: Closed (except at Annapurna clinic)
              </p>
            </div>
          </div>


          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select Service</option>
                <option value="weight-management">Weight Management</option>
                <option value="sports-nutrition">Sports Nutrition</option>
                <option value="medical-nutrition">Medical Nutrition Therapy</option>
                <option value="pediatric-nutrition">Pediatric Nutrition</option>
                <option value="pregnancy-nutrition">Pregnancy Nutrition</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
