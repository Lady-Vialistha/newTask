// const coba = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("end");
//     });
// }, 2000);
// coba.then(() => console.log(coba));

function cobaPromise() {
    return new Promise((resolve, reject) => {
        const durasi = 6000;
        if (durasi < 5000) {
            setTimeout(() => {
                resolve("selesai");
            }, durasi);
        } else {
            reject("lama");
        }
    });
}
// tanpa aync await, hasilnya async
// const coba = cobaPromise();
// coba.then(() => console.log(coba)).catch(() => console.log(coba));

// terlihat synchronous tapi sebenarnya async
async function cobaAsync() {
    try {
        const coba = await cobaPromise();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }
}
cobaAsync();
