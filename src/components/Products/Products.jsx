import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoAddCircle } from "react-icons/io5";

import product01 from "../../assets/ProductImages/product01.webp";
import product02 from "../../assets/ProductImages/product02.webp";
import product03 from "../../assets/ProductImages/product03.webp";
import product04 from "../../assets/ProductImages/product04.webp";
import product05 from "../../assets/ProductImages/product05.webp";
import product06 from "../../assets/ProductImages/product06.webp";
import product07 from "../../assets/ProductImages/product07.webp";
import product08 from "../../assets/ProductImages/product08.webp";
import product09 from "../../assets/ProductImages/product09.webp";
import product10 from "../../assets/ProductImages/product10.webp";

const products = [
  { id: 1, name: "Alaskan Pink Salmon", price: 51.3, oldPrice: 54.0, img: product01 },
  { id: 2, name: "Ocean’s Thai Green Curry", price: 60.0, oldPrice: 70.0, img: product02 },
  { id: 3, name: "Spicy Tuna Mix", price: 45.5, oldPrice: 50.0, img: product03 },
  { id: 4, name: "Lemon Butter Salmon", price: 75.0, oldPrice: 82.0, img: product04 },
  { id: 5, name: "Teriyaki Tuna Bowl", price: 63.0, oldPrice: 69.0, img: product05 },
  { id: 6, name: "Garlic Shrimp", price: 80.0, oldPrice: 89.0, img: product06 },
  { id: 7, name: "Coconut Fish Curry", price: 59.9, oldPrice: 64.9, img: product07 },
  { id: 8, name: "Smoked Salmon Bites", price: 90.0, oldPrice: 99.0, img: product08 },
  { id: 9, name: "Tuna Mayo Salad", price: 55.0, oldPrice: 61.0, img: product09 },
  { id: 10, name: "Grilled Fish Fillet", price: 88.5, oldPrice: 95.0, img: product10 },
];

const PopularProducts = () => {
  return (
    <div className="py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Most Popular</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow hover:shadow-lg transition duration-300 p-3 flex flex-col justify-between"
          >
            {/* Favorite Icon */}
            <button className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition">
              <FaHeart size={20} />
            </button>

            {/* Product Image */}
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Product Details */}
            <h3 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-2">Kilogram</p>

            <div className="flex items-center justify-between">
              <div>
                <span className="text-green-600 font-semibold text-sm">
                  ₹{product.price.toFixed(2)}
                </span>
                <span className="text-gray-400 line-through text-xs ml-1">
                  ₹{product.oldPrice.toFixed(2)}
                </span>
              </div>

              <button className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition">
                <IoAddCircle size={18} />
                <span className="text-xs font-semibold">Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
