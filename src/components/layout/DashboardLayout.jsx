import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-[#0E0F14] text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6 overflow-y-auto flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}