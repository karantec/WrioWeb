import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

const translations = {
  en: {
    // General
    home: "Home",
    about: "About",
    features: "Features",
    benefits: "Benefits",
    contact: "Contact",
    getStarted: "Get Started",
    tagline: "Smarter Order Booking",
    companyDescription:
      "A Platform for Smarter Order Booking. Multilingual, locally customized interface for seamless business operations.",
    quickLinks: "Quick Links",
    products: "Products",
    getInTouch: "Get In Touch",
    orderBooking: "Order Booking",
    inventoryManagement: "Inventory Management",
    analyticsDashboard: "Analytics Dashboard",
    multiLanguageSupport: "Multi-language Support",
    mobileApp: "Mobile App",
    pricing: "Pricing",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    allRightsReserved: "All rights reserved.",

    // Hero
    trustedBanner: "Trusted by 10,000+ businesses worldwide",
    heroHeadingLine1: "Create Your Online",
    heroHeadingHighlight: "Ordering System",
    heroHeadingLine2: "in Minutes",
    heroSub:
      "Whether you're one store or 100 — Wrio helps small businesses take orders instantly and lets franchise brands manage all outlets from one powerful dashboard.",
    features_quickSetup_title: "Quick Setup",
    features_quickSetup_desc: "Launch in under 5 minutes",
    features_languages_title: "15+ Languages",
    features_languages_desc: "Reach more customers",
    features_analytics_title: "Smart Analytics",
    features_analytics_desc: "Data-driven decisions",
    features_payments_title: "Easy Payments",
    features_payments_desc: "Multiple payment options",
    cta_create_store: "Create your store — Free",
    cta_watch_demo: "Watch Demo",
    stat_happy_label: "Happy Businesses",
    stat_orders_label: "Orders Processed",
    stat_uptime_label: "Uptime",
    stat_rating_label: "User Rating",
    powering_text: "Powering businesses across industries",
    powering_items_restaurants: "Restaurants",
    powering_items_retail: "Retail Stores",
    powering_items_cafes: "Cafes",
    powering_items_bakeries: "Bakeries",
    powering_items_foodtrucks: "Food Trucks",
    mockup_total_revenue: "Total Revenue",
    mockup_dashboard_url: "dashboard.wrio.app",
    mockup_outlet_alpha: "Outlet Alpha",
    mockup_outlet_beta: "Outlet Beta",
    mockup_outlet_gamma: "Outlet Gamma",
    new_order: "New Order!",
    new_order_amt: "+$24.99",
    add_to_cart: "Add to Cart",
    vanilla_cone: "Vanilla Cone",
    premium_quality: "Premium Quality",

    // Approach (WrioApproach)
    approach_small_title: "For Small Businesses",
    approach_small_f1: "Create your store in minutes",
    approach_small_f2: "No tech knowledge needed",
    approach_small_f3: "Simple order-taking app",
    approach_small_f4: "Payments, menu, customers - everything built in",
    approach_small_cta: "Start your store",

    approach_franchise_title: "For Franchise Brands",
    approach_franchise_f1: "Multi-store dashboard",
    approach_franchise_f2: "Head office controls",
    approach_franchise_f3: "Outlet-wise reports",
    approach_franchise_f4: "Purchase/stock flow",
    approach_franchise_cta: "Book franchise demo",

    approach_sb_features_title: "Features for Small Businesses",
    approach_fr_features_title: "Features for Franchise Chains",

    approach_sb_feat_qsetup: "Quick setup",
    approach_sb_feat_orderphone: "Order-taking on phone/tablet",
    approach_sb_feat_menu: "Digital menu",
    approach_sb_feat_customers: "Customer tracking",

    approach_fr_feat_dashboard: "Multi-store dashboard",
    approach_fr_feat_headcontrols: "Head office controls",
    approach_fr_feat_reports: "Outlet-wise reports",
    approach_fr_feat_stock: "Purchase/stock flow",

    // About (WrioAboutUs)
    about_title_prefix: "About",
    about_title_brand: "Wrio",
    about_subheading:
      "Empowering SMEs with enterprise-grade ordering solutions that are simple, affordable, and built for growth.",
    about_stat_active: "Active Businesses",
    about_stat_orders: "Orders Processed",
    about_stat_uptime: "Platform Uptime",
    about_stat_support: "Support Available",
    about_tab_story: "Story",
    about_tab_mission: "Mission",
    about_tab_values: "Values",
    about_section_story_title: "Our Story",
    about_story_p1:
      "Wrio was born from a simple observation: while large enterprises have access to sophisticated ordering and distribution systems, small and medium businesses are often left managing orders through phone calls, WhatsApp messages, and spreadsheets.",
    about_story_p2:
      "We saw businesses struggling with manual processes, losing orders in translation, and spending countless hours on coordination instead of growth.",
    about_story_p3:
      "That's why we built Wrio—a platform that brings enterprise-grade capabilities to businesses of all sizes, without the complexity, cost, or technical headaches.",
    about_story_p4:
      "Today, Wrio powers hundreds of businesses across India, from FMCG distributors to retail chains, helping them digitize their operations and scale with confidence.",
    about_section_mission_title: "Our Mission",
    about_mission_intro:
      "To empower every growing business with technology that simplifies operations, eliminates chaos, and unlocks growth potential.",
    about_mission_card_1_title: "Simplify Complexity",
    about_mission_card_1_desc:
      "Make powerful tools accessible to businesses without technical teams or big budgets.",
    about_mission_card_2_title: "Enable Growth",
    about_mission_card_2_desc:
      "Help SMEs compete with larger players through digital transformation.",
    about_mission_card_3_title: "Build Trust",
    about_mission_card_3_desc:
      "Create reliable, transparent systems that businesses can depend on.",
    about_mission_card_4_title: "Deliver Excellence",
    about_mission_card_4_desc:
      "Provide world-class software with exceptional support and continuous improvement.",
    about_val_customer_title: "Customer Success First",
    about_val_customer_desc:
      "Your growth is our success. We're committed to helping SMEs thrive in the digital age.",
    about_val_innov_title: "Innovation & Simplicity",
    about_val_innov_desc:
      "We believe powerful technology should be simple to use. Innovation without complexity.",
    about_val_trust_title: "Trust & Transparency",
    about_val_trust_desc:
      "Built on honest relationships. Your data is secure, and our pricing is straightforward.",
    about_val_improve_title: "Continuous Improvement",
    about_val_improve_desc:
      "We're always evolving based on your feedback. Your needs drive our roadmap.",
    about_team_heading: "Meet the Team Behind Wrio",
    about_team_role: "Founders & Team",
    about_team_description:
      "A passionate group of technologists, business strategists, and industry experts dedicated to transforming how SMEs manage their operations.",
    about_team_highlight_1: "15+ years combined experience in B2B tech",
    about_team_highlight_2: "Deep understanding of distribution challenges",
    about_team_highlight_3: "Commitment to democratizing enterprise software",
    about_journey_title: "Our Journey",
    about_journey_sub: "Key milestones in our growth story",
    // Milestones
    about_ms_2023_event: "Wrio Founded",
    about_ms_2023_desc: "Started with a vision to simplify B2B ordering",
    about_ms_2024_event_1: "100+ Customers",
    about_ms_2024_desc_1: "Reached first major milestone across FMCG sector",
    about_ms_2024_event_2: "Platform Evolution",
    about_ms_2024_desc_2: "Launched multi-level distribution features",
    about_ms_2025_event: "Expanding Horizons",
    about_ms_2025_desc: "Growing across industries and geographies",
    about_cta_title: "Ready to Join Our Journey?",
    about_cta_sub: "Let's transform your business together",
    about_cta_primary: "Get Started Free",
    about_cta_secondary: "Schedule a Demo",

    // Features (WrioFeatures)
    features_label_powerful: "Powerful Features",
    features_heading_prefix: "Everything You Need to",
    features_heading_highlight: "Scale Your Business",
    features_subheading:
      "Comprehensive tools designed for modern B2B and B2C operations. Simple to use, powerful to grow with.",
    features_cat_all: "All Features",
    features_cat_ordering: "Ordering",
    features_cat_distribution: "Distribution",
    features_cat_analytics: "Analytics",
    features_cat_management: "Management",
    features_highlight_no_infra: "No IT Infrastructure Required",
    features_highlight_deploy: "Deploy in Minutes, Not Months",
    features_highlight_security: "Enterprise-Grade Security",
    features_highlight_updates: "Regular Feature Updates",
    // example feature keys (repeat as earlier)
    feat_ordering_b2b_title: "B2B & B2C Ordering",
    feat_ordering_b2b_desc:
      "Unified platform supporting both business-to-business and direct customer orders with customizable workflows.",
    feat_ordering_b2b_b1: "Dual-mode ordering",
    feat_ordering_b2b_b2: "Custom order forms",
    feat_ordering_b2b_b3: "Bulk order support",
    feat_ordering_b2b_b4: "Quick reorder options",

    feat_catalogs_title: "Digital Catalogs",
    feat_catalogs_desc:
      "Create and manage product catalogs with rich media, descriptions, and real-time inventory sync.",
    feat_catalogs_b1: "Unlimited products",
    feat_catalogs_b2: "Image & video support",
    feat_catalogs_b3: "Category management",
    feat_catalogs_b4: "Search & filters",

    feat_dynamic_pricing_title: "Dynamic Pricing",
    feat_dynamic_pricing_desc:
      "Set custom pricing rules for different partners, regions, or volumes with automatic discount application.",
    feat_dynamic_pricing_b1: "Tier-based pricing",
    feat_dynamic_pricing_b2: "Partner-specific rates",
    feat_dynamic_pricing_b3: "Volume discounts",
    feat_dynamic_pricing_b4: "Promotional pricing",

    feat_approval_title: "Order Approval Workflow",
    feat_approval_desc:
      "Configurable approval chains ensuring orders are reviewed and authorized before processing.",
    feat_approval_b1: "Multi-level approvals",
    feat_approval_b2: "Custom workflows",
    feat_approval_b3: "Auto-approval rules",
    feat_approval_b4: "Rejection handling",

    feat_multi_level_dist_title: "Multi-Level Distribution",
    feat_multi_level_dist_desc:
      "Manage complex distribution hierarchies from manufacturers to distributors to retailers seamlessly.",
    feat_multi_level_dist_b1: "Unlimited hierarchy levels",
    feat_multi_level_dist_b2: "Partner onboarding",
    feat_multi_level_dist_b3: "Territory mapping",
    feat_multi_level_dist_b4: "Channel management",

    feat_inventory_title: "Inventory Tracking",
    feat_inventory_desc:
      "Real-time inventory visibility across all locations with automated stock alerts and replenishment.",
    feat_inventory_b1: "Live stock levels",
    feat_inventory_b2: "Low stock alerts",
    feat_inventory_b3: "Stock transfer tracking",
    feat_inventory_b4: "Batch management",

    feat_territory_title: "Territory Management",
    feat_territory_desc:
      "Define and manage sales territories, assign partners, and track regional performance.",
    feat_territory_b1: "Geographic mapping",
    feat_territory_b2: "Territory assignment",
    feat_territory_b3: "Regional analytics",
    feat_territory_b4: "Coverage tracking",

    feat_fulfillment_title: "Order Fulfillment",
    feat_fulfillment_desc:
      "Streamline order processing from confirmation to delivery with automated status updates.",
    feat_fulfillment_b1: "Order tracking",
    feat_fulfillment_b2: "Status automation",
    feat_fulfillment_b3: "Dispatch management",
    feat_fulfillment_b4: "Delivery confirmation",

    feat_dashboards_title: "Smart Dashboards",
    feat_dashboards_desc:
      "Comprehensive dashboards providing real-time insights into sales, orders, and business performance.",
    feat_dashboards_b1: "Real-time metrics",
    feat_dashboards_b2: "Custom widgets",
    feat_dashboards_b3: "Visual analytics",
    feat_dashboards_b4: "Export reports",

    feat_sales_analytics_title: "Sales Analytics",
    feat_sales_analytics_desc:
      "Deep dive into sales trends, partner performance, and product analytics to drive growth.",
    feat_sales_analytics_b1: "Sales trends",
    feat_sales_analytics_b2: "Partner rankings",
    feat_sales_analytics_b3: "Product performance",
    feat_sales_analytics_b4: "Revenue forecasting",

    feat_bi_title: "Business Intelligence",
    feat_bi_desc:
      "Advanced reporting and analytics to understand customer behavior and market opportunities.",
    feat_bi_b1: "Custom reports",
    feat_bi_b2: "Data visualization",
    feat_bi_b3: "Trend analysis",
    feat_bi_b4: "Predictive insights",

    feat_data_export_title: "Data Export",
    feat_data_export_desc:
      "Export all your data in multiple formats for external analysis or record-keeping.",
    feat_data_export_b1: "Multiple formats",
    feat_data_export_b2: "Scheduled exports",
    feat_data_export_b3: "Bulk downloads",
    feat_data_export_b4: "API access",

    feat_partner_mgmt_title: "Partner Management",
    feat_partner_mgmt_desc:
      "Centralized system to manage all your business partners, distributors, and retail networks.",
    feat_partner_mgmt_b1: "Partner profiles",
    feat_partner_mgmt_b2: "Document storage",
    feat_partner_mgmt_b3: "Credit management",
    feat_partner_mgmt_b4: "Performance tracking",

    feat_rbac_title: "Role-Based Access",
    feat_rbac_desc:
      "Secure access control with customizable roles and permissions for different user types.",
    feat_rbac_b1: "Custom roles",
    feat_rbac_b2: "Permission control",
    feat_rbac_b3: "User management",
    feat_rbac_b4: "Access logs",

    feat_notifications_title: "Smart Notifications",
    feat_notifications_desc:
      "Automated alerts and notifications keeping everyone informed about important events.",
    feat_notifications_b1: "Real-time alerts",
    feat_notifications_b2: "Email notifications",
    feat_notifications_b3: "SMS integration",
    feat_notifications_b4: "Custom triggers",

    feat_customization_title: "Customization",
    feat_customization_desc:
      "Tailor the platform to your business needs with extensive configuration options.",
    feat_customization_b1: "Workflow customization",
    feat_customization_b2: "Branding options",
    feat_customization_b3: "Field configuration",
    feat_customization_b4: "Template design",

    feat_mobile_title: "Mobile-First Design",
    feat_mobile_desc:
      "Fully responsive platform optimized for mobile devices, enabling orders from anywhere.",
    feat_mobile_b1: "Native app experience",
    feat_mobile_b2: "Offline capability",
    feat_mobile_b3: "Touch-optimized",
    feat_mobile_b4: "Cross-device sync",

    feat_cloud_title: "Cloud Infrastructure",
    feat_cloud_desc:
      "Built on reliable cloud infrastructure with automatic backups and 99.9% uptime guarantee.",
    feat_cloud_b1: "Zero maintenance",
    feat_cloud_b2: "Auto backups",
    feat_cloud_b3: "Scalable resources",
    feat_cloud_b4: "Global CDN",

    feat_security_title: "Enterprise Security",
    feat_security_desc:
      "Bank-grade security with data encryption, secure authentication, and compliance standards.",
    feat_security_b1: "Data encryption",
    feat_security_b2: "SSL/TLS security",
    feat_security_b3: "Regular audits",
    feat_security_b4: "GDPR compliant",

    feat_realtime_title: "Real-Time Sync",
    feat_realtime_desc:
      "Instant data synchronization across all devices and locations ensuring everyone has latest information.",
    feat_realtime_b1: "Instant updates",
    feat_realtime_b2: "Conflict resolution",
    feat_realtime_b3: "Multi-device sync",
    feat_realtime_b4: "Offline queue",

    features_cta_title: "Ready to Experience These Features?",
    features_cta_sub:
      "Join hundreds of businesses already streamlining their operations with Wrio",
    features_cta_primary: "Start Free Trial",
    features_cta_secondary: "Watch Demo",

    // Contact (ContactComponent)
    contact_banner: "We're Here to Help",
    contact_title_prefix: "Get in",
    contact_title_highlight: "Touch",
    contact_subheading:
      "Have questions about WRIO? Our team is ready to assist you with anything you need.",
    contact_email_title: "Email Us",
    contact_email_note: "Our team typically responds within 24 hours",
    contact_email: "mahendra@wrio.in",
    contact_call_title: "Call Us",
    contact_call_note: "Mon-Fri from 9am to 6pm",
    contact_phone: "+917798982717",
    contact_visit_title: "Visit Us",
    contact_visit_note: "Come say hello at our office",
    contact_address:
      "Devise Apps, Camellia Apartments, B402, Baner Pashan Link Rd, Pashan, Pune, Maharashtra, India 411021",
    contact_form_title: "Send us a Message",
    contact_thanks: "Thank you! Your message has been sent successfully.",
    contact_form_name_label: "Full Name *",
    contact_form_name_placeholder: "John Doe",
    contact_form_email_label: "Email Address *",
    contact_form_email_placeholder: "john@example.com",
    contact_form_phone_label: "Phone Number",
    contact_form_phone_placeholder: "+91 7798982717",
    contact_form_subject_label: "Subject *",
    contact_form_subject_placeholder: "How can we help?",
    contact_form_message_label: "Message *",
    contact_form_message_placeholder: "Tell us more about your inquiry...",
    contact_form_send: "Send Message",
    contact_why_title: "Why Choose WRIO?",
    contact_why_item1_title: "15+ Languages",
    contact_why_item1_desc: "Multilingual interface for global reach",
    contact_why_item2_title: "Real-Time Updates",
    contact_why_item2_desc: "Track orders instantly",
    contact_why_item3_title: "24/7 Support",
    contact_why_item3_desc: "We're always here to help",
    contact_faq_title: "Frequently Asked Questions",
    contact_faq_q1: "How quickly can I get started?",
    contact_faq_a1:
      "You can start using WRIO in minutes with our quick setup process.",
    contact_faq_q2: "Is training provided?",
    contact_faq_a2:
      "Yes, we offer comprehensive training and onboarding support.",
    contact_faq_q3: "What languages are supported?",
    contact_faq_a3:
      "WRIO supports 15+ languages with more being added regularly.",
    contact_quick_stats_title: "Quick Stats",
    contact_quick_stat_1_value: "10K+",
    contact_quick_stat_1_label: "Active Users",
    contact_quick_stat_2_value: "50K+",
    contact_quick_stat_2_label: "Orders/Day",
    contact_quick_stat_3_value: "15+",
    contact_quick_stat_3_label: "Languages",
  },

  // Hindi translations
  hi: {
    // General
    home: "होम",
    about: "हमारे बारे में",
    features: "विशेषताएं",
    benefits: "लाभ",
    contact: "संपर्क करें",
    getStarted: "शुरू करें",
    tagline: "स्मार्ट ऑर्डर बुकिंग",
    companyDescription:
      "स्मार्ट ऑर्डर बुकिंग के लिए एक प्लेटफ़ॉर्म। निर्बाध व्यावसायिक संचालन के लिए बहुभाषी, स्थानीय रूप से अनुकूलित इंटरफ़ेस।",
    quickLinks: "त्वरित लिंक",
    products: "उत्पाद",
    getInTouch: "संपर्क में रहें",
    orderBooking: "ऑर्डर बुकिंग",
    inventoryManagement: "इन्वेंटरी प्रबंधन",
    analyticsDashboard: "एनालिटिक्स डैशबोर्ड",
    multiLanguageSupport: "बहुभाषा समर्थन",
    mobileApp: "मोबाइल ऐप",
    pricing: "मूल्य निर्धारण",
    privacyPolicy: "गोपनीयता नीति",
    termsOfService: "सेवा की शर्तें",
    cookiePolicy: "कुकी नीति",
    allRightsReserved: "सर्वाधिकार सुरक्षित।",

    // Hero
    trustedBanner: "दुनिया भर में 10,000+ व्यवसायों द्वारा भरोसा",
    heroHeadingLine1: "अपना ऑनलाइन बनाएं",
    heroHeadingHighlight: "ऑर्डरिंग सिस्टम",
    heroHeadingLine2: "कुछ ही मिनटों में",
    heroSub:
      "चाहे आपकी दुकान एक हो या 100 — Wrio छोटे व्यवसायों को तुरंत ऑर्डर लेने में मदद करता है और फ्रैंचाइज़ ब्रांडों को एक शक्तिशाली डैशबोर्ड से सभी आउटलेट प्रबंधित करने देता है।",
    features_quickSetup_title: "तेज़ सेटअप",
    features_quickSetup_desc: "5 मिनट से कम में लॉन्च",
    features_languages_title: "15+ भाषाएँ",
    features_languages_desc: "अधिक ग्राहकों तक पहुँचें",
    features_analytics_title: "स्मार्ट एनालिटिक्स",
    features_analytics_desc: "डेटा-आधारित निर्णय",
    features_payments_title: "आसान भुगतान",
    features_payments_desc: "कई भुगतान विकल्प",
    cta_create_store: "अपनी स्टोर बनाएं — मुफ्त",
    cta_watch_demo: "डेमो देखें",
    stat_happy_label: "खुश व्यवसाय",
    stat_orders_label: "प्रोसेस हुए ऑर्डर",
    stat_uptime_label: "अपटाइम",
    stat_rating_label: "उपयोगकर्ता रेटिंग",
    powering_text: "व्यवसायों को विभिन्न उद्योगों में शक्ति देना",
    powering_items_restaurants: "रेस्टोरेंट",
    powering_items_retail: "खुदरा स्टोर",
    powering_items_cafes: "कैफ़े",
    powering_items_bakeries: "बेकरी",
    powering_items_foodtrucks: "फ़ूड ट्रक",
    mockup_total_revenue: "कुल राजस्व",
    mockup_dashboard_url: "dashboard.wrio.app",
    mockup_outlet_alpha: "आउटलैट अल्फा",
    mockup_outlet_beta: "आउटलैट बीटा",
    mockup_outlet_gamma: "आउटलैट गामा",
    new_order: "नया ऑर्डर!",
    new_order_amt: "+$24.99",
    add_to_cart: "कार्ट में जोड़ें",
    vanilla_cone: "वनीला कोन",
    premium_quality: "प्रीमियम गुणवत्ता",

    // Approach
    approach_small_title: "छोटे व्यवसायों के लिए",
    approach_small_f1: "कुछ ही मिनटों में अपनी स्टोर बनाएं",
    approach_small_f2: "किसी तकनीकी ज्ञान की आवश्यकता नहीं",
    approach_small_f3: "सरल ऑर्डर लेने वाला ऐप",
    approach_small_f4: "पेमेंट, मेन्यू, ग्राहक - सब कुछ एक ही जगह",
    approach_small_cta: "अपनी स्टोर शुरू करें",
    approach_franchise_title: "फ्रैंचाइज़ ब्रांड्स के लिए",
    approach_franchise_f1: "मल्टी-स्टोर डैशबोर्ड",
    approach_franchise_f2: "हेड ऑफिस कंट्रोल्स",
    approach_franchise_f3: "आउटलेट-वार रिपोर्ट्स",
    approach_franchise_f4: "परचेज/स्टॉक फ्लो",
    approach_franchise_cta: "फ्रैंचाइज़ डेमो बुक करें",
    approach_sb_features_title: "छोटे व्यवसायों के लिए फीचर्स",
    approach_fr_features_title: "फ्रैंचाइज़ चेन के लिए फीचर्स",
    approach_sb_feat_qsetup: "त्वरित सेटअप",
    approach_sb_feat_orderphone: "फोन/टैबलेट पर ऑर्डर लेना",
    approach_sb_feat_menu: "डिजिटल मेन्यू",
    approach_sb_feat_customers: "कस्टमर ट्रैकिंग",
    approach_fr_feat_dashboard: "मल्टी-स्टोर डैशबोर्ड",
    approach_fr_feat_headcontrols: "हेड ऑफिस कंट्रोल्स",
    approach_fr_feat_reports: "आउटलेट-वार रिपोर्ट्स",
    approach_fr_feat_stock: "परचेज/स्टॉक फ्लो",

    // About (Hindi)
    about_title_prefix: "हमारे बारे में",
    about_title_brand: "Wrio",
    about_subheading:
      "SME के लिए एंटरप्राइज़-ग्रेड ऑर्डरिंग समाधान — सरल, किफायती और विकास के लिए तैयार।",
    about_stat_active: "सक्रिय व्यवसाय",
    about_stat_orders: "प्रोसेस ऑर्डर",
    about_stat_uptime: "प्लेटफ़ॉर्म अपटाइम",
    about_stat_support: "समर्थन उपलब्ध",
    about_tab_story: "कहानी",
    about_tab_mission: "मिशन",
    about_tab_values: "मूल्य",
    about_section_story_title: "हमारी कहानी",
    about_story_p1:
      "Wrio की शुरुआत इस बात के अवलोकन से हुई कि बड़ी कंपनियों के पास उन्नत सिस्टम हैं, जबकि छोटे और मध्यम व्यवसाय फोन, व्हाट्सऐप और स्प्रेडशीट पर ऑर्डर मैनेज करते हैं।",
    about_story_p2:
      "हमने देखा कि व्यवसाय मैनुअल प्रक्रियाओं से जूझ रहे हैं, ऑर्डर खो रहे हैं और समन्वय में बहुत समय बिता रहे हैं।",
    about_story_p3:
      "इसीलिए हमने Wrio बनाया — एक ऐसा प्लेटफ़ॉर्म जो सभी आकार के व्यवसायों को एंटरप्राइज़-ग्रेड क्षमताएँ देता है, बिना जटिलता और महंगे खर्च के।",
    about_story_p4:
      "आज Wrio भारत भर में सैकड़ों व्यवसायों को सक्षम करता है और उन्हें डिजिटल रूप से स्केल करने में मदद करता है।",
    about_section_mission_title: "हमारा मिशन",
    about_mission_intro:
      "हर बढ़ते व्यवसाय को ऐसी तकनीक देना जो संचालन सरल बनाए, अव्यवस्था हटाए और वृद्धि के द्वार खोले।",
    about_mission_card_1_title: "जटिलता को सरल बनाना",
    about_mission_card_1_desc:
      "पावरफुल टूल्स को उन व्यवसायों के लिए सुलभ बनाना जिनके पास बड़ी तकनीकी टीमें नहीं हैं।",
    about_mission_card_2_title: "विकास सक्षम करना",
    about_mission_card_2_desc:
      "डिजिटल परिवर्तन के जरिए SMEs को बड़े खिलाड़ियों से प्रतिस्पर्धा करने में मदद करना।",
    about_mission_card_3_title: "विश्वास बनाना",
    about_mission_card_3_desc:
      "भरोसेमंद और पारदर्शी सिस्टम बनाना जिन पर व्यवसाय निर्भर कर सकें।",
    about_mission_card_4_title: "उत्कृष्टता प्रदान करना",
    about_mission_card_4_desc:
      "उत्कृष्ट समर्थन और सतत सुधार के साथ वर्ल्ड-क्लास सॉफ़्टवेयर प्रदान करना।",
    about_val_customer_title: "ग्राहक सफलता पहले",
    about_val_customer_desc:
      "आपकी वृद्धि हमारी सफलता है। हम SMEs को डिजिटल युग में फलने-फूलने में मदद करने के लिए प्रतिबद्ध हैं।",
    about_val_innov_title: "नवाचार और सरलता",
    about_val_innov_desc:
      "हम मानते हैं कि शक्तिशाली तकनीक का उपयोग करना सरल होना चाहिए।",
    about_val_trust_title: "भरोसा और पारदर्शिता",
    about_val_trust_desc:
      "ईमानदार रिश्तों पर निर्मित। आपका डेटा सुरक्षित है और मूल्य निर्धारण स्पष्ट है।",
    about_val_improve_title: "निरंतर सुधार",
    about_val_improve_desc:
      "हम हमेशा आपकी प्रतिक्रिया के आधार पर विकसित होते हैं।",
    about_team_heading: "Wrio के पीछे की टीम",
    about_team_role: "संस्थापक और टीम",
    about_team_description:
      "प्रौद्योगिकी विशेषज्ञों, व्यवसाय रणनीतिकारों और उद्योग विशेषज्ञों की एक समर्पित टीम।",
    about_team_highlight_1: "B2B टेक में 15+ वर्षों का संयुक्त अनुभव",
    about_team_highlight_2: "वितरण चुनौतियों की गहरी समझ",
    about_team_highlight_3:
      "एंटरप्राइज़ सॉफ़्टवेयर को जन-जन तक पहुँचाने की प्रतिबद्धता",
    about_journey_title: "हमारी यात्रा",
    about_journey_sub: "हमारी विकास कहानी के प्रमुख मील के पत्थर",
    about_ms_2023_event: "Wrio की स्थापना",
    about_ms_2023_desc:
      "B2B ऑर्डरिंग को सरल बनाने के दृष्टिकोण के साथ शुरू किया गया",
    about_ms_2024_event_1: "100+ ग्राहक",
    about_ms_2024_desc_1: "FMCG सेक्टर में पहला बड़ा मील का पत्थर हासिल किया",
    about_ms_2024_event_2: "प्लेटफ़ॉर्म विकास",
    about_ms_2024_desc_2: "मल्टी-लेवल वितरण फीचर्स लॉन्च किए",
    about_ms_2025_event: "क्षेत्रों का विस्तार",
    about_ms_2025_desc: "उद्योगों और भौगोलिक क्षेत्रों में वृद्धि",
    about_cta_title: "हमारी यात्रा में शामिल हों?",
    about_cta_sub: "आइए मिलकर आपका व्यापार बदलें",
    about_cta_primary: "मुफ्त शुरू करें",
    about_cta_secondary: "डेमो शेड्यूल करें",

    // Features (Hindi)
    features_label_powerful: "शक्तिशाली फीचर्स",
    features_heading_prefix: "आपके लिए सबकुछ",
    features_heading_highlight: "अपने व्यवसाय को बढ़ाएं",
    features_subheading:
      "आधुनिक B2B और B2C संचालन के लिए डिज़ाइन किए गए व्यापक टूल। उपयोग करने में सरल, विकास के लिए शक्तिशाली।",
    features_cat_all: "सभी फीचर्स",
    features_cat_ordering: "ऑर्डरिंग",
    features_cat_distribution: "वितरण",
    features_cat_analytics: "एनालिटिक्स",
    features_cat_management: "प्रबंधन",
    features_highlight_no_infra: "कोई IT इंफ्रास्ट्रक्चर आवश्यक नहीं",
    features_highlight_deploy: "मिनटों में तैनात, महीनों में नहीं",
    features_highlight_security: "एंटरप्राइज़-ग्रेड सुरक्षा",
    features_highlight_updates: "नियमित फीचर अपडेट",

    // (translate a representative subset for brevity — exact English keys used as fallback if missing)
    feat_ordering_b2b_title: "B2B और B2C ऑर्डरिंग",
    feat_ordering_b2b_desc:
      "कस्टमाइज़ेबल वर्कफ़्लो के साथ B2B और सीधे ग्राहक ऑर्डर दोनों का समर्थन करता प्लैटफ़ॉर्म।",
    feat_ordering_b2b_b1: "ड्यूल-मोड़ ऑर्डरिंग",
    feat_ordering_b2b_b2: "कस्टम ऑर्डर फॉर्म",
    feat_ordering_b2b_b3: "बुल्क ऑर्डर समर्थन",
    feat_ordering_b2b_b4: "क्विक रीऑर्डर विकल्प",

    feat_catalogs_title: "डिजिटल कैटलॉग",
    feat_catalogs_desc:
      "रिच मीडिया और वास्तविक समय इन्वेंटरी सिंक के साथ उत्पाद कैटलॉग बनाएं और प्रबंधित करें।",
    feat_catalogs_b1: "असीमित उत्पाद",
    feat_catalogs_b2: "इमेज और वीडियो सपोर्ट",
    feat_catalogs_b3: "श्रेणी प्रबंधन",
    feat_catalogs_b4: "खोज और फ़िल्टर",

    feat_dynamic_pricing_title: "डायनामिक प्राइसिंग",
    feat_dynamic_pricing_desc:
      "विभिन्न भागीदारों, क्षेत्रों या मात्रा के लिए कस्टम मूल्य नियम सेट करें।",
    feat_dynamic_pricing_b1: "टियर-आधारित प्राइसिंग",
    feat_dynamic_pricing_b2: "भागीदार-विशिष्ट दरें",
    feat_dynamic_pricing_b3: "वॉल्यूम डिस्काउंट",
    feat_dynamic_pricing_b4: "प्रोमोशनल प्राइसिंग",

    // (other feature translations use English fallback if needed)
    features_cta_title: "क्या आप इन फीचर्स को अनुभव करने के लिए तैयार हैं?",
    features_cta_sub:
      "सैकड़ों व्यवसायों में शामिल हों जो Wrio के साथ अपने संचालन को स्ट्रीमलाइन कर रहे हैं",
    features_cta_primary: "मुफ्त ट्रायल शुरू करें",
    features_cta_secondary: "डेमो देखें",

    // Contact (Hindi)
    contact_banner: "हम आपकी मदद के लिए यहाँ हैं",
    contact_title_prefix: "संपर्क करें",
    contact_title_highlight: "हमसे",
    contact_subheading:
      "WRIO के बारे में सवाल हैं? हमारी टीम आपकी सहायता के लिए तैयार है।",
    contact_email_title: "हमें ईमेल करें",
    contact_email_note: "हमारी टीम आमतौर पर 24 घंटे के भीतर जवाब देती है",
    contact_email: "mahendra@wrio.in",
    contact_call_title: "हमें कॉल करें",
    contact_call_note: "सोम-शुक्र 9am से 6pm तक",
    contact_phone: "+91 7798982717",
    contact_visit_title: "हमसे मिलें",
    contact_visit_note: "हमारे ऑफिस में आकर नमस्ते कहें",
    contact_address:
      "Devise Apps, Camellia Apartments, B402, Baner Pashan Link Rd, Pashan, Pune, Maharashtra, India 411021",
    contact_form_title: "हमें संदेश भेजें",
    contact_thanks: "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।",
    contact_form_name_label: "पूरा नाम *",
    contact_form_name_placeholder: "John Doe",
    contact_form_email_label: "ईमेल पता *",
    contact_form_email_placeholder: "john@example.com",
    contact_form_phone_label: "फोन नंबर",
    contact_form_phone_placeholder: "+91 7798982717",
    contact_form_subject_label: "विषय *",
    contact_form_subject_placeholder: "हम आपकी कैसे मदद कर सकते हैं?",
    contact_form_message_label: "संदेश *",
    contact_form_message_placeholder: "अपनी पूछताछ के बारे में और बताएं...",
    contact_form_send: "संदेश भेजें",
    contact_why_title: "WRIO क्यों चुनें?",
    contact_why_item1_title: "15+ भाषाएँ",
    contact_why_item1_desc: "ग्लोबल पहुंच के लिए बहुभाषी इंटरफ़ेस",
    contact_why_item2_title: "रीयल-टाइम अपडेट",
    contact_why_item2_desc: "ऑर्डर तुरंत ट्रैक करें",
    contact_why_item3_title: "24/7 सपोर्ट",
    contact_why_item3_desc: "हम हमेशा मदद के लिए मौजूद हैं",
    contact_faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    contact_faq_q1: "मैं कितनी जल्दी शुरू कर सकता/सकती हूँ?",
    contact_faq_a1:
      "हमारी त्वरित सेटअप प्रक्रिया के साथ आप मिनटों में WRIO का उपयोग शुरू कर सकते हैं।",
    contact_faq_q2: "क्या प्रशिक्षण दिया जाता है?",
    contact_faq_a2:
      "हाँ, हम व्यापक प्रशिक्षण और ऑनबोर्डिंग समर्थन प्रदान करते हैं।",
    contact_faq_q3: "कौन सी भाषाएँ समर्थित हैं?",
    contact_faq_a3:
      "WRIO 15+ भाषाओं का समर्थन करता है और और भाषाएँ नियमित रूप से जोड़ी जा रही हैं।",
    contact_quick_stats_title: "त्वरित आँकड़े",
    contact_quick_stat_1_value: "10K+",
    contact_quick_stat_1_label: "सक्रिय उपयोगकर्ता",
    contact_quick_stat_2_value: "50K+",
    contact_quick_stat_2_label: "ऑर्डर/दिन",
    contact_quick_stat_3_value: "15+",
    contact_quick_stat_3_label: "भाषाएँ",
  },

  // Marathi translations
  mr: {
    // General
    home: "होम",
    about: "आमच्याबद्दल",
    features: "वैशिष्ट्ये",
    benefits: "फायदे",
    contact: "संपर्क करा",
    getStarted: "सुरुवात करा",
    tagline: "स्मार्ट ऑर्डर बुकिंग",
    companyDescription:
      "स्मार्ट ऑर्डर बुकिंगसाठी एक प्लॅटफॉर्म। स्थानिकरित्या सानुकूलित बहुभाषिक इंटरफेस जी व्यवसाय ऑपरेशन सुलभ करते.",
    quickLinks: "द्रुत दुवे",
    products: "उत्पादने",
    getInTouch: "संपर्कात रहा",
    orderBooking: "ऑर्डर बुकिंग",
    inventoryManagement: "इन्व्हेंटरी व्यवस्थापन",
    analyticsDashboard: "अॅनालिटिक्स डॅशबोर्ड",
    multiLanguageSupport: "बहुभाषा समर्थन",
    mobileApp: "मोबाइल अॅप",
    pricing: "किंमत",
    privacyPolicy: "गोपनीयता धोरण",
    termsOfService: "सेवा अटी",
    cookiePolicy: "कुकी धोरण",
    allRightsReserved: "सर्व हक्क राखीव.",

    // Hero
    trustedBanner: "जगभरातील 10,000+ व्यवसायांनी विश्वास ठेवला",
    heroHeadingLine1: "आपले ऑनलाइन तयार करा",
    heroHeadingHighlight: "ऑर्डरिंग सिस्टम",
    heroHeadingLine2: "मिनिटांत",
    heroSub:
      "आपली दुकान एक असो किंवा 100 — Wrio लहान व्यवसायांना तत्काळ ऑर्डर घेण्यास मदत करते आणि फ्रँचायझी ब्रँड्सना सर्व आउटलेट एका मजबूत डॅशबोर्डवरून व्यवस्थापित करता येतात.",
    features_quickSetup_title: "त्वरित सेटअप",
    features_quickSetup_desc: "5 मिनिटांत सुरू करा",
    features_languages_title: "15+ भाषा",
    features_languages_desc: "अधिक ग्राहकांना पोहोचा",
    features_analytics_title: "स्मार्ट अॅनालिटिक्स",
    features_analytics_desc: "डेटा-आधारित निर्णय",
    features_payments_title: "सुलभ पेमेंट",
    features_payments_desc: "अनेक पेमेंट विकल्प",
    cta_create_store: "आपला स्टोअर तयार करा — मोफत",
    cta_watch_demo: "डेमो पहा",
    stat_happy_label: "आनंदी व्यवसाय",
    stat_orders_label: "प्रोसेस ऑर्डर्स",
    stat_uptime_label: "अपटाइम",
    stat_rating_label: "यूजर रेटिंग",
    powering_text: "वेगवेगळ्या उद्योगांतील व्यवसायांना सामर्थ्य देणे",
    powering_items_restaurants: "रेस्टॉरंट",
    powering_items_retail: "रिटेल स्टोअर्स",
    powering_items_cafes: "कॅफेस",
    powering_items_bakeries: "बेकरी",
    powering_items_foodtrucks: "फूड ट्रक्स",
    mockup_total_revenue: "एकूण महसूल",
    mockup_dashboard_url: "dashboard.wrio.app",
    mockup_outlet_alpha: "आउटलेट अल्फा",
    mockup_outlet_beta: "आउटलेट बीटा",
    mockup_outlet_gamma: "आउटलेट गॅमा",
    new_order: "नवीन ऑर्डर!",
    new_order_amt: "+$24.99",
    add_to_cart: "कार्टमध्ये जोडा",
    vanilla_cone: "व्हॅनिला कोन",
    premium_quality: "प्रीमियम गुणवत्ता",

    // Approach
    approach_small_title: "लघु व्यवसायांसाठी",
    approach_small_f1: "काही मिनिटांत आपला स्टोअर तयार करा",
    approach_small_f2: "तांत्रिक माहितीस गरज नाही",
    approach_small_f3: "सोपे ऑर्डर-टेकिंग अॅप",
    approach_small_f4: "पेमेंट, मेनू, ग्राहक - सर्व काही एकाच ठिकाणी",
    approach_small_cta: "आपला स्टोअर सुरू करा",
    approach_franchise_title: "फ्रँचायझी ब्रँड्ससाठी",
    approach_franchise_f1: "मल्टी-स्टोअर डॅशबोर्ड",
    approach_franchise_f2: "हेड ऑफिस कंट्रोल्स",
    approach_franchise_f3: "आउटलेट-वाइज रिपोर्ट्स",
    approach_franchise_f4: "खरेदी/स्टॉक फ्लो",
    approach_franchise_cta: "फ्रँचायझी डेमो बुक करा",
    approach_sb_features_title: "लघु व्यवसायांसाठी फीचर्स",
    approach_fr_features_title: "फ्रँचायझी चेनसाठी फीचर्स",
    approach_sb_feat_qsetup: "झटपट सेटअप",
    approach_sb_feat_orderphone: "फोन/टॅबलेटवर ऑर्डर घेणे",
    approach_sb_feat_menu: "डिजिटल मेनू",
    approach_sb_feat_customers: "ग्राहक ट्रॅकिंग",
    approach_fr_feat_dashboard: "मल्टी-स्टोअर डॅशबोर्ड",
    approach_fr_feat_headcontrols: "हेड ऑफिस कंट्रोल्स",
    approach_fr_feat_reports: "आउटलेट-वाइज रिपोर्ट्स",
    approach_fr_feat_stock: "खरेदी/स्टॉक फ्लो",

    // About (Marathi)
    about_title_prefix: "आमच्याबद्दल",
    about_title_brand: "Wrio",
    about_subheading:
      "SME करीता एंटरप्राइझ-ग्रेड ऑर्डरिंग सोल्यूशन्स — साधे, परवडणारे आणि वाढीसाठी तयार.",
    about_stat_active: "सक्रिय व्यवसाय",
    about_stat_orders: "प्रोसेस ऑर्डर",
    about_stat_uptime: "प्लॅटफॉर्म अपटाइम",
    about_stat_support: "सपोर्ट उपलब्ध",
    about_tab_story: "कथा",
    about_tab_mission: "उद्दिष्ट",
    about_tab_values: "मूल्ये",
    about_section_story_title: "आमची कथा",
    about_story_p1:
      "Wrio ची सुरुवात एका निरीक्षणापासून झाली की मोठ्या कंपन्यांकडे विकसित सिस्टम असतात, परंतु लहान व मध्यम व्यवसाय फोन, व्हाट्सअॅप व स्प्रेडशीटवर ऑर्डर व्यवस्थापित करतात.",
    about_story_p2:
      "व्यवसाय मॅन्युअल प्रक्रियांमुळे जडलेले दिसले व ते वाढीऐवजी समन्वयात वेळ घालवत होते.",
    about_story_p3:
      "म्हणून आम्ही Wrio तयार केले — सर्व आकारांच्या व्यवसायांना एंटरप्राइझ-ग्रेड क्षमता देणारे प्लॅटफॉर्म, जटिलता आणि जास्त खर्चांशिवाय.",
    about_story_p4:
      "आज Wrio भारतभरातील शेकडो व्यवसायांना डिजिटल बनवून आत्मविश्वासाने वाढण्यासाठी मदत करतो.",
    about_section_mission_title: "आमचे उद्दिष्ट",
    about_mission_intro:
      "प्रत्येक वाढणाऱ्या व्यवसायाला अशी तंत्रज्ञान द्यायची जी ऑपरेशन्स साधी करते, गोंधळ कमी करते आणि वाढीचे दरवाजे उघडते.",
    about_mission_card_1_title: "जटिलता साधी करा",
    about_mission_card_1_desc:
      "शक्तिशाली टूल्स अशा व्यवसायांसाठी उपलब्ध करणे ज्यांच्याकडे मोठी टेक टीम नाही.",
    about_mission_card_2_title: "वाढ सक्षम करा",
    about_mission_card_2_desc:
      "डिजिटल परिवर्तनाद्वारे SMEs ना मोठ्या प्लेयर्सशी स्पर्धा करण्यास मदत करा.",
    about_mission_card_3_title: "विश्वास निर्माण करा",
    about_mission_card_3_desc:
      "विश्वासार्ह, पारदर्शक सिस्टम तयार करा ज्यावर व्यवसाय अवलंबून राहतील.",
    about_mission_card_4_title: "उत्कृष्टता द्या",
    about_mission_card_4_desc:
      "उत्कृष्ट सपोर्ट व सतत सुधारणा देणारे वर्ल्ड-क्लास सॉफ्टवेअर प्रदान करा.",
    about_val_customer_title: "ग्राहक यश प्रथम",
    about_val_customer_desc:
      "तुमची वाढ म्हणजे आमचे यश. SMEs ना डिजिटल युगात वाढवण्याचे आमचे वचन आहे.",
    about_val_innov_title: "नवोन्मेष आणि साधेपणा",
    about_val_innov_desc:
      "शक्तिशाली तंत्रज्ञान वापरण्यास सोपे असावे — हा आमचा विश्वास आहे.",
    about_val_trust_title: "विश्वास आणि पारदर्शकता",
    about_val_trust_desc:
      "प्रामाणिक नात्यांवर आधारित. तुमचा डेटा सुरक्षित आहे आणि मूल्यनिर्धारण स्पष्ट आहे.",
    about_val_improve_title: "सतत सुधारणा",
    about_val_improve_desc: "आम्ही तुमच्या फीडबॅकवर आधारित सतत विकसित होतो.",
    about_team_heading: "Wrio मागील टीम",
    about_team_role: "संस्थापक व टीम",
    about_team_description:
      "तंत्रज्ञ, व्यवसाय रणनीतिकार आणि उद्योग तज्ञांची समर्पित टीम.",
    about_team_highlight_1: "B2B तंत्रज्ञानात 15+ वर्षांचा संयुक्त अनुभव",
    about_team_highlight_2: "वितरण आव्हानांची सखोल समज",
    about_team_highlight_3:
      "एंटरप्राइझ सॉफ्टवेअर सर्वांपर्यंत पोहोचवण्याची वचनबद्धता",
    about_journey_title: "आमचा प्रवास",
    about_journey_sub: "आमच्या वाढीच्या कथेतील प्रमुख मैलाचे दगड",
    about_ms_2023_event: "Wrio ची स्थापना",
    about_ms_2023_desc: "B2B ऑर्डरिंग साधे करण्याच्या दृष्टिकोनाने सुरू",
    about_ms_2024_event_1: "100+ ग्राहक",
    about_ms_2024_desc_1: "FMCG क्षेत्रात पहिले मोठे यश मिळवले",
    about_ms_2024_event_2: "प्लॅटफॉर्म उत्क्रांती",
    about_ms_2024_desc_2: "मल्टी-लेव्हल वितरण फीचर्स लाँच केले",
    about_ms_2025_event: "वाढीचे क्षितिज",
    about_ms_2025_desc: "उद्योग व प्रदेशांत वाढ",

    about_cta_title: "आमच्या प्रवासात सामील होणार?",
    about_cta_sub: "चला एकत्र तुमचा व्यवसाय बदलूया",
    about_cta_primary: "सुरुवात करा (मोफत)",
    about_cta_secondary: "डेमो शेड्यूल करा",

    // Features (Marathi condensed translations; english fallback used where needed)
    features_label_powerful: "शक्तिशाली वैशिष्ट्ये",
    features_heading_prefix: "आपल्याला हवे असलेले सर्व",
    features_heading_highlight: "आपला व्यवसाय वाढवा",
    features_subheading:
      "साध्या वापरामध्ये आधुनिक B2B आणि B2C ऑपरेशन्ससाठी तयार केलेली सुलभ व सामर्थ्यवान टूल्स.",
    features_cat_all: "सर्व वैशिष्ट्ये",
    features_cat_ordering: "ऑर्डरिंग",
    features_cat_distribution: "वितरण",
    features_cat_analytics: "अॅनालिटिक्स",
    features_cat_management: "व्यवस्थापन",
    features_highlight_no_infra: "कोणतीही IT इन्फ्रास्ट्रक्चर आवश्यक नाही",
    features_highlight_deploy: "मिनिटांत तैनात करा, महिन्यांत नाही",
    features_highlight_security: "एंटरप्राइझ-ग्रेड सुरक्षा",
    features_highlight_updates: "नियमित फीचर अपडेट",

    // Contact (Marathi)
    contact_banner: "आम्ही मदतीसाठी आहोत",
    contact_title_prefix: "संपर्क करा",
    contact_title_highlight: "आमच्याशी",
    contact_subheading:
      "WRIO बद्दल प्रश्न आहेत का? आमची टीम तुमची मदत करण्यासाठी तयार आहे.",
    contact_email_title: "आम्हाला ईमेल करा",
    contact_email_note: "आमची टीम सामान्यत: 24 तासांत उत्तर देते",
    contact_email: "mahendra@wrio.in",
    contact_call_title: "आम्हाला कॉल करा",
    contact_call_note: "सोम-शुक्र, 9am ते 6pm",
    contact_phone: "+91 7798982717",
    contact_visit_title: "आम्हाला भेटा",
    contact_visit_note: "आमच्या ऑफिसमध्ये भेट देऊन नमस्कार करा",
    contact_address:
      "Devise Apps, Camellia Apartments, B402, Baner Pashan Link Rd, Pashan, Pune, Maharashtra, India 411021",
    contact_form_title: "आम्हाला संदेश पाठवा",
    contact_thanks: "धन्यवाद! तुमचा संदेश यशस्वीरित्या पाठविला गेला आहे.",
    contact_form_name_label: "पूर्ण नाव *",
    contact_form_name_placeholder: "John Doe",
    contact_form_email_label: "ईमेल पत्ता *",
    contact_form_email_placeholder: "john@example.com",
    contact_form_phone_label: "फोन क्रमांक",
    contact_form_phone_placeholder: "+91 7798982717",
    contact_form_subject_label: "विषय *",
    contact_form_subject_placeholder: "आम्ही तुमची कशी मदत करू?",
    contact_form_message_label: "संदेश *",
    contact_form_message_placeholder: "तुमच्या चौकशीबद्दल अधिक सांगू...",
    contact_form_send: "संदेश पाठवा",
    contact_why_title: "WRIO का निवडावे?",
    contact_why_item1_title: "15+ भाषा",
    contact_why_item1_desc: "आंतरराष्ट्रीय पोहोचसाठी बहुभाषिक इंटरफेस",
    contact_why_item2_title: "रिअल-टाइम अपडेट",
    contact_why_item2_desc: "ऑर्डर तत्काळ ट्रॅक करा",
    contact_why_item3_title: "24/7 सपोर्ट",
    contact_why_item3_desc: "आम्ही नेहमी मदतीसाठी आहोत",
    contact_faq_title: "वारंवार विचारले जाणारे प्रश्न",
    contact_faq_q1: "मी किती लवकर सुरू करू शकतो?",
    contact_faq_a1:
      "आमच्या जलद सेटअप प्रक्रियेद्वारे तुम्ही मिनिटांत WRIO वापरणे सुरू करू शकता.",
    contact_faq_q2: "प्रशिक्षण दिले जाते का?",
    contact_faq_a2: "होय, आम्ही सविस्तर प्रशिक्षण आणि ऑनबोर्डिंग पुरवतो.",
    contact_faq_q3: "कोणत्या भाषा समर्थित आहेत?",
    contact_faq_a3:
      "WRIO 15+ भाषा समर्थित करते आणि नियमितपणे अधिक भाषा जोडल्या जात आहेत.",
    contact_quick_stats_title: "त्वरित आकडे",
    contact_quick_stat_1_value: "10K+",
    contact_quick_stat_1_label: "सक्रिय वापरकर्ते",
    contact_quick_stat_2_value: "50K+",
    contact_quick_stat_2_label: "ऑर्डर/दिवस",
    contact_quick_stat_3_value: "15+",
    contact_quick_stat_3_label: "भाषा",
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const t = (key) => {
    const words = translations[language] || translations["en"];
    return words[key] !== undefined ? words[key] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
