import React from "react";
import sellOrAd from "../../assets/ProductImages/sellOrAd.webp";

export default function SellAdSection() {
  return (
    <div className="relative w-full ">
      {/* Background Image */}
      <img
        src={sellOrAd}
        alt="Sell or Advertise"
        className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          Grow Your Business with Us
        </h2>
        <p className="text-gray-200 text-sm sm:text-base md:text-lg mb-6 max-w-xl">
          Reach thousands of customers by listing your products or ads today!
        </p>

        {/* ✅ Clickable Button */}
        <button
          onClick={() => alert("Redirect to sell/ad page")}
          className="bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg"
        >
          Post Your Ad
        </button>
      </div>
    </div>
  );
}
