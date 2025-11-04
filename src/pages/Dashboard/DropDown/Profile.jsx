import React, { useState } from "react";
import { Pencil, KeyRound, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [preview, setPreview] = useState(null);

  const [user, setUser] = useState({
    name: "JMS Store",
    email: "admin@example.com",
    phone: "+911254875855",
    balance: "₹0.00",
    image: "https://via.placeholder.com/100x100.png?text=User",
  });

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  };

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Save Updated Data
  const handleSave = () => {
    setUser((prev) => ({ ...prev, image: preview || prev.image }));
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center hover:shadow-xl transition-all duration-300 relative">

        {/* Profile Image */}
        <div className="relative inline-block mb-4">
          <img
            src={
              imgError
                ? `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.name
                  )}&background=random`
                : preview || user.image
            }
            alt="Profile"
            onError={() => setImgError(true)}
            className="w-24 h-24 rounded-full border-4 border-dashed border-orange-500 object-cover mx-auto"
          />

          {/* Edit Icon */}
          <label
            htmlFor="imageUpload"
            className="absolute bottom-0 right-0 bg-gray-800 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer"
          >
            <Pencil size={16} />
          </label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>

        {/* Editable Fields */}
        {isEditing ? (
          <div className="space-y-3">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-gray-700 focus:ring-2 focus:ring-orange-400 outline-none"
            />
            <div className="flex gap-2 justify-center mt-3">
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Display Info */}
            <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
            <p className="text-gray-500 text-sm">{user.phone}</p>
            <p className="text-xl font-semibold text-gray-700 mt-2">
              {user.balance}
            </p>

            {/* Action Buttons */}
            <div className="mt-6 space-y-3">
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all"
              >
                <Pencil className="text-orange-500" size={18} />
                <span className="text-gray-700 font-medium">Edit Profile</span>
              </button>

              <button
                onClick={() => navigate("/change-password")}
                className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all"
              >
                <KeyRound className="text-orange-500" size={18} />
                <span className="text-gray-700 font-medium">
                  Change Password
                </span>
              </button>

              <button
                onClick={() => alert("Logged out successfully!")}
                className="flex items-center gap-3 w-full text-left px-4 py-2 rounded-lg border border-red-200 hover:bg-red-50 transition-all text-red-600 font-medium"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
