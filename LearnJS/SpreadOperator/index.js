// spread operator untuk memecah sebuah array menjadi satu per satu elementnya

// Menggabungkan 2 array

// const mhs = ["andi", "bubu", "caca"];
// const dosen = ["bagas", "fajar", "bila"];
// const orang = mhs.concat(dosen);
// console.log(orang);

// Meng-copy array
// const mhs = ["andi", "bubu", "caca"];
// mhs ikut berubah yang seharusnya berubah hanya mhs1
// const mhs1 = mhs;
// mhs1[0] = "fajar";

// yang benar
// const mhs1 = [...mhs];
// mhs1[0] = "fajar";
// console.log(mhs1);

// const liMhs = document.querySelectorAll("li");
// console.log(liMhs[0].outerText);
// const arrMhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//     arrMhs.push(liMhs[i].outerText);
// }
// console.log(arrMhs);

// using map
// const mhs = [...liMhs].map((a) => a.textContent);
// console.log(mhs);

// const liMhs = document.querySelectorAll("li")
// const nama = document.querySelector(".nama");
// const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join(" ");
// nama.innerHTML = huruf;

// const num = [1, 2, 3, 4, 5];
// function checkLength() {
//     const numbers = [...num];
//     console.log(numbers.length);
// }
// checkLength();

// rest parameter

// peletakkannya harus di akhir parameter
// mengambil semua sisa hingga tak terbatas
// function number(a, b, ...myNumbers) {
//     // return `a: ${a}, b: ${b}, myNumbers: ${myNumbers}`;
//     // or
//     return Array.from(arguments);
// }
// console.log(number(1, 2, 3, 4, 5));

// for of
// function jumlahkan(...angka) {
//     let total = 0;
//     for (const a of angka) {
//         total += a;
//     }
//     return total;
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// destructuring

// const team = ["andi", "bubu", "caca", "lala"];
// const [ketua, wakil, ...anggota] = team;
// console.log(team[0]);

// filtering

function filterBy(type, ...values) {
    return values.filter((v) => typeof v === type);
}
console.log(filterBy("number", 1, 2, false, "andi", 10, 3, true, "bubu"));
