import React, { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // Reset keranjang saat user logout
  useEffect(() => {
    if (!user) {
      setCart([]);
    }
  }, [user]);

  // Fungsi menampilkan toast
  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "success" });
    }, 3000);
  };

  // Fungsi tambah ke keranjang
  const addToCart = (product) => {
    if (!user) {
      showToast("Silakan login terlebih dahulu untuk berbelanja", "error");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    showToast("Produk berhasil ditambahkan ke keranjang!");
  };

  // Fungsi hapus dari keranjang
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    showToast("Produk dihapus dari keranjang", "error");
  };

  // Fungsi update quantity
  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          return { ...item, quantity: newQuantity > 0 ? newQuantity : 1 };
        }
        return item;
      })
    );
  };

  // Hitung total harga
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalPrice,
        setCart,
        showToast,
      }}
    >
      {children}
      {toast.show && (
        <div className={`toast toast-${toast.type}`}>{toast.message}</div>
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
