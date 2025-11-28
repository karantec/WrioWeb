import React from "react";

export default function TrustedClients() {
  // Add your company logo image URLs here
  const companies = [
    {
      name: "Company 1",
      logo: "https://tse2.mm.bing.net/th/id/OIP.iI0JaCFWdxDi0eQz3SoRCAHaGP?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    { name: "Company 2", logo: "https://cdn.dotpe.in/logo/12518/ENT00843.png" },
    {
      name: "Company 3",
      logo: "https://th.bing.com/th/id/OIP.RFsunesO1GXHYYssG9fWbAHaHa?w=175&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "Company 4",
      logo: "https://res.cloudinary.com/de4ks8mkh/image/upload/v1764356691/WhatsApp_Image_2025-11-28_at_23.53.45_cd7cb611_l4ptvk.jpg",
    },
  ];

  return (
    <div className="w-full bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Trusted Partners
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays */}

          {/* Scrolling Content */}
          <div className="flex">
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: "180px", height: "100px" }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain  transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate for seamless loop */}
            <div className="flex animate-scroll">
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: "180px", height: "100px" }}
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
