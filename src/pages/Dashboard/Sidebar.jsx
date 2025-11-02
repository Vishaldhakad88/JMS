import React from "react";
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
  return (
    <aside className="w-72 bg-white border-r hidden md:block h-screen overflow-y-auto">
      <div className="p-4">
        {/* === Header === */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-100 p-2 rounded-xl">
            <LayoutDashboard className="text-green-600" size={28} />
          </div>
          <div>
            <div className="font-bold text-lg">JMS Store</div>
            <div className="text-xs text-gray-400">Admin Panel</div>
          </div>
        </div>

        {/* === Navigation === */}
        <nav className="space-y-5">
          {SIDEBAR.map((sec) => (
            <div key={sec.title}>
              <div className="text-xs text-gray-400 px-3 uppercase mb-2 tracking-wider">
                {sec.title}
              </div>
              <div className="space-y-1">
                {sec.items.map((it) => (
                  <NavLink
                    to={it.to}
                    key={it.to}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200
                      ${isActive
                        ? "bg-green-100 text-green-700 font-semibold shadow-sm"
                        : "text-gray-700 hover:bg-gray-50 hover:text-green-600"}`
                    }
                  >
                    <it.icon
                      size={22}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />
                    <span>{it.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}
