import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

// 🔹 Pages
import Login from "./pages/Auth/Login";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Reports from "./pages/Reports/Reports";
import Users from "./pages/Users/Users";
import Profile from "./pages/Profile/Profile";

// 🔹 Layout (if you have sidebar layout)
import Sidebar from "./components/layout/Sidebar";


// 🔐 Protected Route
const ProtectedRoute = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" />;

  // Role-based restriction
  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/home" />;
  }

  return children;
};


// 🔹 Layout Wrapper
const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-[#0E0F14] min-h-screen text-white">
        {children}
      </div>
    </div>
  );
};


export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔹 Public Route */}
        <Route path="/" element={<Login />} />

        {/* 🔹 Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Layout>
                <Home />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Layout>
                <Reports />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 🔐 Admin Only */}
        <Route
          path="/users"
          element={
            <ProtectedRoute roles={["Admin"]}>
              <Layout>
                <Users />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Layout>
                <Profile />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* 🔹 Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  );
}