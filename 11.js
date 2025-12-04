// 1. Data mahasiswa
const mahasiswa = [
    { nama: "Andi", umur: 21, jurusan: "Informatika" },
    { nama: "Budi", umur: 22, jurusan: "Sistem Informasi" }
];

// 2. Simpan ke localStorage
localStorage.setItem("mahasiswa", JSON.stringify(mahasiswa));
console.log("Data mahasiswa disimpan di localStorage!");

// 3. Ambil dari localStorage
const jsonString = localStorage.getItem("mahasiswa");

// 4. Cek dan tampilkan
if (jsonString) {
    const mahasiswaList = JSON.parse(jsonString);

    console.log("Daftar Mahasiswa:");
    mahasiswaList.forEach(mhs => {
        console.log(${mhs.nama} - ${mhs.jurusan});
    });
} else {
    console.log("Tidak ada data mahasiswa di localStorage!");
}
