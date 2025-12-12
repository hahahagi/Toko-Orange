import React, { useMemo, useState } from "react";
import { ordersData } from "../data/adminData";

const statusOptions = ["Menunggu", "Diproses", "Dikirim", "Selesai"];

const AdminSales = () => {
  const [orders, setOrders] = useState(ordersData);

  const summary = useMemo(() => {
    const omzet = orders.reduce((sum, o) => sum + o.total, 0);
    const pending = orders.filter((o) => o.status === "Menunggu").length;
    const processed = orders.filter((o) => o.status === "Diproses").length;
    const finished = orders.filter((o) => o.status === "Selesai").length;
    const totalItems = orders.reduce((sum, o) => sum + o.itemsCount, 0);
    return { omzet, pending, processed, finished, totalItems };
  }, [orders]);

  const handleStatusChange = (id, status) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return (
    <div className="container admin-page">
      <div className="section-heading">
        <p className="eyebrow">Admin</p>
        <h2>Penjualan Produk</h2>
        <p className="section-subtitle">
          Pantau transaksi berjalan dan ubah status pesanan secara instan.
        </p>
      </div>

      <div className="admin-grid">
        <div className="stat-card">
          <p className="stat-label">Total Omzet</p>
          <h3>Rp {summary.omzet.toLocaleString()}</h3>
          <span className="stat-chip success">Naik 8% mingguan</span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Menunggu</p>
          <h3>{summary.pending} pesanan</h3>
          <span className="stat-chip warning">Butuh aksi</span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Diproses</p>
          <h3>{summary.processed} pesanan</h3>
          <span className="stat-chip info">Sedang dikemas</span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Selesai</p>
          <h3>{summary.finished} pesanan</h3>
          <span className="stat-chip neutral">Selesai hari ini</span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Total Item</p>
          <h3>{summary.totalItems} produk</h3>
          <span className="stat-chip neutral">Sesuai katalog</span>
        </div>
      </div>

      <div className="table-card">
        <div className="table-head">
          <div>
            <h4>Daftar Pesanan</h4>
            <p className="section-subtitle">Data statis untuk demo admin.</p>
          </div>
          <span className="table-badge">{orders.length} transaksi</span>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tanggal</th>
                <th>Customer</th>
                <th>Rincian Item</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.customer}</td>
                  <td>
                    <ul className="order-lines">
                      {order.lineItems.map((item) => (
                        <li key={`${order.id}-${item.productId}`}>
                          {item.productName} × {item.qty}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>Rp {order.total.toLocaleString()}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className={`status-select status-${order.status.toLowerCase()}`}
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminSales;
