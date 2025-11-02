import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';
import DashboardHome from '../pages/Dashboard/DashboardHome';
import Products from '../pages/Dashboard/Products';
import Orders from '../pages/Dashboard/Orders';
import Settings from '../pages/Dashboard/Settings';

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="products" element={<Products />} />
        <Route path="orders/*" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
        {/* add more nested routes matching your sidebar */}
      </Route>
    </Routes>
  );
}
