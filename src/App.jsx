import { Routes, Route, Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AdminLogin from "./pages/AdminLogin";
import CustomerLogin from "./pages/CustomerLogin";
import AdminSales from "./pages/AdminSales";
import AdminReport from "./pages/AdminReport";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="App">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/customer/login" element={<CustomerLogin />} />
              <Route
                path="/admin/penjualan"
                element={
                  <ProtectedRoute role="admin">
                    <AdminSales />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/laporan"
                element={
                  <ProtectedRoute role="admin">
                    <AdminReport />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <footer className="footer">
            <div className="container footer-grid">
              <div className="footer-brand">
                <span className="footer-logo">TokoOrange.</span>
                <p>
                  Belanja aman dengan kurasi produk tepercaya, harga jujur, dan
                  pengiriman yang sigap.
                </p>
                <div className="footer-badges">
                  <span>100% Original</span>
                  <span>Pengiriman Cepat</span>
                </div>
              </div>

              <div className="footer-column">
                <h5>Menu</h5>
                <ul>
                  <li>
                    <Link to="/">Beranda</Link>
                  </li>
                  <li>
                    <Link to="/products">Produk</Link>
                  </li>
                  <li>
                    <Link to="/cart">Keranjang</Link>
                  </li>
                </ul>
              </div>

              <div className="footer-column">
                <h5>Bantuan</h5>
                <ul>
                  <li>Email: support@toko.orange</li>
                  <li>WhatsApp: +62 812-0000-000</li>
                  <li>Jam operasional: 09.00 - 21.00</li>
                </ul>
              </div>

              <div className="footer-column footer-newsletter">
                <h5>Dapatkan Update</h5>
                <p>Masukkan email untuk info promo terbaru.</p>
                <form
                  className="footer-form"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input type="email" placeholder="Email kamu" />
                  <button type="submit">Daftar</button>
                </form>
                <div className="footer-social">
                  <a href="#" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="#" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <Twitter size={18} />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; 2025 TokoOrange. All rights reserved.
            </div>
          </footer>
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
