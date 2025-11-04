import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  User,
  Lock,
  MapPin,
  LogOut,
} from "lucide-react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function onDoc(e) {
      if (!ref.current?.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((s) => !s)}
        className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full"
      >
        <img
          src="https://ui-avatars.com/api/?name=J+M+S"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        {/* Hide name on mobile */}
        <div className="hidden sm:block text-sm">JMS Store</div>
        <FiChevronDown className="hidden sm:block" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 border border-gray-100 z-50">
          <Link
            to="/dashboard"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50"
          >
            <LayoutDashboard size={16} /> Dashboard
          </Link>

          <Link
            to="/orders"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50"
          >
            <ShoppingBag size={16} /> Order History
          </Link>

          {/* ✅ Added Wishlist Link */}
          <Link
            to="/wishlist"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50"
          >
            <Heart size={16} className="text-pink-500" /> Wishlist
          </Link>

          <Link
            to="/account"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50"
          >
            <User size={16} /> Account Info
          </Link>

          <Link
            to="/change-password"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50"
          >
            <Lock size={16} /> Change Password
          </Link>

          <Link
            to="/address"
            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50"
          >
            <MapPin size={16} /> Address
          </Link>

          <button
            className="w-full flex items-center gap-2 text-left px-3 py-2 rounded hover:bg-red-50 text-red-600"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
