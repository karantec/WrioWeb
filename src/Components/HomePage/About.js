import React, { useState } from "react";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  Rocket,
  TrendingUp,
  Shield,
  Clock,
  Zap,
} from "lucide-react";

export default function WrioAboutUs() {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { number: "500+", label: "Active Businesses", icon: Users },
    { number: "50K+", label: "Orders Processed", icon: TrendingUp },
    { number: "99.9%", label: "Platform Uptime", icon: Shield },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer Success First",
      description:
        "Your growth is our success. We're committed to helping SMEs thrive in the digital age.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation & Simplicity",
      description:
        "We believe powerful technology should be simple to use. Innovation without complexity.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "Built on honest relationships. Your data is secure, and our pricing is straightforward.",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Rocket,
      title: "Continuous Improvement",
      description:
        "We're always evolving based on your feedback. Your needs drive our roadmap.",
      color: "from-green-600 to-emerald-600",
    },
  ];

  const team = [
    {
      role: "Founders & Team",
      description:
        "A passionate group of technologists, business strategists, and industry experts dedicated to transforming how SMEs manage their operations.",
      highlights: [
        "15+ years combined experience in B2B tech",
        "Deep understanding of distribution challenges",
        "Commitment to democratizing enterprise software",
      ],
    },
  ];

  const milestones = [
    {
      year: "2023",
      event: "Wrio Founded",
      desc: "Started with a vision to simplify B2B ordering",
    },
    {
      year: "2024",
      event: "100+ Customers",
      desc: "Reached first major milestone across FMCG sector",
    },
    {
      year: "2024",
      event: "Platform Evolution",
      desc: "Launched multi-level distribution features",
    },
    {
      year: "2025",
      event: "Expanding Horizons",
      desc: "Growing across industries and geographies",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-600 to-emerald-700 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-green-200">Wrio</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Empowering SMEs with enterprise-grade ordering solutions that are
              simple, affordable, and built for growth.
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 -mt-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["story", "mission", "values"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-green-50 shadow"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-20">
          {activeTab === "story" && (
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">
                    Our Story
                  </h2>
                </div>

                <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Wrio was born from a simple observation: while large
                    enterprises have access to sophisticated ordering and
                    distribution systems, small and medium businesses are often
                    left managing orders through phone calls, WhatsApp messages,
                    and spreadsheets.
                  </p>
                  <p>
                    We saw businesses struggling with manual processes, losing
                    orders in translation, and spending countless hours on
                    coordination instead of growth. We knew there had to be a
                    better way.
                  </p>
                  <p>
                    That's why we built Wrio—a platform that brings
                    enterprise-grade capabilities to businesses of all sizes,
                    without the complexity, cost, or technical headaches. We're
                    democratizing B2B technology, making it accessible,
                    affordable, and actually enjoyable to use.
                  </p>
                  <p className="text-green-700 font-semibold">
                    Today, Wrio powers hundreds of businesses across India, from
                    FMCG distributors to retail chains, helping them digitize
                    their operations and scale with confidence.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mission" && (
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900">
                    Our Mission
                  </h2>
                </div>

                <div className="space-y-8">
                  <p className="text-2xl text-slate-800 font-semibold leading-relaxed">
                    To empower every growing business with technology that
                    simplifies operations, eliminates chaos, and unlocks growth
                    potential.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <Zap className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-slate-900 mb-2">
                            Simplify Complexity
                          </h3>
                          <p className="text-slate-700">
                            Make powerful tools accessible to businesses without
                            technical teams or big budgets.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-slate-900 mb-2">
                            Enable Growth
                          </h3>
                          <p className="text-slate-700">
                            Help SMEs compete with larger players through
                            digital transformation.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <Heart className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-slate-900 mb-2">
                            Build Trust
                          </h3>
                          <p className="text-slate-700">
                            Create reliable, transparent systems that businesses
                            can depend on.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                      <div className="flex items-start gap-3">
                        <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-slate-900 mb-2">
                            Deliver Excellence
                          </h3>
                          <p className="text-slate-700">
                            Provide world-class software with exceptional
                            support and continuous improvement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "values" && (
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Journey Timeline */}
        <div className="bg-white rounded-3xl p-10 md:p-12 shadow-xl mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-3 text-center">
            Our Journey
          </h2>
          <p className="text-slate-600 text-center mb-12">
            Key milestones in our growth story
          </p>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-green-200 via-emerald-300 to-green-400 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative flex gap-6 items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0 relative z-10">
                    {milestone.year}
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-slate-700">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-10 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-6">
              Meet the Team Behind Wrio
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              {team[0].description}
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {team[0].highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-300 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-green-100">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Ready to Join Our Journey?
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Let's transform your business together
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              Get Started Free
            </button>
            <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-green-600">
              Schedule a Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
