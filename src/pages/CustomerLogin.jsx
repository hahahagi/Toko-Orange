import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CustomerLogin = () => {
  const navigate = useNavigate();
  const { loginCustomer, user } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  if (user?.role === "customer") {
    return <Navigate to="/products" replace />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginCustomer(form.email.trim(), form.password.trim());
    if (result.success) {
      setError("");
      alert("Login Berhasil! Selamat datang di TokoOrange.");
      navigate("/products");
    } else {
      setError(result.message || "Login gagal");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="eyebrow">Customer Area</p>
        <h2>Masuk untuk Berbelanja</h2>
        <p className="auth-subtitle">
          Login menggunakan akun demo untuk lanjut ke katalog produk.
        </p>

        {error && <div className="auth-alert">{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="customer@tokoorange.id"
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
              placeholder="customer123"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <button className="cta-button" type="submit">
            Masuk dan Belanja
          </button>
        </form>

        <div className="auth-hint">
          <p className="hint-title">Akun demo</p>
          <p>
            Email: <strong>customer@tokoorange.id</strong>
            <br />
            Password: <strong>customer123</strong>
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            Akun lain: sinta@tokoorange.id / sinta123
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerLogin;
