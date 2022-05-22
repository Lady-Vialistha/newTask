// closure
// function yang reusable bisa mendapatkan lexical scoope dari parent function
// mungkin bisa dikatakan closure itu jika memasukan variabel yang ada di parent function
function init() {
    let nama = "sandika";
    // closure
    function tampilNama() {
        console.log(nama);
    }
    return tampilNama;
}
let panggil = init();
panggil();

// function parent() {
//     let input = prompt("nama: ...");
//     function child() {
//         alert(input);
//     }
//     child();
// }
// parent();

// // callback
// function parent(warna) {
//     alert(warna)
//     function child(callback) {
//         const color = prompt('Masukkan warna')
//         callback(color)
//     }
//     child();
// }
// parent();

// HOF
function parent(warna, action) {
    alert(warna);
    action();
}
function action() {
    alert("nice!");
}
parent("ungu", action);

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(
//             `Halo ${nama}, Selamat ${waktu}. semoga harimu memnyenangkan!`
//         );
//     };
// }
// let SelamatPagi = ucapkanSalam("Pagi");
// let SelamatSiang = ucapkanSalam("Siang");
// let SelamatMalam = ucapkanSalam("Malam");
// SelamatMalam("Lady");

// function mobil(merk) {
//     var tahun = "2002";
//     return function (type) {
//         console.log(merk + "" + type + "" + tahun);
//     };
// }
// var sedan = mobil("honda");
// var minivan = mobil("suzuki");
// sedan("civic");
// console.log(sedan());

// function add() {
//     let counter = 10;
//     return function () {
//         return ++counter;
//     };
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// function add() {
//     var counter = 0;
//     return (counter = counter + 2);
//     function add2() {
//         return;
//     }
// }
// add();
// add();
// console.log(add());
