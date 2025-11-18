import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomeRoutes from "./routes/HomeRoutes";
import DashboardRoutes from "./routes/DashboardRoutes";
import MobileNavBar from "./pages/Home/MobileNavBar";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

export default function App() {
  return (
    <div className="app-container">
      <div className="page-content">
        <Routes>

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Home + Dashboard Routes */}
          <Route path="/*" element={<HomeRoutes />} />
          <Route path="/dashboard/*" element={<DashboardRoutes />} />

          {/* Default → Login */}
          <Route path="*" element={<Navigate to="/login" replace />} />

        </Routes>
      </div>

      {/* Fixed Bottom Navbar */}
      <MobileNavBar />
    </div>
  );
}
