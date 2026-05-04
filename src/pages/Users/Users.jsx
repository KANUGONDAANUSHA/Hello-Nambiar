export default function Users() {
  const admins = [
    {
      initials: "XA",
      name: "XYZ Admin",
      email: "xyz@salesvision.io",
      access: ["All leads", "All reports", "Download", "Full access"],
    },
  ];

  const teamLeads = [
    {
      initials: "RK",
      name: "Rahul Kumar",
      email: "rahul@co.io",
    },
    {
      initials: "SJ",
      name: "Sara John",
      email: "sara@co.io",
    },
  ];

  const salesManagers = [
    {
      initials: "PS",
      name: "Priya Sharma",
      email: "priya@co.io",
    },
    {
      initials: "AM",
      name: "Aman Mehta",
      email: "aman@co.io",
    },
    {
      initials: "KP",
      name: "Kiran Pillai",
      email: "kiran@co.io",
    },
  ];

  return (
    <div className="space-y-6">

      {/* 🔹 Header */}
      <div>
        <h1 className="text-2xl font-semibold">User management</h1>
      </div>

      {/* 🔹 ADMINS */}
      <div className="bg-[#16181F] border border-[#2A2C37] rounded-xl p-6">
        
        <div className="flex justify-between mb-4">
          <h2 className="text-sm font-semibold">Admins</h2>
          <span className="text-gray-400 text-xs">{admins.length}</span>
        </div>

        {admins.map((user, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-t border-[#2A2C37]">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">
                {user.initials}
              </div>

              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>

                <div className="flex gap-2 mt-1 flex-wrap">
                  {user.access.map((a, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#1E2029] px-2 py-1 rounded"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 🔹 TEAM LEADS */}
      <div className="bg-[#16181F] border border-[#2A2C37] rounded-xl p-6">
        
        <div className="flex justify-between mb-1">
          <h2 className="text-sm font-semibold">Team leads</h2>
          <span className="text-gray-400 text-xs">{teamLeads.length}</span>
        </div>

        <p className="text-xs text-gray-400 mb-4">
          · Can view team leads, dashboards, reports
        </p>

        {teamLeads.map((user, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-t border-[#2A2C37]">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center font-bold">
                {user.initials}
              </div>

              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>

                <div className="flex gap-2 mt-1">
                  <span className="text-xs bg-[#1E2029] px-2 py-1 rounded">
                    Team leads
                  </span>
                  <span className="text-xs bg-[#1E2029] px-2 py-1 rounded">
                    Reports
                  </span>
                </div>
              </div>
            </div>

            <button className="text-blue-400 text-sm hover:underline">
              Login as →
            </button>
          </div>
        ))}
      </div>

      {/* 🔹 SALES MANAGERS */}
      <div className="bg-[#16181F] border border-[#2A2C37] rounded-xl p-6">
        
        <div className="flex justify-between mb-1">
          <h2 className="text-sm font-semibold">Sales managers</h2>
          <span className="text-gray-400 text-xs">{salesManagers.length}</span>
        </div>

        <p className="text-xs text-gray-400 mb-4">
          · See only their own data
        </p>

        {salesManagers.map((user, i) => (
          <div key={i} className="flex justify-between items-center py-3 border-t border-[#2A2C37]">

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center font-bold">
                {user.initials}
              </div>

              <div>
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>

                <div className="flex gap-2 mt-1">
                  <span className="text-xs bg-[#1E2029] px-2 py-1 rounded">
                    Own data only
                  </span>
                </div>
              </div>
            </div>

            <button className="text-blue-400 text-sm hover:underline">
              Login as →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}