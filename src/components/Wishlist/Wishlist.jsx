import React, { useState } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const wishlistItems = [
  {
    id: 1,
    title: "Bauducco Wafers",
    variant: "Packet",
    price: 78.82,
    oldPrice: 99.0,
    badge: "Flash Sale",
    image: "wafers", // placeholder – replace with real image later
  },
  {
    id: 2,
    title: "Chocolate Cookies",
    variant: "Box",
    price: 149.0,
    oldPrice: 199.0,
    badge: null,
    image: "cookies",
  },
];

export default function Wishlist() {
  // ✅ Removed TypeScript syntax (": number")
  const [liked, setLiked] = useState(wishlistItems.map(() => true));

  const toggleLike = (idx) => {
    const newLiked = [...liked];
    newLiked[idx] = !newLiked[idx];
    setLiked(newLiked);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20 sm:pb-0">
      {/* ===== Breadcrumb ===== */}
      <div className="px-4 py-3 text-sm text-gray-600">
        <Link to="/" className="hover:underline text-green-600 font-medium">
          Home
        </Link>{" "}
        <span className="mx-1 text-gray-400">›</span> Wishlist
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 flex flex-wrap items-center gap-2">
          My Wishlist
          <span className="text-sm font-normal text-gray-500">
            ({wishlistItems.length} Product
            {wishlistItems.length !== 1 ? "s" : ""} Found)
          </span>
        </h1>

        {/* ===== Wishlist Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {wishlistItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              {/* ===== Image Section ===== */}
              <div className="relative">
                <div className="bg-gray-100 border border-gray-200 rounded-t-2xl w-full h-48 flex items-center justify-center text-2xl font-semibold text-gray-500">
                  {item.image === "wafers" ? "🧇 Wafers" : "🍪 Cookies"}
                </div>

                {/* Flash Sale Badge */}
                {item.badge && (
                  <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                    {item.badge}
                  </span>
                )}

                {/* Heart Button */}
                <button
                  onClick={() => toggleLike(idx)}
                  className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:shadow-md transition"
                >
                  <Heart
                    size={20}
                    className={
                      liked[idx]
                        ? "fill-red-500 text-red-500"
                        : "text-gray-400"
                    }
                  />
                </button>
              </div>

              {/* ===== Card Content ===== */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.variant}</p>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-green-600">
                    ₹{item.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{item.oldPrice.toFixed(2)}
                  </span>
                </div>

                <button className="mt-4 w-full bg-green-600 text-white py-2.5 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 active:scale-95 transition">
                  <ShoppingBag size={18} />
                  <span className="font-medium">Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Empty Wishlist State (if no items) ===== */}
        {wishlistItems.length === 0 && (
          <div className="flex flex-col items-center justify-center text-center mt-20">
            <Heart size={64} className="text-gray-300 mb-3" />
            <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
            <Link
              to="/"
              className="mt-4 bg-green-600 text-white px-5 py-2.5 rounded-lg hover:bg-green-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
