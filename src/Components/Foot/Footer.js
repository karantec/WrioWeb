import React from "react";

const WrioFooter = () => {
  return (
    <footer className="bg-gradient-to-br mt-4 from-emerald-400 to-teal-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">WRIO</h3>
            <p className="text-white/90 text-sm mb-4">
              A Platform for Smarter Order Booking. Multilingual, locally
              customized interface for seamless business operations.
            </p>

            {/* Social Icons → fixed */}
            <div className="flex space-x-4">
              <button
                type="button"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373..." />
                </svg>
              </button>

              <button
                type="button"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0..." />
                </svg>
              </button>

              <button
                type="button"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554..." />
                </svg>
              </button>

              <button
                type="button"
                className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0..." />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-white/90 hover:text-white text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="text-white/90 hover:text-white text-sm"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="/benefits"
                  className="text-white/90 hover:text-white text-sm"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="/pricing"
                  className="text-white/90 hover:text-white text-sm"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white/90 hover:text-white text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-white/90 hover:text-white text-sm">
                  Order Booking
                </button>
              </li>
              <li>
                <button className="text-white/90 hover:text-white text-sm">
                  Inventory Management
                </button>
              </li>
              <li>
                <button className="text-white/90 hover:text-white text-sm">
                  Analytics Dashboard
                </button>
              </li>
              <li>
                <button className="text-white/90 hover:text-white text-sm">
                  Multi-language Support
                </button>
              </li>
              <li>
                <button className="text-white/90 hover:text-white text-sm">
                  Mobile App
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-white/90 text-sm">+91 1234567890</span>
              </li>

              <li>
                <div className="flex flex-col gap-1">
                  <a
                    href="mailto:mahendra@wrio.in"
                    className="text-white/90 hover:text-white text-sm"
                  >
                    mahendra@wrio.in
                  </a>
                  <a
                    href="mailto:mahendrad.india@gmail.com"
                    className="text-white/90 hover:text-white text-sm"
                  >
                    mahendrad.india@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2">
                <span className="text-white/90 text-sm">
                  Mumbai, Maharashtra, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/80">
              © 2024 WRIO. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="/privacy"
                className="text-white/80 hover:text-white text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/80 hover:text-white text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-white/80 hover:text-white text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default WrioFooter;
