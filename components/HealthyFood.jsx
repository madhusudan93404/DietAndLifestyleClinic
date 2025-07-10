import BoostsImmuneSystem from "../public/boostImmunity.avif"
import ImprovesMentalHealth from "../public/ImproveMentalHealth.avif"
import SupportsHealthyWeightManagement from "../public/SupportsHealthyWeight.avif"
import ReducesRiskChronicDiseases from "../public/ReducesRiskDiseases.webp"
import IncreasesEnergyLevels from "../public/IncreaseEnergyLevel.avif"
import PromotesLongevity from "../public/PromotesLongevity.avif"
const HealthyFood = () => {
  const benefits = [
    {
      title: "Boosts Immune System",
      description: "Nutrient-rich foods strengthen your body's natural defenses",
      image: BoostsImmuneSystem,
    },
    {
      title: "Improves Mental Health",
      description: "Proper nutrition supports brain function and emotional well-being",
      image: ImprovesMentalHealth,
    },
    {
      title: "Supports Healthy Weight Management",
      description: "Balanced diets help regulate appetite and promote healthy body weight",
      image: SupportsHealthyWeightManagement
    },
    {
      title: "Reduces Risk of Chronic Diseases",
      description: "Nutritious foods lower the risk of heart disease, diabetes, and more",
      image: ReducesRiskChronicDiseases
    },
    {
      title: "Promotes Longevity",
      description: "Healthy eating habits contribute to a longer, healthier life",
      image: PromotesLongevity,
    },
    {
      title: "Increases Energy Levels",
      description: "Balanced meals provide sustained energy throughout the day",
      image: IncreasesEnergyLevels,
    },
  ]

  return (
    <section id="healthy-food" className="healthy-food">
      <div className="container">
        <h2>The Importance of Healthy Food</h2>
        <p className="section-subtitle">Discover how proper nutrition can transform your life and well-being</p>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <img src={benefit.image.src || "/placeholder.svg"} alt={benefit.title} />
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="nutrition-facts">
          <h3>Key Nutrition Facts</h3>
          <div className="facts-grid">
            <div className="fact">
              <h4>5-9 Servings</h4>
              <p>Fruits & vegetables daily</p>
            </div>
            <div className="fact">
              <h4>8 Glasses</h4>
              <p>Water per day</p>
            </div>
            <div className="fact">
              <h4>25-35g</h4>
              <p>Fiber daily</p>
            </div>
            <div className="fact">
              <h4>Less than 10%</h4>
              <p>Added sugars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HealthyFood
