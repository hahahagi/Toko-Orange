import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

const ProductList = () => {
  const { addToCart } = useCart();
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const getRating = (id) => (4 + (id % 10) / 10).toFixed(1);
  const getSoldCount = (id) => 35 + id * 9;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput.trim());
  };

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
      <div className="section-heading">
        <h2 className="product-list">Daftar Produk</h2>
        <p className="section-subtitle">
          Temukan barang dengan kurasi harga terbaik dan siap dikirim cepat.
        </p>
      </div>

      <div className="filters">
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="search-input"
          />
          <button
            type="submit"
            className="search-button"
            aria-label="Cari produk"
          >
            <Search size={18} />
          </button>
        </form>

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
                  <span className="rating">⭐ {getRating(product.id)}</span>
                  <span className="sold-count">
                    {getSoldCount(product.id)} Terjual
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
