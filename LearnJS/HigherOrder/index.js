// function kerjakanTugas(matakuliah, selesai) {
//     console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
//     selesai();
// }
// function selesai() {
//     alert("Selesai");
// }
// kerjakanTugas("web dinamis", selesai);

// HOF : function yang memiliki function lain sebagai parameter
// function yang dijadikan parameter disebut callback

function createGreeter(greeting) {
    return function greet(name) {
        console.log(greeting, name);
    };
}
let english = createGreeter("hello");
english("bobby");
let indonesian = createGreeter("halo");
indonesian("andi");

// let total = 0;
// let count = 1;
// while (count <= 10) {
//     count += 1;
// }
// console.log(total);

// function repeat(n, action) {
//     for (let i = 0; i < n; i++) {
//         action(i);
//     }
// }
// repeat(10, console.log);
// repeat(3, alert);
