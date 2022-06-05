import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    addDoc,
    updateDoc,
    deleteDoc,
    deleteField,
} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCOOOZqVwSSagQ2caUiwJoC4Raev1AXzhk",
    authDomain: "todolist-141aa.firebaseapp.com",
    databaseURL: "https://todolist-141aa-default-rtdb.firebaseio.com",
    projectId: "todolist-141aa",
    storageBucket: "todolist-141aa.appspot.com",
    messagingSenderId: "239377588279",
    appId: "1:239377588279:web:2f2def875dd202b1da9fb2",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

let inputId = document.getElementById("Id");
let inputName = document.getElementById("Name");
let buttonSubmit = document.getElementById("submit");
let buttonGet = document.getElementById("get");
let buttonDelete = document.getElementById("delete");
let buttonUpdate = document.getElementById("update");

// ADDING DATA NORMALLY
// async function addDataList(){
//     var ref = collection(db, 'TheList')
//     const docRef = await addDoc(
//         ref, {
//             nameOfName : inputName.value,
//             nameOfID : inputId.value,
//         }
//     )
//     .then(()=>{
//         alert('data berhasil ditambahkan')
//     })
//     .catch(error => {
//         alert('error' + error)
//     })
// }

let arr = [];

// ADDING DATA BY ID ( UNIQUE )
async function addDataCostum(e) {
    e.preventDefault();
    var ref = doc(db, "TheList", inputId.value);
    await setDoc(ref, {
        nameOfName: inputName.value,
        nameOfID: inputId.value,
    });
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        alert("berhasil");
        let value = (inputName.value = docSnap.data().nameOfName);
        arr.push(value);
        let createHtml = arr.map((item) => {
            return `<li class="list-item" >${item} </li>`;
        });
        document.getElementById("list").innerHTML = createHtml;
        inputId.value = "";
        inputName.value = "";
    } else {
        alert("No Data");
    }
}

// GETTING DATA

// async function getDataList(e) {
//     e.preventDefault();
//     var ref = doc(db, "TheList", inputId.value);
//     const docSnap = await getDoc(ref);
//     if (docSnap.exists()) {
//         inputName.value = docSnap.data().nameOfName;
//     } else {
//         alert("No Data");
//         inputId.value = "";
//         inputName.value = "";
//     }
// }

// UPDATE DATA

// async function updateDataList(e) {
//     e.preventDefault();
//     var ref = doc(db, "TheList", inputId.value);
//     await updateDoc(ref, {
//         nameOfName: inputName.value,
//         nameOfID: inputId.value,
//     })
//         .then(() => {
//             alert("berhasil");
//             inputId.value = "";
//             inputName.value = "";
//         })
//         .catch((error) => {
//             alert("error" + error);
//         });
// }

// DELETE DATA

// async function deleteDataList(e) {
//     e.preventDefault();
//     var ref = doc(db, "TheList", inputId.value);
//     const docSnap = await getDoc(ref);
//     if (!docSnap.exists()) {
//         alert("data does not exist");
//     }
//     await deleteDoc(ref)
//         .then(() => {
//             alert("berhasil");
//             inputId.value = "";
//             inputName.value = "";
//         })
//         .catch((error) => {
//             alert("error" + error);
//         });
// }

// var arr = [];
// var docRef = collection(db, "TheList");
// var getRef = getDoc(docRef);
// async function handleSubmit(e) {
//     e.preventDefault();
//     if (inputId !== "") {
//         await addDoc(
//             collection(db, "TheList", inputId.value),
//             await setDoc({
//                 nameOfID: inputId,
//                 nameOfName: inputName,
//             })
//         )
//             .then(() => {
//                 alert("Add data successfully!");
//                 let value = (inputName.value = getRef.data().nameOfName);
//                 arr.push(value);
//                 let createHtml = arr.map((item) => {
//                     return `<li>${item}</li>`;
//                 });
//                 document.getElementById("list").innerHTML = createHtml;
//                 inputId.value = "";
//                 inputName.value = "";
//             })
//             .catch((e) => {
//                 alert("You got an error!", e);
//             });
//     } else {
//         alert("Empty data!");
//     }
// }
buttonSubmit.addEventListener("click", addDataCostum);
// buttonGet.addEventListener("click", getDataList);
// buttonUpdate.addEventListener("click", updateDataList);
// buttonDelete.addEventListener("click", deleteDataList);
