import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeRoutes from './routes/HomeRoutes';
import DashboardRoutes from './routes/DashboardRoutes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoutes />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="*" element={<Navigate to="/" replace />} />

    </Routes>
  );
}
