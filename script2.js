function randomColor() {
    red = Math.floor(Math.random() * 3) * 127;
    green = Math.floor(Math.random() * 3) * 127;
    blue = Math.floor(Math.random() * 3) * 127;
    rc = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rc;
}


function randomRadius(radius) {
  r = radius;
  return r;
}

function randomDx() {
    r = Math.floor(Math.random() * 10 - 5);
    return r;
}

function randomDy() {
    r = Math.floor(Math.random() * 10 - 5);
    return r;
}

function distanceNextFrame(a, b) {
    return Math.sqrt((a.x + a.dx - b.x - b.dx)**2 + (a.y + a.dy - b.y - b.dy)**2) - a.radius - b.radius;
}
function distanceNextFrame2(a, b, r) {    // добавь этот метод себе
  var k = Math.sqrt((a.x - b.x1)**2 + (a.y - b.y1)**2);
  var l = Math.sqrt((a.x - b.x2)**2 + (a.y - b.y2)**2);
  var m = Math.sqrt((b.x1 - b.x2)**2 + (b.y1 - b.y2)**2);
  var p = (k + l + m)/2;
  var Sq = Math.sqrt(p*(p-k)*(p-l)*(p-m));
  var h = 2*Sq/m;
  if ((h <= r) && (l <= m) && (k <= m)) { return true;}
  else {return false;}
}

function distance(a, b) {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}
function speedofBall(x1,y1,x2,y2,i){
  objArray[i].dx = (x2 -x1)/16;
  objArray[i].dy = (y2 -y1)/16;
}
