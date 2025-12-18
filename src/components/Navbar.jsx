import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import {
  Home,
  ShoppingBag,
  ShoppingCart,
  LogOut,
  BarChart,
} from "lucide-react";

const Navbar = () => {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const location = useLocation();

  const isAdmin = user?.role === "admin";
  const isCustomer = user?.role === "customer";

  // Menghitung total item biar muncul angka di icon keranjang
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path, exact = false) => {
    if (exact) return location.pathname === path;
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  const handleLogout = () => {
    if (window.confirm("Apakah Anda yakin ingin keluar?")) {
      logout();
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to={isAdmin ? "/admin/penjualan" : "/"} className="logo">
          <ShoppingBag size={24} />
          <span>TokoOrange.</span>
        </Link>
        <div className="nav-links">
          {isAdmin ? (
            <>
              <Link
                to="/admin/penjualan"
                className={`nav-item ${
                  isActive("/admin/penjualan") ? "active" : ""
                }`}
              >
                <Home size={20} />
                <span className="nav-text">Penjualan</span>
              </Link>
              <Link
                to="/admin/laporan"
                className={`nav-item ${
                  isActive("/admin/laporan") ? "active" : ""
                }`}
              >
                <BarChart size={20} />
                <span className="nav-text">Laporan</span>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className={`nav-item ${isActive("/", true) ? "active" : ""}`}
              >
                <Home size={20} />
                <span className="nav-text">Beranda</span>
              </Link>
              <Link
                to="/products"
                className={`nav-item ${isActive("/products") ? "active" : ""}`}
              >
                <ShoppingBag size={20} />
                <span className="nav-text">Produk</span>
              </Link>
              <Link
                to="/cart"
                className={`cart-link nav-item ${
                  isActive("/cart") ? "active" : ""
                }`}
              >
                <div className="icon-wrapper">
                  <ShoppingCart size={20} />
                  {totalItems > 0 && (
                    <span className="cart-badge">{totalItems}</span>
                  )}
                </div>
                <span className="nav-text">Keranjang</span>
              </Link>
            </>
          )}
        </div>

        <div className="nav-auth">
          {user ? (
            <div className="user-chip">
              <span
                className={`chip-role ${
                  user.role === "admin" ? "chip-admin" : "chip-customer"
                }`}
              >
                {user.role === "admin" ? "Admin" : "Customer"}
              </span>
              <span className="chip-name">{user.name}</span>
              <button className="text-button" onClick={handleLogout}>
                <LogOut size={16} /> Keluar
              </button>
            </div>
          ) : (
            <div className="login-links">
              <Link to="/customer/login" className="pill-link">
                Login Customer
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
