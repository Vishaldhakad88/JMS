import React from "react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: "16102596",
    date: "07:40 PM, 16-10-2025",
    products: 3,
    status: "On The Way",
    payment: "Paid",
    amount: 3597.2,
  },
  {
    id: "07102594",
    date: "01:59 PM, 07-10-2025",
    products: 2,
    status: "Canceled",
    payment: "Unpaid",
    amount: 3549.1,
  },
  {
    id: "03102590",
    date: "12:37 PM, 03-10-2025",
    products: 2,
    status: "Delivered",
    payment: "Paid",
    amount: 2984.28,
  },
  {
    id: "30072588",
    date: "05:47 PM, 30-07-2025",
    products: 1,
    status: "Pending",
    payment: "Unpaid",
    amount: 324.55,
  },
];

const statusColors = {
  "On The Way": "bg-orange-100 text-orange-700",
  Canceled: "bg-red-100 text-red-700",
  Delivered: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
};

const paymentColors = {
  Paid: "bg-green-100 text-green-700",
  Unpaid: "bg-red-100 text-red-700",
};

export default function Orders() {
  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
        🧾 Order History
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-orange-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Order ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Products
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Payment
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                Amount
              </th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-gray-700">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-orange-50 transition duration-150 ease-in-out"
              >
                <td className="px-4 py-4 text-gray-800 font-medium">
                  #{order.id}
                </td>
                <td className="px-4 py-4 text-gray-600 text-sm">{order.date}</td>
                <td className="px-4 py-4 text-gray-800">
                  {order.products} Product{order.products > 1 ? "s" : ""}
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${paymentColors[order.payment]}`}
                  >
                    {order.payment}
                  </span>
                </td>
                <td className="px-4 py-4 text-gray-800 font-semibold">
                  ₹{order.amount.toFixed(2)}
                </td>
                <td className="px-4 py-4 text-center">
                  <Link
                    to={`/orders/${order.id}`}
                    className="text-orange-600 hover:text-orange-800 font-medium"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
