import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Search } from "lucide-react";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../../assets/CategoryIcons/logo.png";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ===== LEFT: Logo ===== */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="JMS Logo"
              className="w-10 h-10 object-contain"
            />
            {/* Hide text on mobile */}
            <div className="hidden sm:block">
              <div className="text-lg font-bold">JMS Store</div>
              <div className="text-xs text-gray-500">Good Morning!</div>
            </div>
          </Link>

          {/* ===== CENTER: Search Bar ===== */}
          <div className="flex-1 mx-3 sm:mx-6">
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400"
              />
              <Search
                size={18}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          {/* ===== RIGHT: Cart + Profile ===== */}
          <div className="flex items-center gap-3">
            {/* Cart Button */}
            <Link
              to="/cart"
              className="flex items-center gap-2 bg-orange-400 text-white px-3 py-2 rounded-full text-sm font-medium hover:bg-green-200 hover:text-green-700 transition"
            >
              <ShoppingCart size={18} />
              <span className="hidden sm:inline">My Cart (0)</span>
            </Link>

            {/* Profile */}
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
}
