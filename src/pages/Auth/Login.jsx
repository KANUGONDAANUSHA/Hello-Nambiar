import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await login(email, password);
    navigate("/home"); // redirect after login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0E0F14] text-white">
      
      <div className="bg-[#16181F] p-8 rounded-xl w-[350px] space-y-4">

        <h2 className="text-xl font-semibold text-center">Login</h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 rounded bg-[#1E2029]"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-2 rounded bg-[#1E2029]"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 p-2 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
}