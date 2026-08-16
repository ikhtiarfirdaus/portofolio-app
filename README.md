# Portfolio — Ikhtiar Sabilla Firdaus

Website portfolio pribadi, dibangun dengan React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:5173

## Build untuk production

```bash
npm run build
npm run preview   # cek hasil build
```

Hasil build ada di folder `dist/` — folder ini yang di-upload/deploy.

## Deploy

Paling gampang pakai Vercel atau Netlify:
- **Vercel**: import repo ini (atau drag-drop folder), framework preset otomatis kedeteksi "Vite", build command `npm run build`, output directory `dist`.
- **Netlify**: sama, build command `npm run build`, publish directory `dist`.

## Struktur

- `src/data/content.ts` — semua konten (nama, pengalaman, proyek, skill) terpusat di sini. Edit file ini untuk update isi tanpa nyentuh komponen.
- `src/components/` — Navbar, Footer, Hero, TechStack, ProjectCard, dll.
- `src/pages/` — Home.tsx dan Projects.tsx.

## Galeri screenshot proyek

Taruh screenshot proyek di:
- `public/stock-management-system/`
- `public/affiliate-management-system/`

Format yang didukung: `.png`, `.jpg`/`.jpeg`, `.webp`, `.gif`. File **otomatis muncul** di kartu proyek (dan bisa diklik untuk lihat ukuran penuh) tanpa perlu edit kode apa pun — cukup taruh file di folder itu, urutannya mengikuti urutan nama file (alfabetis).

Kalau nanti nambah proyek baru dengan galeri sendiri:
1. Buat folder baru di `public/`, misal `public/nama-proyek-baru/`.
2. Tambahkan nama folder itu ke array `SCREENSHOT_FOLDERS` di `vite.config.ts`.
3. Tambahkan `screenshotsDir: "nama-proyek-baru"` ke entri proyek terkait di `src/data/content.ts`.

