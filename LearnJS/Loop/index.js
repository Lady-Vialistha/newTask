var n = 5;
var res = "";
for (let a = 0; a < n; a++) {
    for (let b = 1; b < n - a; b++) {
        res += ` `;
    }
    for (let c = 0; c < 2 * a - 1; c++) {
        console.log(a, "a");
        console.log(c, " < ", 2 * a - 1);

        res += "*";
    }

    res += "\n";
}

// for (let a = 0; a < n; a++) {
//     for (let c = 0; c < n - a; c++) {
//         res += " * ";
//     }
//     res += "\n";
// }

// for (let a = 0; a < n; a++) {
//     for (let b = 0; b < a; b++) {
//         res += " * ";
//     }
//     for (let c = 0; c < n - a; c++) {
//         res += "";
//     }

//     res += "\n";
// }

console.log(res);
