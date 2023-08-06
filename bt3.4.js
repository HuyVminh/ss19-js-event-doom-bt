let text = document.getElementById("text");
let tt = document.getElementById("tt");
text.addEventListener("mouseover",function() {
    tt.style.display = "block";
})
text.addEventListener("mouseout", function () {
    tt.style.display = "none";
})
