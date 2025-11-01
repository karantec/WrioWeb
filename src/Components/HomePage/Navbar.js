import React, { useState } from "react";

const WrioNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/de4ks8mkh/image/upload/v1761988724/Screenshot_2025-11-01_144833_owakse.png"
              alt="WRIO Logo"
              className="h-8 w-auto"
            />
            <div className="hidden sm:block ml-2 text-1xl text-gray-600 border-l border-gray-300 pl-2">
              Smarter Order Booking
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-green-600 text-md font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-700 hover:text-green-600 text-md font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="text-gray-700 hover:text-green-600 text-md font-medium transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-green-600 text-md font-medium transition-colors"
            >
              Contact
            </button>
            <button className="px-5 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg text-md font-medium transition-colors shadow-sm">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-gray-700 hover:text-green-600 py-2 text-sm font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="block w-full text-left text-gray-700 hover:text-green-600 py-2 text-sm font-medium transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("benefits")}
              className="block w-full text-left text-gray-700 hover:text-green-600 py-2 text-sm font-medium transition-colors"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-gray-700 hover:text-green-600 py-2 text-sm font-medium transition-colors"
            >
              Contact
            </button>
            <button className="w-full px-5 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg text-sm font-medium transition-colors shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default WrioNavbar;
