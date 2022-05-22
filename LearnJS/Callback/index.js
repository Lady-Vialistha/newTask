// Synchronous Callback
// function halo(nama) {
//     alert(nama);
// }
// function ini callback
// function tampilNama(callback) {
//     const name = prompt("Masukkan nama : ");
//     callback(name);
// }
// tampilNama(halo);

// const mhs = [
//     {
//         nama: "andi",
//         alamat: "bekasi",
//     },
//     {
//         nama: "bubu",
//         alamat: "jakarta",
//     },
//     {
//         nama: "caca",
//         alamat: "bandung",
//     },
//     {
//         nama: "lili",
//         alamat: "depok",
//     },
// ];
// mhs.forEach((m) => {
//     for (let i = 0; i < 10000000; i++) {
//         let date = newDate()
//     }
//     console.log(m.nama);
// });
// end

// Atynchronous Callback Javascript
// AJAX
// function getMahasiswaData(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     };
//     xhr.open("get", url);
//     xhr.send();
// }
// console.log("start");

// getMahasiswaData(
//     "./data.json",
//     (res) => {
//         const mhs = JSON.parse(res);
//         mhs.forEach((a) => console.log(a.nama));
//     },
//     () => {}
// );
// console.log("end");
// end

// Callback
// const notify = () => {
//     console.log("Download complete!");
// };
// const download = (url, callback) => {
//     console.log(`Downloading from ${url}....`);
//     callback();
// };
// const url = "https://brachio.site/download";
// download(url, notify);

// use JQUERY
// AJAX
// console.log("start");
// $.ajax({
//     url: "data.json",
//     success: (res) => {
//         res.forEach((a) => console.log(a.nama));
//         console.log(res);
//     },
//     error: (e) => {
//         console.log(e.responseText);
//     },
// });

// console.log("end");

// secara bersamaan
function p1() {
    console.log("p1");
}
function p2(callback) {
    setTimeout(() => {
        console.log("p2");
        callback();
    }, 2000);
}
function p3() {
    console.log("p3");
}
p1();
p2(p3);
