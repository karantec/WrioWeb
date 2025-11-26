import React from "react";
import {
  Zap,
  Smartphone,
  BookOpen,
  Users,
  LayoutDashboard,
  Settings,
  FileBarChart,
  PackageCheck,
} from "lucide-react";
import { useLanguage } from "../../LanguageContext";

export default function WrioApproach() {
  const { t } = useLanguage();

  const smallBusiness = {
    titleKey: "approach_small_title",
    featuresKeys: [
      "approach_small_f1",
      "approach_small_f2",
      "approach_small_f3",
      "approach_small_f4",
    ],
    ctaKey: "approach_small_cta",
    ctaStyle: "filled",
  };

  const franchise = {
    titleKey: "approach_franchise_title",
    featuresKeys: [
      "approach_franchise_f1",
      "approach_franchise_f2",
      "approach_franchise_f3",
      "approach_franchise_f4",
    ],
    ctaKey: "approach_franchise_cta",
    ctaStyle: "outlined",
  };

  const smallBusinessFeatures = [
    { icon: Zap, textKey: "approach_sb_feat_qsetup" },
    { icon: Smartphone, textKey: "approach_sb_feat_orderphone" },
    { icon: BookOpen, textKey: "approach_sb_feat_menu" },
    { icon: Users, textKey: "approach_sb_feat_customers" },
  ];

  const franchiseFeatures = [
    { icon: LayoutDashboard, textKey: "approach_fr_feat_dashboard" },
    { icon: Settings, textKey: "approach_fr_feat_headcontrols" },
    { icon: FileBarChart, textKey: "approach_fr_feat_reports" },
    { icon: PackageCheck, textKey: "approach_fr_feat_stock" },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Top Section - Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Small Business Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t(smallBusiness.titleKey)}
            </h2>
            <ul className="space-y-3 mb-8">
              {smallBusiness.featuresKeys.map((key, idx) => (
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
                  <span className="text-gray-600">{t(key)}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors">
              {t(smallBusiness.ctaKey)}
            </button>
          </div>

          {/* Franchise Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t(franchise.titleKey)}
            </h2>
            <ul className="space-y-3 mb-8">
              {franchise.featuresKeys.map((key, idx) => (
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
                  <span className="text-gray-600">{t(key)}</span>
                </li>
              ))}
            </ul>
            <button className="px-6 py-3 bg-white text-gray-800 rounded-lg font-medium border-2 border-gray-300 hover:border-teal-600 hover:text-teal-600 transition-colors">
              {t(franchise.ctaKey)}
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
              {t("approach_sb_features_title")}
            </h2>
            <ul className="space-y-4">
              {smallBusinessFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{t(feature.textKey)}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Franchise Features */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              {t("approach_fr_features_title")}
            </h2>
            <ul className="space-y-4">
              {franchiseFeatures.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <li key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{t(feature.textKey)}</span>
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
