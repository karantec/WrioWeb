import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Globe,
  Clock,
} from "lucide-react";

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            We're Here to Help
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-emerald-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about WRIO? Our team is ready to assist you with
            anything you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Email Us
            </h3>
            <p className="text-gray-600 mb-4">
              Our team typically responds within 24 hours
            </p>
            <a
              href="mailto:mahendra@wrio.in"
              className="text-emerald-600 font-medium hover:text-emerald-700"
            >
              mahendra@wrio.in
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Call Us
            </h3>
            <p className="text-gray-600 mb-4">Mon-Fri from 9am to 6pm</p>
            <a
              href="tel:+917798982717"
              className="text-emerald-600 font-medium hover:text-emerald-700"
            >
              +91 7798982717
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Visit Us
            </h3>
            <p className="text-gray-600 mb-4">Come say hello at our office</p>
            <p className="text-emerald-600 font-medium">
              Devise Apps, Camellia Apartments, B402, Baner Pashan Link Rd,
              Pashan, Pune, Maharashtra, India 411021
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Send us a Message
            </h2>

            {submitted && (
              <div className="mb-6 bg-white bg-opacity-20 border border-white border-opacity-40 text-white px-4 py-3 rounded-lg backdrop-blur-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder="+91 7798982717"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition resize-none text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-white text-emerald-600 py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition flex items-center justify-center gap-2 shadow-lg"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Why Choose WRIO?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">15+ Languages</p>
                    <p className="text-emerald-50 text-sm">
                      Multilingual interface for global reach
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Real-Time Updates</p>
                    <p className="text-emerald-50 text-sm">
                      Track orders instantly
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">24/7 Support</p>
                    <p className="text-emerald-50 text-sm">
                      We're always here to help
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    How quickly can I get started?
                  </p>
                  <p className="text-gray-600 text-sm">
                    You can start using WRIO in minutes with our quick setup
                    process.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    Is training provided?
                  </p>
                  <p className="text-gray-600 text-sm">
                    Yes, we offer comprehensive training and onboarding support.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    What languages are supported?
                  </p>
                  <p className="text-gray-600 text-sm">
                    WRIO supports 15+ languages with more being added regularly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quick Stats
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">10K+</p>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">50K+</p>
                  <p className="text-sm text-gray-600">Orders/Day</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">15+</p>
                  <p className="text-sm text-gray-600">Languages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
