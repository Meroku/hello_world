function Ball(x, y, radius) {
    this.radius = radius;
    this.dx = 0;
    this.dy = 0;
    // mass is that of a sphere as opposed to circle.
    // it *does* make a difference.
    this.mass = this.radius * this.radius * this.radius;
    this.x = x;
    this.y = y;
    this.color = randomColor();
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(Math.round(this.x), Math.round(this.y), this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.stroke();
        ctx.closePath();
    };
    this.speed = function() {
        // magnitude of velocity vector
        return (Math.sqrt(this.dx * this.dx + this.dy * this.dy))/4;
    };
    this.angle = function() {
        //angle of ball with the x axis
        return Math.atan2(this.dy, this.dx);
    };
    this.kineticEnergy = function () {
    // only for masturbation purposes, not rly used for computation.
        return (0.5 * this.mass * this.speed() * this.speed());
    };
    this.onGround = function() {
        return (this.y + this.radius >= canvas.height)
    }
}
function Wall(x, y, w,h) {

    this.w=w;
    this.h=h;
    this.radius = radius;
    this.dx = randomDx();
    this.dy = randomDy();
    // mass is that of a sphere as opposed to circle.
    // it *does* make a difference.
    this.mass = this.radius * this.radius * this.radius;
    this.x = x;
    this.y = y;
    this.color = randomColor();
    this.draw = function() {
        ctx.beginPath();
        ctx.arc(Math.round(this.x), Math.round(this.y), this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
        ctx.stroke();
        ctx.closePath();
    };
    this.speed = function() {
        // magnitude of velocity vector
        return Math.sqrt(this.dx * this.dx + this.dy * this.dy);
    };
    this.angle = function() {
        //angle of ball with the x axis
        return Math.atan2(this.dy, this.dx);
    };
    this.kineticEnergy = function () {
    // only for masturbation purposes, not rly used for computation.
        return (0.5 * this.mass * this.speed() * this.speed());
    };
    this.onGround = function() {
        return (this.y + this.radius >= canvas.height)
    }
}

function Walls(x1,y1,x2,y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.angle = function() {
    return Math.atan2(this.y2 - this.y1, this.x2 - this.x1);
  };
  this.draw = function() {
      ctx.beginPath();
      ctx.moveTo(this.x1,this.y1);
      ctx.lineWidth = 2; // толщина линии
      ctx.lineTo(this.x2, this.y2); //рисуем линию
      ctx.stroke();
      ctx.closePath();
};
this.clear = function() {
  this.x1 = 0; this.y1 = 0; this.x2 = 0; this.y2 = 0;
};
}
function Vector(x1,y1,x2,y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.draw = function() {
      ctx.beginPath();
      ctx.moveTo(this.x1,this.y1);
      ctx.lineWidth = 2; // толщина линии
      ctx.lineTo(this.x2, this.y2); //рисуем линию
      ctx.stroke();
      ctx.closePath();
};
this.clear = function() {
  this.x1 = 0; this.y1 = 0; this.x2 = 0; this.y2 = 0;
};
}
