import { NavLink } from "react-router-dom";
import {
  Home,
  LayoutDashboard,
  FileText,
  Users,
  User,
} from "lucide-react";

export default function Sidebar() {
  const menu = [
    { name: "Home", path: "/home", icon: Home },
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Reports", path: "/reports", icon: FileText },
    { name: "Users", path: "/users", icon: Users },
  ];

  return (
    <aside className="w-64 h-screen bg-[#0E0F14] border-r border-[#2A2C37] flex flex-col px-4 py-6">
      
      {/* LOGO */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold">
          SF
        </div>
        <h1 className="text-lg font-semibold text-white">SalesVision</h1>
      </div>

      {/* MENU */}
      <div className="text-xs text-gray-500 mb-2 px-2">MENU</div>

      <nav className="flex flex-col gap-1">
        {menu.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-[#1E2029] text-blue-400"
                    : "text-gray-400 hover:bg-[#1E2029] hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* ACCOUNT */}
      <div className="text-xs text-gray-500 mt-6 mb-2 px-2">ACCOUNT</div>

      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition ${
            isActive
              ? "bg-[#1E2029] text-blue-400"
              : "text-gray-400 hover:bg-[#1E2029] hover:text-white"
          }`
        }
      >
        <User size={18} />
        <span>Profile</span>
      </NavLink>

      {/* PUSH CONTENT DOWN (optional spacing fix) */}
      <div className="mt-auto text-xs text-gray-500 pt-6">
        © 2026 SalesVision
      </div>
    </aside>
  );
}