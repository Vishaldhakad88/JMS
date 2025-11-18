// StockDashboard.jsx
import React, { useState } from 'react';
import { Download, Filter, ChevronDown } from 'lucide-react';

const StockDashboard = () => {
  const [stockData] = useState([
    { name: 'Hamburger Dill Pickle Chips', quantity: 25, status: 'Active' },
    { name: 'Alaskan Pink Salmon', quantity: 12, status: 'Active' },
    { name: 'Bauducco Wafers', quantity: 23, status: 'Active' },
    { name: 'LED Light Bulb, 7.5 Watts', quantity: 33, status: 'Active' },
    { name: 'Twist up Lemon Lime Soda', quantity: 89, status: 'Active' },
    { name: 'Mini Dill Pickles', quantity: 71, status: 'Active' },
    { name: 'Tomato Sauce 29 oz', quantity: 13, status: 'Active' },
    { name: 'Moisturizing Bedtime Lotion', quantity: 28, status: 'Active' },
    { name: 'Tomato Sauce 15 oz', quantity: 39, status: 'Active' },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-xl md:text-2xl font-semibold text-gray-800">Dashboard / Stock</h1>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-end">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors text-sm">
              <span className="font-medium">10</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-colors text-sm">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
              <Download className="w-4 h-4" />
              <span>Export</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Desktop Table - Hidden on Mobile */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left p-4 font-medium text-gray-700">NAME</th>
                  <th className="text-left p-4 font-medium text-gray-700">QUANTITY</th>
                  <th className="text-left p-4 font-medium text-gray-700">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {stockData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-gray-900 font-medium">{item.name}</td>
                    <td className="p-4 text-gray-700">{item.quantity}</td>
                    <td className="p-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Card View - Hidden on Large Screens */}
        <div className="block lg:hidden space-y-4">
          {stockData.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {item.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Quantity</span>
                <span className="text-sm font-medium text-gray-900">{item.quantity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockDashboard;