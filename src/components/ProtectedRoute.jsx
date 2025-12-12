import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) {
    const redirect = role === "admin" ? "/admin/login" : "/customer/login";
    return <Navigate to={redirect} replace />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
