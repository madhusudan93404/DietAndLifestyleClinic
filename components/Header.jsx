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
      <>
        {/* Desktop Header */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? "bg-white/98 shadow-lg backdrop-blur-md py-2"
                : "bg-white/95 backdrop-blur-md py-4"
        } hidden lg:block`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="logo">
                <h2 className="text-green-800 text-2xl font-bold font-serif">
                  Diet N Life Style Clinic
                </h2>
              </div>
              <nav>
                <ul className="flex gap-8">
                  {["home", "about", "services", "healthy-food", "blog", "contact"].map((section) => (
                      <li key={section}>
                        <button
                            onClick={() => scrollToSection(section)}
                            className="text-gray-700 font-medium hover:text-green-600 transition-colors duration-300 py-2 px-1 relative group"
                        >
                          {section === "healthy-food" ? "Nutrition" : section.charAt(0).toUpperCase() + section.slice(1)}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                        </button>
                      </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </header>

        {isMobileMenuOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
            />
        )}

        {/* Mobile Menu */}
        <nav className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-green-800 text-lg font-bold font-serif">
                Diet N Life Style Clinic
              </h3>
              <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className="block w-6 h-0.5 bg-gray-800 transform rotate-45 translate-y-0.5"></span>
                  <span className="block w-6 h-0.5 bg-gray-800 transform -rotate-45 -translate-y-0.5"></span>
                </div>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-1 py-8">
              <ul className="space-y-2">
                {[
                  { id: "home", label: "Home", icon: "🏠" },
                  { id: "about", label: "About", icon: "ℹ️" },
                  { id: "services", label: "Services", icon: "🔧" },
                  { id: "healthy-food", label: "Nutrition", icon: "🥗" },
                  { id: "blog", label: "Blog", icon: "📝" },
                  { id: "contact", label: "Contact", icon: "📞" }
                ].map((item) => (
                    <li key={item.id}>
                      <button
                          onClick={() => scrollToSection(item.id)}
                          className="flex items-center w-full px-6 py-4 text-left text-gray-700 hover:bg-green-50 hover:text-green-800 transition-colors duration-300 group"
                      >
                    <span className="text-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </span>
                        <span className="text-lg font-medium">
                      {item.label}
                    </span>
                        <span className="ml-auto text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      →
                    </span>
                      </button>
                    </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Footer */}
            <div className="p-6 border-t border-gray-200">
              <div className="text-center text-sm text-gray-500">
                <p>Your Health, Our Priority</p>
                <p className="mt-1">📍 Available for consultation</p>
              </div>
            </div>
          </div>
        </nav>




      </>
  )
}

export default Header