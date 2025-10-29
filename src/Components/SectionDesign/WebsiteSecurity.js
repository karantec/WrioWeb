import React, { useState, useEffect } from "react";
import {
  Shield,
  Server,
  Wrench,
  BarChart,
  Check,
  ArrowRight,
  Sparkles,
  Lock,
  Zap,
} from "lucide-react";
import TestimonialCarousel from "./Testimonial";
import MarketingLandingPage from "./TopDesign";

export default function WebsiteMaintenanceSecurity() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 🌟 All content centralized here
  const heroContent = {
    tag: "Keep Your Website Fast, Secure & Always Online",
    title: "Website Maintenance & Security",
    description:
      "Keep your site fast, secure, and up-to-date. Cube manages updates, backups, and protection — so you can focus on growing your business.",
    features: ["24/7 Monitoring", "Regular Backups", "Speed Optimization"],
    price: "₹4,999/month",
  };

  const processSteps = [
    {
      step: "01",
      title: "Website Audit & Backup Setup",
      description:
        "We perform a full audit of your website, create a complete backup, and assess its current performance.",
      icon: Server,
    },
    {
      step: "02",
      title: "Update Plugins & Themes",
      description:
        "We update your CMS, plugins, and themes regularly to eliminate vulnerabilities and ensure compatibility.",
      icon: Wrench,
    },
    {
      step: "03",
      title: "Security Configuration",
      description:
        "Advanced firewall, SSL, and malware monitoring are configured for continuous threat protection.",
      icon: Shield,
    },
    {
      step: "04",
      title: "Speed Optimization",
      description:
        "We enhance load times with CDN setup, image compression, and caching improvements.",
      icon: Zap,
    },
    {
      step: "05",
      title: "Monthly Reporting & Alerts",
      description:
        "You receive detailed performance and security reports along with alert notifications if issues arise.",
      icon: BarChart,
    },
  ];

  const overviewSection = {
    tag: "Why It Matters",
    title: "Ensure Continuous Performance & Protection",
    description:
      "Regular maintenance ensures your website stays live, secure, and optimized for performance. We handle updates, monitoring, and backups — so your brand stays online, 24/7.",
  };

  const ctaSection = {
    icon: Sparkles,
    title: "Keep Your Website Secure with Cube Multimedia",
    description:
      "Stay protected, stay fast — let us handle your maintenance and security.",
    buttonText: "Get Maintenance Plan",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <MarketingLandingPage />

      {/* Background animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* HERO SECTION */}
      <div className="relative bg-gradient-to-br from-red-700 via-rose-800 to-red-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium border border-white/30">
                <Lock className="w-4 h-4 animate-pulse text-rose-100" />
                <span>{heroContent.tag}</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-rose-100">
                {heroContent.title}
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-rose-50">
                {heroContent.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm">
                {heroContent.features.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Check className="w-5 h-5 text-green-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Card */}
            <div className="flex-1">
              <div className="relative bg-white/95 backdrop-blur-lg text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-rose-500/20 transition-all duration-500 overflow-hidden">
                <div className="absolute -top-3 right-8 bg-gradient-to-r from-red-500 via-rose-600 to-red-700 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm animate-bounce-slow">
                  🔒 Starting at {heroContent.price}
                </div>

                <div className="relative mt-6 space-y-6">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🛡️</div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Protect Your Website
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Keep your website secure and optimized with Cube —
                      starting from{" "}
                      <span className="text-red-600 font-bold">
                        {heroContent.price}
                      </span>
                    </p>
                  </div>

                  <form className="space-y-4">
                    {["Email", "Mobile Number", "City/Pincode"].map(
                      (placeholder, i) => (
                        <input
                          key={i}
                          type="text"
                          placeholder={placeholder}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                        />
                      )
                    )}

                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>Get updates via</span>
                      <span className="text-green-600 font-semibold">
                        WhatsApp
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-red-600 to-rose-700 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <span>Request Free Audit</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OVERVIEW */}
      <div className="py-20 bg-gradient-to-b from-white to-rose-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
            {overviewSection.tag}
          </span>
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
            {overviewSection.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            {overviewSection.description}
          </p>
        </div>
      </div>

      {/* PROCESS */}
      <div className="py-20 bg-gradient-to-br from-rose-50 via-white to-red-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-rose-700">
              How We Keep Your Site Secure
            </h2>
          </div>

          <div className="space-y-6">
            {processSteps.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl shadow-lg border-l-4 border-red-600 hover:shadow-2xl hover:-translate-x-2 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-700 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all">
                    {item.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <item.icon className="w-6 h-6 text-red-600" />
                      <h3 className="text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-br from-red-700 via-rose-800 to-red-900 text-center relative overflow-hidden">
        <ctaSection.icon className="w-16 h-16 text-yellow-300 mx-auto mb-8 animate-bounce-slow" />
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          {ctaSection.title}
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-rose-100">
          {ctaSection.description}
        </p>
        <button className="group bg-white text-red-700 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-110 inline-flex items-center gap-3 transition-all">
          {ctaSection.buttonText}
          <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer { animation: shimmer 3s infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        @keyframes bounce-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}
