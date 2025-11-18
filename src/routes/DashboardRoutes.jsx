import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';
import DashboardHome from '../pages/Dashboard/DashboardHome';
import Products from '../pages/Dashboard/Products';
import ProductsDetails from '../pages/Dashboard/ProductsDetails';
import Orders from '../pages/Dashboard/Orders';
import Settings from '../pages/Dashboard/Settings';

// === Product & Stock Pages ===
import Purchase from '../pages/Dashboard/Purchase';
import Damages from '../pages/Dashboard/Damages';
import Stock from '../pages/Dashboard/Stock';

// === POS & Orders Pages ===
import POS from '../pages/Dashboard/POS';
import POSOrders from '../pages/Dashboard/POSOrders';
import OnlineOrders from '../pages/Dashboard/OnlineOrders';
import ReturnOrders from '../pages/Dashboard/ReturnOrders';

// === Promo Pages ===
import Coupons from '../pages/Dashboard/Coupons';
import Promotions from '../pages/Dashboard/Promotions';
import ProductSections from '../pages/Dashboard/ProductSections';

// === Communications Pages ===
import PushNotifications from '../pages/Dashboard/PushNotifications';
import Subscribers from '../pages/Dashboard/Subscribers';

// === Users Pages ===
import Admins from '../pages/Dashboard/Admins';
import DeliveryBoys from '../pages/Dashboard/DeliveryBoys';
import Customers from '../pages/Dashboard/Customers';
import Employees from '../pages/Dashboard/Employees';

// === Accounts Pages ===
import Transactions from '../pages/Dashboard/Transactions';

// === Reports Pages ===
import SalesReport from '../pages/Dashboard/SalesReport';
import ProductsReport from '../pages/Dashboard/ProductsReport';
import CreditBalanceReport from '../pages/Dashboard/CreditBalanceReport';

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* === Dashboard Home === */}
        <Route index element={<DashboardHome />} />

        {/* === Product & Stock === */}
        <Route path="products" element={<Products />} />
        <Route path="products-details" element={<ProductsDetails />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="damages" element={<Damages />} />
        <Route path="stock" element={<Stock />} />

        {/* === POS & Orders === */}
        <Route path="pos" element={<POS />} />
        <Route path="pos-orders" element={<POSOrders />} />
        <Route path="orders/online" element={<OnlineOrders />} />
        <Route path="orders/returns" element={<ReturnOrders />} />

        {/* === Promo === */}
        <Route path="coupons" element={<Coupons />} />
        <Route path="promotions" element={<Promotions />} />
        <Route path="product-sections" element={<ProductSections />} />

        {/* === Communications === */}
        <Route path="push" element={<PushNotifications />} />
        <Route path="subscribers" element={<Subscribers />} />

        {/* === Users === */}
        <Route path="users/admins" element={<Admins />} />
        <Route path="users/delivery" element={<DeliveryBoys />} />
        <Route path="users/customers" element={<Customers />} />
        <Route path="users/employees" element={<Employees />} />

        {/* === Accounts === */}
        <Route path="accounts/transactions" element={<Transactions />} />

        {/* === Reports === */}
        <Route path="reports/sales" element={<SalesReport />} />
        <Route path="reports/products" element={<ProductsReport />} />
        <Route path="reports/credit" element={<CreditBalanceReport />} />

        {/* === Setup === */}
        <Route path="settings" element={<Settings />} />

        {/* === Other existing === */}
        <Route path="orders/*" element={<Orders />} />
      </Route>
    </Routes>
  );
}
