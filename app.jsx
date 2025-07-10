import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import HealthyFood from "./components/HealthyFood"
import Testimonials from "./components/Testimonials"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles/global.css"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <HealthyFood />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
