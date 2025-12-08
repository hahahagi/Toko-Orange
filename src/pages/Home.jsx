import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero-banner">
        <h1>Selamat Datang di TokoOrange</h1>
        <p>
          Temukan barang impianmu dengan harga terbaik dan kualitas terjamin.
        </p>
        <Link to="/products" className="cta-button">
          Belanja Sekarang
        </Link>
      </div>

      <div className="features container">
        <div className="feature-item">
          <h3>🚚 Pengiriman Cepat</h3>
          <p>Barang sampai dalam waktu singkat.</p>
        </div>
        <div className="feature-item">
          <h3>🛡️ Garansi Aman</h3>
          <p>Jaminan uang kembali jika barang rusak.</p>
        </div>
        <div className="feature-item">
          <h3>🏷️ Harga Terbaik</h3>
          <p>Banyak diskon setiap harinya.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
