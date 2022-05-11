// NUMERIC SORTING ASCENDING
var x = [40, 100, 25, 1, 5, 25, 10];
console.log(x);
console.log(x.sort());
x.sort(function (a, b) {
    return a - b;
});
console.log("asc", x);

// NUMERIC SORTING DESCENDING
var x = [40, 100, 25, 1, 5, 25, 10];
console.log(x);
console.log(x.sort());
x.sort(function (a, b) {
    return b - a;
});
console.log("desc", x);

// LOWEST N HIGHEST ELEMENT
var x = [40, 100, 25, 1, 5, 25, 10];
x.sort(function (a, b) {
    return a - b;
});
console.log(x[0]);
console.log(x[x.length - 1]);
