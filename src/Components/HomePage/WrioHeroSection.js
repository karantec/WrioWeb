import React, { useState, useEffect } from "react";

const WrioHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: "🚀", title: "Quick Setup", desc: "Launch in under 5 minutes" },
    { icon: "🌍", title: "15+ Languages", desc: "Reach more customers" },
    { icon: "📊", title: "Smart Analytics", desc: "Data-driven decisions" },
    { icon: "💳", title: "Easy Payments", desc: "Multiple payment options" },
  ];

  const stats = [
    { value: "10K+", label: "Happy Businesses", icon: "🏪" },
    { value: "2M+", label: "Orders Processed", icon: "📦" },
    { value: "99.9%", label: "Uptime", icon: "⚡" },
    { value: "4.9★", label: "User Rating", icon: "⭐" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-teal-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-teal-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-emerald-100 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Top Banner */}
        <div
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg shadow-teal-200">
            <span className="animate-pulse">✨</span> Trusted by 10,000+
            businesses worldwide
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create Your Online
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                  {" "}
                  Ordering System{" "}
                </span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M2 6C50 2 150 2 198 6"
                    stroke="#14b8a6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              in Minutes
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Whether you're one store or 100 —{" "}
              <span className="font-semibold text-gray-800">Wrio</span> helps
              small businesses take orders instantly and lets franchise brands
              manage all outlets from one powerful dashboard.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeFeature === i
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg shadow-teal-200 scale-105"
                      : "bg-white shadow-md hover:shadow-lg hover:scale-102"
                  }`}
                  onClick={() => setActiveFeature(i)}
                >
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        activeFeature === i ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {f.title}
                    </p>
                    <p
                      className={`text-xs ${
                        activeFeature === i ? "text-teal-100" : "text-gray-500"
                      }`}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-xl font-semibold text-lg shadow-xl shadow-teal-200 hover:shadow-2xl hover:shadow-teal-300 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Create your store — Free
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
              <button className="group px-8 py-4 bg-white text-gray-800 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-teal-400 hover:text-teal-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-md">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="text-center p-3 bg-white/60 backdrop-blur rounded-xl"
                >
                  <span className="text-lg">{s.icon}</span>
                  <p className="text-xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-xs text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Device Mockups */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full blur-3xl opacity-20 scale-75"></div>

              {/* Desktop Mockup */}
              <div className="absolute right-0 top-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg text-xs px-3 py-1 text-gray-400 flex items-center gap-2">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    dashboard.wrio.app
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Total Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">
                        $24,580
                      </p>
                      <span className="text-xs text-emerald-500 font-medium">
                        ↑ 12.5% this week
                      </span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl">
                      📈
                    </div>
                  </div>
                  <div className="h-20 mb-4">
                    <svg viewBox="0 0 280 60" className="w-full h-full">
                      <defs>
                        <linearGradient
                          id="chartGrad"
                          x1="0%"
                          y1="0%"
                          x2="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#14b8a6"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#14b8a6"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,50 Q40,45 70,35 T140,25 T210,20 T280,10"
                        fill="none"
                        stroke="#14b8a6"
                        strokeWidth="3"
                      />
                      <path
                        d="M0,50 Q40,45 70,35 T140,25 T210,20 T280,10 L280,60 L0,60 Z"
                        fill="url(#chartGrad)"
                      />
                      <circle cx="280" cy="10" r="4" fill="#14b8a6" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    {["Outlet Alpha", "Outlet Beta", "Outlet Gamma"].map(
                      (name, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between bg-white p-2 rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm ${
                                i === 0
                                  ? "bg-teal-500"
                                  : i === 1
                                  ? "bg-emerald-500"
                                  : "bg-cyan-500"
                              }`}
                            >
                              {["🏪", "🛒", "🎯"][i]}
                            </div>
                            <span className="text-sm font-medium text-gray-700">
                              {name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            ${[8420, 6340, 4820][i]}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative z-20 mr-24 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl w-60">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-2xl z-10"></div>
                  <div className="bg-white rounded-[2.2rem] overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 px-5 py-3 flex justify-between items-center text-white text-xs">
                      <span className="font-semibold">9:41</span>
                      <div className="flex gap-1 items-center">
                        <span>📶</span>
                        <span>🔋</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-b from-teal-50 to-white p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-xs text-gray-500">
                            Good morning! 👋
                          </p>
                          <p className="font-bold text-gray-900">
                            Ice Cream Shop
                          </p>
                        </div>
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold">
                          W
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl shadow-lg p-4 mb-3">
                        <div className="flex justify-center mb-3">
                          <div className="w-24 h-28 bg-gradient-to-b from-amber-50 to-amber-100 rounded-2xl flex items-center justify-center">
                            <span className="text-5xl">🍦</span>
                          </div>
                        </div>
                        <h3 className="text-base font-bold text-gray-800 text-center">
                          Vanilla Cone
                        </h3>
                        <p className="text-xs text-gray-400 text-center mb-2">
                          Premium Quality
                        </p>
                        <div className="flex items-center justify-center gap-1 mb-3">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="text-yellow-400 text-xs">
                              ★
                            </span>
                          ))}
                          <span className="text-xs text-gray-400 ml-1">
                            (128)
                          </span>
                        </div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-teal-600">
                            $4.99
                          </span>
                          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                            <button className="text-teal-600 font-bold">
                              −
                            </button>
                            <span className="text-sm font-semibold">1</span>
                            <button className="text-teal-600 font-bold">
                              +
                            </button>
                          </div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-3 rounded-xl font-semibold shadow-lg shadow-teal-200 flex items-center justify-center gap-2">
                          <span>Add to Cart</span>
                          <span>🛒</span>
                        </button>
                      </div>
                    </div>
                    <div className="bg-white py-2 flex justify-center">
                      <div className="w-28 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification */}
              <div className="absolute -left-4 top-1/3 bg-white rounded-xl shadow-xl p-3 z-30 animate-bounce">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">
                      New Order!
                    </p>
                    <p className="text-xs text-gray-500">+$24.99</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-center text-sm text-gray-400 mb-6 font-medium uppercase tracking-wider">
            Powering businesses across industries
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              "Restaurants",
              "Retail Stores",
              "Cafes",
              "Bakeries",
              "Food Trucks",
            ].map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-2xl">
                  {["🍕", "🛍️", "☕", "🥐", "🚚"][i]}
                </span>
                <span className="font-semibold text-gray-700">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WrioHeroSection;
