let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let time;
let idClock = setInterval(() => {
    time = new Date();
    hour.innerHTML = time.getHours();
    minute.innerHTML = time.getMinutes();
    second.innerHTML = time.getSeconds();
}, 1000)

let idxinchao = setInterval(() => {
    console.log("xin chao");
}, 10000)

let idColor = setInterval(() => {
    let color = 100 + (Math.floor(Math.random() * 899))
    document.getElementById("box").style.backgroundColor = `#${color}`
}, 10000)

function stopClock() {
    clearInterval(idClock);
}
function stopXinchao() {
    clearInterval(idxinchao);
}
function stopBack() {
    clearInterval(idColor);
}


// Bai 2 : Dong ho dem nguoc

let hour2 = document.getElementById("hour2");
let minute2 = document.getElementById("minute2");
let second2 = document.getElementById("second2");
let diem = document.getElementById("point");
let giobatdau = 0;
let phutbatdau = 1;
let giaybatdau = 4;
let diembatdau = 0;
hour2.innerHTML = giaybatdau;
minute2.innerHTML = phutbatdau;
second2.innerHTML = giaybatdau;
let id;
id = setInterval(() => {
    if (giaybatdau == 0) {
        giaybatdau = 59;
        phutbatdau--;
    } else {
        giaybatdau--;
    }
    if (giaybatdau == 0 && giobatdau == 0 && phutbatdau == 0) {
        clearInterval(id);
    }
    hour2.innerHTML = giobatdau;
    minute2.innerHTML = phutbatdau;
    second2.innerHTML = giaybatdau;
    diem.innerHTML = diembatdau;
}, 1000)
let size;
document.getElementById("ga").addEventListener("mouseover", () => {
    ga.style.border = `10px solid black`;
})
document.getElementById("ga").addEventListener("mouseout", () => {
    ga.style.border = `1px solid black`;
})
ga.addEventListener("click", () => {
    diembatdau += 10;
    diem.innerHTML = diembatdau;
})
setInterval(() => {
    size = 100 + Math.floor(Math.random() * 100)
    document.getElementById("ga").style.width = `${size}px`;
    document.getElementById("ga").style.height = `${size}px`;
}, 3000)
