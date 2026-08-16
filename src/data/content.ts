export const profile = {
  name: "Ikhtiar Sabilla Firdaus",
  title: "Full Stack Development",
  subtitle: "Admin Consignment & Internal System Developer",
  location: "Tangerang Selatan, Indonesia",
  email: "ikhtiarsabillafirdaus@gmail.com",
  phone: "087711997916",
  github: "https://github.com/ikhtiarfirdaus",
  summary:
    "Profesional operasional dan pengembangan sistem dengan pengalaman kuat dalam manajemen inventory ritel, analisis data penjualan, serta pengembangan aplikasi web internal. Terbukti mahir mengelola administrasi konsinyasi, menyusun laporan bisnis, sekaligus merancang dan membangun sistem digital untuk mengotomatisasi sinkronisasi data dan memangkas waktu pelaporan manual dari jam menjadi menit.",
  heroHighlight:
    "Membangun sistem internal — dari lantai gudang sampai dashboard analitik — yang memangkas kerja manual dari jam jadi menit.",
};

export const stats = [
  { label: "Jam → menit", value: "waktu pelaporan dipangkas", detail: "otomatisasi sinkronisasi data" },
  { label: "Multi-toko", value: "pelacakan stok real-time", detail: "adjustments, sales & restock" },
  { label: "2 marketplace", value: "Shopee & TikTok tersinkron", detail: "data synchronization hub" },
];

export const techStack = {
  backend: ["Go", "REST API", "Gin", "GORM"],
  frontend: ["React", "Vite", "Next.js", "TypeScript"],
  database: ["MySQL", "SQL Server"],
  operasional: ["Manajemen Inventory", "Administrasi Konsinyasi", "Analisis Penjualan", "Reporting"],
};

export const experience = [
  {
    company: "Broodis",
    location: "Tangerang Selatan, Indonesia",
    role: "Admin Consignment & Internal System Developer",
    period: "21 Juli 2025 — Sekarang",
    points: [
      {
        title: "Manajemen Operasional & Administrasi Ritel",
        detail:
          "Mengelola administrasi dan strategi tindak lanjut konsinyasi untuk lokasi mitra utama, memastikan ketersediaan stok optimal, serta mendukung kelancaran operasional penjualan di lapangan.",
      },
      {
        title: "Analisis Data & Forecasting",
        detail:
          "Menganalisis data penjualan ritel untuk menyusun laporan performa kuartalan (Q4 2025 vs Q1 2026) dan menyiapkan perkiraan geografis serta demografi untuk ekspansi toko seperti di Pakuwon Mall Surabaya.",
      },
      {
        title: "Pengembangan Sistem Manajemen Stok",
        detail:
          "Membangun platform multi-toko untuk pelacakan inventaris real-time, penyesuaian stok (adjustments), riwayat transaksi (Sales & Restock), dan manajemen promo di berbagai cabang.",
      },
      {
        title: "Pengembangan Sistem Manajemen Afiliasi",
        detail:
          "Mengembangkan dashboard analitik yang dilengkapi pusat sinkronisasi data massal (Data Synchronization Hub), perbandingan marketplace, metrik funnel, analisis kohort, dan konfigurasi tier komisi.",
      },
      {
        title: "Otomatisasi & Efisiensi Kerja",
        detail:
          "Mengintegrasikan solusi perangkat lunak kustom untuk mengotomatisasi alur kerja data yang kompleks, berhasil memangkas waktu entri data dan pelaporan manual dari jam menjadi menit.",
      },
    ],
  },
];

export const projects = [
  {
    slug: "stock-management-system",
    screenshotsDir: "stock-management-system",
    name: "Stock Management System",
    tagline: "Pelacakan inventaris multi-toko secara real-time",
    description:
      "Platform manajemen stok untuk beberapa cabang toko sekaligus — pelacakan inventaris real-time, penyesuaian stok (adjustments), riwayat transaksi Sales & Restock, dan manajemen promo per cabang.",
    stack: ["React", "TypeScript", "Node.js", "MySQL"],
    highlights: [
      "Sinkronisasi stok lintas cabang tanpa selisih data",
      "Riwayat transaksi Sales & Restock tercatat otomatis",
      "Manajemen promo per cabang dari satu dashboard",
    ],
  },
  {
    slug: "affiliate-analytics-dashboard",
    screenshotsDir: "affiliate-management-system",
    name: "Affiliate Analytics Dashboard",
    tagline: "Data Synchronization Hub untuk Shopee & TikTok",
    description:
      "Dashboard analitik afiliasi yang dilengkapi pusat sinkronisasi data massal, perbandingan performa marketplace, metrik funnel, analisis kohort, hingga konfigurasi tier komisi.",
    stack: ["Next.js", "Go", "MySQL"],
    highlights: [
      "Import massal data Shopee & TikTok (orders, live, video)",
      "Perbandingan marketplace & metrik funnel dalam satu tampilan",
      "Konfigurasi tier komisi per periode (weekly/monthly/quarterly)",
    ],
  },
];

export const education = {
  school: "SMKN 1 Tangerang Selatan",
  program: "Teknik Elektronika Industri",
  period: "2021 — 2024",
};
