# Belajar Vibe Coding

Backend project menggunakan **Bun**, **ElysiaJS**, **Drizzle ORM**, dan **MySQL**.

## Tech Stack
- **Runtime**: [Bun](https://bun.com)
- **Framework**: [ElysiaJS](https://elysiajs.com)
- **ORM**: [Drizzle ORM](https://orm.drizzle.team)
- **Database**: MySQL (`mysql2`)

---

## Memulai Project

### 1. Install Dependencies
```bash
bun install
```

### 2. Environment Variables
Salin file `.env.example` ke `.env` dan sesuaikan kredensial database Anda:
```bash
cp .env.example .env
```

### 3. Migrasi Database (Drizzle Kit)
Generate file migrasi SQL:
```bash
bun run db:generate
```

Push/Migrate schema ke database MySQL:
```bash
bun run db:push
# atau
bun run db:migrate
```

### 4. Menjalankan Server
Mode pengembangan (watch mode):
```bash
bun run dev
```

Server akan aktif di `http://localhost:3000`.

---

## Endpoint API
- `GET /`: Sambutan dan status server.
- `GET /health`: Health-check server & status koneksi database.
- `GET /users`: Mengambil daftar data users dari MySQL.
