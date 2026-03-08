import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import ProtectedRoute from "../utils/ProtectedRoute";

function Apps() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default Apps;