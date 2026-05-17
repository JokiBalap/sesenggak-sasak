# Sesenggak Sasak

Website publik bergaya media komunitas / Instagram-news untuk menampilkan Sesenggak Sasak, berita, foto, like, komentar, edit postingan, dan unggahan gambar.

Data Sesenggak utama tetap dibaca dari Google Sheets melalui endpoint CSV publik. Fitur upload foto, edit, like, dan komentar pada versi GitHub Pages ini berjalan sebagai prototype lokal memakai localStorage browser. Artinya unggahan pengunjung tersimpan di perangkat masing-masing, bukan database publik bersama. Untuk membuat upload benar-benar publik untuk semua orang, perlu backend seperti Firebase, Supabase, atau server Express + storage gambar.

## Struktur Google Sheets

Nama tab sheet harus:

Sesenggak

Header baris pertama:

| id | sesenggak | arti | makna | kategori | sumber | aktif |
|---|---|---|---|---|---|---|
| S001 | Contoh sesenggak | Arti | Makna | nasihat | - | TRUE |

## File penting

- `index.html`: frontend website bergaya Instagram/news dengan upload gambar, edit, like, komentar, pencarian, filter, dan integrasi Google Sheets.
- `appsscript/Code.gs`: arsip kode Google Apps Script API jika suatu saat ingin memakai Apps Script.

## Fitur website

- Beranda feed seperti media sosial.
- Upload foto / berita dari browser.
- Preview gambar sebelum simpan.
- Edit dan hapus postingan lokal hanya oleh admin atau pengunggah asli.
- Like postingan.
- Komentar postingan.
- Nama pengunjung wajib diisi sebelum posting/komentar.
- Badge pembeda ADMIN dan PENGUNJUNG pada postingan/komentar.
- Tombol reset unggahan lokal hanya muncul setelah login admin.
- Tombol bagikan.
- Filter: Semua, Berita, Foto, Sesenggak, Disukai.
- Pencarian konten.
- Trending sidebar.
- Statistik postingan, like, dan jumlah data sheet.

Catatan: fitur upload/like/komentar pada GitHub Pages bersifat lokal per browser. Untuk database publik bersama dibutuhkan backend.

## Admin prototype

Mode admin pada GitHub Pages ini hanya pembeda tampilan lokal, bukan keamanan backend sungguhan. PIN demo bawaan:

```text
K3mal@#$
```

Setelah login admin:

- Nama otomatis menjadi `Admin Sesenggak`.
- Postingan dan komentar diberi badge `ADMIN`.
- Tombol `Reset unggahan lokal` muncul.
- Admin bisa mengedit dan menghapus semua unggahan lokal.

Tanpa login admin:

- Pengguna masuk sebagai `PENGUNJUNG`.
- Nama wajib diisi sebelum posting atau komentar.
- Pengunjung tidak bisa memakai nama `Admin Sesenggak`.
- Pengunjung hanya bisa mengedit atau menghapus unggahan yang dibuat dari browser/perangkatnya sendiri.

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
