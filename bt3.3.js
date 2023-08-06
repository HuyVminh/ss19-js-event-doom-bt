let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box = document.getElementById("box");
box1.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red";
})
box2.addEventListener("mouseover", function () {
    box.style.backgroundColor = "blue";
})
box3.addEventListener("mouseover", function () {
    box.style.backgroundColor = "yellow";
})
box1.addEventListener("mouseout", function () {
    box.style.backgroundColor = "white";
})
box2.addEventListener("mouseout", function () {
    box.style.backgroundColor = "white";
})
box3.addEventListener("mouseout", function () {
    box.style.backgroundColor = "white";
})