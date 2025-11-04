import React from "react";
import { Home, Search, Heart, Bell, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNavBar = () => {
  return (
    <nav
      className="
        fixed bottom-0 left-0 w-full
        bg-white border-t border-gray-200 shadow-[0_-2px_6px_rgba(0,0,0,0.1)]
        flex justify-around items-center py-2
        z-[9999] sm:hidden
      "
      style={{
        position: "fixed",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    >
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-orange-500" : "text-gray-500"
          }`
        }
      >
        <Home size={22} />
        <span className="text-[12px]">Home</span>
      </NavLink>

      {/* Search */}
      <NavLink
        to="/search"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-orange-500" : "text-gray-500"
          }`
        }
      >
        <Search size={22} />
        <span className="text-[12px]">Search</span>
      </NavLink>

      {/* Wishlist */}
      <NavLink
        to="/wishlist"
        className={({ isActive }) =>
          `flex flex-col items-center ${
            isActive ? "text-orange-500" : "text-gray-500"
          }`
        }
      >
        <div className="bg-orange-500 text-white rounded-full p-3 shadow-lg -mt-6">
          <Heart size={28} fill="currentColor" />
        </div>
        <span className="text-[11px] mt-1">Wishlist</span>
      </NavLink>

      {/* Alerts */}
      <NavLink
        to="/notifications"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-orange-500" : "text-gray-500"
          }`
        }
      >
        <Bell size={22} />
        <span className="text-[12px]">Alerts</span>
      </NavLink>

      {/* Profile */}
      <NavLink
        to="/account"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-orange-500" : "text-gray-500"
          }`
        }
      >
        <User size={22} />
        <span className="text-[12px]">Profile</span>
      </NavLink>
    </nav>
  );
};

export default MobileNavBar;
