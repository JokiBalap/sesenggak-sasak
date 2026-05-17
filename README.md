# Sesenggak Sasak

Website publik sederhana untuk menampilkan kumpulan Sesenggak Sasak.

Data utama disimpan di Google Sheets dan dibaca langsung oleh frontend statis melalui endpoint CSV publik Google Sheets. Cara ini tidak membutuhkan Google Apps Script, cocok jika OAuth/otorisasi Apps Script diblokir.

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

1. Buka Google Sheets:
   `https://docs.google.com/spreadsheets/d/1Ax3bgECT91TG6f4xSsTHOlJdRgMeATjZxUsTSsbIfPQ/edit`
2. Pastikan tab bernama `Sesenggak`.
3. Isi header dan data awal.
4. Pastikan kolom `aktif` berisi `TRUE` untuk data yang ingin tampil.
5. Klik Share / Bagikan.
6. Ubah akses menjadi `Anyone with the link` / `Siapa saja yang memiliki link`.
7. Role harus `Viewer` / `Pelihat`.
8. Website GitHub Pages akan membaca data langsung dari sheet tersebut.

## URL Google Sheets yang dipakai frontend

```text
https://docs.google.com/spreadsheets/d/1Ax3bgECT91TG6f4xSsTHOlJdRgMeATjZxUsTSsbIfPQ/gviz/tq?tqx=out:csv&sheet=Sesenggak
```

Jika data tidak muncul di website, penyebab paling umum:

- Sheet belum dibagikan sebagai `Anyone with the link`.
- Nama tab bukan persis `Sesenggak`.
- Header kolom tidak sesuai.
- Kolom `aktif` belum bernilai `TRUE`.

## Catatan keamanan

Jangan menyimpan password Google atau GitHub di dalam repo. Untuk GitHub gunakan Personal Access Token atau login resmi GitHub CLI, bukan password akun.
