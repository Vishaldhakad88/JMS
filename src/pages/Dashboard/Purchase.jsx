import React, { useState } from "react";
import { Eye, Pencil, Trash2, Plus, X, Download, Printer } from "lucide-react";

const initialProducts = [
  { id: 1, name: "LED Light Bulb, 7.5 Watts", category: "Lights & Electrical", buyingPrice: 200, sellingPrice: 300, status: "Active" },
  { id: 2, name: "Ninja 4QT Air Fryer, Black", category: "Kitchen Appliances", buyingPrice: 250, sellingPrice: 430, status: "Active" },
];

export default function Purchase() {
  const [products, setProducts] = useState(initialProducts);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    buyingPrice: "",
    sellingPrice: "",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      buyingPrice: product.buyingPrice,
      sellingPrice: product.sellingPrice,
      status: product.status,
    });
    setShowModal(true);
  };

  const handleSave = () => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...formData } : p));
    } else {
      setProducts([...products, { id: Date.now(), ...formData }]);
    }
    setShowModal(false);
    setEditingProduct(null);
    setFormData({ name: "", category: "", buyingPrice: "", sellingPrice: "", status: "Active" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header + Buttons */}
          <div className="flex flex-wrap items-center justify-between mb-6">
            <h1 className="text-xl font-semibold text-gray-800">Purchase</h1>
            <div className="flex gap-3 mt-3 sm:mt-0">
              {/* Export Dropdown */}
              <div className="relative group">
                <button className="border px-4 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 flex items-center gap-2 text-sm font-medium">
                  <Download size={16} /> Export
                </button>
                <div className="absolute hidden group-hover:block bg-white border rounded-md shadow-md mt-1 right-0 w-32 z-10">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm">
                    <Printer size={14} /> Print
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2 text-sm">
                    <Download size={14} /> XLS
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setEditingProduct(null);
                  setFormData({ name: "", category: "", buyingPrice: "", sellingPrice: "", status: "Active" });
                  setShowModal(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium"
              >
                <Plus size={16} /> Add Product
              </button>
            </div>
          </div>

          {/* Responsive Table */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
                  <tr>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-left">Category</th>
                    <th className="px-6 py-3 text-left">Buying Price</th>
                    <th className="px-6 py-3 text-left">Selling Price</th>
                    <th className="px-6 py-3 text-left">Status</th>
                    <th className="px-6 py-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{p.name}</td>
                      <td className="px-6 py-4 text-gray-600">{p.category}</td>
                      <td className="px-6 py-4">৳{p.buyingPrice}</td>
                      <td className="px-6 py-4 font-semibold text-green-600">৳{p.sellingPrice}</td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <button className="p-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-600 rounded-md">
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => handleEdit(p)}
                            className="p-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-md"
                          >
                            <Pencil size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="p-2 bg-rose-100 hover:bg-rose-200 text-rose-600 rounded-md"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden">
              {products.map((p) => (
                <div key={p.id} className="border-b p-5 hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      {p.status}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Category</span>
                      <span className="font-medium text-gray-900">{p.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Buying Price</span>
                      <span>৳{p.buyingPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Selling Price</span>
                      <span className="font-semibold text-green-600">৳{p.sellingPrice}</span>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 mt-4">
                    <button className="p-2 bg-emerald-100 text-emerald-600 rounded-md">
                      <Eye size={18} />
                    </button>
                    <button onClick={() => handleEdit(p)} className="p-2 bg-blue-100 text-blue-600 rounded-md">
                      <Pencil size={18} />
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="p-2 bg-rose-100 text-rose-600 rounded-md">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={22} />
              </button>
              <h2 className="text-xl font-semibold mb-5">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h2>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="text"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  placeholder="Category"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="number"
                  name="buyingPrice"
                  value={formData.buyingPrice}
                  onChange={handleChange}
                  placeholder="Buying Price"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
                <input
                  type="number"
                  name="sellingPrice"
                  value={formData.sellingPrice}
                  onChange={handleChange}
                  placeholder="Selling Price"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                />
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 outline-none"
                >
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 border rounded-md hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
                >
                  {editingProduct ? "Update" : "Save"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}