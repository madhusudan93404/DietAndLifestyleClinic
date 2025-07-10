const Footer = () => {
  return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Diet N Life Style Clinic</h3>
              <p>
                Your trusted partner in achieving optimal health through personalized nutrition and lifestyle
                modifications. Transform your life with our expert guidance and evidence-based approach.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#healthy-food">Nutrition</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Weight Management</a></li>
                <li><a href="#">Sports Nutrition</a></li>
                <li><a href="#">Medical Nutrition Therapy</a></li>
                <li><a href="#">Pediatric Nutrition</a></li>
                <li><a href="#">Pregnancy Nutrition</a></li>
                <li><a href="#">Online Consultations</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-details">
                <p>
                  <strong>📍 Main Clinic Address:</strong>
                  <br />
                  LG-9, Cross Road, Building,
                  <br />
                  Vijay Nagar Square, Indore, Madhya Pradesh 452010
                </p>
                <p>
                  <strong>📍 Second Clinic Address:</strong>
                  <br />
                  6B, Annapurna Rd, Bhawanipur Colony, Indore, Madhya Pradesh 452009
                </p>
                <p className="mt-1 text-sm text-gray-400">
                  <em>Available only on Sunday: 10:30 AM – 3:00 PM</em>
                </p>
                <p>
                  <strong>📞 Phone:</strong>
                  <br />
                  +91 99938 88547
                </p>
                <p>
                  <strong>✉️ Email:</strong>
                  <br />
                  info@dietlifestyleclinic.com
                </p>
                <p>
                  <strong>🕒 Hours:</strong>
                  <br />
                  Mon-Sat: 6:00 PM – 9:00 PM
                  <br />
                  Sun: Closed (except Annapurna clinic)
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2024 Diet N Life Style Clinic. All rights reserved.</p>
              <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
