import React, { useState, useEffect } from "react";
import {
  Shield,
  Award,
  Star,
  ArrowRight,
  Check,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

export default function PersonalWebsiteDevelopment() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-600 via-red-700 to-rose-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <div
            className={`flex flex-col md:flex-row items-center gap-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-medium border border-white/30 animate-fade-in">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
                <span>Pay as You Go, Your Website, Your Terms</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-white to-red-100">
                Personal Website Development Services
              </h1>

              <p
                className="text-lg md:text-xl leading-relaxed text-red-50 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                Your website is more than a URL — it's your digital identity.
                Cube Multimedia builds websites that look stunning, showcase
                your story, and perform flawlessly across all devices.
              </p>

              <div
                className="flex flex-wrap gap-4 text-sm animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                {["Custom Design", "Mobile Responsive", "SEO Optimized"].map(
                  (item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <Check className="w-5 h-5 text-green-300" />
                      <span>{item}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            <div
              className="flex-1 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="relative bg-white/95 backdrop-blur-lg text-gray-900 p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-red-500/20 transition-all duration-500 transform overflow-hidden">
                {/* Decorative banner */}
                <div className="absolute -top-3 right-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-white px-6 py-2 rounded-b-xl shadow-lg font-bold text-sm flex items-center gap-2 animate-bounce-slow">
                  🪔 Diwali Festive Sale Offer
                </div>

                {/* Floating decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 bg-red-400 rounded-full opacity-20 animate-pulse"></div>

                <div className="relative space-y-6 mt-6">
                  {/* Hero Image */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-32 h-32">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl transform rotate-6 animate-pulse"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <div className="text-center">
                          <div className="text-5xl mb-2">💻</div>
                          <div className="text-xs font-bold text-red-600">
                            Website
                          </div>
                          <div className="text-xs text-gray-500">
                            Development
                          </div>
                        </div>
                      </div>
                      {/* Sparkle effects */}
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-400 rounded-full animate-bounce"></div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      Website Development
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Get your professional website starting at{" "}
                      <span className="text-red-600 font-bold">₹5,999</span>
                    </p>
                  </div>

                  {/* Contact Form */}
                  <form className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="City/Pincode"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* WhatsApp Updates */}
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>Get easy updates through</span>
                      <span className="text-green-600 font-semibold flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                        Whatsapp
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-900 to-blue-950 text-white py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
                    >
                      <span>Talk to an Expert</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="relative py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
            Trusted on Google & Trustpilot
          </h2>
          <p className="text-center text-gray-600 mb-12">
            India's Leading Digital Services Platform
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "5.0 Rating",
                subtitle: "Google Reviews",
                color: "yellow",
              },
              {
                icon: Award,
                title: "100+ Projects",
                subtitle: "Successfully Delivered",
                color: "red",
              },
              {
                icon: Shield,
                title: "Trusted Platform",
                subtitle: "Professional Service",
                color: "red",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-red-200 hover:-translate-y-2 cursor-pointer"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="text-center space-y-4">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${
                      item.color === "yellow"
                        ? "from-yellow-400 to-orange-500"
                        : "from-red-500 to-rose-600"
                    } shadow-lg transform transition-all duration-300 ${
                      hoveredCard === i ? "scale-110 rotate-6" : ""
                    }`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600">{item.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Overview
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              Personal Website Development
            </h2>
          </div>
          <p className="text-lg text-gray-700 leading-relaxed text-center bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100">
            In today's digital age, having a personal website is no longer
            optional — it's essential. Whether you're a consultant, artist,
            freelancer, or professional, your personal website serves as your
            digital business card, portfolio, and brand identity all in one
            place. Cube Multimedia specializes in creating custom personal
            websites that reflect your unique personality and professional
            excellence.
          </p>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-br from-red-50 via-white to-rose-50 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Our Process
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              How We Build Your Digital Identity
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                step: "01",
                title: "Vision Discussion",
                description:
                  "We start with an in-depth discussion about your goals, target audience, and vision for your personal brand. Understanding your story is the foundation of creating a website that truly represents you.",
                icon: Target,
              },
              {
                step: "02",
                title: "Design & Content Planning",
                description:
                  "Our design team creates mockups and layouts tailored to your personality and professional needs. We plan the content structure, ensuring every section serves a purpose in telling your story effectively.",
                icon: Sparkles,
              },
              {
                step: "03",
                title: "Website Development",
                description:
                  "Using modern technologies and best practices, we build your website with clean code, fast loading times, and responsive design. Your site will look perfect on all devices — desktop, tablet, and mobile.",
                icon: Zap,
              },
              {
                step: "04",
                title: "Testing & SEO Setup",
                description:
                  "Before launch, we rigorously test every feature and optimize your website for search engines. We ensure your name and brand appear prominently in search results with proper meta tags, structured data, and SEO configuration.",
                icon: Shield,
              },
              {
                step: "05",
                title: "Final Handover & Launch",
                description:
                  "Once everything is perfect, we hand over your website with complete documentation. We provide training on how to update content yourself and offer continued support for any questions or concerns.",
                icon: Award,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-l-4 border-red-600 hover:-translate-x-2"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
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

      {/* Features Grid */}
      <div className="py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Features
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              What Makes Our Websites Stand Out
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: "🎨",
                title: "Custom Layouts",
                description:
                  "Built specifically for individuals and creators with unique design elements that reflect your personal brand and professional identity.",
              },
              {
                emoji: "⚡",
                title: "Fast & Responsive",
                description:
                  "Lightning-fast loading times with responsive design that ensures your website looks flawless on every device and screen size.",
              },
              {
                emoji: "🔍",
                title: "SEO-Ready Setup",
                description:
                  "Optimized for search engines from day one, ensuring your name appears prominently in search results and enhancing your online visibility.",
              },
              {
                emoji: "💼",
                title: "Portfolio Showcase",
                description:
                  "Display your work, projects, and achievements in an organized and visually appealing manner. Perfect for creatives and professionals.",
              },
              {
                emoji: "🎯",
                title: "Content Management",
                description:
                  "Easy-to-use content management system that allows you to update your website without technical knowledge.",
              },
              {
                emoji: "📧",
                title: "Contact Forms",
                description:
                  "Professional contact forms that make it easy for potential clients and collaborators to reach you with spam protection.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-gradient-to-br from-white to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-rose-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    {feature.emoji}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-rose-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Personal Website Impact Statistics
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "84%", label: "More Credible with Website" },
              { value: "3x", label: "Higher Engagement Rate" },
              { value: "67%", label: "Increased Opportunities" },
            ].map((stat, i) => (
              <div
                key={i}
                className="group bg-white/10 backdrop-blur-lg p-10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 cursor-pointer text-center"
              >
                <div className="text-6xl font-bold text-white mb-4 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xl text-red-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              Case Study
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              Success Story: Astrologer Aditya Narayan
            </h2>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 hover:shadow-red-500/10 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Client", content: "Astrologer Aditya Narayan" },
                {
                  title: "Challenge",
                  content:
                    "Needed a professional web presence for online consultation services to reach a wider audience and establish credibility in the digital space.",
                },
                {
                  title: "Strategy",
                  content:
                    "Developed a clean, professional personal website with integrated service booking system, testimonials section, and detailed service descriptions that highlight expertise and build trust.",
                },
                {
                  title: "Result",
                  content:
                    "Boosted client trust significantly and doubled online consultations within the first three months. The website now serves as the primary channel for new client acquisition.",
                },
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <h3 className="text-xl font-bold text-red-600">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-4">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="py-20 bg-gradient-to-br from-white to-red-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-4">
              FAQs
            </span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-rose-600">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Can I update it myself later?",
                a: "Yes, absolutely! We build your website with WordPress or a user-friendly CMS that allows you to easily update content, add new sections, and manage your portfolio without any technical knowledge.",
              },
              {
                q: "How long will it take?",
                a: "Usually 5–7 days from content finalization. The timeline depends on the complexity of your requirements and how quickly you can provide content and feedback during the development process.",
              },
              {
                q: "What if I don't have content ready?",
                a: "No problem! We can help you create compelling content that showcases your expertise and tells your story effectively. Our team includes experienced content writers.",
              },
              {
                q: "Will my website be mobile-friendly?",
                a: "Yes! All our websites are fully responsive and optimized for mobile devices, tablets, and desktops. Mobile-friendliness is a core feature of every website we build.",
              },
              {
                q: "Do you provide hosting and domain services?",
                a: "Yes, we can help you with domain registration and hosting setup, or we can work with your existing hosting provider. We'll guide you through the entire process.",
              },
              {
                q: "What happens after the website is launched?",
                a: "We provide training on how to manage your website, offer documentation, and are available for ongoing support. We also offer maintenance packages if you prefer hands-off management.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <summary className="p-6 cursor-pointer font-semibold text-lg hover:bg-red-50 transition-all duration-300 flex items-center justify-between">
                  <span>{faq.q}</span>
                  <ArrowRight className="w-5 h-5 text-red-600 transform group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4 animate-fade-in">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-red-600 via-red-700 to-rose-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-8 animate-bounce-slow">
            <Sparkles className="w-16 h-16 text-yellow-300 mx-auto" />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Make Your Identity Shine Online
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-red-100 leading-relaxed">
            Create your personal website with Cube Multimedia and establish your
            professional presence today.
          </p>

          <button className="group bg-white text-red-600 px-12 py-5 rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 hover:scale-110 inline-flex items-center gap-3">
            Get Started Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}
