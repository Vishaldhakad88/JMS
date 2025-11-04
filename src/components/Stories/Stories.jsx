import React from "react";
import story1 from "../../assets/ProductImages/story01.jpg";
import story2 from "../../assets/ProductImages/story02.jpg";
import story3 from "../../assets/ProductImages/story03.jpg";
import story4 from "../../assets/ProductImages/story04.jpg";
import story5 from "../../assets/ProductImages/story05.jpg";

const stories = [
  { id: 1, image: story1, name: "Ravi" },
  { id: 2, image: story2, name: "Neha" },
  { id: 3, image: story3, name: "Amit" },
  { id: 4, image: story4, name: "Sara" },
  { id: 5, image: story5, name: "Vikram" },
  { id: 1, image: story1, name: "Ravi" },
  { id: 2, image: story2, name: "Neha" },
  { id: 3, image: story3, name: "Amit" },
  { id: 4, image: story4, name: "Sara" },
  { id: 5, image: story5, name: "Vikram" },
];

export default function Stories() {
  return (
    <div className="w-full bg-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide">
          {stories.map((s) => (
            <div
              key={s.id}
              className="flex flex-col items-center flex-shrink-0 cursor-pointer"
            >
              {/* Story circle */}
              <div className="p-[3px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-full">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white p-[2px]">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Name */}
              <p className="text-xs text-gray-700 mt-1">{s.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Hide scrollbar CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
