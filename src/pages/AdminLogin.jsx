import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { loginAdmin, user } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  if (user?.role === "admin") {
    return <Navigate to="/admin/penjualan" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginAdmin(form.email.trim(), form.password.trim());
    if (result.success) {
      setError("");
      alert("Login Admin Berhasil!");
      navigate("/admin/penjualan");
    } else {
      setError(result.message || "Login gagal");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="eyebrow">Admin Area</p>
        <h2>Masuk sebagai Admin</h2>
        <p className="auth-subtitle">
          Gunakan akun admin demo untuk mengakses halaman penjualan & laporan.
        </p>

        {error && <div className="auth-alert">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email Admin
            <input
              type="email"
              name="email"
              placeholder="admin@tokoorange.id"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="admin123"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <button className="cta-button" type="submit">
            Masuk ke Dashboard
          </button>
        </form>

        <div className="auth-hint">
          <p className="hint-title">Akun demo</p>
          <p>
            Email: <strong>admin@tokoorange.id</strong>
            <br />
            Password: <strong>admin123</strong>
          </p>
        </div>

        <div className="auth-footer-link">
          <span>Login sebagai customer?</span>
          <Link to="/customer/login">Masuk Customer</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
