import React from "react";
import { Home, Search, PlusCircle, Bell, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileNavBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md flex justify-around items-center py-2 z-50 sm:hidden">
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

      <NavLink
        to="/add"
        className={({ isActive }) =>
          `flex flex-col items-center text-sm ${
            isActive ? "text-orange-500" : "text-gray-500"
          }`
        }
      >
        <div className="bg-orange-500 text-white rounded-full p-2 shadow-lg">
          <PlusCircle size={26} />
        </div>
      </NavLink>

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

      <NavLink
        to="/profile"
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
