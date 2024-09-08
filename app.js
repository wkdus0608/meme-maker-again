const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const line_Width = document.getElementById("line-width");
const color = document.getElementById("color");
const colorOptions = Array.from(document.getElementsByClassName("color-options"));
const fillBtn = document.getElementById("fillBtn");
const eraserBtn = document.getElementById("eraserBtn");
const cleanAll = document.getElementById("cleanAll");

canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 5;

isPainting = false;
isFilling = false;

function drawing(event) {
    if (isPainting) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke();
    }
}
function startDrawing() {
    isPainting = true;
}
function stopDrawing() {
    isPainting = false;
    ctx.beginPath();
}
function lineWidthChange(event) {
    ctx.lineWidth = event.target.value;
}
function onColorChange(event) {
    ctx.strokeStyle = event.target.value;
}
function onColorOptionsChange(event) {
    ctx.strokeStyle = event.target.dataset.color;
    ctx.fillStyle = event.target.dataset.color;
    color.value = event.target.dataset.color;
}
function fillModeClick() {
    if (isFilling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}
function fillMode() {
    if (!isFilling) {
        isFilling = true;
        fillBtn.innerText = "Draw";
    } else {
        isFilling = false;
        fillBtn.innerText = "Fill";
    }
}
function eraserMode() {
    isFilling = false;
    ctx.strokeStyle = "white";
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
line_Width.addEventListener("change", lineWidthChange);
color.addEventListener("change", onColorChange);
colorOptions.forEach(color => color.addEventListener("click", onColorOptionsChange));
canvas.addEventListener("click", fillModeClick);
fillBtn.addEventListener("click", fillMode);
eraserBtn.addEventListener("click", eraserMode);
cleanAll.addEventListener("click", clear);