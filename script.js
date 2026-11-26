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

let a = document.getElementById("btn")
let b = document.getElementById("btn2")
let c = document.getElementsByTagName("body")
console.log(c[0])
console.log(c);
let bool = true;
console.log(b);
console.log(a);
a.addEventListener("dblclick", func);
function func() {
    if (bool) {
        a.style.backgroundColor = "pink";
        bool = false;
    } else {
        a.style.backgroundColor = "green";
        bool = "true";
    }
    b.style.backgroundColor = "red";
}
console.log(document)