import React, { useState } from "react";
import { Plus, MoreVertical, Edit, Trash2 } from "lucide-react";

export default function Address() {
  const [addresses, setAddresses] = useState([
    { id: 1, title: "Home", address: "563, Mirpur 10, Dhaka, Bangladesh" },
    { id: 2, title: "Work", address: "819, Mirpur 1, Dhaka, Bangladesh" },
    { id: 3, title: "Office", address: "Ritu, Unknown Location Found" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null); // which card menu is open
  const [newAddress, setNewAddress] = useState({ title: "", address: "" });
  const [editId, setEditId] = useState(null); // track editing item

  // === Add or Update Address ===
  const handleSave = () => {
    if (!newAddress.title || !newAddress.address)
      return alert("Please fill all fields!");

    if (editId) {
      setAddresses(
        addresses.map((item) =>
          item.id === editId ? { ...item, ...newAddress } : item
        )
      );
    } else {
      setAddresses([
        ...addresses,
        { id: Date.now(), title: newAddress.title, address: newAddress.address },
      ]);
    }

    setNewAddress({ title: "", address: "" });
    setEditId(null);
    setIsModalOpen(false);
  };

  // === Delete Address ===
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this address?")) {
      setAddresses(addresses.filter((item) => item.id !== id));
    }
  };

  // === Edit Address ===
  const handleEdit = (address) => {
    setEditId(address.id);
    setNewAddress({ title: address.title, address: address.address });
    setIsModalOpen(true);
    setMenuOpen(null);
  };

  // === Reset Modal ===
  const closeModal = () => {
    setIsModalOpen(false);
    setNewAddress({ title: "", address: "" });
    setEditId(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-1 bg-white shadow-md rounded-2xl m-4 p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-orange-500">
            My Addresses
          </h2>
        </div>

        {/* Address Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {addresses.map((item) => (
            <div
              key={item.id}
              className="relative p-5 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-3 relative">
                <h3 className="text-gray-800 font-semibold text-base">
                  {item.title}
                </h3>
                <div className="relative">
                  <MoreVertical
                    className="w-5 h-5 text-gray-500 cursor-pointer hover:text-green-600 transition"
                    onClick={() =>
                      setMenuOpen(menuOpen === item.id ? null : item.id)
                    }
                  />
                  {menuOpen === item.id && (
                    <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-32 z-10 animate-fadeIn">
                      <button
                        onClick={() => handleEdit(item)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50"
                      >
                        <Edit size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.address}
              </p>
            </div>
          ))}

          {/* Add New Address Card */}
          <div
            onClick={() => {
              setIsModalOpen(true);
              setEditId(null);
            }}
            className="flex items-center justify-center border-2 border-dashed border-green-300 bg-green-50 rounded-xl cursor-pointer hover:bg-green-100 transition-all duration-200"
          >
            <div className="flex flex-col items-center gap-2 text-green-600 font-medium py-8">
              <Plus size={22} />
              <span>Add New Address</span>
            </div>
          </div>
        </div>
      </main>

      {/* ===== Add/Edit Modal ===== */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
              {editId ? "Edit Address" : "Add New Address"}
            </h3>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Enter address title (e.g. Home, Work)"
                value={newAddress.title}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, title: e.target.value })
                }
                className="border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500 outline-none"
              />
              <textarea
                placeholder="Enter full address"
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
                rows={3}
                className="border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-green-500 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
              >
                {editId ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
