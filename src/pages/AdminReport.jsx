import React from "react";
import { ordersData, topProductsData, weeklyVolume } from "../data/adminData";

const AdminReport = () => {
  const omzet = ordersData.reduce((sum, o) => sum + o.total, 0);
  const avgOrder = omzet / ordersData.length;
  const completionRate = Math.round(
    (ordersData.filter((o) => o.status === "Selesai").length /
      ordersData.length) *
      100
  );

  const maxVolume =
    weeklyVolume.reduce((max, d) => Math.max(max, d.value), 0) || 1;
  const barMaxHeight = 200;
  const barMinHeight = 20;

  return (
    <div className="container admin-page">
      <div className="section-heading">
        <p className="eyebrow">Admin</p>
        <h2>Laporan Penjualan</h2>
        <p className="section-subtitle">
          Ringkasan performa toko dengan data statis untuk demonstrasi.
        </p>
      </div>

      <div className="admin-grid">
        <div className="stat-card">
          <p className="stat-label">Omzet 7 Hari</p>
          <h3>Rp {omzet.toLocaleString()}</h3>
          <span className="stat-chip success">Data mengikuti katalog</span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Rata-rata Pesanan</p>
          <h3>Rp {Math.round(avgOrder).toLocaleString()}</h3>
          <span className="stat-chip info">Nilai keranjang</span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Tingkat Selesai</p>
          <h3>{completionRate}%</h3>
          <span className="stat-chip neutral">
            Dari {ordersData.length} pesanan
          </span>
        </div>
        <div className="stat-card">
          <p className="stat-label">Pesanan Aktif</p>
          <h3>
            {ordersData.filter((o) => o.status !== "Selesai").length} transaksi
          </h3>
          <span className="stat-chip warning">Perlu dikirim</span>
        </div>
      </div>

      <div className="report-grid">
        <div className="table-card bar-chart-card">
          <div className="table-head">
            <div>
              <h4>Grafik Penjualan (statis)</h4>
              <p className="section-subtitle">Volume pesanan per hari.</p>
            </div>
          </div>
          <div className="bar-chart">
            {weeklyVolume.map((day) => (
              <div key={day.label} className="bar-item">
                <div
                  className="bar"
                  style={{
                    height: `${Math.max(
                      barMinHeight,
                      (day.value / maxVolume) * barMaxHeight
                    )}px`,
                  }}
                />
                <span className="bar-label">{day.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="table-card">
          <div className="table-head">
            <div>
              <h4>Top Produk</h4>
              <p className="section-subtitle">Data statis untuk simulasi.</p>
            </div>
            <span className="table-badge">{topProductsData.length} produk</span>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Terjual</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {topProductsData.map((prod) => (
                  <tr key={prod.productId}>
                    <td>{prod.name}</td>
                    <td>{prod.sold} unit</td>
                    <td>Rp {prod.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReport;
