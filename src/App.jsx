import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import MobileNavBar from "./pages/Home/MobileNavBar";

export default function App() {
  return (
    <div className="app-container">
      <div className="page-content">
        <Routes>
          <Route path="/*" element={<HomeRoutes />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Fixed navbar */}
      <MobileNavBar />
    </div>
  );
}
