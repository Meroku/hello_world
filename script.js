var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var objArray = [];
var forMenuBtn;
var paused = true;
var totalKineticEnergy = 0;
var bumped = false;
var radius = 10; // радиус
var leftHeld = false;
var upHeld = false;
var rightHeld = false;
var downHeld = false;
var x1;
var y1;
var forSpeed;
var wallActive = false;
var walls = [];
var vector = [];
var it;
var gravityOn = false;

var clearCanv = true;

var bigBalls = true;

canvas.addEventListener('contextmenu', onContextMenu, false);
document.addEventListener("keydown", keyDownHandler);
canvas.addEventListener("mousedown", getPosition, false);
//canvas.addEventListener("mousedown", goMoving, true);

function clearCanvas() {                        // создание шарика
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function getPosition(event) // ШАРИК
{
  if (event.which==1) {
  var canvas = document.getElementById("myCanvas");
  var x = event.x;
  var y = event.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  x1 = x;
  y1 = y;
      if(wallActive == false){
  forSpeed = objArray.length;
  if(!prov(event)){
  objArray[objArray.length] = new Ball(x, y, randomRadius(radius));}
  var ctx = canvas.getContext("2d");
//  ctx.beginPath();
//  ctx.moveTo(x,y);
//  ctx.lineWidth = 2; // толщина линии
canvas.addEventListener('mousemove', function(e) {
  var x=e.x;
  var y=e.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x, y);
  ctx.stroke();
canvas.addEventListener("mouseup", write2, false);
}, false);
}
else{
  var ctx = canvas.getContext("2d");
  //ctx.beginPath();
  //ctx.moveTo(x,y);
  //ctx.lineWidth = 2; // толщина линии
canvas.addEventListener('mousemove', function(e) {
  var x=e.x;
  var y=e.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x, y);
  ctx.stroke();
canvas.addEventListener("mouseup", write2, false);
}, false);
}
}
else {onContextMenu();}
}
function write2(event) {
if (event.which == 1) {
  var x=event.x;
  var y=event.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
if(wallActive == false){
  //ctx.lineTo(x, y); //рисуем линию
  //ctx.stroke();
//  ctx.closePath();
  speedofBall(x1,y1,x,y,forSpeed);
  vector[vector.length] = new Vector(x1,y1,x,y);
}
  else {
  //  ctx.lineTo(x, y); //рисуем линию
  //  ctx.stroke();
  //  ctx.closePath();
    walls[walls.length] = new Walls(x1,y1,x,y);
  }
  }
}

function prov(e){
  var x = e.x;
  var y = e.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
  if(objArray.length != null){
        for(i in objArray){
        if(((x >= objArray[i].x && x <= objArray[i].x + radius) || (x <= objArray[i].x && x >= objArray[i].x - radius)) && ((y >= objArray[i].y - radius && y <= objArray[i].y) ||
         (y >= objArray[i].y && y <= objArray[i].y + radius ))){return true; break;}
       }}else {return false;}
}
//==========================
function goMoving(e){
  var x = e.x;
  var y = e.y;
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;
        for(i in objArray){
        if(((x >= objArray[i].x && x <= objArray[i].x + radius) || (x <= objArray[i].x && x >= objArray[i].x - radius)) && ((y >= objArray[i].y - radius && y <= objArray[i].y) ||
         (y >= objArray[i].y && y <= objArray[i].y + radius ))){
           var mx=parseInt(e.clientX-canvas.offsetLeft);
           var my=parseInt(e.clientY-canvas.offsetTop);

           var ddx=mx-x;
           var ddy=my-y;
                //objArray[it].x +=ddx;
                //objArray[it].y +=ddy;
           draw();
           x=mx;
           y=my;
         }}
}
 function myMove(e){
      var mx=parseInt(e.clientX-offsetX);
      var my=parseInt(e.clientY-offsetY);

      var ddx=mx-startX;
      var ddy=my-startY;
           objArray[it].x+=ddx;
           objArray[it].y+=ddy;
      draw();
      startX=mx;
      startY=my;
}

//==========================
var menu = document.querySelector('.menu');
function showMenu(x, y){
menu.style.left = x + 'px';
menu.style.top = y + 'px';
menu.classList.add('show-menu');
}
function hideMenu(){
menu.classList.remove('show-menu');
}
function onContextMenu(e){
e.preventDefault();
var x = (e.layerX == undefined ? e.offsetX : e.layerX) + 1;
var y = (e.layerY == undefined ? e.offsetY : e.layerY) + 1;
if (wallActive == false) {
for(var i in objArray){
  if(((x >= objArray[i].x && x <= objArray[i].x + radius) || (x <= objArray[i].x && x >= objArray[i].x - radius)) && ((y >= objArray[i].y - radius && y <= objArray[i].y) ||
   (y >= objArray[i].y && y <= objArray[i].y + radius ))){
showMenu(objArray[i].x, objArray[i].y);
forMenuBtn = i;
canvas.addEventListener('mousedown', onMouseDown, false);
break;
}}} else {
  for(var i in walls){
    if (((x >= walls[i].x1 && x <= walls[i].x2) || (x <= walls[i].x1 && x >= walls[i].x2)) && ((y >= walls[i].y1 && y <= walls[i].y2) || (y <= walls[i].y1 && x >= walls[i].y2))){
  canvas.addEventListener('mousedown', onMouseDown, false);
  showMenu(walls[i].x1, walls[i].y1);
  forMenuBtn = i;
}}
}}
function onMouseDown(e){
hideMenu();
document.removeEventListener('mousedown', onMouseDown);
}

//canvas.addEventListener('contextmenu', onContextMenu, false);


var button = document.getElementById('play');
button.onclick = function() {
  paused = !paused;
}
var smallbtn = document.getElementById('Small');
smallbtn.onclick = function() {
  radius = 10;
}
var midbtn = document.getElementById('Medium');
midbtn.onclick = function() {
  radius = 20;
}
var bigbtn = document.getElementById('Big');
bigbtn.onclick = function() {
  radius = 30;
}
var chbtn = document.getElementById('change');
chbtn.onclick = function() {
  objArray[forMenuBtn].color = randomColor();
  hideMenu();
}
var delbtn = document.getElementById('delete');
delbtn.onclick = function() {
  objArray[forMenuBtn] = new Ball(0,0,0);
//    walls[forMenuBtn] = new Wall(0,0,0);
  hideMenu();
}
var wallbtn = document.getElementById('Wall');
wallbtn.onclick = function() {
  wallActive = !wallActive;
}


function keyDownHandler(event) {
    if (event.keyCode == 67) { // c
        objArray[objArray.length] = new Ball(randomX(), randomY(), randomRadius());
    } else if (event.keyCode == 80) { // p
        paused = !paused;
    } else if (event.keyCode == 82) { // r
        objArray = [];
        for(obj in walls){walls[obj].clear();}
    } else if (event.keyCode == 88) { // x
        bigBalls = !bigBalls;
    }
}


function canvasBackground() {
    canvas.style.backgroundColor = "rgb(215, 235, 240)";
}

function wallCollision(ball) {
    if (ball.x - ball.radius + ball.dx < 0 ||
        ball.x + ball.radius + ball.dx > canvas.width) {
        ball.dx *= -1;
    }
    if (ball.y - ball.radius + ball.dy < 0 ||
        ball.y + ball.radius + ball.dy > canvas.height) {
        ball.dy *= -1;
    }
    if (ball.y + ball.radius > canvas.height) {
        ball.y = canvas.height - ball.radius;
    }
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius;
    }
    if (ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width - ball.radius;
    }
    if (ball.x - ball.radius < 0) {
        ball.x = ball.radius;
    }
}

function ballCollision() {
    for (var obj1 in objArray) {
        for (var obj2 in objArray) {
            if (obj1 !== obj2 && distanceNextFrame(objArray[obj1], objArray[obj2]) <= 0) {
                var theta1 = objArray[obj1].angle();
                var theta2 = objArray[obj2].angle();
                var phi = Math.atan2(objArray[obj2].y - objArray[obj1].y, objArray[obj2].x - objArray[obj1].x);
                var m1 = objArray[obj1].mass;
                var m2 = objArray[obj2].mass;
                var v1 = objArray[obj1].speed();
                var v2 = objArray[obj2].speed();

                var dx1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.cos(phi) + v1*Math.sin(theta1-phi) * Math.cos(phi+Math.PI/2);
                var dy1F = (v1 * Math.cos(theta1 - phi) * (m1-m2) + 2*m2*v2*Math.cos(theta2 - phi)) / (m1+m2) * Math.sin(phi) + v1*Math.sin(theta1-phi) * Math.sin(phi+Math.PI/2);
                var dx2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.cos(phi) + v2*Math.sin(theta2-phi) * Math.cos(phi+Math.PI/2);
                var dy2F = (v2 * Math.cos(theta2 - phi) * (m2-m1) + 2*m1*v1*Math.cos(theta1 - phi)) / (m1+m2) * Math.sin(phi) + v2*Math.sin(theta2-phi) * Math.sin(phi+Math.PI/2);

                objArray[obj1].dx = dx1F;
                objArray[obj1].dy = dy1F;
                objArray[obj2].dx = dx2F;
                objArray[obj2].dy = dy2F;
            }
        }
        wallCollision(objArray[obj1]);
    }
}

function drWallsCollision() {  // замени
    for (var obj1 in objArray) {
        for (var obj2 in walls) {
            if ((distanceNextFrame2(objArray[obj1], walls[obj2], radius) == true)) {
                var theta1 = objArray[obj1].angle();
                var theta2 = walls[obj2].angle();
                var m1 = objArray[obj1].mass;
                var v1 = objArray[obj1].speed();
                var sin = Math.abs(Math.sin(Math.abs(theta1) - Math.PI/2 - Math.abs(theta2)));
                var cos = Math.abs(Math.cos(Math.abs(theta1) - Math.PI/2 - Math.abs(theta2)));;
                var dx1;
                var dy1;
                if((Math.abs(Math.sin(theta1 + theta2)) >= Math.sin(Math.PI/2) - 0.08 ))
                {objArray[obj1].dx = -objArray[obj1].dx;
                objArray[obj1].dy = -objArray[obj1].dy;}
                else if((Math.abs(Math.sin(theta1)) >= 0.08 && Math.abs(Math.sin(theta1)) <= 0.99)){

                  if((theta1*Math.PI/180 > 0 && theta1*Math.PI/180 < 90) || (theta1*Math.PI/180 > 180 && theta1*Math.PI/180 < 270)){
                if(Math.sin(theta2) <= 0.70 && Math.sin(theta2) >= -0.70){
                objArray[obj1].dx = objArray[obj1].dx;
                objArray[obj1].dy = -objArray[obj1].dy;
              }
                else if (Math.sin(theta2) >= 0.70 || Math.sin(theta2) <= -0.70) {
                  objArray[obj1].dx = -objArray[obj1].dx;
                  objArray[obj1].dy = objArray[obj1].dy;
                }
              } else if((theta1*Math.PI/180 > 90 && theta1*Math.PI/180 < 180) || (theta1*Math.PI/180 > -180 && theta1*Math.PI/180 < 0)){
                if(Math.sin(theta2) <= 0.70 && Math.sin(theta2) >= -0.70){
                objArray[obj1].dx = objArray[obj1].dx;
                objArray[obj1].dy = -objArray[obj1].dy;
              }
                else if (Math.sin(theta2) >= 0.70 || Math.sin(theta2) <= -0.70) {
                  objArray[obj1].dx = -objArray[obj1].dx;
                  objArray[obj1].dy = objArray[obj1].dy;
                }
              }
            }
              else if(Math.abs(Math.sin(theta1)) >= 0.99){
              //  if(){Math.abs(Math.sin(theta2)) <= 0.99 && Math.abs(Math.sin(theta2)) >= 0.08}
            //else
            if(Math.abs(Math.sin(theta2)) <= 0.70){
              var bp = objArray[obj1].dx;
              objArray[obj1].dx = -objArray[obj1].dy;
              objArray[obj1].dy = bp;
            }
              else if (Math.abs(Math.sin(theta2)) >= 0.70) {
                objArray[obj1].dx = -objArray[obj1].dx;
                objArray[obj1].dy = objArray[obj1].dy;
              }
              if (Math.abs(Math.sin(theta2)) <= 0.08) {
                objArray[obj1].dx = -objArray[obj1].dx;
                objArray[obj1].dy = -objArray[obj1].dy;
              }
              else if (Math.abs(Math.sin(theta2)) <= 0.99) {
                objArray[obj1].dx = -objArray[obj1].dx;
                objArray[obj1].dy = -objArray[obj1].dy;
              }
            }
            else if(Math.abs(Math.sin(theta1)) <= 0.08){
            //  if(){Math.abs(Math.sin(theta2)) <= 0.99 && Math.abs(Math.sin(theta2)) >= 0.08}
          //else
          if(Math.abs(Math.sin(theta2)) <= 0.70){
            var bp = objArray[obj1].dy;
            objArray[obj1].dy = -objArray[obj1].dx;
            objArray[obj1].dx = bp;
          }
            else if (Math.abs(Math.sin(theta2)) >= 0.70) {
              objArray[obj1].dx = -objArray[obj1].dx;
              objArray[obj1].dy = objArray[obj1].dy;
            }
            if (Math.abs(Math.sin(theta2)) <= 0.08) {
              objArray[obj1].dx = -objArray[obj1].dx;
              objArray[obj1].dy = -objArray[obj1].dy;
            }
            else if (Math.abs(Math.sin(theta2)) <= 0.99) {
              objArray[obj1].dx = -objArray[obj1].dx;
              objArray[obj1].dy = -objArray[obj1].dy;
            }
          }
                else{
                  objArray[obj1].dx = -objArray[obj1].dx;
                  objArray[obj1].dy = -objArray[obj1].dy;
                }
          }
                    }

                    wallCollision(objArray[obj1]);
    }
}

function staticCollision() {
    for (var obj1 in objArray) {
        for (var obj2 in objArray) {
            if (obj1 !== obj2 &&
                distance(objArray[obj1], objArray[obj2]) < objArray[obj1].radius + objArray[obj2].radius)
            {
                var theta = Math.atan2((objArray[obj1].y - objArray[obj2].y), (objArray[obj1].x - objArray[obj2].x));
                var overlap = objArray[obj1].radius + objArray[obj2].radius - distance (objArray[obj1], objArray[obj2]);
                var smallerObject = objArray[obj1].radius < objArray[obj2].radius ? obj1 : obj2
                objArray[smallerObject].x -= overlap * Math.cos(theta);
                objArray[smallerObject].y -= overlap * Math.sin(theta);
            }
        }
    }
}

function moveObjects() {
    for (var obj in objArray) {
        objArray[obj].x += objArray[obj].dx;
        objArray[obj].y += objArray[obj].dy;
    }
}

function drawObjects() {
    for (var obj in objArray) {
        objArray[obj].draw();
      }
      for (var obj in walls) {
      walls[obj].draw();
    }
      if (paused == true){
        for (var obj in vector) {
        vector[obj].draw();
      }
    }
    if (paused == false){
      for(var obj in vector) {
        vector[obj].clear();
      }
    }
}

function draw() {

    if(clearCanv) clearCanvas();
    canvasBackground();

    if (!paused) {
        moveObjects();
    }

    drawObjects();
    staticCollision();
    ballCollision();
    drWallsCollision();
    //logger();
    requestAnimationFrame(draw);
}

function logger() {
    //log some stuff
}



draw();
