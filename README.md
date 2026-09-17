# Hỗ trợ vay tín chấp mở thẻ tín dụng Vpbank

Landing page Next.js (App Router) — tư vấn hồ sơ vay tín chấp và mở thẻ tín dụng VPBank. **Không phải website chính thức của VPBank.**

English: High-SEO, mobile-first lead site. Form → Google Sheet + email.

## Run locally / Chạy local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Google Sheet + email

1. Create a Google Cloud service account, enable Sheets API, download JSON key.
2. Create a Google Sheet; share it with `GOOGLE_CLIENT_EMAIL` (Editor).
3. Put `GOOGLE_SHEET_ID`, `GOOGLE_CLIENT_EMAIL`, `GOOGLE_PRIVATE_KEY` in `.env.local`.
4. Set `NOTIFY_EMAIL` and either `RESEND_API_KEY` or SMTP vars.

Suggested columns: Time, Name, Email, Phone, Nationality, Product, Amount, Income.

If Sheet/email are not configured, the form still succeeds and the lead is logged in the server console (for local testing).

## Contact placeholders

Edit `src/lib/site.ts`: `phoneDisplay`, `phoneTel`, `email`, `address`, `zaloUrl`, `NEXT_PUBLIC_SITE_URL`.

## Build

```bash
npm run build
npm start
```
