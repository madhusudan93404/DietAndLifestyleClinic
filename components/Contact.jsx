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
    alert("Thank you for your message! We will get back to you soon.")
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
      <div className="container">
        <h2>Get In Touch</h2>
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
