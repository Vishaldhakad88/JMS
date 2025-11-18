import React from "react";
import { DollarSign, Package, Users, FileText } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-6">
      {/* Greeting */}
      <div>
        <h2 className="text-xl font-semibold text-orange-600">Good Afternoon!</h2>
        <p className="text-gray-600">JMS Store</p>
      </div>

      {/* Overview Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Overview</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-5 shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-80">Total Earnings</p>
              <h2 className="text-2xl font-bold mt-1">₹9426.90</h2>
            </div>
            <DollarSign size={32} className="opacity-90" />
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl p-5 shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-80">Total Orders</p>
              <h2 className="text-2xl font-bold mt-1">13</h2>
            </div>
            <Package size={32} className="opacity-90" />
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl p-5 shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-80">Total Customers</p>
              <h2 className="text-2xl font-bold mt-1">19</h2>
            </div>
            <Users size={32} className="opacity-90" />
          </div>

          <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-2xl p-5 shadow-md flex items-center justify-between">
            <div>
              <p className="text-sm font-medium opacity-80">Total Products</p>
              <h2 className="text-2xl font-bold mt-1">366</h2>
            </div>
            <FileText size={32} className="opacity-90" />
          </div>
        </div>
      </div>

      {/* Order Statistics */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Order Statistics</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {[
            "Total Orders",
            "Pending",
            "Confirmed",
            "Ongoing",
            "Delivered",
            "Canceled",
            "Returned",
            "Rejected",
          ].map((label, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-md border border-orange-100 hover:shadow-lg transition-all"
            >
              <p className="text-gray-600 text-sm">{label}</p>
              <h2 className="text-xl font-bold text-orange-600 mt-1">0</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
