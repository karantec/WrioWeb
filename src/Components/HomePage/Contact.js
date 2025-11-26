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
import { useLanguage } from "../../LanguageContext";

export default function ContactComponent() {
  const { t } = useLanguage();

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
            {t("contact_banner")}
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t("contact_title_prefix")}{" "}
            <span className="text-emerald-500">
              {t("contact_title_highlight")}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("contact_subheading")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("contact_email_title")}
            </h3>
            <p className="text-gray-600 mb-4">{t("contact_email_note")}</p>
            <a
              href={`mailto:${t("contact_email")}`}
              className="text-emerald-600 font-medium hover:text-emerald-700"
            >
              {t("contact_email")}
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("contact_call_title")}
            </h3>
            <p className="text-gray-600 mb-4">{t("contact_call_note")}</p>
            <a
              href={`tel:${t("contact_phone")}`}
              className="text-emerald-600 font-medium hover:text-emerald-700"
            >
              {t("contact_phone")}
            </a>
          </div>

          {/* Address */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("contact_visit_title")}
            </h3>
            <p className="text-gray-600 mb-4">{t("contact_visit_note")}</p>
            <p className="text-emerald-600 font-medium">
              {t("contact_address")}
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              {t("contact_form_title")}
            </h2>

            {submitted && (
              <div className="mb-6 bg-white bg-opacity-20 border border-white border-opacity-40 text-white px-4 py-3 rounded-lg backdrop-blur-sm">
                {t("contact_thanks")}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t("contact_form_name_label")}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder={t("contact_form_name_placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t("contact_form_email_label")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder={t("contact_form_email_placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t("contact_form_phone_label")}
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder={t("contact_form_phone_placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t("contact_form_subject_label")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder={t("contact_form_subject_placeholder")}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  {t("contact_form_message_label")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent outline-none transition resize-none text-white placeholder-white placeholder-opacity-70 backdrop-blur-sm"
                  placeholder={t("contact_form_message_placeholder")}
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-white text-emerald-600 py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition flex items-center justify-center gap-2 shadow-lg"
              >
                {t("contact_form_send")}
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                {t("contact_why_title")}
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Globe className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {t("contact_why_item1_title")}
                    </p>
                    <p className="text-emerald-50 text-sm">
                      {t("contact_why_item1_desc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {t("contact_why_item2_title")}
                    </p>
                    <p className="text-emerald-50 text-sm">
                      {t("contact_why_item2_desc")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">
                      {t("contact_why_item3_title")}
                    </p>
                    <p className="text-emerald-50 text-sm">
                      {t("contact_why_item3_desc")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("contact_faq_title")}
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {t("contact_faq_q1")}
                  </p>
                  <p className="text-gray-600 text-sm">{t("contact_faq_a1")}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {t("contact_faq_q2")}
                  </p>
                  <p className="text-gray-600 text-sm">{t("contact_faq_a2")}</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">
                    {t("contact_faq_q3")}
                  </p>
                  <p className="text-gray-600 text-sm">{t("contact_faq_a3")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {t("contact_quick_stats_title")}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">
                    {t("contact_quick_stat_1_value")}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t("contact_quick_stat_1_label")}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">
                    {t("contact_quick_stat_2_value")}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t("contact_quick_stat_2_label")}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-600">
                    {t("contact_quick_stat_3_value")}
                  </p>
                  <p className="text-sm text-gray-600">
                    {t("contact_quick_stat_3_label")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
