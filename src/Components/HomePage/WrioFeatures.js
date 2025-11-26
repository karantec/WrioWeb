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
import { useLanguage } from "../../LanguageContext";

export default function WrioFeatures() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const categories = [
    { id: "all", nameKey: "features_cat_all", icon: Layers },
    { id: "ordering", nameKey: "features_cat_ordering", icon: ShoppingCart },
    { id: "distribution", nameKey: "features_cat_distribution", icon: Package },
    { id: "analytics", nameKey: "features_cat_analytics", icon: BarChart3 },
    { id: "management", nameKey: "features_cat_management", icon: Settings },
  ];

  const features = [
    {
      category: "ordering",
      icon: ShoppingCart,
      titleKey: "feat_ordering_b2b_title",
      descriptionKey: "feat_ordering_b2b_desc",
      benefitsKeys: [
        "feat_ordering_b2b_b1",
        "feat_ordering_b2b_b2",
        "feat_ordering_b2b_b3",
        "feat_ordering_b2b_b4",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "ordering",
      icon: FileText,
      titleKey: "feat_catalogs_title",
      descriptionKey: "feat_catalogs_desc",
      benefitsKeys: [
        "feat_catalogs_b1",
        "feat_catalogs_b2",
        "feat_catalogs_b3",
        "feat_catalogs_b4",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "ordering",
      icon: DollarSign,
      titleKey: "feat_dynamic_pricing_title",
      descriptionKey: "feat_dynamic_pricing_desc",
      benefitsKeys: [
        "feat_dynamic_pricing_b1",
        "feat_dynamic_pricing_b2",
        "feat_dynamic_pricing_b3",
        "feat_dynamic_pricing_b4",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "ordering",
      icon: Clock,
      titleKey: "feat_approval_title",
      descriptionKey: "feat_approval_desc",
      benefitsKeys: [
        "feat_approval_b1",
        "feat_approval_b2",
        "feat_approval_b3",
        "feat_approval_b4",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "distribution",
      icon: Layers,
      titleKey: "feat_multi_level_dist_title",
      descriptionKey: "feat_multi_level_dist_desc",
      benefitsKeys: [
        "feat_multi_level_dist_b1",
        "feat_multi_level_dist_b2",
        "feat_multi_level_dist_b3",
        "feat_multi_level_dist_b4",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "distribution",
      icon: Package,
      titleKey: "feat_inventory_title",
      descriptionKey: "feat_inventory_desc",
      benefitsKeys: [
        "feat_inventory_b1",
        "feat_inventory_b2",
        "feat_inventory_b3",
        "feat_inventory_b4",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "distribution",
      icon: MapPin,
      titleKey: "feat_territory_title",
      descriptionKey: "feat_territory_desc",
      benefitsKeys: [
        "feat_territory_b1",
        "feat_territory_b2",
        "feat_territory_b3",
        "feat_territory_b4",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "distribution",
      icon: RefreshCw,
      titleKey: "feat_fulfillment_title",
      descriptionKey: "feat_fulfillment_desc",
      benefitsKeys: [
        "feat_fulfillment_b1",
        "feat_fulfillment_b2",
        "feat_fulfillment_b3",
        "feat_fulfillment_b4",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "analytics",
      icon: BarChart3,
      titleKey: "feat_dashboards_title",
      descriptionKey: "feat_dashboards_desc",
      benefitsKeys: [
        "feat_dashboards_b1",
        "feat_dashboards_b2",
        "feat_dashboards_b3",
        "feat_dashboards_b4",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "analytics",
      icon: TrendingUp,
      titleKey: "feat_sales_analytics_title",
      descriptionKey: "feat_sales_analytics_desc",
      benefitsKeys: [
        "feat_sales_analytics_b1",
        "feat_sales_analytics_b2",
        "feat_sales_analytics_b3",
        "feat_sales_analytics_b4",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "analytics",
      icon: Eye,
      titleKey: "feat_bi_title",
      descriptionKey: "feat_bi_desc",
      benefitsKeys: ["feat_bi_b1", "feat_bi_b2", "feat_bi_b3", "feat_bi_b4"],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "analytics",
      icon: Database,
      titleKey: "feat_data_export_title",
      descriptionKey: "feat_data_export_desc",
      benefitsKeys: [
        "feat_data_export_b1",
        "feat_data_export_b2",
        "feat_data_export_b3",
        "feat_data_export_b4",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "management",
      icon: Users,
      titleKey: "feat_partner_mgmt_title",
      descriptionKey: "feat_partner_mgmt_desc",
      benefitsKeys: [
        "feat_partner_mgmt_b1",
        "feat_partner_mgmt_b2",
        "feat_partner_mgmt_b3",
        "feat_partner_mgmt_b4",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "management",
      icon: Lock,
      titleKey: "feat_rbac_title",
      descriptionKey: "feat_rbac_desc",
      benefitsKeys: [
        "feat_rbac_b1",
        "feat_rbac_b2",
        "feat_rbac_b3",
        "feat_rbac_b4",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "management",
      icon: Bell,
      titleKey: "feat_notifications_title",
      descriptionKey: "feat_notifications_desc",
      benefitsKeys: [
        "feat_notifications_b1",
        "feat_notifications_b2",
        "feat_notifications_b3",
        "feat_notifications_b4",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "management",
      icon: Settings,
      titleKey: "feat_customization_title",
      descriptionKey: "feat_customization_desc",
      benefitsKeys: [
        "feat_customization_b1",
        "feat_customization_b2",
        "feat_customization_b3",
        "feat_customization_b4",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "ordering",
      icon: Smartphone,
      titleKey: "feat_mobile_title",
      descriptionKey: "feat_mobile_desc",
      benefitsKeys: [
        "feat_mobile_b1",
        "feat_mobile_b2",
        "feat_mobile_b3",
        "feat_mobile_b4",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "management",
      icon: Cloud,
      titleKey: "feat_cloud_title",
      descriptionKey: "feat_cloud_desc",
      benefitsKeys: [
        "feat_cloud_b1",
        "feat_cloud_b2",
        "feat_cloud_b3",
        "feat_cloud_b4",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      category: "management",
      icon: Shield,
      titleKey: "feat_security_title",
      descriptionKey: "feat_security_desc",
      benefitsKeys: [
        "feat_security_b1",
        "feat_security_b2",
        "feat_security_b3",
        "feat_security_b4",
      ],
      color: "from-teal-500 to-green-500",
    },
    {
      category: "analytics",
      icon: Zap,
      titleKey: "feat_realtime_title",
      descriptionKey: "feat_realtime_desc",
      benefitsKeys: [
        "feat_realtime_b1",
        "feat_realtime_b2",
        "feat_realtime_b3",
        "feat_realtime_b4",
      ],
      color: "from-green-600 to-emerald-600",
    },
  ];

  const filteredFeatures =
    activeCategory === "all"
      ? features
      : features.filter((f) => f.category === activeCategory);

  const highlights = [
    { icon: CheckCircle, textKey: "features_highlight_no_infra" },
    { icon: Zap, textKey: "features_highlight_deploy" },
    { icon: Shield, textKey: "features_highlight_security" },
    { icon: RefreshCw, textKey: "features_highlight_updates" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              {t("features_label_powerful")}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            {t("features_heading_prefix")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              {t("features_heading_highlight")}
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t("features_subheading")}
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
                  {t(highlight.textKey)}
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
                {t(category.nameKey)}
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
                  {t(feature.titleKey)}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {t(feature.descriptionKey)}
                </p>

                <div className="space-y-2">
                  {feature.benefitsKeys.map((bk, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex-shrink-0"></div>
                      <span className="text-sm text-slate-700">{t(bk)}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t("features_cta_title")}</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {t("features_cta_sub")}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              {t("features_cta_primary")}
            </button>
            <button className="bg-green-500/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-green-500/30 transition-all duration-300 hover:-translate-y-1">
              {t("features_cta_secondary")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
