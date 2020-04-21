//gambar 2
ctx.lineWidth = 10; 
ctx.beginPath();
ctx.moveTo(597, 450);
ctx.lineTo(803, 450);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 450);
ctx.bezierCurveTo(500, 400, 500, 270, 630, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(800, 450);
ctx.bezierCurveTo(900, 400, 900, 270, 770, 270);
ctx.stroke();

var mycan = document.getElementById("myCanvas");
var context = mycan.getContext("2d");
var rectWidth = 80;
var rectHeight = 125;
rectX = 690;
rectY = 150;
var cornerRadius = 50;

context.beginPath();
context.moveTo(rectX, rectY);
context.lineTo(rectX+rectWidth-cornerRadius, rectY);
context.arcTo(rectX+rectWidth, rectY, rectX+rectWidth, rectY+cornerRadius, cornerRadius);
context.lineTo(rectX+rectWidth, rectY+rectHeight);
context.lineWidth = 10;
context.stroke();

var mycan = document.getElementById("myCanvas");
var context = mycan.getContext("2d");
var rectWidth = 80;
var rectHeight = 125;
rectX = 710;
rectY = 150;
var cornerRadius = 50;

context.beginPath();
context.moveTo(rectX, rectY);
context.lineTo(rectX-rectWidth+cornerRadius, rectY);
context.arcTo(rectX-rectWidth, rectY, rectX-rectWidth, rectY+cornerRadius, cornerRadius);
context.lineTo(rectX-rectWidth, rectY+rectHeight);
context.lineWidth = 10;
context.fillStyle = "#DCDCDC";
context.fill();
context.stroke();

context.beginPath();
context.moveTo(770, 200);
context.lineTo(770, 115);
context.stroke();

context.lineWidth = 10;
context.beginPath();
context.moveTo(770, 120);
context.lineTo(850, 120);
context.lineTo(770, 50);
context.lineJoin = 'round';
context.stroke();

context.beginPath();
context.moveTo(773, 50);
context.lineTo(570, 50);
context.lineTo(570, 100);
context.lineTo(645, 165);
context.fillStyle = "black";
context.fill();
context.stroke();

// context.beginPath();
// context.moveTo(592, 115);
// context.lineTo(520, 200);
// context.lineTo(570, 210);
// context.lineTo(620, 150);
// context.stroke();

context.stroke();
context.strokeRect(520, 50, 50, 50);
