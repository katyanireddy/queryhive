import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProtectedRoute from "./components/ProtectedRoute";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./index.css";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />
        </Routes>
    </BrowserRouter>
  </StrictMode>
);