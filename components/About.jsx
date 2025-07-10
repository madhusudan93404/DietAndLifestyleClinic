import Image from 'next/image'
import DietOffice from "../public/diet_office.jpg"

const About = () => {
  return (
      <section id="about" className="py-10 py-md-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-6 text-center">
                About Diet N Life Style Clinic
              </h2>
              <p className="text-gray-700 mb-4">
                Welcome to Diet N Life Style Clinic — your partner in transforming health through personalized,
                evidence-based nutrition.
                Backed by over a decade of expertise, we help you achieve lasting results with natural, sustainable
                lifestyle changes.
              </p>


              <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-6">
                <h3 className="text-xl font-semibold text-green-800 mb-2">Meet the Dietitian</h3>
                <p className="text-gray-800 font-medium">Mr. Homesh Mandawliya</p>
                <p className="text-gray-600 text-sm mb-2">BSc. - Human Nutrition</p>
                <p className="text-gray-600 text-sm mb-2">Therapist | Dietitian / Nutritionist</p>
                <p className="text-gray-600 text-sm mb-2">13 Years Experience Overall (10 years as specialist)</p>
                <p className="italic text-gray-700">"We are giving healthy lifestyle by nature way."</p>
              </div>

              <div className="flex justify-center mt-6">
                <div className="flex gap-6 md:gap-10">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-green-600">1000+</h3>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-green-600">10+</h3>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-green-600">95%</h3>
                    <p className="text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image
                  src={DietOffice}
                  alt="Dietitian consultation"
                  className="rounded-lg shadow-lg p-3"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
