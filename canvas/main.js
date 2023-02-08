const canvasDOM = document.querySelector('#myCanvas');
const context = canvasDOM.getContext('2d');
const DEG_360 = 2 * Math.PI;

const grad = context.createLinearGradient(0, 0, 800, 600);
const color1 = randomColor();
const color2 = randomColor();

grad.addColorStop(0, color1);
grad.addColorStop(1, color2);

context.fillStyle = grad;
context.fillRect(0, 0, 800, 600);

context.font = '40px Courier';
context.fillStyle = "black";
context.strokeText(color1, 40, 40);
context.strokeText(color2, 40, 100);

context.lineCap = "round";


function randomColor(){
    const red = r(0, 255);
    const g = r(0, 255);
    const b = r(0, 255);
    return `rgb(${ red },${ g },${ b })`;
}

function r(from = 0, to = 600){
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function drawRandomLine(x, y){
    context.lineTo(x, y);
}

function drawRandomArc(x1, y1, { x, y }){
    const radius = r(1, 100);

    context.beginPath();
    context.arc(x, y, radius, 0, DEG_360);
}

function drawRandomFig(prevCoord){
    const figures = [drawRandomArc, drawRandomLine];
    const x = r(0, 800);
    const y = r();
    const what = r(0, 1);

    figures[what](x, y, prevCoord);
    context.stroke();
    prevCoord.x = x;
    prevCoord.y = y;
}
setInterval(drawRandomFig, 500, {x : 0, y : 0});