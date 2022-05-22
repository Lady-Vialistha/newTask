// var orang = {
//     namaDpn: "Andi",
//     usia: 50,
//     pekerjaan: "polisi",
//     namaFull: function () {
//         return this.namaDpn + "Karno";
//     },
// };
// delete orang.pekerjaan;
// orang.pekerjaan = "guru";
// document.getElementById("text").innerHTML = `
// <p>Nama panjang saya ${orang.namaFull()}</p>
// <p>Biasa dipanggil ${orang.namaDpn}</p>
// <p>Saya : </p>
// <ul>
// <li>Berusia : ${orang.usia}</li>
// <li>pekerjaan : ${orang.pekerjaan}</li>
// </ul>
// `;

// WEB PROGRAMMING UNPAS

// 1. Object Literal
// let mhs = {
//     nama: "andi",
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan`);
//     },
// };

// 2. Funcion Declaration

const methodMhs = {
    makan: function (porsi) {
        this.energi += porsi;
        console.log("selamat makan");
    },
    main: function (jam) {
        this.energi -= jam;
        console.log("selamat main");
    },
};

// function mhs(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMhs.makan

//     // mahasiswa.makan = function (porsi) {
//     //     this.energi += porsi;
//     //     console.log(`halo, ${this.nama}, selamat makan`);
//     // };
//     // mahasiswa.main = function(jam){
//     //     this.energi -= jam;
//     //     console.log(`halo ${this.nama}, selamat main`)
//     // }
//     return mahasiswa;
// }
// let andi = mhs("andi", 10);

// 3. Constructor Function

// keyword new
// function mhs(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`halo, ${this.nama}, selamat makan`);
//     };
//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`halo ${nama}, selamat main`);
//     };
// }
// let andi = new mhs("andi", 10);

// 4. Object.create

// function mhs(nama, energi) {
//     let mahasiswa = Object.create(methodMhs);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMhs.makan;
//     mahasiswa.main = methodMhs.main;

//     return mahasiswa;
// }
// let andi = mhs("andi", 10);

// PROTOTYPE

function mhs(nama, energi) {
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
}
mhs.prototype.makan = function (porsi) {
    this.energi += porsi;
    console.log("selamat makan");
};
let andi = mhs("andi", 10);
