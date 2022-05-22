const Angka = [2, 3, 4];
// // find angka 3
// const newAngka = [];
// for (let i = 0; i < Angka.length; i++) {
//     if (Angka[i] >= 3) {
//         newAngka.push(Angka[i]);
//     }
// }
// console.log(newAngka);

// FILTER
// const newAngka = Angka.filter((a) => a >= 3);
// console.log(newAngka);

// MAP
// const newAngka = Angka.map((a) => a * 2);
// console.log(newAngka);

// REDUCE
// const newAngka = Angka.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     (initialValue = 10)
// );
// console.log(newAngka);

// method chaining
// const newAngka = Angka.filter((a) => a >= 5)
//     .map((a) => a * 3)
//     .reduce((acc, curr) => acc + curr);
// console.log(newAngka);

// pengambilan data video
// ambil semua elemen video
// const arr = [];
// const videos = Array.from(document.querySelectorAll("[data-duration]"));
// console.log(videos);

// // pilih hanya yang 'Javascript Lanjutan'
// let pilih = videos
//     .filter((a) => a.outerText.includes("JAVASCRIPT LANJUTAN"))

//     // ambil waktu durasi masing2 video
//     .map((item) => item.dataset.duration)
//     // ubah durasi menjadi int, menit menjadi detik
//     .map((durasi) => {
//         // penulisan waktu 10:20 dihilangkan titik dua menjadi [10, 20]
//         const parts = durasi.split(":").map((part) => parseFloat(part));
//         return parts[0] * 60 + parts[1];
//     })

//     // jumlahkan semua detik
//     .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
// const jam = Math.floor(pilih / 3600);
// pilih = pilih - jam * 3600;
// const menit = Math.floor(pilih / 60);
// const detik = pilih - menit * 60;

// // simpan di DOM
// const pDurasi = document.querySelector(".total-durasi");
// pDurasi.outerText = `${jam} Jam ${menit} Menit ${detik} Detik`;

// const jmlh = videos.filter((a) =>
//     a.outerText.includes("JAVASCRIPT LANJUTAN")
// ).length;
// let pJmlh = document.querySelector(".jumlah-video");
// console.log(detik);
// pJmlh.outerText = `${jmlh} video`;
