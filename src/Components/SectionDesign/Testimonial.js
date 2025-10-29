import React, { useState, useEffect, useRef } from "react";

const TestimonialCarousel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const trackRef = useRef(null);

  // Sample testimonial data - replace with your actual images
  const testimonials = [
    {
      id: 1,
      image: "https://picsum.photos/320/450?random=1",
      alt: "Client Testimonial 1",
    },
    {
      id: 2,
      image: "https://picsum.photos/320/450?random=2",
      alt: "Client Testimonial 2",
    },
    {
      id: 3,
      image: "https://picsum.photos/320/450?random=3",
      alt: "Client Testimonial 3",
    },
    {
      id: 4,
      image: "https://picsum.photos/320/450?random=4",
      alt: "Client Testimonial 4",
    },
    {
      id: 5,
      image: "https://picsum.photos/320/450?random=5",
      alt: "Client Testimonial 5",
    },
    {
      id: 6,
      image: "https://picsum.photos/320/450?random=6",
      alt: "Client Testimonial 6",
    },
  ];

  // Duplicate testimonials for infinite scroll
  const allTestimonials = [...testimonials, ...testimonials];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const scrollCarousel = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 350;
      trackRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-rose-900 flex items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-red-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div
          className="absolute w-96 h-96 bg-rose-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-red-400/10 rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="w-full max-w-7xl bg-gradient-to-br from-red-600 via-red-500 to-red-600 rounded-3xl p-12 md:p-20 shadow-2xl relative overflow-hidden">
        {/* Decorative patterns */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Glow effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-b from-white/20 to-transparent blur-2xl"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-t from-yellow-300/30 to-transparent blur-2xl"></div>

        {/* Title with enhanced styling */}
        <div className="text-center mb-14 relative z-10">
          <div className="inline-block">
            <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-wider mb-3 relative">
              <span className="relative z-10 drop-shadow-2xl">
                OUR CLIENT'S FEEDBACK
              </span>
              <div className="absolute inset-0 blur-md bg-gradient-to-r from-yellow-300 via-red-300 to-yellow-300 opacity-50"></div>
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Navigation Arrows with enhanced design */}
        <button
          onClick={() => scrollCarousel("left")}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/25 backdrop-blur-lg border-2 border-white/40 text-white w-14 h-14 rounded-full text-3xl font-bold hover:bg-white/40 hover:scale-110 hover:border-yellow-300 transition-all duration-300 shadow-xl flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={() => scrollCarousel("right")}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/25 backdrop-blur-lg border-2 border-white/40 text-white w-14 h-14 rounded-full text-3xl font-bold hover:bg-white/40 hover:scale-110 hover:border-yellow-300 transition-all duration-300 shadow-xl flex items-center justify-center"
        >
          ›
        </button>

        {/* Carousel Container */}
        <div className="relative overflow-hidden py-8">
          <div
            ref={trackRef}
            className="flex gap-6 md:gap-8 overflow-x-hidden hover:[animation-play-state:paused]"
            style={{
              animation: "scroll 35s linear infinite",
            }}
          >
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                onClick={() => openModal(testimonial.image)}
                className="min-w-[280px] md:min-w-[320px] h-[400px] md:h-[450px] bg-white rounded-3xl overflow-hidden cursor-pointer shadow-2xl hover:-translate-y-4 hover:shadow-yellow-500/50 hover:shadow-2xl transition-all duration-500 relative group border-4 border-white/20"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-bold text-center text-lg drop-shadow-lg">
                    Click to View
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button with premium styling */}
        <div className="text-center mt-12 relative z-10">
          <button className="relative group bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-red-900 font-black text-xl md:text-2xl px-10 md:px-16 py-5 rounded-full shadow-2xl hover:shadow-yellow-400/50 hover:-translate-y-2 transition-all duration-300 uppercase tracking-wider overflow-hidden">
            <span className="relative z-10">Book Free Strategy Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </button>
          <div className="mt-4">
            <div className="inline-flex items-center gap-2 text-yellow-300 font-semibold animate-pulse">
              <span className="text-2xl">✨</span>
              <span>Limited Spots Available</span>
              <span className="text-2xl">✨</span>
            </div>
          </div>
        </div>

        {/* Modal with enhanced design */}
        {selectedImage && (
          <div
            onClick={closeModal}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-5 animate-fadeIn"
          >
            <div className="relative max-w-5xl max-h-[90vh] animate-zoomIn">
              <button
                onClick={closeModal}
                className="absolute -top-16 right-0 text-white text-5xl font-bold w-14 h-14 bg-red-600/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-red-500 hover:text-yellow-300 hover:scale-110 hover:rotate-90 transition-all duration-300 shadow-xl"
              >
                ×
              </button>
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Testimonial"
                  className="max-w-full max-h-[85vh] rounded-3xl shadow-2xl border-4 border-red-500/50"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-red-500/20 blur-2xl -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.5);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease;
        }

        .animate-zoomIn {
          animation: zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;
