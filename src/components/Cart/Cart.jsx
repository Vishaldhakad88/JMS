import React, { useState } from "react";
import { Minus, Plus, Trash2, Edit2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import product01 from "../../assets/ProductImages/product01.webp";
import product02 from "../../assets/ProductImages/product02.webp";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Slim Fit Casual Shirt",
      desc: "Button-Down Collar & Placket Style",
      size: "XL",
      color: "Maroon",
      price: 85,
      oldPrice: 92,
      qty: 1,
      image: product01,
    },
    {
      id: 2,
      name: "Printed Straight Kurta",
      desc: "Digital Printed with Yoke Embroidered Design",
      size: "L",
      color: "Green",
      price: 68,
      oldPrice: 75,
      qty: 2,
      image: product02,
    },
  ]);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subTotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  const discount = 35.52;
  const shipping = 0;
  const total = subTotal - discount + shipping;

  return (
    <div className="min-h-screen bg-orange-50 py-6 px-4 sm:px-6 lg:px-8">
      {/* ===== Header with Back Button ===== */}
      <div className="flex items-center justify-between mb-6">
        <Link
          to="/"
          className="flex items-center gap-2 text-orange-600 hover:text-orange-700"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </Link>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Cart</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* ===== Left: Cart Items ===== */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-4 sm:p-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 border-b border-gray-100 pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 rounded-xl object-cover border"
              />

              {/* Info */}
              <div className="flex-1 text-center sm:text-left">
                <h2 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-sm">{item.desc}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-gray-600 mt-1">
                  <span>Size: {item.size}</span>
                  <span>Color: {item.color}</span>
                </div>

                {/* Price */}
                <div className="flex justify-center sm:justify-start gap-2 mt-2">
                  <span className="text-xl font-bold text-green-600">
                    ${item.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ${item.oldPrice}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="px-2 py-1 hover:bg-gray-100"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-3 text-sm font-medium">{item.qty}</span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="px-2 py-1 hover:bg-gray-100"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 bg-red-50 text-red-500 rounded-lg hover:bg-red-100"
                  >
                    <Trash2 size={16} />
                  </button>
                  <button className="p-2 bg-orange-50 text-orange-500 rounded-lg hover:bg-orange-100">
                    <Edit2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {items.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              Your cart is empty 🛒
            </div>
          )}
        </div>

        {/* ===== Right: Order Summary ===== */}
        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Sub Total</span>
              <span>${subTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-green-600">-${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-orange-500">Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold text-lg text-gray-800">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-5 bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition">
            Proceed to Checkout
          </button>

          <p className="text-xs text-gray-500 mt-3">
            Estimated delivery by <b>25 April, 2025</b>
          </p>

          {/* Coupon Section */}
          <div className="mt-6">
            <p className="text-gray-700 font-medium mb-2">Have a Coupon?</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border rounded-l-lg px-3 py-2 outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button className="bg-orange-600 text-white px-4 rounded-r-lg hover:bg-orange-700 transition">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
