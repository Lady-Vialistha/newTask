// Membuat module didalam core module
const fs = require("fs");

// menulis string file ( sync )

// try{
//     fs.writeFileSync("data/fs.txt", "Hello Lady secara sync");
// }catch(e){
//     console.log('Error!', e)
// }

// menulis file (async)

// fs.writeFile("data/fsAsync.txt", "Hello Lady async", (e) =>
//     console.log("Error", e)
// );

// membaca isi file (sync)

// const data = fs.readFileSync("data/fsAsync.txt", "utf-8");
// console.log(data);

// membaca isi file (sync)

// fs.readFile("data/fsAsync.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
//

// Readline
// untuk menambahkan pertanyaan
// push data ke json

const readline = require("readline");
// proses interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("Siapa nama anda?", (nama) => {
    rl.question("berapa umur anda?", (umur) => {
        const data = {
            nama: nama,
            umur: umur,
        };
        const file = fs.readFileSync("data/contacts.json", "utf-8");
        const fileJson = JSON.parse(file);
        fileJson.push(data);
        console.log(fileJson);
        fs.writeFileSync("data/contacts.json", JSON.stringify(fileJson));
        console.log("Thank you!");
        rl.close();
    });
});
