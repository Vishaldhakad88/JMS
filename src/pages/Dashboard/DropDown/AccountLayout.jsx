// src/layouts/AccountLayout.jsx
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {
  ShoppingBag,
  User,
  Lock,
  MapPin,
  LogOut,
  Home,
} from "lucide-react";
import ProfileDropdown from "../../../components/Header/ProfileDropdown";

export default function AccountLayout() {
  const location = useLocation();

  const linkClasses = (path) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-green-100 text-green-700 font-medium"
        : "hover:bg-green-50 hover:text-green-700"
    }`;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* ===== LEFT SIDEBAR (HIDDEN ON MOBILE) ===== */}
      <aside className="hidden md:flex w-full md:w-1/4 lg:w-1/5 bg-white shadow-md rounded-2xl m-4 p-4 flex-col gap-2">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <h2 className="text-lg font-semibold text-gray-800">My Account</h2>
          {/* Optionally add ProfileDropdown here */}
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-1">
          <Link to="/" className={linkClasses("/")}>
            <Home size={18} /> Home
          </Link>

          <Link to="/orders" className={linkClasses("/orders")}>
            <ShoppingBag size={18} /> Orders
          </Link>

          <Link to="/account" className={linkClasses("/account")}>
            <User size={18} /> Account Info
          </Link>

          <Link to="/change-password" className={linkClasses("/change-password")}>
            <Lock size={18} /> Change Password
          </Link>

          <Link to="/address" className={linkClasses("/address")}>
            <MapPin size={18} /> Address
          </Link>

          <button className="w-full flex items-center gap-2 text-left px-4 py-2 rounded-lg hover:bg-red-50 text-red-600 transition mt-2">
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </aside>

      {/* ===== RIGHT SIDE CONTENT (FULL WIDTH ON MOBILE) ===== */}
      <main className="flex-1 bg-white shadow-md rounded-2xl m-2 md:m-4 p-4 md:p-6 w-full">
        <Outlet />
      </main>
    </div>
  );
}
