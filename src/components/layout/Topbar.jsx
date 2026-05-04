import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <div className="w-64 bg-[#16181F] min-h-screen p-4 text-white flex flex-col justify-between">

      {/* 🔹 User Info */}
      <div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold">
            {user?.name || "User"}
          </h2>
          <p className="text-xs text-gray-400">
            {user?.role}
          </p>
        </div>

        {/* 🔹 Menu */}
        <nav className="space-y-3">
          <a href="/home">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/reports">Reports</a>

          {/* 🔐 Only Admin */}
          {user?.role === "Admin" && (
            <a href="/users">Users</a>
          )}

          <a href="/profile">Profile</a>
        </nav>
      </div>

      {/* 🔹 Logout */}
      <button
        onClick={logout}
        className="bg-red-500 p-2 rounded text-sm"
      >
        Logout
      </button>
    </div>
  );
}