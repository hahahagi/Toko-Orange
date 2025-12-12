import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { getTotalPrice, setCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/customer/login");
    }
  }, [user, navigate]);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    address: "",
    phone: "",
    payment: "transfer",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Mohon lengkapi semua data!");
      return;
    }

    alert(`Terima kasih, ${formData.name}! Pesananmu sedang diproses.`);
    setCart([]); // Kosongkan keranjang
    navigate("/"); // Kembali ke home
  };

  return (
    <div className="container checkout-page">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="order-summary">
          <h3>Ringkasan Pesanan</h3>
          <p>
            Total Pembayaran:{" "}
            <strong>Rp {getTotalPrice().toLocaleString()}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input type="text" name="name" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Nomor Telepon</label>
            <input type="text" name="phone" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Alamat Pengiriman</label>
            <textarea
              name="address"
              rows="3"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Metode Pembayaran</label>
            <select name="payment" onChange={handleChange}>
              <option value="transfer">Transfer Bank</option>
              <option value="cod">COD (Bayar di Tempat)</option>
              <option value="ewallet">E-Wallet</option>
            </select>
          </div>

          <button type="submit" className="cta-button">
            Buat Pesanan
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
