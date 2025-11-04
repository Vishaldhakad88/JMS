import React, { useState } from "react";
import { Eye, EyeOff, KeyRound, Lock, CheckCircle } from "lucide-react";

export default function ChangePassword() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.oldPassword || !form.newPassword || !form.confirmPassword) {
      alert("All fields are required!");
      return;
    }
    if (form.newPassword !== form.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }

    // Simulate API call
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setForm({ oldPassword: "", newPassword: "", confirmPassword: "" });
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center min-h-[90vh] bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm text-center hover:shadow-xl transition-all duration-300">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
            <KeyRound size={28} />
          </div>
        </div>
        <h2 className="text-lg font-semibold text-gray-800 mb-1">
          Change Password
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Secure your account by updating your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Old Password */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">
              Old Password
            </label>
            <input
              type={showOld ? "text" : "password"}
              name="oldPassword"
              value={form.oldPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none text-gray-700"
              placeholder="Enter old password"
            />
            <span
              onClick={() => setShowOld(!showOld)}
              className="absolute right-3 top-8 cursor-pointer text-gray-500"
            >
              {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* New Password */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">
              New Password
            </label>
            <input
              type={showNew ? "text" : "password"}
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none text-gray-700"
              placeholder="Enter new password"
            />
            <span
              onClick={() => setShowNew(!showNew)}
              className="absolute right-3 top-8 cursor-pointer text-gray-500"
            >
              {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400 outline-none text-gray-700"
              placeholder="Confirm new password"
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-8 cursor-pointer text-gray-500"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-all font-medium mt-3"
          >
            Update Password
          </button>
        </form>

        {/* Success Message */}
        {success && (
          <div className="mt-5 flex flex-col items-center text-green-600">
            <CheckCircle size={26} />
            <p className="text-sm mt-1 font-medium">
              Password changed successfully!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
