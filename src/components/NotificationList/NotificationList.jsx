import React from "react";
import { Bell, Clock } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Order Shipped 🚚",
    message: "Your order #1234 has been shipped successfully.",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "Discount Alert 🎉",
    message: "Get 25% off on your next purchase. Limited time only!",
    time: "10 min ago",
  },
  {
    id: 3,
    title: "New Message 💬",
    message: "You have a new message from customer support.",
    time: "30 min ago",
  },
];

export default function NotificationList() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 flex flex-col items-center">
      {/* Header */}
      <div className="w-full max-w-md flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          <Bell className="text-orange-500" /> Notifications
        </h1>
        <span className="text-sm text-gray-500">
          {notifications.length} new
        </span>
      </div>

      {/* Notification Cards */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {notifications.map((note) => (
          <div
            key={note.id}
            className="bg-white rounded-2xl shadow-md p-4 flex gap-3 items-start hover:shadow-lg transition-all duration-200"
          >
            {/* Left icon with badge */}
            <div className="relative">
              <div className="w-10 h-10 bg-orange-100 text-orange-500 flex items-center justify-center rounded-full font-bold text-lg">
                {note.title.charAt(0)}
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
            </div>

            {/* Notification content */}
            <div className="flex-1">
              <h2 className="font-semibold text-gray-800">{note.title}</h2>
              <p className="text-sm text-gray-600">{note.message}</p>
              <div className="flex items-center text-xs text-gray-400 mt-1 gap-1">
                <Clock size={12} /> {note.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Notifications (optional) */}
      {notifications.length === 0 && (
        <div className="text-center mt-20 text-gray-500">
          <Bell size={40} className="mx-auto text-gray-400 mb-3" />
          <p>No new notifications</p>
        </div>
      )}
    </div>
  );
}
