# Portofolio — Ardanu Egitya Ash Shafah

Situs portofolio pribadi yang menampilkan profil, keahlian, dan karya sebagai Mobile Developer & Backend Developer.

🔗 **Live demo:** [elight-dotcom.github.io/nama-repo](https://elight-dotcom.github.io/nama-repo/) — ganti `nama-repo` dengan nama repo ini setelah GitHub Pages aktif

## Tentang

Website statis satu halaman dengan tema biru-kuning, animasi ringan, dan struktur berikut:

- **Hero** — foto besar, status ketersediaan, dan tombol aksi (lihat project / unduh CV / hubungi)
- **Tentang** — narasi profil + kartu info kontak singkat
- **Keahlian** — tag-cloud fleksibel per kategori (Mobile, Backend, Tools), ukuran chip mengikuti level penguasaan
- **Project & Produk** — kartu proyek dengan filter kategori bahasa/teknologi (Flutter, Dart, .NET, C#, REST API)
- **Riwayat Pendidikan** — timeline logo institusi saja, masing-masing ditautkan ke laman resminya
- **Kontak** — kartu ikon untuk Email, WhatsApp, GitHub, LinkedIn, Instagram, dan unduh CV

## Teknologi

- HTML5
- [Tailwind CSS](https://tailwindcss.com/) (via CDN) untuk utility layer
- CSS3 kustom (`style.css`) untuk animasi, blob, chip, dan timeline pendidikan
- Vanilla JavaScript (`script.js`) untuk menu mobile, reveal on scroll, dan filter project
- Deploy via [GitHub Pages](https://pages.github.com/)

## Struktur Proyek

```
.
├── index.html
├── style.css
├── script.js
├── cv.pdf
├── project-image/
│   └── warehaus.png
└── education-logo/
    └── pens.png
```

## Menjalankan Secara Lokal

Karena ini situs statis, cukup buka `index.html` langsung di browser, atau jalankan server lokal sederhana:

```bash
# Python
python3 -m http.server 5500

# atau Node.js (http-server)
npx http-server .
```

Lalu buka `http://localhost:5500` di browser.

## Deployment

Proyek ini di-deploy menggunakan **GitHub Pages**. Setiap push ke branch yang dipilih sebagai sumber Pages akan otomatis memperbarui situs.

- **URL saat ini:** `https://elight-dotcom.github.io/nama-repo/` (atau `https://elight-dotcom.github.io/` jika repo ini diberi nama persis `elight-dotcom.github.io`)
- **Custom domain:** belum digunakan — akan ditambahkan menyusul jika sudah tersedia

### Cara mengaktifkan GitHub Pages

1. Push seluruh isi repo ini ke GitHub (pastikan `index.html` ada di root, atau di folder yang akan dipilih sebagai sumber)
2. Buka repo di GitHub → **Settings** → **Pages**
3. Pada **Build and deployment**, pilih **Source: Deploy from a branch**
4. Pilih branch (misalnya `main`) dan folder (`/root` atau `/docs`), lalu **Save**
5. Tunggu beberapa menit, situs akan tersedia di URL yang muncul di halaman Pages tersebut

## Menambahkan Project / Produk Baru

Buka `index.html`, cari `<div id="project-grid">`, lalu salin satu blok `<article class="project-card">...</article>`. Sesuaikan gambar, judul, deskripsi, link, `data-tags` (dipisah spasi, harus cocok dengan `data-filter` pada tombol di `#filter-bar`), dan `<span class="tag-chip">` di dalamnya. Hapus kartu placeholder bertuliskan "Project berikutnya menyusul" setelah kartu barunya cukup banyak.

## Mengisi Riwayat Pendidikan

Cari `<div class="edu-single">` di `index.html`, lalu ganti `src="education-logo/pens.png"` dengan file logo resmi PENS (taruh di folder `education-logo/`). Link sudah mengarah ke `https://www.pens.ac.id/`.

## Mengisi Instagram

Cari komentar `<!-- Ganti href dengan username Instagram kamu -->` di bagian Kontak pada `index.html`, lalu ganti `href="#"` dengan link profil Instagram.

## Kontak

- Email: [ardanuash@gmail.com](mailto:ardanuash@gmail.com)
- LinkedIn: [Ardanu Egitya Ash Shafah](https://www.linkedin.com/in/ardanu-egitya-ash-shafah-618262323/)
- GitHub: [@Elight-dotcom](https://github.com/Elight-dotcom)

## Lisensi

© 2026 Ardanu Egitya Ash Shafah. Semua hak dilindungi.
