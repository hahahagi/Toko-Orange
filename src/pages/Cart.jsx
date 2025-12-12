import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Trash2, Minus, Plus } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="container empty-cart">
        <h2 className="cart-title">Keranjang Belanja</h2>
        <p>Keranjangmu masih kosong.</p>
        <Link
          to="/products"
          className="cta-button"
          style={{ marginTop: "10px" }}
        >
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h2>Keranjang Belanja</h2>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h4>{item.name}</h4>
              <p className="item-price">Rp {item.price.toLocaleString()}</p>
              <div className="quantity-controls">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="qty-btn"
                  disabled={item.quantity <= 1}
                >
                  <Minus size={14} />
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="qty-btn"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="remove-btn"
              title="Hapus Produk"
            >
              <Trash2 size={20} />
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: Rp {getTotalPrice().toLocaleString()}</h3>
        <button
          onClick={() => navigate("/checkout")}
          className="cta-button checkout-btn"
        >
          Lanjut ke Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
