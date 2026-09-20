# Portofolio — Ardanu Egitya Ash Shafah

Situs portofolio pribadi yang menampilkan profil, keahlian, dan karya sebagai Mobile Developer & Backend Developer.

🔗 **Live demo:** [portofolio-phi-sooty-74.vercel.app](https://portofolio-phi-sooty-74.vercel.app/)

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
- Deploy otomatis via [Vercel](https://vercel.com/)

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
    ├── logo-1.png
    ├── logo-2.png
    └── logo-3.png
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

Proyek ini di-deploy menggunakan **Vercel**. Setiap push ke branch utama akan otomatis men-trigger deployment baru.

- **URL saat ini:** `portofolio-phi-sooty-74.vercel.app`
- **Custom domain:** belum digunakan — akan ditambahkan menyusul jika sudah tersedia

### Cara deploy sendiri

1. Fork/clone repo ini
2. Import repo ke [Vercel](https://vercel.com/new)
3. Pilih framework preset **Other** (karena static HTML)
4. Deploy

## Menambahkan Project / Produk Baru

Buka `index.html`, cari `<div id="project-grid">`, lalu salin satu blok `<article class="project-card">...</article>`. Sesuaikan gambar, judul, deskripsi, link, `data-tags` (dipisah spasi, harus cocok dengan `data-filter` pada tombol di `#filter-bar`), dan `<span class="tag-chip">` di dalamnya. Hapus kartu placeholder bertuliskan "Project berikutnya menyusul" setelah kartu barunya cukup banyak.

## Mengisi Riwayat Pendidikan

Cari `<ol class="edu-timeline">` di `index.html`. Untuk tiap `<li class="edu-item">`:

1. Ganti `href="#"` dengan tautan resmi institusi.
2. Ganti `src` gambar dengan file logo di folder `education-logo/`.
3. Ganti teks `title`, `alt`, dan `<p class="edu-caption">` dengan nama/jenjang institusi.

## Mengisi Instagram

Cari komentar `<!-- Ganti href dengan username Instagram kamu -->` di bagian Kontak pada `index.html`, lalu ganti `href="#"` dengan link profil Instagram.

## Kontak

- Email: [ardanuash@gmail.com](mailto:ardanuash@gmail.com)
- LinkedIn: [Ardanu Egitya Ash Shafah](https://www.linkedin.com/in/ardanu-egitya-ash-shafah-618262323/)
- GitHub: [@Elight-dotcom](https://github.com/Elight-dotcom)

## Lisensi

© 2026 Ardanu Egitya Ash Shafah. Semua hak dilindungi.
