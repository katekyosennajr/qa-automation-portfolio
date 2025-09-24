import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',   // semua test case ada di folder tests
  retries: 1,           // kalau gagal, ulang sekali
  use: {
    headless: true,     // true = jalan tanpa buka browser, false kalau mau lihat browsernya
    screenshot: 'only-on-failure', // screenshot otomatis kalau test gagal
    video: 'retain-on-failure'     // simpan video kalau test gagal
  },
  reporter: [
    ['list'],           // tampil di terminal
    ['html', { outputFolder: 'playwright-report' }] // hasil report html
  ]
});