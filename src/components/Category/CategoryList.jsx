import React from "react";
import baby from "../../assets/CategoryIcons/baby.png";
import care from "../../assets/CategoryIcons/care.png";
import clean from "../../assets/CategoryIcons/Clean.png";
import food from "../../assets/CategoryIcons/food.png";
import health from "../../assets/CategoryIcons/health.png";
import kitchen from "../../assets/CategoryIcons/Kitchen.png";

const categories = [
  { name: "Baby Care", subtitle: "Essentials for little ones", image: baby },
  { name: "Personal Care", subtitle: "Daily hygiene & grooming", image: care },
  { name: "Home Cleaning", subtitle: "Keep your home spotless", image: clean },
  { name: "Food & Beverages", subtitle: "Snacks, drinks & more", image: food },
  { name: "Health", subtitle: "Wellness & healthcare", image: health },
  { name: "Kitchen", subtitle: "Cookware & utensils", image: kitchen },
];

export default function CategoryList() {
  return (
    <div className="w-full bg-white py-4 sm:py-6">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center justify-center
                w-[90px] h-[100px] sm:w-[150px] sm:h-auto 
                bg-transparent sm:bg-white 
                sm:border rounded-2xl 
                sm:shadow-sm sm:hover:shadow-md 
                transition-all duration-300 cursor-pointer"
            >
              {/* IMAGE */}
              <div
                className="w-12 h-12 sm:w-20 sm:h-20 flex items-center justify-center 
                bg-gray-50 rounded-xl overflow-hidden 
                hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="mt-2 text-[12px] sm:text-sm md:text-base font-semibold text-gray-800 text-center">
                {cat.name}
              </h3>

              {/* SUBTITLE — hidden on mobile */}
              <p className="hidden sm:block text-xs text-gray-500 text-center px-2 p-1">
                {cat.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
