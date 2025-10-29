import React, { useState, useEffect } from "react";

const ZolvitHeroSection = () => {
  const [clickedCard, setClickedCard] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const backgroundImageUrl =
    "https://res.cloudinary.com/de4ks8mkh/image/upload/v1761474873/Copilot_20251026_154726_qdkxev.png";

  const heroData = {
    mainTitle: "Turn Your Vision into a Brand.",
    subTitle: "Scale It Smarter with Cube Multimedia.",
    description1: "Simplifying Marketing, Branding, and Growth, the",
    highlight: "AI-Driven",
    description2: "way. Eastern India's leading agency,",
    description3: "backed by experts who deliver results.",
  };

  const typingPhrases = [
    "Social Media Management",
    "Facebook Ads",
    "Google Ads",
    "Podcast Marketing",
    "Video Editing",
  ];

  useEffect(() => {
    const currentPhrase = typingPhrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
      } else {
        setCurrentText(
          isDeleting
            ? currentPhrase.substring(0, currentText.length - 1)
            : currentPhrase.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentPhraseIndex]);

  const quickActions = [
    "Facebook Ads",
    "Google Ads",
    "Podcast Marketing",
    "Video Editing",
  ];

  const businessCards = [
    {
      id: 1,
      title: "Digital Marketing ▸",
      description:
        "Data-driven campaigns and social media strategies that grow your brand.",
      icon: "https://assets.vakilsearch.com/ic-start-business-services-zpf.png",
      rotation: "-5deg",
    },
    {
      id: 2,
      title: "Influencer Marketing ▸",
      description:
        "Partner with the right talents to boost engagement and credibility.",
      icon: "https://assets.vakilsearch.com/ic-manage-business-services-zpf.png",
      rotation: "0deg",
    },
    {
      id: 3,
      title: "Content Creation ▸",
      description:
        "Creative visuals and compelling stories for your brand story.",
      icon: "https://assets.vakilsearch.com/ic-protect-business-services-zpf.png",
      rotation: "5deg",
    },
  ];

  const testimonial = {
    quote: "All Your Marketing Needs in One Place. Cube Makes It Easy.",
    author: "Trusted by 100+ Clients",
  };

  const partners = [
    "https://assets.vakilsearch.com/live-images/ic-amazon.svg",
    "https://assets.vakilsearch.com/live-images/ic-oyo.svg",
    "https://assets.vakilsearch.com/live-images/ic-small-swiggy.svg",
    "https://assets.vakilsearch.com/live-images/ic-bigbasket.svg",
    "https://assets.vakilsearch.com/live-images/ic-hdfc.svg",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
        }}
      ></div>

      {/* Overlay for better contrast */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        <div className="flex justify-center items-center mb-6 w-full">
          <div className="flex -space-x-2 justify-center">
            {[
              "https://randomuser.me/api/portraits/men/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
              "https://randomuser.me/api/portraits/men/3.jpg",
              "https://randomuser.me/api/portraits/women/4.jpg",
              "https://randomuser.me/api/portraits/men/5.jpg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Reviewer"
                className="w-8 h-8 rounded-full border-2 border-gray-800"
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mb-6">
          <div className="flex text-yellow-400 text-sm sm:text-base">★★★★★</div>
          <span className="text-white font-semibold text-sm sm:text-base">
            4.5/5
          </span>
          <span className="text-gray-400 text-xs sm:text-sm">
            (19k+ Reviews)
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {heroData.mainTitle}
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {heroData.subTitle}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg">
            {heroData.description1}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-1xl shadow-[0_0_20px_rgba(239,68,68,0.6),0_0_40px_rgba(239,68,68,0.4)]">
                {heroData.highlight}
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 rounded-full blur-sm opacity-75 animate-pulse"></span>
            </span>{" "}
            {heroData.description2}
          </p>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mt-2">
            {heroData.description3}
          </p>
        </div>

        {/* Search Bar with Typing Animation */}
        <div className="max-w-full sm:max-w-3xl lg:max-w-full mx-auto mb-6 relative">
          <div className="relative">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder={`Try ${currentText}`}
              className="w-full px-6 sm:px-8 py-5 sm:py-6 lg:py-7 pr-20 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white text-lg sm:text-xl placeholder-gray-400 focus:border-red-500 focus:outline-none transition-all"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 sm:p-4 lg:p-5 rounded-full hover:bg-gray-100 transition-all">
              <svg
                className="w-6 h-6 sm:w-7 sm:h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {quickActions.map((action, index) => (
            <button
              key={index}
              className="px-3 sm:px-4 py-2 rounded-full border-2 border-white/30 text-white hover:bg-white/10 hover:border-red-500 transition-all text-xs sm:text-sm"
            >
              {action}
            </button>
          ))}
        </div>

        {/* Business Cards with Tilt */}
        <div className="relative w-full flex flex-col md:flex-row justify-center items-center md:items-end gap-4 md:gap-8 lg:gap-4 mt-10 md:mt-20 px-4">
          {businessCards.map((card) => (
            <div
              key={card.id}
              onClick={() =>
                setClickedCard(clickedCard === card.id ? null : card.id)
              }
              className={`bg-white rounded-2xl shadow-2xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-500 hover:scale-105 hover:shadow-red-500/30 cursor-pointer w-full sm:w-[500px] md:w-[580px] lg:w-[680px] xl:w-[750px] min-h-[420px]`}
              style={{
                transform:
                  clickedCard === card.id
                    ? `rotate(0deg) translateY(-90px)`
                    : `rotate(${card.rotation}) translateY(0)`,
                zIndex: clickedCard === card.id ? 20 : 10,
              }}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {card.title}
                  </h3>
                  <span className="text-3xl">▸</span>
                </div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
                  {card.description}
                </p>
              </div>

              <div className="flex justify-center items-center">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-96 h-96 sm:w-40 sm:h-40 md:w-40 md:h-40 object-contain opacity-90 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave & Bottom Section */}
      <div className="relative -mt-32 sm:-mt-48 z-10">
        <div
          className="bg-black pt-24  relative overflow-hidden"
          style={{
            borderTopLeftRadius: "50% 60px",
            borderTopRightRadius: "50% 60px",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-12">
              {/* Testimonial */}
              <div className="text-white text-center md:text-left">
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  <div className="text-left">
                    <p className="text-md font-semibold">{testimonial.quote}</p>
                    <p className="text-md font-semibold mt-3">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>

              {/* Award */}
              <div className="text-center">
                <img
                  src="https://assets.vakilsearch.com/ic-zolvit-reviews-light-zpf.svg"
                  alt="Zolvit Reviews"
                  className="w-72 sm:w-80 md:w-96"
                />
              </div>

              {/* Google Reviews */}
              <div className="flex items-center justify-center md:justify-end bg-black p-4 rounded-lg">
                <div className="flex items-center gap-3 text-white">
                  <img
                    src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
                    alt="Google"
                    className="w-8 sm:w-10"
                  />

                  <div className="text-left">
                    <p className="font-medium text-sm sm:text-base">
                      Google Reviews
                    </p>

                    <div className="flex items-center text-yellow-400 text-base sm:text-lg">
                      <span>★★★★★</span>
                      <span className="text-white font-semibold ml-2">
                        4.5/5
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs sm:text-sm">
                      19k+ Happy Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partner Logos Marquee */}
          <div className="w-full bg-[#1a1a1a] py-12 overflow-hidden">
            <div className="flex gap-12 animate-marquee items-center">
              {[...partners, ...partners].map((partner, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    className="h-8 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                display: flex;
                animation: marquee 20s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZolvitHeroSection;
