import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Zap,
  ShoppingCart,
  Mic,
  Globe,
  Receipt,
  MapPin,
  Megaphone,
  Package,
} from "lucide-react";

const WrioCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const features = [
    {
      icon: Smartphone,
      title: "Zero IT Infrastructure Cost",
      description:
        "Sell your products on mobile without expensive hardware or complex systems",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description:
        "Get your business or franchises up and running in minutes, not days",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    },
    {
      icon: ShoppingCart,
      title: "Easy B2B & B2C Ordering",
      description:
        "Seamless ordering experience for both business and customer transactions",
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      icon: Mic,
      title: "Voice Ordering",
      description: "Place orders without typing - just speak and order",
      image:
        "https://images.unsplash.com/photo-1589254065909-b7086229d08c?w=800&q=80",
    },
    {
      icon: Globe,
      title: "All Languages Supported",
      description:
        "Serve customers globally with comprehensive language support",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80",
    },
    {
      icon: Receipt,
      title: "Tax Software Integration",
      description:
        "Seamlessly integrate with your existing tax and accounting systems",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    },
    {
      icon: MapPin,
      title: "Salesman Tracking",
      description:
        "Real-time location tracking and comprehensive reporting for your sales team",
      image:
        "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=800&q=80",
    },
    {
      icon: Megaphone,
      title: "Promotions & Announcements",
      description:
        "Instantly notify customers about new products and special offers",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    },
    {
      icon: Package,
      title: "Stock Management",
      description: "Efficient inventory tracking and management in real-time",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, features.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const IconComponent = features[currentSlide].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-4">
            Wrio Features & Benefits
          </h1>
          <p className="text-xl text-green-700">
            Transform your business with powerful, mobile-first solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl border-2 border-green-100 p-8 md:p-12">
          {/* Main Feature Display */}
          <div className="relative overflow-hidden">
            <div className="flex items-center justify-center mb-8">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center transform transition-all duration-500 hover:scale-110 shadow-lg">
                <IconComponent className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="text-center min-h-[200px] flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6 transition-all duration-500">
                {features[currentSlide].title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-500">
                {features[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-12 h-3 bg-green-600"
                    : "w-3 h-3 bg-green-200 hover:bg-green-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-center mt-6">
            <span className="text-green-600 text-sm font-medium">
              {currentSlide + 1} / {features.length}
            </span>
          </div>
        </div>

        {/* Feature Grid Preview */}
        <div className="mt-12 grid grid-cols-3 md:grid-cols-9 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`p-4 rounded-xl transition-all duration-300 border-2 ${
                  currentSlide === index
                    ? "bg-green-500 border-green-600 scale-110 shadow-lg"
                    : "bg-white border-green-100 hover:bg-green-50 hover:border-green-300"
                }`}
                aria-label={feature.title}
              >
                <Icon
                  className={`w-6 h-6 mx-auto ${
                    currentSlide === index ? "text-white" : "text-green-600"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WrioCarousel;
