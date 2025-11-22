import React from "react";
import {
  Store,
  Building2,
  Zap,
  Smartphone,
  BookOpen,
  Users,
  LayoutDashboard,
  Settings,
  FileBarChart,
  PackageCheck,
} from "lucide-react";

export default function WrioApproach() {
  const smallBusiness = {
    title: "For Small Businesses",
    features: [
      "Create your store in minutes",
      "No tech knowledge needed",
      "Simple order-taking app",
      "Payments, menu, customers - everything built in",
    ],
    cta: "Start your store",
    ctaStyle: "filled",
  };

  const franchise = {
    title: "For Franchise Brands",
    features: [
      "Multi-store dashboard",
      "Head office controls",
      "Outlet-wise reports",
      "Purchase/stock flow",
    ],
    cta: "Book franchise demo",
    ctaStyle: "outlined",
  };

  const smallBusinessFeatures = [
    { icon: Zap, text: "Quick setup" },
    { icon: Smartphone, text: "Order-taking on phone/tablet" },
    { icon: BookOpen, text: "Digital menu" },
    { icon: Users, text: "Customer tracking" },
  ];

  const franchiseFeatures = [
    { icon: LayoutDashboard, text: "Multi-store dashboard" },
    { icon: Settings, text: "Head office controls" },
    { icon: FileBarChart, text: "Outlet-wise reports" },
    { icon: PackageCheck, text: "Purchase/stock flow" },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top Section - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Small Business Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              For Small Businesses
            </h2>
            <ul className="space-y-3 mb-8">
              {smallBusiness.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
              Start your store
            </button>
          </div>

          {/* Franchise Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              For Franchise Brands
            </h2>
            <ul className="space-y-3 mb-8">
              {franchise.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 transition-colors">
              Book franchise demo
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-16"></div>

        {/* Bottom Section - Features */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Small Business Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Features for Small Businesses
            </h2>
            <ul className="space-y-4">
              {smallBusinessFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Franchise Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Features for Franchise Chains
            </h2>
            <ul className="space-y-4">
              {franchiseFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{feature.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
