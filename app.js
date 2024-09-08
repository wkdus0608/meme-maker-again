const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const line_Width = document.getElementById("line-width");

canvas.width = 700;
canvas.height = 700;
ctx.lineWidth = 5;

isPainting = false;

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
    console.log(event.target.value);
    ctx.lineWidth = event.target.value;
}


canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
line_Width.addEventListener("change", lineWidthChange);