/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext();

const adminAccount = {
  email: "admin@tokoorange.id",
  password: "admin123",
  name: "Admin Toko",
  role: "admin",
};

const customerAccounts = [
  {
    email: "customer@tokoorange.id",
    password: "customer123",
    name: "Budi Santoso",
    role: "customer",
  },
  {
    email: "sinta@tokoorange.id",
    password: "sinta123",
    name: "Sinta Dewi",
    role: "customer",
  },
];

const getStoredUser = () => {
  try {
    const raw = localStorage.getItem("auth_user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getStoredUser());

  useEffect(() => {
    if (user) {
      localStorage.setItem("auth_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("auth_user");
    }
  }, [user]);

  const loginAdmin = (email, password) => {
    if (email === adminAccount.email && password === adminAccount.password) {
      setUser({ ...adminAccount });
      return { success: true };
    }
    return { success: false, message: "Email atau password admin salah." };
  };

  const loginCustomer = (email, password) => {
    const found = customerAccounts.find(
      (cust) => cust.email === email && cust.password === password
    );
    if (found) {
      setUser({ ...found });
      return { success: true };
    }
    return {
      success: false,
      message: "Email atau password customer tidak sesuai.",
    };
  };

  const logout = () => setUser(null);

  const value = useMemo(
    () => ({
      user,
      isAdmin: user?.role === "admin",
      loginAdmin,
      loginCustomer,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
