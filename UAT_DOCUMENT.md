# User Acceptance Testing (UAT) Document

## Project: E-Commerce UAS (Toko Orange)

### 1. Pendahuluan

Dokumen ini berisi rencana pengujian penerimaan pengguna (User Acceptance Testing) untuk aplikasi E-Commerce Toko Orange. Tujuan dari pengujian ini adalah untuk memverifikasi bahwa aplikasi berfungsi sesuai dengan kebutuhan pengguna dan bebas dari kesalahan kritis sebelum peluncuran.

### 2. Lingkungan Pengujian

- **URL Aplikasi**: `http://localhost:5173` (atau port lain sesuai konfigurasi Vite)
- **Browser**: Google Chrome / Microsoft Edge / Mozilla Firefox (Versi Terbaru)
- **Tanggal Pengujian**: [Isi Tanggal]
- **Penguji**: [Isi Nama Penguji]

### 3. Data Pengujian (Credentials)

Berikut adalah akun yang dapat digunakan untuk pengujian:

| Role         | Email                    | Password      | Nama         |
| :----------- | :----------------------- | :------------ | :----------- |
| **Admin**    | `admin@tokoorange.id`    | `admin123`    | Admin Toko   |
| **Customer** | `customer@tokoorange.id` | `customer123` | Budi Santoso |
| **Customer** | `sinta@tokoorange.id`    | `sinta123`    | Sinta Dewi   |

---

### 4. Skenario Pengujian

#### A. Modul Pelanggan (Customer)

| ID Test   | Skenario                         | Langkah-langkah                                                                                                                                                                        | Hasil yang Diharapkan                                                                                          | Status (Pass/Fail) | Catatan |
| :-------- | :------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------- | :----------------- | :------ |
| **TC-01** | **Melihat Daftar Produk**        | 1. Buka halaman utama (`/`).<br>2. Klik menu "Produk" di navigasi.<br>3. Scroll ke bawah untuk melihat daftar produk.                                                                  | Halaman menampilkan daftar produk dengan gambar, nama, dan harga yang sesuai.                                  |                    |         |
| **TC-02** | **Melihat Detail Produk**        | 1. Dari halaman "Produk", klik salah satu kartu produk.<br>2. Perhatikan informasi detail produk.                                                                                      | Halaman berpindah ke detail produk (`/product/:id`). Informasi deskripsi, harga, dan stok tampil dengan benar. |                    |         |
| **TC-03** | **Menambah Produk ke Keranjang** | 1. Buka halaman detail produk.<br>2. Klik tombol "Tambah ke Keranjang".<br>3. Perhatikan ikon keranjang di navbar.                                                                     | Muncul notifikasi/alert sukses. Angka pada ikon keranjang bertambah.                                           |                    |         |
| **TC-04** | **Mengelola Keranjang Belanja**  | 1. Klik ikon keranjang di navbar (`/cart`).<br>2. Ubah jumlah item (tambah/kurang).<br>3. Hapus salah satu item.                                                                       | Total harga terupdate otomatis saat jumlah diubah. Item hilang dari daftar saat dihapus.                       |                    |         |
| **TC-05** | **Login Customer**               | 1. Buka halaman Login Customer (`/customer/login`).<br>2. Masukkan email: `customer@tokoorange.id`<br>3. Masukkan password: `customer123`<br>4. Klik Login.                            | Login berhasil. User diarahkan ke halaman Home/sebelumnya. Navbar menampilkan nama user/logout.                |                    |         |
| **TC-06** | **Checkout (Positif)**           | 1. Pastikan sudah login sebagai customer.<br>2. Masukkan produk ke keranjang.<br>3. Buka halaman Cart dan klik "Checkout".<br>4. Isi Alamat dan No Telepon.<br>5. Klik "Buat Pesanan". | Muncul alert "Terima kasih...". Keranjang menjadi kosong. User diarahkan kembali ke Home.                      |                    |         |
| **TC-07** | **Checkout (Tanpa Login)**       | 1. Logout (jika sedang login).<br>2. Masukkan produk ke keranjang.<br>3. Klik tombol Checkout di halaman Cart.                                                                         | User diarahkan otomatis ke halaman Login Customer (`/customer/login`).                                         |                    |         |

#### B. Modul Admin

| ID Test   | Skenario                            | Langkah-langkah                                                                                                                                 | Hasil yang Diharapkan                                                                                  | Status (Pass/Fail) | Catatan |
| :-------- | :---------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :----------------- | :------ |
| **TC-08** | **Login Admin**                     | 1. Buka halaman Login Admin (`/admin/login`).<br>2. Masukkan email: `admin@tokoorange.id`<br>3. Masukkan password: `admin123`<br>4. Klik Login. | Login berhasil. User diarahkan ke halaman Penjualan (`/admin/penjualan`). Menu Admin muncul di Navbar. |                    |         |
| **TC-09** | **Akses Halaman Admin Tanpa Login** | 1. Pastikan dalam kondisi Logout.<br>2. Coba akses URL `/admin/penjualan` secara langsung di browser.                                           | Akses ditolak. User diarahkan kembali ke halaman Login Admin.                                          |                    |         |
| **TC-10** | **Melihat Data Penjualan**          | 1. Login sebagai Admin.<br>2. Klik menu "Penjualan" di navbar.                                                                                  | Tabel data penjualan tampil. Data sesuai dengan `adminData.js`.                                        |                    |         |
| **TC-11** | **Melihat Laporan**                 | 1. Login sebagai Admin.<br>2. Klik menu "Laporan" di navbar.                                                                                    | Halaman laporan tampil (grafik/ringkasan).                                                             |                    |         |
| **TC-12** | **Logout Admin**                    | 1. Login sebagai Admin.<br>2. Klik tombol "Logout" di navbar.                                                                                   | Logout berhasil. User diarahkan ke halaman Login Admin/Home. Menu Admin hilang dari Navbar.            |                    |         |

### 5. Kesimpulan

- **Total Test Case**: 12
- **Passed**: [Diisi setelah tes]
- **Failed**: [Diisi setelah tes]
- **Rekomendasi**: [Isi jika ada bug atau saran perbaikan]
