import React, { useState } from "react";
import {
  Package,
  Cloud,
  TrendingUp,
  Users,
  BarChart3,
  Shield,
  Zap,
  Globe,
} from "lucide-react";

export default function WrioApproach() {
  const [activeStep, setActiveStep] = useState(null);

  const approaches = [
    {
      icon: Cloud,
      title: "Cloud-First Architecture",
      subtitle: "Zero Infrastructure, Maximum Flexibility",
      description:
        "Built entirely on cloud infrastructure, eliminating the need for servers, installations, or dedicated IT teams. Access your business from anywhere, anytime.",
      benefits: [
        "No hardware costs",
        "Auto-scaling infrastructure",
        "99.9% uptime guarantee",
        "Automatic updates & backups",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Multi-Level Distribution",
      subtitle: "Connect Your Entire Network",
      description:
        "Seamlessly manage complex distribution hierarchies from manufacturers to end customers. Every stakeholder stays connected and informed.",
      benefits: [
        "Manufacturer → Distributor → Retailer flow",
        "Franchise management",
        "Partner performance tracking",
        "Unified communication",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Real-Time Operations",
      subtitle: "Instant Visibility, Faster Decisions",
      description:
        "Monitor orders, inventory, and partner activities as they happen. Make informed decisions with live data and smart analytics.",
      benefits: [
        "Live order tracking",
        "Instant stock updates",
        "Real-time notifications",
        "Dynamic pricing control",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      subtitle: "Smart Analytics for Smarter Growth",
      description:
        "Transform raw data into actionable insights. Understand trends, optimize inventory, and identify growth opportunities with powerful dashboards.",
      benefits: [
        "Sales performance metrics",
        "Demand forecasting",
        "Partner analytics",
        "Custom reports",
      ],
      color: "from-green-600 to-emerald-600",
    },
  ];

  const workflow = [
    {
      step: "1",
      title: "Quick Onboarding",
      desc: "Set up your account and invite partners in minutes",
    },
    {
      step: "2",
      title: "Configure Catalog",
      desc: "Upload products, set pricing, and define distribution rules",
    },
    {
      step: "3",
      title: "Connect Network",
      desc: "Add distributors, retailers, and franchise partners",
    },
    {
      step: "4",
      title: "Start Ordering",
      desc: "Partners begin placing orders through the platform",
    },
    {
      step: "5",
      title: "Track & Optimize",
      desc: "Monitor performance and scale your operations",
    },
  ];

  const principles = [
    {
      icon: Package,
      text: "Simplicity Over Complexity",
      desc: "Intuitive interfaces that anyone can use",
    },
    {
      icon: Shield,
      text: "Security First",
      desc: "Bank-grade encryption and role-based access",
    },
    {
      icon: TrendingUp,
      text: "Built to Scale",
      desc: "Grows seamlessly with your business",
    },
    {
      icon: Globe,
      text: "Mobile-Ready",
      desc: "Full functionality on any device",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Our Approach
            </span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            How Wrio Works{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Differently
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive platform designed with SMEs in mind. No complexity,
            just results.
          </p>
        </div>

        {/* Core Approaches */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {approaches.map((approach, idx) => {
            const Icon = approach.icon;
            const isActive = activeStep === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 ${
                  isActive ? "border-green-500 scale-105" : "border-transparent"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${approach.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {approach.title}
                </h3>
                <p className="text-green-600 font-semibold mb-4">
                  {approach.subtitle}
                </p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {approach.description}
                </p>

                <div
                  className={`grid grid-cols-2 gap-3 transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {approach.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Workflow Timeline */}
        <div className="bg-white rounded-3xl p-10 shadow-xl mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
            Implementation Workflow
          </h2>
          <p className="text-slate-600 text-center mb-12">
            From setup to scale in 5 simple steps
          </p>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-green-200 via-emerald-200 to-teal-200 hidden md:block"></div>

            <div className="grid md:grid-cols-5 gap-6">
              {workflow.map((item, idx) => (
                <div key={idx} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-lg relative z-10">
                      {item.step}
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
            Design Principles
          </h2>
          <p className="text-slate-600 text-center mb-12">
            The foundation of everything we build
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {principles.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mx-auto mb-4 group-hover:from-green-500 group-hover:to-emerald-600 transition-all duration-300">
                    <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">
                    {principle.text}
                  </h4>
                  <p className="text-sm text-slate-600">{principle.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why It Matters */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Why This Approach Matters</h2>
          <p className="text-xl text-green-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Traditional ordering systems are built for enterprises with big IT
            budgets. Wrio is built for businesses like yours—where simplicity,
            speed, and scalability matter more than complexity. We believe
            technology should empower growth, not create barriers.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs">
              <div className="text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-green-100">
                Faster order processing compared to manual methods
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-green-100">
                Reduction in order errors and miscommunication
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-xs">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-green-100">
                Real-time access to your entire business network
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
