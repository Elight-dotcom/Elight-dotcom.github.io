# Portofolio — Ardanu Egitya Ash Shafah

Situs portofolio pribadi yang menampilkan profil, keahlian, dan karya sebagai Mobile Developer & Backend Developer.

🔗 **Live demo:** [portofolio-phi-sooty-74.vercel.app](https://portofolio-phi-sooty-74.vercel.app/)

## Tentang

Website statis satu halaman yang berisi:

- **Hero** — perkenalan singkat dan tombol aksi (lihat karya / unduh CV)
- **Tentang** — profil, info kontak, dan tautan sosial (LinkedIn, GitHub)
- **Keahlian** — Mobile (Flutter, Dart, Android), Backend (.NET/C#, REST API, SQL), Tools (Git, Postman, Figma)
- **Karya** — daftar proyek yang pernah dikerjakan
- **Kontak** — cara menghubungi

## Teknologi

- HTML5
- CSS3 (`style.css`)
- Vanilla JavaScript (bila ada)
- Deploy otomatis via [Vercel](https://vercel.com/)

## Struktur Proyek

```
.
├── index.html
├── style.css
├── cv.pdf
└── project-image/
    └── warehaus.png
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

## Menambahkan Karya Baru

Buka `index.html`, cari bagian `<div class="portfolio-grid">`, lalu salin satu blok `<article class="project-card">...</article>` dan sesuaikan gambar, judul, kategori, deskripsi, dan link-nya.

## Kontak

- Email: [ardanuash@gmail.com](mailto:ardanuash@gmail.com)
- LinkedIn: [Ardanu Egitya Ash Shafah](https://www.linkedin.com/in/ardanu-egitya-ash-shafah-618262323/)
- GitHub: [@Elight-dotcom](https://github.com/Elight-dotcom)

## Lisensi

© 2026 Ardanu Egitya Ash Shafah. Semua hak dilindungi.