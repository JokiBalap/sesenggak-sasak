# Sesenggak Sasak

Website publik sederhana untuk menampilkan kumpulan Sesenggak Sasak.

Data utama disimpan di Google Sheets, dibaca melalui Google Apps Script, lalu ditampilkan oleh frontend statis yang bisa di-hosting gratis di GitHub Pages.

## Struktur Google Sheets

Nama tab sheet harus:

Sesenggak

Header baris pertama:

| id | sesenggak | arti | makna | kategori | sumber | aktif |
|---|---|---|---|---|---|---|
| S001 | Contoh sesenggak | Arti | Makna | nasihat | - | TRUE |

## File penting

- `index.html`: frontend website.
- `appsscript/Code.gs`: kode Google Apps Script API.

## Langkah setup singkat

1. Buat Google Sheets.
2. Buat tab bernama `Sesenggak`.
3. Isi header dan data awal.
4. Salin Spreadsheet ID dari URL Google Sheets.
5. Buka Extensions > Apps Script.
6. Tempel isi `appsscript/Code.gs`.
7. Ganti `GANTI_DENGAN_SPREADSHEET_ID_ANDA` dengan Spreadsheet ID.
8. Deploy sebagai Web App:
   - Execute as: Me
   - Who has access: Anyone
9. Salin Web App URL yang berakhiran `/exec`.
10. Ganti `GANTI_DENGAN_URL_WEB_APP_APPS_SCRIPT_ANDA` di `index.html`.
11. Upload repo ini ke GitHub dan aktifkan GitHub Pages.

## Contoh URL API

Semua data aktif:

```text
https://script.google.com/macros/s/ID_DEPLOYMENT/exec
```

Cari kata:

```text
https://script.google.com/macros/s/ID_DEPLOYMENT/exec?q=hidup
```

Kategori:

```text
https://script.google.com/macros/s/ID_DEPLOYMENT/exec?kategori=nasihat
```

Data acak:

```text
https://script.google.com/macros/s/ID_DEPLOYMENT/exec?random=1
```

## Catatan keamanan

Jangan menyimpan password Google atau GitHub di dalam repo. Untuk GitHub gunakan Personal Access Token atau login resmi GitHub CLI, bukan password akun.
