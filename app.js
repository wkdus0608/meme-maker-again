const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

isPainting = false;

function line(event) {
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


canvas.addEventListener("mousemove", line);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);