// src/components/WrioNavbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { Globe, Info } from "lucide-react";
import { useLanguage } from "../../LanguageContext";

/* LanguageDropdown component */
const LanguageDropdown = ({ language, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "hi", label: "हिंदी", flag: "🇮🇳" },
    { code: "mr", label: "मराठी", flag: "🇮🇳" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === language) || languages[0];

  // Click outside -> close
  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape to close
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setIsOpen((s) => !s)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        type="button"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 hover:border-green-500 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        <Globe className="w-4 h-4 text-gray-600" />
        <span className="text-sm font-medium text-gray-700">
          {currentLang.flag} {currentLang.label}
        </span>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
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

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              type="button"
              // onMouseDown ensures it fires before blur; click-outside is also present for safety.
              onMouseDown={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 transition-colors ${
                language === lang.code
                  ? "bg-green-50 text-green-700 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <svg
                  className="w-4 h-4 ml-auto text-green-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* WrioNavbar component */
const WrioNavbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const onLanguageChange = (code) => {
    setLanguage(code);
    // close mobile menu if open (useful when switching on mobile)
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-black text-xl">W</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                WRIO
              </span>
              <span className="text-xs text-gray-500 -mt-1 font-medium">
                {t("tagline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              {t("home")}
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 text-sm font-medium"
            >
              {t("contact")}
            </Link>
          </div>

          {/* Right Section */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageDropdown
              language={language}
              onLanguageChange={onLanguageChange}
            />

            <Link
              to="/get-started"
              className="px-5 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {t("getStarted")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700 hover:text-green-600 py-2 text-sm font-medium"
            >
              {t("home")}
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-gray-700 hover:text-green-600 py-2 text-sm font-medium"
            >
              {t("contact")}
            </Link>

            {/* Mobile Language Section */}
            <div className="border-t border-gray-200 pt-3 mt-3">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                Choose Language
              </p>
              <LanguageDropdown
                language={language}
                onLanguageChange={onLanguageChange}
              />
            </div>

            <Link
              to="/get-started"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full px-5 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg text-sm font-medium shadow-sm mt-3 block text-center"
            >
              {t("getStarted")}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default WrioNavbar;
