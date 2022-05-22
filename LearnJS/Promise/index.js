// $.ajax({
//     url: "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers",
//     success: (movies) => console.log(movies),
// });
// fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers").then((response) =>
//     response.json().then((response) => console.log(response))
// );

// resolve = true statement
// reject = false statement

// example 1
// let ditepati = false;
// const janji1 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         resolve("janji ditepati");
//     } else {
//         reject("ingkar janji...");
//     }
// });
// janji1
//     .then((response) => console.log("OK " + response))
//     .catch((response) => console.log("Not OK " + response));

// example 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati) {
//         setTimeout(() => {
//             resolve("ditepati setelah bbrp waktu");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject("tidak ditepati setelah bbrp waktu");
//         }, 2000);
//     }
// });

// console.log("start");
// janji2
//     .finally(() => console.log("selesai menunggu"))
//     .then((response) => console.log("OK, " + response))
//     .catch((response) => console.log("Not OK, " + response));
// console.log("end");

// Promise.all()
const film = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                judul: "Avengers",
                sutradara: "Andi",
                pemain: "Bubu",
            },
        ]);
    }, 1000);
});
const cuaca = new Promise((resolve) => {
    setTimeout(() => {
        resolve([
            {
                temp: 26,
                cuaca: "Cerah",
                kota: "Bandung",
            },
        ]);
    }, 500);
});
// Promise.all([film, cuaca]).then((response) => console.log(response));
Promise.all([film, cuaca]).then((response) => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
});
