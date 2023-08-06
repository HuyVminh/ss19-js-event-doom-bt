//Bài 1:
let hideBtn = document.getElementById("hideBtn");
let showBtn = document.getElementById("showBtn");
let p = document.getElementById("text")
hideBtn.addEventListener("click", function () {
    console.log("n di");
    p.style.display = "none";
})
showBtn.addEventListener("click", function () {
    console.log("n di");
    p.style.display = "block";
})
