// let a = document.getElementById("btn");
// let doc = { html: 1, }
// document.getElementsByTagName("table")
// document.getElementsByClassName("table")
// document.querySelector("")
// document.querySelectorAll(".class")
// console.log(a)

// let a = document.getElementById("btn");
// console.log(a)
// a.addEventListener("click", () => {
//     a.style.backgroundColor = "pink"
//     a.innerHTML = "btn Clicked"
// })

// let a = document.getElementById("btn");
// console.log(a)
// a.addEventListener("click", func);
// function func() {
//     a.style.backgroundColor = "pink";
//     a.innerHTML = "btn Clicked";
// }

// let a = document.getElementById("btn")
// let b = document.getElementById("btn2")
// console.log(b)
// console.log(a);
// a.addEventListener("click", func);
// function func() {
//     a.style.backgroundColor = "pink";
//     b.style.backgroundColor = "red";
// }

// let a = document.getElementById("btn");
// let originalText = a.innerHTML;
// let originalColor = a.style.backgroundColor;
// let isClicked = false;
// a.addEventListener("click", func);
// function func() {
//     if (!isClicked) {
//         a.style.backgroundColor = "pink";
//         a.innerHTML = "btn Clicked";
//         isClicked = true;
//     } else {
//         a.style.backgroundColor = originalColor;
//         a.innerHTML = originalText;
//         isClicked = false;
//     }
// }

// let a = document.getElementById("btn")
// let b = document.getElementById("btn2")
// let c = document.getElementsByTagName("body")
// console.log(c[0])
// console.log(c);
// let bool = true;
// console.log(b);
// console.log(a);
// a.addEventListener("dblclick", func);
// function func() {
//     if (bool) {
//         a.style.backgroundColor = "pink";
//         bool = false;
//     } else {
//         a.style.backgroundColor = "green";
//         bool = "true";
//     }
//     b.style.backgroundColor = "red";
// }
// console.log(document)

let a = document.querySelector("#btn2")
a.addEventListener("click", funct)
function funct() {
    let a = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let c = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
}

let inp = document.getElementById("inp")
inp.addEventListener("keydown", key)
function key(e) {
    if (e.key == "f") {
        console.log("in function")
        let a = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let c = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor = `rgb(${a},${b},${c})`
    }
}

let form = document.getElementById("form");
let nam = document.getElementById("name")
let age = document.getElementById("age")
console.log(form)
form.addEventListener("submit", submitted)
let c = document.getElementById("cont");
function submitted(e) {
    e.preventDefault();
    let a = nam.value
    let b = age.value
    console.log(a)
    console.log(b);
    c.innerHTML = `<p> name is ${a} </p> 
    <p> age is ${b} </p>`
}