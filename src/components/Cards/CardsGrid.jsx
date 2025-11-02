import React from "react";
import cover01 from "../../assets/CardImage/cover01.webp";
import cover02 from "../../assets/CardImage/cover02.webp";
import cover03 from "../../assets/CardImage/cover03.webp";

const cards = [
  { id: 1, image: cover01, title: "Modern Living", desc: "Explore premium spaces" },
  { id: 2, image: cover02, title: "Smart Designs", desc: "Functional & elegant" },
  { id: 3, image: cover03, title: "Fresh Interiors", desc: "Inspired by lifestyle" },
];

export default function CardsSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
        Featured Spaces
      </h2>

      <div
        className="
          flex gap-4 overflow-x-auto md:overflow-x-visible scroll-smooth pb-2
          custom-scrollbar
        "
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="
              flex-shrink-0 w-72  sm:w-80 md:w-1/3 bg-white rounded-2xl shadow-md 
              overflow-hidden hover:shadow-lg transition-all duration-300
            "
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            {/* <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{card.desc}</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* ✅ Inline CSS to hide scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE & Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
