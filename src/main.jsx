import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 🔐 Auth Provider
import { AuthProvider } from "./context/AuthContext";

// 🎨 Global Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);