export default function Profile() {
  return (
    <div className="space-y-6">

      {/* 🔹 Page Header */}
      <div>
        <h1 className="text-2xl font-semibold">Profile</h1>
        <p className="text-sm text-gray-400">
          Manage your account information
        </p>
      </div>

      {/* 🔹 Profile Card */}
      <div className="bg-[#16181F] border border-[#2A2C37] rounded-xl p-6 flex gap-6 items-center">
        
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">
          A
        </div>

        {/* Info */}
        <div>
          <h2 className="text-lg font-semibold">Admin User</h2>
          <p className="text-gray-400 text-sm">admin@crm.com</p>
          <p className="text-sm text-blue-400 mt-1">Administrator</p>
        </div>
      </div>

      {/* 🔹 Edit Profile Form */}
      <div className="bg-[#16181F] border border-[#2A2C37] rounded-xl p-6">
        
        <h3 className="text-sm font-semibold mb-4">Edit Profile</h3>

        <div className="grid grid-cols-2 gap-4">

          {/* Name */}
          <div>
            <label className="text-xs text-gray-400">Full Name</label>
            <input
              type="text"
              defaultValue="Admin User"
              className="w-full mt-1 p-3 rounded bg-[#1E2029] text-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-400">Email</label>
            <input
              type="email"
              defaultValue="admin@crm.com"
              className="w-full mt-1 p-3 rounded bg-[#1E2029] text-white"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-xs text-gray-400">Role</label>
            <input
              type="text"
              defaultValue="Administrator"
              className="w-full mt-1 p-3 rounded bg-[#1E2029] text-white"
              disabled
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs text-gray-400">Phone</label>
            <input
              type="text"
              placeholder="Enter phone number"
              className="w-full mt-1 p-3 rounded bg-[#1E2029] text-white"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6">
          <button className="bg-blue-600 px-6 py-2 rounded-lg text-sm">
            Save Changes
          </button>
        </div>
      </div>

      {/* 🔹 Security Section */}
      <div className="bg-[#16181F] border border-[#2A2C37] rounded-xl p-6">
        
        <h3 className="text-sm font-semibold mb-4">Security</h3>

        <div className="grid grid-cols-2 gap-4">

          <input
            type="password"
            placeholder="New Password"
            className="p-3 rounded bg-[#1E2029] text-white"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 rounded bg-[#1E2029] text-white"
          />
        </div>

        <button className="mt-4 bg-red-500 px-6 py-2 rounded-lg text-sm">
          Update Password
        </button>
      </div>
    </div>
  );
}