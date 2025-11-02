import React, { useEffect, useRef, useState } from "react";
import coverImage1 from "../../assets/Carousel_Images/coverImage1.webp";
import coverImage2 from "../../assets/Carousel_Images/coverImage2.webp";
import coverImage3 from "../../assets/Carousel_Images/coverImage3.webp";

const slides = [
  { id: 1, image: coverImage1, title: "Big Sale!", sub: "Up to 50% off" },
  { id: 2, image: coverImage2, title: "New Arrivals", sub: "Trending now" },
  { id: 3, image: coverImage3, title: "Fresh Offers", sub: "Limited time" },
];

export default function Carousel() {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 3000); // change slide every 3s

    return () => clearInterval(interval);
  }, [totalSlides]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const cardWidth = track.firstChild?.offsetWidth || 0;
    track.scrollTo({
      left: current * (cardWidth + 16), // smooth slide to next card
      behavior: "smooth",
    });
  }, [current]);

  return (
    <div className="w-full bg-white py-4">
      <div className="relative overflow-hidden rounded-2xl shadow-md max-w-7xl mx-auto">
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto scroll-smooth custom-scrollbar p-2"
        >
          {slides.map((s) => (
            <div
              key={s.id}
              className="min-w-full sm:min-w-[600px] md:min-w-[800px] lg:min-w-[1000px] flex-shrink-0 relative rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-[220px] sm:h-[320px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-white text-2xl sm:text-3xl font-bold">
                  {s.title}
                </h2>
                <p className="text-gray-200 text-sm sm:text-base">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Hide scrollbar inline */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
