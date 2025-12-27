# 📘 Smart Notary+ — Manual Book

<div align="center">

**Sistem Rekomendasi Layanan Notaris & PPAT Berbasis Aturan Cerdas**

*Kantor Notaris & PPAT Putri Sugiharsiwi, S.H., M.Kn.*

</div>


---

|   |   |
|---------|------------|
| **Nama** | Kaysha Alvy Nurul Ainiyah |
| **NIM** | 231240001359 |
| **Program Studi** | Teknik Informatika |
| **Semester** | 5 (lima) |
| **Kelas** | 5TIF2 |
| **Institusi** | Universitas Islam Nahdlatul Ulama Jepara |
| **Mata Kuliah** | Sistem Cerdas |
| **Jenis Tugas** | Ujian Akhir Semester (UAS) |

---

## 📖 Tentang Aplikasi

### Deskripsi Singkat

**Smart Notary+** adalah aplikasi web sistem rekomendasi internal yang dirancang untuk membantu **Kantor Notaris & PPAT Putri Sugiharsiwi, S.H., M.Kn.** dalam melakukan pra-analisis kebutuhan klien sebelum konsultasi tatap muka.

### Tujuan Aplikasi

- Membantu menganalisis kebutuhan hukum klien secara otomatis
- Menyusun rekomendasi layanan Notaris & PPAT yang tepat
- Menyediakan daftar dokumen yang diperlukan
- Menginformasikan pihak-pihak yang wajib hadir
- Memberikan catatan hukum dan risiko yang perlu diperhatikan
- Mempercepat proses konsultasi awal dengan klien


---

## 🧠 Mengapa Termasuk Sistem Cerdas

Dalam konteks Mata Kuliah **Sistem Cerdas**, aplikasi Smart Notary+ dikategorikan sebagai sistem cerdas karena memiliki karakteristik berikut:

### 1. Berbasis Pengetahuan (Knowledge-based)

Aturan-aturan layanan Notaris & PPAT dikodekan dalam format **IF-THEN** sehingga aplikasi dapat "menalar" jenis layanan, dokumen, dan pihak yang relevan berdasarkan kombinasi jawaban pengguna.

``` 
```

### 2. Inferensi Otomatis

Mesin inferensi membaca berbagai kondisi input pengguna:
- Kategori kebutuhan
- Detail transaksi
- Status pihak (perorangan/badan hukum)
- Skema pembayaran (tunai/bertahap/KPR)
- Kondisi khusus (objek diagunkan, nama tidak sesuai, dll.)

Kemudian secara otomatis menyusun output rekomendasi tanpa campur tangan manual di setiap kasus.

### 3. Perilaku Adaptif terhadap Input

Hasil rekomendasi akan **berubah dinamis** apabila input diubah. Misalnya:
- Jika objek sedang diagunkan → otomatis menambahkan SKMHT/APHT
- Jika pembeli adalah badan hukum → menambahkan verifikasi legalitas
- Jika pembayaran KPR → menambahkan kehadiran bank

### 4. Pemodelan Pakar Domain

Aturan yang digunakan merepresentasikan **pengetahuan praktis** Notaris & PPAT, sehingga aplikasi bertindak sebagai "asisten cerdas" yang membantu menyaring kebutuhan sebelum pengguna bertemu pakar sebenarnya.

### Kesimpulan

Dengan karakteristik di atas, Smart Notary+ memenuhi ciri dasar **Rule-Based Expert System** yang memanfaatkan pengetahuan terstruktur untuk membantu pengambilan keputusan awal.

---

## ✨ Fitur Utama

### 🎯 Rekomendasi Otomatis
Layanan utama dan tambahan disesuaikan dengan kategori kebutuhan pengguna menggunakan mesin IF-THEN yang cerdas.

### 📋 Dokumen & Kehadiran
Checklist naratif dokumen serta pihak wajib hadir selalu tampil kontekstual sesuai kebutuhan spesifik.

### 📤 Ekspor Hasil
- **Copy Clipboard** — Salin hasil ke clipboard untuk ditempel ke aplikasi lain
- **Share WhatsApp** — Kirim langsung ke WhatsApp klien atau admin
- **Cetak PDF** — Simpan sebagai PDF untuk arsip kantor

### 🔒 Privasi Terjamin
- 100% client-side (tidak ada data dikirim ke server)
- Tidak memerlukan login atau registrasi
- Data hanya disimpan sementara di browser (sessionStorage)

### ⚡ Instant Result
Proses analisis kurang dari 2 menit dengan hasil yang komprehensif.

### 📱 Responsive Design
Dapat diakses dari desktop, tablet, maupun smartphone dengan tampilan yang optimal.

---

## 📁 Struktur Aplikasi

```
cerdas1/
├── index.html      # Struktur halaman utama (HTML5)
├── styles.css      # Styling dan animasi (CSS3)
├── app.js          # Logika aplikasi dan mesin aturan (JavaScript)
└── README.md       # Manual book (dokumen ini)
```

### Penjelasan File

| File | Fungsi |
|------|--------|
| `index.html` | Struktur UI, navigasi, form konsultasi, modal, dan komponen visual | 
| `styles.css` | Desain responsif, animasi, tema warna, dan layout | 
| `app.js` | Mesin inferensi, katalog aturan, validasi form, dan interaksi |
| `Manual Book.md` | Manual Book aplikasi |

---

## 📋 Panduan Penggunaan

### Alur Kerja Lengkap

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   STEP 1    │──▶ │   STEP 2   │───▶│   STEP 3    │──▶│   STEP 4    │
│  Kategori   │    │   Detail    │    │   Status    │    │   Kontak    │
│  Kebutuhan  │    │  Transaksi  │    │   Pihak     │    │  Tambahan   │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                                │
                                                                ▼
                                                        ┌─────────────┐
                                                        │   HASIL     │
                                                        │ Rekomendasi │
                                                        └─────────────┘
```

### Langkah Detail

#### Step 1: Pilih Kategori Kebutuhan
1. Buka halaman **Home** dan klik tombol **Mulai Konsultasi**
2. Pilih salah satu kategori:
   - Peralihan Hak (Tanah/Bangunan)
   - Pendirian/Perubahan Badan Hukum
   - Perjanjian/Pengikatan
   - Waris/Hibah/Wasiat
   - Kredit & Pembebanan

#### Step 2: Lengkapi Detail Transaksi & Objek
1. Pilih **jenis kebutuhan spesifik** dari dropdown
2. Pilih **jenis objek** (Tanah, Bangunan, Apartemen, Kavling)
3. Centang kondisi khusus jika ada:
   - ☐ Objek sedang diagunkan
   - ☐ Objek atas nama orang lain (orang tua/ahli waris)

#### Step 3: Isi Status Pihak & Pembayaran
1. Pilih **tipe pihak**: Perorangan atau Badan Hukum
2. Centang jika ada pihak tidak hadir (butuh surat kuasa)
3. Pilih **skema pembayaran**: Tunai, Bertahap, atau KPR
4. Jika KPR, tentukan kehadiran bank saat tanda tangan

#### Step 4: Tambahkan Informasi Kontak
1. Isi **catatan singkat** jika ada kondisi khusus (opsional)
2. Isi **nama pengaju** (wajib)
3. Isi **nomor HP** (wajib)
4. Isi **email** (opsional)

#### Proses & Hasil
1. Klik **Proses Rekomendasi**
2. Sistem akan menganalisis dan menampilkan:
   - Jenis layanan (Notaris/PPAT)
   - Layanan utama yang direkomendasikan
   - Layanan tambahan yang mungkin diperlukan
   - Daftar dokumen yang harus disiapkan
   - Pihak-pihak yang wajib hadir
   - Catatan hukum dan risiko
   - Flow/alur proses singkat

#### Ekspor Hasil
- **Copy Hasil** — Salin ke clipboard
- **Kirim ke WhatsApp** — Bagikan via WhatsApp
- **Cetak/Simpan PDF** — Print atau simpan sebagai PDF
- **Analisis Lagi** — Mulai konsultasi baru

---

## 📄 Penjelasan Halaman

### 1. Home / Dashboard

Halaman utama yang menampilkan:
- Hero section dengan deskripsi aplikasi
- Statistik fitur (50+ skenario, <2 menit analisis, 100% tanpa login)
- Langkah cepat penggunaan (1→2→3)
- Badge kepercayaan (Resmi, Terpercaya, Cepat)
- Feature cards dengan keunggulan aplikasi
- Informasi kontak kantor

**Tombol Aksi:**
- `Mulai Konsultasi Sekarang` — Memulai wizard konsultasi
- `Lihat Panduan` — Membuka modal panduan singkat

### 2. Form Konsultasi

Form wizard 4 langkah dengan:
- Progress bar visual yang interaktif
- Step indicators dengan animasi
- Validasi input real-time
- Error handling yang informatif

**Komponen Input:**
- Choice cards untuk kategori
- Dropdown untuk detail spesifik
- Chips untuk jenis objek
- Toggle cards untuk kondisi khusus
- Pills untuk tipe pihak dan pembayaran
- Text inputs untuk informasi kontak

### 3. Halaman Hasil

Menampilkan output rekomendasi dalam format:
- **Result Meta** — Badge jenis layanan, waktu analisis, data pemohon
- **Summary Grid** — Ringkasan 4 kotak (Jenis, Utama, Tambahan, Catatan)
- **Sections:**
  - Dokumen yang diperlukan
  - Pihak yang wajib hadir
  - Catatan & Risiko
  - Flow Singkat (langkah-langkah proses)
- **Action Buttons** — Copy, WhatsApp, Print, Ulang

### 4. Halaman Manual Book

Dokumentasi internal aplikasi dengan navigasi sidebar:
- Data Diri Pengembang
- Tentang Aplikasi
- Mengapa Termasuk Sistem Cerdas
- Alur & Cara Pakai
- Penjelasan Tiap Halaman
- Cara Membaca Hasil
- Catatan Hukum & Privasi
- Detail Teknis

### 5. Halaman Informasi

Edukasi seputar layanan Notaris & PPAT:
- Perbedaan Notaris vs PPAT
- Proses Umum AJB
- Dokumen Umum & Definisi
- Pertanyaan Umum (FAQ)
- Panduan Persiapan Sebelum Tanda Tangan

---

## ⚙️ Mesin Aturan IF-THEN

### Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────────┐
│                      INPUT PENGGUNA                             │
│  (Kategori, Detail, Objek, Status, Pembayaran, Kondisi)        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    MESIN INFERENSI                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │ goalRules   │  │ condition   │  │  Library    │            │
│  │ (Aturan     │  │ Effects     │  │ (Dokumen,   │            │
│  │  Dasar)     │  │ (Modifikasi)│  │  Pihak,     │            │
│  │             │  │             │  │  Flow)      │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      OUTPUT REKOMENDASI                         │
│  (Layanan, Dokumen, Pihak Hadir, Catatan, Flow)                │
└─────────────────────────────────────────────────────────────────┘
```

## 📊 Kategori Layanan

### 1. Peralihan Hak (Tanah/Bangunan)

| Kode | Layanan | Jenis |
|------|---------|-------|
| `jual-beli` | Jual beli tanah/bangunan | PPAT |
| `hibah` | Hibah tanah/bangunan | PPAT |
| `waris-tanah` | Pembagian hak waris + balik nama | PPAT |
| `tukar-menukar` | Akta tukar-menukar | PPAT |
| `pecah-sertifikat` | Pemecahan sertifikat | PPAT |
| `gabung-sertifikat` | Penggabungan sertifikat | PPAT |
| `peningkatan-hak` | Peningkatan hak (HGB → SHM) | PPAT |

### 2. Pendirian / Perubahan Badan Hukum

| Kode | Layanan | Jenis |
|------|---------|-------|
| `pendirian-pt` | Mendirikan PT | Notaris |
| `pendirian-cv` | Mendirikan CV | Notaris |
| `pendirian-yayasan` | Mendirikan Yayasan | Notaris |
| `perubahan-ad` | Perubahan Anggaran Dasar PT | Notaris |
| `perubahan-pengurus` | Perubahan pengurus/direksi | Notaris |

### 3. Perjanjian / Pengikatan

| Kode | Layanan | Jenis |
|------|---------|-------|
| `perjanjian-hutang` | Perjanjian hutang-piutang | Notaris |
| `perjanjian-kerjasama` | Perjanjian kerja sama | Notaris |
| `pembagian-harta` | Perjanjian pembagian harta bersama | Notaris |
| `lainnya-perjanjian` | Perjanjian khusus lainnya | Notaris |

### 4. Waris / Hibah / Wasiat

| Kode | Layanan | Jenis |
|------|---------|-------|
| `akta-wasiat` | Akta wasiat | Notaris |
| `hibah` | Akta hibah | PPAT |
| `waris-tanah` | Pembagian waris melibatkan tanah | PPAT |

### 5. Kredit & Pembebanan

| Kode | Layanan | Jenis |
|------|---------|-------|
| `kpr` | Kredit Pemilikan Rumah (KPR) | PPAT |
| `kredit-belum-cair` | Kredit belum cair seluruhnya (SKMHT) | PPAT |
| `fidusia` | Akta fidusia (jaminan bergerak) | Notaris |

---

## 🔧 Detail Teknis

### Spesifikasi Teknis

| Aspek | Detail |
|-------|--------|
| **Jenis Aplikasi** | Single Page Application (SPA) |
| **Arsitektur** | Client-side only, tanpa backend |
| **Database** | Tidak ada (stateless) |
| **Penyimpanan Sementara** | sessionStorage browser |
| **Bahasa Pemrograman** | HTML5, CSS3, JavaScript (ES6+) |
| **Framework** | Vanilla JS (tanpa framework) |
| **Library Eksternal** | Google Fonts (Plus Jakarta Sans) |

### Teknologi yang Digunakan

```
Frontend Stack:
├── HTML5
│   ├── Semantic elements (header, main, section, article)
│   ├── ARIA attributes untuk aksesibilitas
│   └── Form validation attributes
├── CSS3
│   ├── CSS Variables untuk theming
│   ├── Flexbox & CSS Grid untuk layout
│   ├── CSS Animations & Transitions
│   ├── Media Queries untuk responsivitas
│   └── @media print untuk cetak PDF
└── JavaScript (ES6+)
    ├── DOM Manipulation
    ├── Event Handling
    ├── sessionStorage API
    ├── Clipboard API
    ├── IntersectionObserver API
    └── URL schemes (wa.me)
```

### Browser Support

| Browser | Versi Minimum | Status |
|---------|---------------|--------|
| Chrome | 88+ | ✅ Fully Supported |
| Firefox | 85+ | ✅ Fully Supported |
| Edge | 88+ | ✅ Fully Supported |
| Safari | 14+ | ✅ Fully Supported |
| Opera | 74+ | ✅ Fully Supported |
| IE | - | ❌ Not Supported |

### Performa

- **Initial Load**: < 1 detik (tanpa jaringan lambat)
- **Inference Time**: < 50ms per analisis
- **Memory Usage**: ~5-10 MB
- **Offline Support**: Ya (setelah load pertama)

### Animasi & UX

| Fitur | Implementasi |
|-------|--------------|
| Page Transitions | CSS opacity + transform dengan 0.3s ease |
| Hover Effects | CSS transitions dengan cubic-bezier |
| Progress Bar | CSS width transition dengan shimmer effect |
| Toast Notifications | Slide-in animation dengan auto-dismiss |
| Stat Counter | JavaScript counter animation |
| Scroll Reveal | IntersectionObserver API |

---

## ⚖️ Catatan Hukum & Privasi

### Disclaimer Hukum

1. **Bukan Akta Resmi** — Output aplikasi ini bukan merupakan akta, kutipan akta, maupun pendapat hukum yang mengikat secara hukum.

2. **Rekomendasi Awal** — Hasil analisis bersifat rekomendasi awal yang wajib dikonfirmasi dan divalidasi oleh Notaris & PPAT sebelum tindakan lebih lanjut.

3. **Tanggung Jawab** — Setiap keputusan hukum yang diambil berdasarkan output aplikasi ini sepenuhnya menjadi tanggung jawab pengguna.

4. **Verifikasi Profesional** — Selalu konsultasikan dengan Notaris & PPAT yang berwenang untuk validasi final.

### Kebijakan Privasi

1. **Tidak Ada Server** — Aplikasi tidak mengirimkan data ke server manapun. Seluruh proses berjalan di browser pengguna (client-side).

2. **Penyimpanan Lokal** — Data form hanya disimpan sementara di `sessionStorage` browser dan akan terhapus saat tab/browser ditutup.

3. **Tidak Ada Tracking** — Aplikasi tidak menggunakan cookies, analytics, atau tracking script apapun.

4. **Data Sensitif** — Disarankan untuk tidak memasukkan data yang sangat sensitif (seperti nomor sertifikat lengkap dengan NIK) pada kolom catatan.

5. **WhatsApp Share** — Fitur kirim ke WhatsApp menggunakan URL scheme standar dan tidak menyimpan data di aplikasi.


---

