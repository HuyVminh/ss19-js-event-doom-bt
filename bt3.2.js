let btn = document.getElementById("btn");
let exit = document.getElementById("exit");
let box = document.getElementById("box");
let body = document.querySelector("body");
btn.addEventListener("click", function () {
    box.style.display = "block";
    body.style.backgroundColor = "grey";
})
exit.addEventListener("click", function () {
    box.style.display = "none";
    body.style.backgroundColor = "white";
})