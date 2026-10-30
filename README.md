# Contoh company profile — PT. UNGKUL JAYA RAYA

Buka `index.html` di browser. Tidak memerlukan instalasi atau proses build. Simpan `index.html`, `styles.css`, dan `script.js` dalam folder yang sama.

Pilihan bahasa Indonesia / English tersedia di header. Terjemahan mencakup konten, navigasi, metadata, label aksesibilitas, dan pesan WhatsApp. Pilihan disimpan di browser jika penyimpanan lokal tersedia; bahasa awal adalah Indonesia.

Galeri menampilkan lima foto dari arsip WhatsApp yang diberikan, disimpan di `assets/gallery/`. Sertakan folder `assets` saat menyalin atau memublikasikan situs. Foto dapat diklik untuk melihat ukuran penuh dan ditutup dengan tombol tutup atau Escape.

Desain responsif berbahasa Indonesia dengan profil perusahaan, produk kunyit, jahe, serai, lada hitam/putih, dan arang kayu keras, pendekatan kualitas, kerja sama ekspor, dan kontak. Tautan WhatsApp menggunakan nomor internasional `6281330105014`. Tautan peta menunjukkan wilayah Bojonegoro, bukan alamat kantor yang telah diverifikasi. Gambar utama dan lima gambar produk di `assets/products/` merupakan contoh visual realistis yang dibuat dengan AI, dioptimalkan ke WebP; prompt lengkap tersimpan di `assets/products/generation.json`. Gambar ini bukan dokumentasi stok aktual perusahaan; logo UJR adalah konsep sementara. Font Google membutuhkan internet, dengan font lokal sebagai cadangan.

## Deploy dengan Docker

Jalankan perintah berikut dari folder proyek yang berisi `Dockerfile`:

```sh
docker build -t ungkul-jaya-raya .
docker run -d --name ungkul-jaya-raya --restart unless-stopped -p 8080:80 ungkul-jaya-raya
```

Buka `http://localhost:8080` atau `http://IP-VPS:8080`. Image menggunakan Nginx untuk menyajikan HTML, CSS, JavaScript, dan seluruh foto di `assets/`. Tidak memerlukan Node.js atau database di server.

Alternatif menggunakan Docker Compose:

```sh
docker compose up -d --build
```

Port bawaan adalah `8080`. Untuk menggunakan port HTTP standar di VPS, buat file `.env` berisi `PORT=80`, lalu jalankan perintah Compose di atas. Pastikan port tersebut tersedia dan diizinkan oleh firewall VPS. Untuk domain dengan HTTPS, arahkan reverse proxy seperti Caddy atau Nginx Proxy Manager ke layanan ini; container menyajikan HTTP pada port `80`.

Setelah mengubah konten, jalankan `docker compose up -d --build` untuk memperbarui situs. Gunakan `docker compose logs -f` untuk melihat log dan `docker compose down` untuk menghentikan layanan. Pilih salah satu cara menjalankan container agar port tidak bentrok.

## Saran sebelum publikasi

1. Tambahkan alamat kantor/gudang lengkap dan titik peta yang benar. Verifikasi nomor WhatsApp serta email aktif.
2. Ganti ilustrasi dengan foto asli produk, proses sortasi, pengemasan, dan gudang. Gunakan logo resmi.
3. Tetapkan spesifikasi masing-masing produk: bentuk kunyit dan jahe, kondisi serai, jenis lada, jenis kayu untuk arang, ukuran, toleransi cacat, kadar air, grade, dan metode pemeriksaan. Cantumkan hasil uji jika tersedia.
4. Lengkapi kapasitas pasokan, stok, minimum order, pilihan kemasan, waktu persiapan, dan skema harga yang telah disetujui.
5. Verifikasi kesiapan ekspor dengan dokumen dan kemampuan operasional aktual; cantumkan sertifikasi, legalitas, negara tujuan, atau pengalaman ekspor hanya jika ada bukti. Draf tidak mengklaim sertifikasi ataupun rekam jejak yang belum diberikan.
6. Siapkan versi bahasa Inggris, lembar spesifikasi PDF, serta ketentuan transaksi/pengiriman bagi calon pembeli internasional.
7. Untuk situs produksi, gunakan domain resmi, HTTPS, dan metadata berbagi sosial dengan foto resmi. Pertimbangkan font yang disimpan lokal. Jika menambahkan formulir atau analitik, siapkan pemberitahuan privasi sesuai data yang benar-benar dikumpulkan.

Konten spesifikasi dan kesiapan pengiriman pada contoh ini membutuhkan konfirmasi perusahaan sebelum dipublikasikan.

Klik kartu produk atau tombol spesifikasi untuk membuka dialog pengelompokan ukuran, kualitas, dan parameter pemeriksaan mutu. Pengelompokan ini adalah pilihan untuk diskusi pengadaan, bukan klaim grade resmi atau jaminan stok. Batas numerik ukuran, toleransi, dan hasil uji ditetapkan sesuai kesepakatan pesanan. Konten tersedia dalam bahasa Indonesia dan Inggris.
