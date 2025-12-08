import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Cari produk berdasarkan ID dari URL
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container">
        Produk tidak ditemukan! <Link to="/products">Kembali</Link>
      </div>
    );
  }

  return (
    <div className="container detail-page">
      <div className="detail-container">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h2>{product.name}</h2>
          <span className="category-tag">{product.category}</span>
          <p className="description">{product.description}</p>
          <h3 className="price">Rp {product.price.toLocaleString()}</h3>

          <div className="detail-actions">
            <button onClick={() => addToCart(product)} className="cta-button">
              Masukkan Keranjang
            </button>
            <Link to="/products" className="back-link">
              Kembali ke Daftar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
