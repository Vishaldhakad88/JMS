// src/routes/HomeRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Profile from "../pages/Dashboard/DropDown/Profile";
import ChangePassword from "../pages/Dashboard/DropDown/ChangePassword";
import Address from "../pages/Dashboard/DropDown/Address";
import Orders from "../pages/Dashboard/DropDown/Orders";
import OrderDetails from "../pages/Dashboard/DropDown/OrderDetails";
import Home from "../pages/Home/Home";
import AccountLayout from "../pages/Dashboard/DropDown/AccountLayout";
import Wishlist from "../components/Wishlist/Wishlist";

export default function HomeRoutes() {
  return (
    <Routes>
      {/* Public/Home Route */}
      <Route path="/" element={<Home />} />

      {/* All Account-related pages share one layout */}
      <Route element={<AccountLayout />}>
        <Route path="/account" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/address" element={<Address />} />
        <Route path="/orders" element={<Orders />} />
        {/* Dynamic Order Details Route */}
        <Route path="/orders/:orderId" element={<OrderDetails />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>
    </Routes>
  );
}