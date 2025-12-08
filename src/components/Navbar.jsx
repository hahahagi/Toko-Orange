import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Home, ShoppingBag, ShoppingCart } from "lucide-react";

const Navbar = () => {
  const { cart } = useCart();
  const location = useLocation();

  // Menghitung total item biar muncul angka di icon keranjang
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <ShoppingBag size={24} />
          <span>TokoOrange.</span>
        </Link>
        <div className="nav-links">
          <Link to="/" className={`nav-item ${isActive("/")}`}>
            <Home size={20} />
            <span className="nav-text">Beranda</span>
          </Link>
          <Link to="/products" className={`nav-item ${isActive("/products")}`}>
            <ShoppingBag size={20} />
            <span className="nav-text">Produk</span>
          </Link>
          <Link
            to="/cart"
            className={`cart-link nav-item ${isActive("/cart")}`}
          >
            <div className="icon-wrapper">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
            </div>
            <span className="nav-text">Keranjang</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
