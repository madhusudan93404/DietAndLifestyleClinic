const Services = () => {
  const services = [
    {
      icon: "🥗",
      title: "Personalized Diet Plans",
      description: "Custom nutrition plans tailored to your specific needs, preferences, and health goals.",
    },
    {
      icon: "⚖️",
      title: "Weight Management",
      description: "Sustainable weight loss and weight gain programs with ongoing support and monitoring.",
    },
    {
      icon: "🏃‍♀️",
      title: "Sports Nutrition",
      description: "Specialized nutrition guidance for athletes and fitness enthusiasts to optimize performance.",
    },
    {
      icon: "🩺",
      title: "Medical Nutrition Therapy",
      description: "Therapeutic nutrition interventions for diabetes, hypertension, and other health conditions.",
    },
    {
      icon: "👶",
      title: "Pediatric Nutrition",
      description: "Nutrition counseling for children and adolescents to support healthy growth and development.",
    },
    {
      icon: "🤰",
      title: "Pregnancy Nutrition",
      description: "Comprehensive nutrition support for expecting and nursing mothers.",
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Comprehensive nutrition solutions for every stage of life</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
