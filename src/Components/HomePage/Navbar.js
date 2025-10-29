import React, { useState } from "react";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      label: "Digital Marketing",
      icon: "🟥",
      items: [
        "Social Media Management",
        "Performance Marketing (Meta & Google Ads)",
        "Influencer Marketing",
        "WhatsApp API Marketing",
        "Google My Business Optimization",
        "SEO (On-page & Local)",
        "Email Marketing",
        "Marketing Automation",
      ],
    },
    {
      label: "Content Creation",
      icon: "🎬",
      items: [
        "Reels Production",
        "Social Media Content Creation",
        "Photography & Videography",
        "Video Editing",
        "Graphic Design",
        "Scriptwriting & Storyboarding",
        "Voiceover & Dubbing",
        "Brand Films / Ad Films",
      ],
    },
    {
      label: "Web Design & IT",
      icon: "💻",
      items: [
        "Personal Website",
        "Business / Corporate Website",
        "E-Commerce Website",
        "Mobile Application (iOS & Android)",
        "Landing Page / Funnel Design",
        "Website Maintenance & Security",
      ],
    },
    {
      label: "Publicity & PR",
      icon: "📰",
      items: [
        "Personal Branding",
        "Media News & PR Coverage",
        "Podcast Production & Marketing",
        "Film / Event Publicity",
        "Wikipedia / ORM (Online Reputation Management)",
      ],
    },
    {
      label: "Others",
      icon: "⚙️",
      items: [
        "Marketing Consultancy",
        "Sales Consultancy",
        "AI Tools Integration",
        "Training & Workshops",
        "Live Classes / Webinars",
        "Free Learning Videos",
        "Downloadable Resources (PDFs, Templates)",
      ],
    },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-[#191919]/80 backdrop-blur-md
        shadow-md transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://cubemultimedia.in/wp-content/uploads/2023/03/cube-web-logo-home-10.png"
              alt="Cube Multimedia Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((menu, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-3 py-2 text-white hover:text-[#ffc107] text-sm flex items-center gap-1 transition-colors">
                  {menu.label}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {activeDropdown === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl z-50 w-[400px]">
                    <div className="p-4">
                      <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span>{menu.icon}</span>
                        {menu.label}
                      </h4>
                      <div className="space-y-1 max-h-96 overflow-y-auto">
                        {menu.items.map((item, i) => (
                          <a
                            key={i}
                            href="#"
                            className="block text-sm text-gray-700 py-2 px-3 hover:text-[#003d66] hover:bg-gray-50 rounded transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Login Button */}
            <button className="ml-4 px-4 py-2 border border-white text-white hover:bg-white/10 rounded text-sm transition-colors">
              Login
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white text-2xl p-2"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#002d4d] text-white border-t border-[#004d7a]">
          {menuItems.map((menu, index) => (
            <div key={index} className="border-b border-[#004d7a]">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === index ? null : index)
                }
                className="w-full text-left px-4 py-3 flex justify-between items-center hover:bg-[#004d7a] transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span>{menu.icon}</span>
                  {menu.label}
                </span>
                <span>{activeDropdown === index ? "▲" : "▼"}</span>
              </button>
              {activeDropdown === index && (
                <div className="px-6 py-2 space-y-2 bg-[#002440]">
                  {menu.items.map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block text-gray-200 hover:text-[#ffc107] text-sm py-1 transition-colors"
                    >
                      ▸ {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Login - Mobile */}
          <div className="p-4">
            <button className="w-full px-4 py-2 border border-white text-white hover:bg-white/10 rounded text-sm transition-colors">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
