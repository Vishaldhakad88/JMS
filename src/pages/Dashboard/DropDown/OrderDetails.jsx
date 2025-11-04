import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const orderDetails = {
  id: "16102596",
  date: "16-10-2025 07:40 PM",
  type: "Delivery",
  status: "On The Way",
  paymentStatus: "Paid",
  paymentMethod: "Cash On Delivery",
  customer: {
    name: "Jai Shah",
    phone: "+91 95497855",
    email: "shahjai@example.com",
    address:
      "B1 Gulab Bagh, Near Sai Mandir, Scheme No.114, Indore, 452010, Madhya Pradesh, India",
  },
  items: [
    { name: "LED Light Bulb, 7.5 Watts", price: 3000.0, qty: 10, img: "💡" },
    { name: "Bourbon Wafers", price: 970.66, qty: 8, img: "🍪" },
    { name: "Alaskan Pink Salmon", price: 81.3, qty: 1, img: "🐟" },
  ],
  summary: {
    subtotal: 7321.96,
    tax: 681.64,
    deliveryCharge: 78.79,
    discount: 15.0,
    total: 3597.2,
  },
};

export default function OrderDetails() {
  const { orderId } = useParams();
  const order = orderDetails;

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-5xl mx-auto">
      <Link
        to="/orders"
        className="inline-flex items-center text-orange-600 hover:text-orange-800 mb-6 font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2" /> Back to Orders
      </Link>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-600">
            Thank You!
          </h1>
          <p className="text-gray-600 mt-1 text-sm md:text-base">
            Your order is currently <span className="text-orange-600 font-semibold">{order.status}</span>.
          </p>
          <p className="text-gray-500 text-sm mt-1">Order ID: #{order.id}</p>
        </div>

        {/* 🚚 Status Tracker (with line + icons like banner) */}
        <div className="relative flex justify-between items-center mb-10">
          <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-gray-200 -translate-y-1/2"></div>
          {["Pending", "Confirmed", "On The Way", "Delivered"].map((step, i) => (
            <div key={i} className="relative flex flex-col items-center z-10">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-md ${
                  i <= 2 ? "bg-orange-500" : "bg-gray-300"
                }`}
              >
                {i < 3 ? "✓" : i + 1}
              </div>
              <p className="text-xs text-center mt-2 text-gray-700">
                {step}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Section */}
          <div>
            <div className="bg-orange-50 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-orange-700 mb-2">
                Order Info
              </h3>
              <p className="text-sm text-gray-700"><strong>ID:</strong> #{order.id}</p>
              <p className="text-sm text-gray-700"><strong>Date:</strong> {order.date}</p>
              <p className="text-sm text-gray-700"><strong>Type:</strong> {order.type}</p>
              <p className="text-sm text-gray-700"><strong>Status:</strong> {order.status}</p>
              <p className="text-sm text-gray-700"><strong>Payment:</strong> {order.paymentStatus}</p>
              <p className="text-sm text-gray-700"><strong>Method:</strong> {order.paymentMethod}</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-700 mb-2">
                Delivery Address
              </h3>
              <p className="text-sm font-medium text-gray-800">{order.customer.name}</p>
              <p className="text-sm text-gray-700">{order.customer.phone}</p>
              <p className="text-sm text-gray-700">{order.customer.email}</p>
              <p className="text-sm text-gray-600 mt-2">{order.customer.address}</p>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-700 mb-3">
                Order Items
              </h3>
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-gray-100 last:border-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{item.img}</div>
                    <div>
                      <p className="font-medium text-sm text-gray-800">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.qty}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-800">₹{item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-orange-100 p-4 rounded-lg text-sm">
              <div className="flex justify-between mb-1">
                <span>Subtotal</span>
                <span>₹{order.summary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Tax</span>
                <span>₹{order.summary.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span>Delivery Charge</span>
                <span>₹{order.summary.deliveryCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-orange-700">
                <span>Discount</span>
                <span>-₹{order.summary.discount.toFixed(2)}</span>
              </div>
              <div className="border-t border-orange-300 mt-2 pt-2 flex justify-between font-semibold text-base">
                <span>Total</span>
                <span>₹{order.summary.total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full mt-6 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition">
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
