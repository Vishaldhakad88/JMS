import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 relative">
      {/* Sidebar */}
      <Sidebar onHoverChange={setIsExpanded} />

      {/* Main Content Area */}
      <main
        className={`flex-1 min-h-screen sm:ml-18 transition-all duration-300 ease-in-out 
          md:ml-${isExpanded ? "[18rem]" : "[5rem]"} p-6`}
      >
        <Outlet />
      </main>
    </div>
  );
}
