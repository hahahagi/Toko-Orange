# Laporan Proyek UAS - Toko Orange (E-Commerce)

## 1. Tujuan

Tujuan dari proyek ini adalah untuk mengembangkan sebuah aplikasi web E-Commerce sederhana namun fungsional sebagai tugas Ujian Akhir Semester (UAS). Aplikasi ini dirancang untuk memfasilitasi transaksi jual beli online dengan dua peran pengguna utama:

- **Pelanggan (Customer):** Dapat melihat produk, menambah produk ke keranjang, dan melakukan checkout.
- **Admin:** Dapat memantau data penjualan dan melihat laporan transaksi.

Aplikasi ini bertujuan untuk mendemonstrasikan pemahaman tentang pengembangan web modern menggunakan React, manajemen state global, routing, dan proteksi halaman (authentication/authorization).

## 2. Teknologi

Teknologi dan _library_ yang digunakan dalam pengembangan aplikasi ini meliputi:

- **Core Framework:** [React](https://react.dev/) (v19) - Library JavaScript untuk membangun antarmuka pengguna.
- **Build Tool:** [Vite](https://vitejs.dev/) - Build tool yang cepat untuk pengembangan frontend modern.
- **Routing:** [React Router DOM](https://reactrouter.com/) (v7) - Untuk navigasi antar halaman (SPA).
- **State Management:** React Context API - Untuk mengelola state global seperti Autentikasi (`AuthContext`) dan Keranjang Belanja (`CartContext`).
- **Icons:** [Lucide React](https://lucide.dev/) - Koleksi ikon yang ringan dan konsisten.
- **Deployment:** [GitHub Pages](https://pages.github.com/) - Layanan hosting statis untuk men-deploy aplikasi.
- **Linter:** ESLint - Untuk menjaga kualitas kode.

## 3. Struktur Folder

Berikut adalah struktur folder utama dari _source code_ aplikasi:

```
src/
├── assets/              # Aset statis (gambar, dll)
├── components/          # Komponen UI yang dapat digunakan kembali
│   ├── Navbar.jsx       # Navigasi utama aplikasi
│   └── ProtectedRoute.jsx # Komponen untuk memproteksi halaman admin
├── context/             # Context API untuk state management
│   ├── AuthContext.jsx  # Logika autentikasi (Login/Logout)
│   └── CartContext.jsx  # Logika keranjang belanja
├── data/                # Data dummy/mock data
│   ├── adminData.js     # Data untuk dashboard admin
│   └── products.js      # Daftar produk
├── pages/               # Halaman-halaman utama aplikasi
│   ├── AdminLogin.jsx   # Halaman login admin
│   ├── AdminReport.jsx  # Halaman laporan admin
│   ├── AdminSales.jsx   # Halaman data penjualan admin
│   ├── Cart.jsx         # Halaman keranjang belanja
│   ├── Checkout.jsx     # Halaman checkout
│   ├── CustomerLogin.jsx# Halaman login pelanggan
│   ├── Home.jsx         # Halaman beranda
│   ├── ProductDetail.jsx# Halaman detail produk
│   └── ProductList.jsx  # Halaman daftar produk
├── App.css              # Styling global aplikasi
├── App.jsx              # Komponen root dan konfigurasi routing
├── index.css            # Styling dasar CSS
└── main.jsx             # Entry point aplikasi
```

## 4. Screenshot

_(Silakan ambil screenshot dari aplikasi yang berjalan dan tempelkan di bagian ini pada dokumen PDF)_

1.  **Halaman Beranda (Home):** Menampilkan banner dan daftar produk unggulan.
2.  **Halaman Login Customer:** Form login untuk pelanggan.
3.  **Halaman Detail Produk:** Tampilan detail informasi produk.
4.  **Halaman Keranjang (Cart):** Daftar item yang akan dibeli.
5.  **Halaman Checkout:** Form pengiriman dan ringkasan pesanan.
6.  **Dashboard Admin (Penjualan):** Tabel data penjualan yang hanya bisa diakses admin.

## 5. Penjelasan Fitur

### A. Fitur Umum & Pelanggan

1.  **Autentikasi Pengguna:**

    - Terdapat pemisahan login antara Admin dan Customer.
    - Menggunakan `AuthContext` untuk menyimpan sesi pengguna di `localStorage`.
    - Akun Demo Customer: `customer@tokoorange.id` / `customer123`.

2.  **Katalog Produk:**

    - Menampilkan daftar produk dengan gambar, nama, harga, dan kategori.
    - Fitur detail produk untuk melihat informasi lebih lengkap.

3.  **Keranjang Belanja (Shopping Cart):**

    - Pelanggan dapat menambahkan produk ke keranjang.
    - Fitur update kuantitas barang.
    - Menghitung total harga secara otomatis.
    - Validasi: Pengguna harus login untuk bisa berbelanja.

4.  **Checkout:**
    - Formulir pengisian data pengiriman.
    - Ringkasan pesanan sebelum konfirmasi pembayaran.

### B. Fitur Admin

1.  **Proteksi Halaman (Protected Route):**

    - Halaman admin (`/admin/*`) dilindungi oleh komponen `ProtectedRoute`.
    - Hanya pengguna dengan role 'admin' yang dapat mengaksesnya.
    - Akun Demo Admin: `admin@tokoorange.id` / `admin123`.

2.  **Laporan Penjualan:**
    - Visualisasi atau tabel data penjualan untuk memantau performa toko.

## 6. Link Deploy

Aplikasi ini telah di-deploy dan dapat diakses melalui tautan berikut:

**[https://hahahagi.github.io/Toko-Orange](https://hahahagi.github.io/Toko-Orange)**

## 7. Kesimpulan

Proyek "Toko Orange" ini berhasil mengimplementasikan fitur-fitur esensial dari sebuah aplikasi E-Commerce. Penggunaan React Context API terbukti efektif untuk mengelola state global seperti status login dan isi keranjang belanja tanpa perlu library state management yang kompleks untuk skala aplikasi ini. Struktur komponen yang modular memudahkan pengembangan dan pemeliharaan kode. Aplikasi ini siap digunakan sebagai prototipe dasar toko online yang responsif dan interaktif.
