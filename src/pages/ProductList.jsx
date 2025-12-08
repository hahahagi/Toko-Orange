import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  // Logika Filter dan Search
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchCategory =
      filterCategory === "All" || product.category === filterCategory;
    return matchSearch && matchCategory;
  });

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="container product-page">
      <h2>Daftar Produk</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Cari produk..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="category-select"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} loading="lazy" />
              </Link>
              <div className="product-info">
                <Link to={`/product/${product.id}`}>
                  <h3>{product.name}</h3>
                </Link>
                <div className="product-meta">
                  <span className="rating">
                    ⭐ 4.{Math.floor(Math.random() * 5) + 5}
                  </span>
                  <span className="sold-count">
                    {Math.floor(Math.random() * 100) + 10} Terjual
                  </span>
                </div>
                <p className="product-price">
                  Rp {product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="cta-button"
                >
                  + Keranjang
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
            Produk tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
