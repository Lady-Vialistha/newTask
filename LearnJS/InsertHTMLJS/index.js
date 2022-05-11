// RADIO
function fungsiRadio(x) {
    document.getElementById("button").value = x;
}
function fungsiButton(y) {
    let inputName = document.getElementById("form").elements[0].value;
    let inputAge = document.getElementById("form").elements[1].value;
    let jenis = (document.getElementById("button").value = y);
    document.getElementById("result").innerHTML = `
    <p>Name : ${inputName}</p>
    <p>Age : ${inputAge}</p>
    <p>Jenis : ${jenis}</p>
    `;
}

// KUADRAT
// function fungsiButton() {
//     let input = document.getElementById("form").elements[0].value;
//     var res = Math.pow(input, 2);
//     document.getElementById("result").innerHTML = "Hasil" + input + "=" + res;
// }

// KARAKTER
// var valueInput1 = "";
// var valueInput2 = "";
// function buttonResult() {
//     let splitValue = valueInput1.split("");
//     console.log(splitValue, "valuenya");
//     let filterValue = splitValue.filter((item) => item === valueInput2);
//     console.log(filterValue.length);
// }

// function inputValue(value) {
//     valueInput1 = value;
// }
// function inputValue2(value) {
//     valueInput2 = value;
// }
