import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  Package,
  ShoppingCart,
  AlertTriangle,
  Boxes,
  ShoppingBag,
  FileText,
  RotateCcw,
  Tag,
  Sparkles,
  Layers,
  Bell,
  Users,
  Truck,
  User,
  Briefcase,
  CreditCard,
  BarChart3,
  PieChart,
  FileChartColumn,
  Settings,
  Menu,
  X,
} from "lucide-react";

const section = (title, items) => ({ title, items });

const SIDEBAR = [
  section("MAIN", [
    { label: "Home", to: "/", icon: Home },
    { label: "Dashboard", to: "/dashboard", icon: LayoutDashboard },
  ]),
  section("Product & Stock", [
    { label: "Products", to: "/dashboard/products", icon: Package },
    { label: "Purchase", to: "/dashboard/purchase", icon: ShoppingCart },
    { label: "Damages", to: "/dashboard/damages", icon: AlertTriangle },
    { label: "Stock", to: "/dashboard/stock", icon: Boxes },
  ]),
  section("POS & Orders", [
    { label: "POS", to: "/dashboard/pos", icon: ShoppingBag },
    { label: "POS Orders", to: "/dashboard/pos-orders", icon: FileText },
    { label: "Online Orders", to: "/dashboard/orders/online", icon: ShoppingCart },
    { label: "Return Orders", to: "/dashboard/orders/returns", icon: RotateCcw },
  ]),
  section("Promo", [
    { label: "Coupons", to: "/dashboard/coupons", icon: Tag },
    { label: "Promotions", to: "/dashboard/promotions", icon: Sparkles },
    { label: "Product Sections", to: "/dashboard/product-sections", icon: Layers },
  ]),
  section("Communications", [
    { label: "Push Notifications", to: "/dashboard/push", icon: Bell },
    { label: "Subscribers", to: "/dashboard/subscribers", icon: Users },
  ]),
  section("Users", [
    { label: "Administrators", to: "/dashboard/users/admins", icon: User },
    { label: "Delivery Boys", to: "/dashboard/users/delivery", icon: Truck },
    { label: "Customers", to: "/dashboard/users/customers", icon: Users },
    { label: "Employees", to: "/dashboard/users/employees", icon: Briefcase },
  ]),
  section("Accounts", [
    { label: "Transactions", to: "/dashboard/accounts/transactions", icon: CreditCard },
  ]),
  section("Reports", [
    { label: "Sales Report", to: "/dashboard/reports/sales", icon: BarChart3 },
    { label: "Products Report", to: "/dashboard/reports/products", icon: PieChart },
    { label: "Credit Balance Report", to: "/dashboard/reports/credit", icon: FileChartColumn },
  ]),
  section("Setup", [
    { label: "Settings", to: "/dashboard/settings", icon: Settings },
  ]),
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-orange-500 text-white p-2 rounded-lg"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar */}
     <aside
  onMouseEnter={() => setIsExpanded(true)}
  onMouseLeave={() => setIsExpanded(false)}
  className={`fixed top-0 left-0 h-[calc(100vh-50px)] bg-white border-r shadow-sm 
    transition-all duration-300 ease-in-out z-40
    ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
    ${mobileOpen ? "w-72" : isExpanded ? "w-72" : "w-20"}`}
>

        <div className="p-4 flex flex-col h-full overflow-y-auto  scrollbar-hide">
          {/* === Header === */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-2 rounded-xl flex-shrink-0">
              <LayoutDashboard className="text-white" size={24} />
            </div>
            {(isExpanded || mobileOpen) && (
              <div className="transition-opacity duration-300">
                <div className="font-bold text-lg text-gray-800">JMS Store</div>
                <div className="text-xs text-gray-400">Admin Panel</div>
              </div>
            )}
          </div>

          {/* === Navigation === */}
          <nav className="space-y-5 flex-1">
            {SIDEBAR.map((sec) => (
              <div key={sec.title}>
                {(isExpanded || mobileOpen) && (
                  <div className="text-xs text-gray-400 px-3 uppercase mb-2 tracking-wider">
                    {sec.title}
                  </div>
                )}
                <div className="space-y-1">
                  {sec.items.map((it) => (
                    <NavLink
                      to={it.to}
                      key={it.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center ${
                          (isExpanded || mobileOpen)
                            ? "justify-start gap-3 px-4"
                            : "justify-center"
                        } py-2 rounded-lg transition-all duration-200
                        ${
                          isActive
                            ? "bg-gradient-to-r from-orange-100 to-orange-50 text-orange-700 font-semibold shadow-sm"
                            : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        }`
                      }
                    >
                      <it.icon size={20} />
                      {(isExpanded || mobileOpen) && <span>{it.label}</span>}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer */}
          {(isExpanded || mobileOpen) && (
            <div className="mt-auto text-xs text-gray-400 text-center py-2 border-t border-gray-100">
              © 2025 JMS Store
            </div>
          )}
        </div>
      </aside>

      {/* === Hide Scrollbar CSS === */}
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </>
  );
}
