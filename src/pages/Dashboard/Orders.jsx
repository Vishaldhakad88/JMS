import React from 'react';
import { Routes, Route } from 'react-router-dom';

function OnlineOrders(){ return <div>Online Orders</div>; }
function ReturnOrders(){ return <div>Return Orders</div>; }
function POSOrders(){ return <div>POS Orders</div>; }

export default function Orders() {
  return (
    <Routes>
      <Route index element={<div>Select an order type from the sidebar</div>} />
      <Route path="online" element={<OnlineOrders />} />
      <Route path="returns" element={<ReturnOrders />} />
      <Route path="pos-orders" element={<POSOrders />} />
    </Routes>
  );
}
