import { useState } from "react";

export default function Home() {
  // 🔹 Simulated logged-in user (replace later with real auth)
  const user = {
    name: "Admin User",
    role: "Admin", // change to "User" to test
  };

  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="space-y-6">

      {/* 🔹 Top Section */}
      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-2xl font-semibold">Home</h1>
          <p className="text-sm text-gray-400">
            Welcome back, {user.name}
          </p>
        </div>

        {/* 🔥 STATUS CONTROL */}
        <div className="flex items-center gap-3">

          {/* Status label */}
          <span
            className={`text-sm font-medium ${
              isOnline ? "text-green-400" : "text-red-400"
            }`}
          >
            {isOnline ? "Online" : "Offline"}
          </span>

          {/* 🔐 Only Admin can toggle */}
          {user.role === "Admin" && (
            <button
              onClick={() => setIsOnline(!isOnline)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                isOnline
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {isOnline ? "Go Offline" : "Go Online"}
            </button>
          )}
        </div>
      </div>

      {/* 🔹 Welcome Banner */}
      <div className="bg-gradient-to-r from-[#1E2A78] to-[#2B1E78] p-6 rounded-xl flex justify-between items-center">
        
        <div>
          <h2 className="text-xl font-semibold">
            Good morning, {user.name}!
          </h2>
          <p className="text-sm text-gray-300">
            You have 12 new leads and 3 reports ready.
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-[#16181F] px-5 py-3 rounded-lg text-center">
            <p className="text-green-400 text-xl font-bold">47</p>
            <p className="text-xs text-gray-400">Today's Leads</p>
          </div>

          <div className="bg-[#16181F] px-5 py-3 rounded-lg text-center">
            <p className="text-blue-400 text-xl font-bold">8</p>
            <p className="text-xs text-gray-400">Active Users</p>
          </div>
        </div>
      </div>

      {/* 🔹 User Activity */}
      <div className="bg-[#16181F] border border-[#2A2C37] rounded-xl overflow-hidden">
        
        <div className="flex justify-between items-center p-4 border-b border-[#2A2C37]">
          <h3 className="text-sm font-semibold">User Activity</h3>

          <input
            type="text"
            placeholder="Search..."
            className="bg-[#1E2029] px-3 py-2 rounded-md text-sm text-white"
          />
        </div>

        <table className="w-full text-sm">
          <thead className="bg-[#1E2029] text-gray-400 text-xs">
            <tr>
              <th className="p-3 text-left">USER</th>
              <th className="p-3 text-left">EMAIL</th>
              <th className="p-3 text-left">STATUS</th>
            </tr>
          </thead>

          <tbody>
            {[
              { name: "Rahul", email: "rahul@co.io", status: "Online" },
              { name: "Priya", email: "priya@co.io", status: "Offline" },
              { name: "Aman", email: "aman@co.io", status: "Online" },
            ].map((u, i) => (
              <tr
                key={i}
                className="border-t border-[#2A2C37] hover:bg-[#1E2029]"
              >
                <td className="p-3">{u.name}</td>
                <td className="p-3 text-gray-400">{u.email}</td>
                <td
                  className={`p-3 ${
                    u.status === "Online"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {u.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}