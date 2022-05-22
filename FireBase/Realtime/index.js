// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    child,
    update,
    remove,
    get,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz86SgbPJBclaITYh0_S1goFt9GiasZ80",
    authDomain: "todolist-realtime-9ac45.firebaseapp.com",
    projectId: "todolist-realtime-9ac45",
    storageBucket: "todolist-realtime-9ac45.appspot.com",
    messagingSenderId: "592518504987",
    appId: "1:592518504987:web:e665e58d702a81d86ccebe",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getDatabase();

var id = document.getElementById("Id");
var name = document.getElementById("Name");
var gender = document.getElementById("Gender");
var inputGender = document.getElementById("inputGender");

var submitButton = document.getElementById("Submit");
var getButton = document.getElementById("Get");
var updateButton = document.getElementById("Update");
var deleteButton = document.getElementById("Delete");

let arr = [];

function inputG(e) {
    const valueGender = e.target[e.target.selectedIndex].text;
    inputGender.value = valueGender;
    console.log("masuk", valueGender);
}

function addData(e) {
    e.preventDefault();
    const getValue = set(ref(db, "theListArr/" + id.value), {
        nameOfId: id.value,
        nameOfName: name.value,
        nameOfGender: gender.value,
    })
        .then(() => {
            alert("berhasil");
            id.value = "";
            name.value = "";
        })
        .catch((e) => {
            alert("error" + e);
        });
}
function getData(e) {
    e.preventDefault();
    const dbRef = ref(db);
    get(child(dbRef, "theListArr/" + id.value))
        .then((snapshot) => {
            if (snapshot.exists()) {
                name.value = snapshot.val().nameOfName;
            } else {
                alert("No Data");
            }
        })
        .catch((e) => {
            alert("error" + e);
        });
}

submitButton.addEventListener("click", addData);
getButton.addEventListener("click", getData);
gender.addEventListener("click", inputG);
