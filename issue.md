# Project Planning: ElysiaJS + Drizzle ORM + MySQL Setup

## Overview
Inisialisasi backend project baru pada repositori ini menggunakan runtime Bun, framework ElysiaJS, Drizzle ORM, dan database MySQL. Dokumen ini berfungsi sebagai panduan instruksi tingkat tinggi (*high-level*) untuk diimplementasikan oleh developer atau AI model.

---

## Tech Stack
- **Runtime & Package Manager**: Bun
- **Web Framework**: ElysiaJS
- **ORM**: Drizzle ORM
- **Database Driver**: MySQL (mysql2)
- **Language**: TypeScript

---

## High-Level Implementation Steps

### 1. Inisialisasi Project
- Inisialisasi project Bun/TypeScript di direktori saat ini.
- Siapkan struktur folder standar (misal: `src/`, `src/db/`, `src/routes/`).
- Konfigurasi `package.json` dengan script standar:
  - `dev`: Menjalankan server dalam mode watch (`bun --watch src/index.ts`).
  - `build`: Build/bundle jika diperlukan.
  - `db:generate` & `db:migrate`: Migrasi schema Drizzle.

### 2. Instalasi Dependency
- Pasang dependency inti:
  - `elysia`
  - `drizzle-orm`
  - `mysql2`
- Pasang dev dependency pendukung:
  - `drizzle-kit`
  - `@types/bun` (atau types pendukung lainnya)

### 3. Konfigurasi Environment & Database
- Buat file `.env.example` dan `.env` untuk konfigurasi koneksi database:
  - `DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`.
- Buat file konfigurasi Drizzle (`drizzle.config.ts`) yang mengarah ke folder schema dan database MySQL.
- Buat modul koneksi database (`src/db/index.ts`) menggunakan `drizzle-orm/mysql2` dan connection pool.

### 4. Definisi Schema Awal
- Buat contoh schema tabel awal di `src/db/schema.ts` (misal: tabel `users` atau health-check metadata) untuk memvalidasi setup Drizzle.

### 5. Setup Entry Point & Server ElysiaJS
- Buat entry point utama di `src/index.ts`:
  - Inisialisasi instance Elysia.
  - Tambahkan endpoint health-check (misal: `GET /health` atau `GET /`).
  - Integrasikan query sederhana ke database untuk memastikan koneksi MySQL dan Drizzle berjalan normal.
  - Dengarkan pada port yang ditentukan (default: 3000).

### 6. Verifikasi & Pengujian
- Jalankan aplikasi menggunakan script `bun run dev`.
- Pastikan endpoint health-check dapat diakses dan merespons sukses (HTTP 200).
- Pastikan koneksi dan query ke MySQL via Drizzle berfungsi tanpa error.

---

## Acceptance Criteria
- [x] Project terinisialisasi bersih di direktori root dengan `package.json` dan `tsconfig.json`.
- [x] ElysiaJS terkonfigurasi dan dapat merespons request HTTP.
- [x] Drizzle ORM terhubung ke MySQL dengan konfigurasi yang rapi.
- [x] File `.env.example` tersedia dengan dokumentasi variabel environment yang jelas.
- [x] Server dapat dijalankan dengan perintah `bun run dev`.
