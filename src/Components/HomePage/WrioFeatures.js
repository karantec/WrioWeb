import React, { useState } from "react";
import {
  ShoppingCart,
  Users,
  Cloud,
  Lock,
  BarChart3,
  Bell,
  Package,
  Smartphone,
  DollarSign,
  FileText,
  Settings,
  Layers,
  TrendingUp,
  Shield,
  Zap,
  RefreshCw,
  MapPin,
  CheckCircle,
  Clock,
  Eye,
  Database,
} from "lucide-react";

export default function WrioFeatures() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const categories = [
    { id: "all", name: "All Features", icon: Layers },
    { id: "ordering", name: "Ordering", icon: ShoppingCart },
    { id: "distribution", name: "Distribution", icon: Package },
    { id: "analytics", name: "Analytics", icon: BarChart3 },
    { id: "management", name: "Management", icon: Settings },
  ];

  const features = [
    {
      category: "ordering",
      icon: ShoppingCart,
      title: "B2B & B2C Ordering",
      description:
        "Unified platform supporting both business-to-business and direct customer orders with customizable workflows.",
      benefits: [
        "Dual-mode ordering",
        "Custom order forms",
        "Bulk order support",
        "Quick reorder options",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "ordering",
      icon: FileText,
      title: "Digital Catalogs",
      description:
        "Create and manage product catalogs with rich media, descriptions, and real-time inventory sync.",
      benefits: [
        "Unlimited products",
        "Image & video support",
        "Category management",
        "Search & filters",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "ordering",
      icon: DollarSign,
      title: "Dynamic Pricing",
      description:
        "Set custom pricing rules for different partners, regions, or volumes with automatic discount application.",
      benefits: [
        "Tier-based pricing",
        "Partner-specific rates",
        "Volume discounts",
        "Promotional pricing",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "ordering",
      icon: Clock,
      title: "Order Approval Workflow",
      description:
        "Configurable approval chains ensuring orders are reviewed and authorized before processing.",
      benefits: [
        "Multi-level approvals",
        "Custom workflows",
        "Auto-approval rules",
        "Rejection handling",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "distribution",
      icon: Layers,
      title: "Multi-Level Distribution",
      description:
        "Manage complex distribution hierarchies from manufacturers to distributors to retailers seamlessly.",
      benefits: [
        "Unlimited hierarchy levels",
        "Partner onboarding",
        "Territory mapping",
        "Channel management",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "distribution",
      icon: Package,
      title: "Inventory Tracking",
      description:
        "Real-time inventory visibility across all locations with automated stock alerts and replenishment.",
      benefits: [
        "Live stock levels",
        "Low stock alerts",
        "Stock transfer tracking",
        "Batch management",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "distribution",
      icon: MapPin,
      title: "Territory Management",
      description:
        "Define and manage sales territories, assign partners, and track regional performance.",
      benefits: [
        "Geographic mapping",
        "Territory assignment",
        "Regional analytics",
        "Coverage tracking",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "distribution",
      icon: RefreshCw,
      title: "Order Fulfillment",
      description:
        "Streamline order processing from confirmation to delivery with automated status updates.",
      benefits: [
        "Order tracking",
        "Status automation",
        "Dispatch management",
        "Delivery confirmation",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "analytics",
      icon: BarChart3,
      title: "Smart Dashboards",
      description:
        "Comprehensive dashboards providing real-time insights into sales, orders, and business performance.",
      benefits: [
        "Real-time metrics",
        "Custom widgets",
        "Visual analytics",
        "Export reports",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "analytics",
      icon: TrendingUp,
      title: "Sales Analytics",
      description:
        "Deep dive into sales trends, partner performance, and product analytics to drive growth.",
      benefits: [
        "Sales trends",
        "Partner rankings",
        "Product performance",
        "Revenue forecasting",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "analytics",
      icon: Eye,
      title: "Business Intelligence",
      description:
        "Advanced reporting and analytics to understand customer behavior and market opportunities.",
      benefits: [
        "Custom reports",
        "Data visualization",
        "Trend analysis",
        "Predictive insights",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "analytics",
      icon: Database,
      title: "Data Export",
      description:
        "Export all your data in multiple formats for external analysis or record-keeping.",
      benefits: [
        "Multiple formats",
        "Scheduled exports",
        "Bulk downloads",
        "API access",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "management",
      icon: Users,
      title: "Partner Management",
      description:
        "Centralized system to manage all your business partners, distributors, and retail networks.",
      benefits: [
        "Partner profiles",
        "Document storage",
        "Credit management",
        "Performance tracking",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "management",
      icon: Lock,
      title: "Role-Based Access",
      description:
        "Secure access control with customizable roles and permissions for different user types.",
      benefits: [
        "Custom roles",
        "Permission control",
        "User management",
        "Access logs",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "management",
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Automated alerts and notifications keeping everyone informed about important events.",
      benefits: [
        "Real-time alerts",
        "Email notifications",
        "SMS integration",
        "Custom triggers",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "management",
      icon: Settings,
      title: "Customization",
      description:
        "Tailor the platform to your business needs with extensive configuration options.",
      benefits: [
        "Workflow customization",
        "Branding options",
        "Field configuration",
        "Template design",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "ordering",
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Fully responsive platform optimized for mobile devices, enabling orders from anywhere.",
      benefits: [
        "Native app experience",
        "Offline capability",
        "Touch-optimized",
        "Cross-device sync",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "management",
      icon: Cloud,
      title: "Cloud Infrastructure",
      description:
        "Built on reliable cloud infrastructure with automatic backups and 99.9% uptime guarantee.",
      benefits: [
        "Zero maintenance",
        "Auto backups",
        "Scalable resources",
        "Global CDN",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "management",
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-grade security with data encryption, secure authentication, and compliance standards.",
      benefits: [
        "Data encryption",
        "SSL/TLS security",
        "Regular audits",
        "GDPR compliant",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "analytics",
      icon: Zap,
      title: "Real-Time Sync",
      description:
        "Instant data synchronization across all devices and locations ensuring everyone has latest information.",
      benefits: [
        "Instant updates",
        "Conflict resolution",
        "Multi-device sync",
        "Offline queue",
      ],
      color: "from-green-600 to-emerald-600",
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

  const highlights = [
    { icon: CheckCircle, text: "No IT Infrastructure Required" },
    { icon: Zap, text: "Deploy in Minutes, Not Months" },
    { icon: Shield, text: "Enterprise-Grade Security" },
    { icon: RefreshCw, text: "Regular Feature Updates" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              Powerful Features
            </span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Scale Your Business
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive tools designed for modern B2B and B2C operations.
            Simple to use, powerful to grow with.
          </p>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-4 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-700">
                  {highlight.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg scale-105"
                    : "bg-white text-slate-700 hover:bg-green-50 shadow hover:shadow-lg"
                }`}
              >
                <Icon className="w-5 h-5" />
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            const isHovered = hoveredFeature === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  isHovered ? "scale-105" : ""
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already streamlining their operations
            with Wrio
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Start Free Trial
            </button>
            <button className="bg-green-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-green-500/30 transition-all duration-300 hover:-translate-y-1">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
