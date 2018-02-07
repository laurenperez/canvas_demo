// Make your canvas available in JS
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// give your canvas a size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



var block1 = {
  x: 100,
  y: 100,
  color: "blue"
}

var block2 = {
  x: 200,
  y: 200,
  color: "red"
}

var block3 = {
  x: 300,
  y: 300,
  color: "green"
}

var moveBlock= function(event) {
  //UP
  if (event.keyCode === 38){
    block3.y -= 10;
  }
  //DOWN
  if (event.keyCode === 40) {
    block3.y += 10;
  }
  //LEFT
  if (event.keyCode === 37){
    block3.x -= 10;
  }
  //RIGHT
  if (event.keyCode === 39) {
    block3.x += 10;
  }
};

var collisionDetection = function (x1, y1, x2, y2) {
  var xDistance = x2 - x1;
  var yDistance = y2 - y1;
  var crashZone = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  if (crashZone < 40) {
    console.log("crash!")
  }
}


var animationLoop = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  console.log("draw!");

  ctx.fillStyle = block1.color;
  ctx.fillRect(block1.x, block1.y, 30, 30);

  ctx.fillStyle = block2.color;
  ctx.fillRect(block2.x, block2.y, 50, 50);

  ctx.fillStyle = block3.color;
  ctx.fillRect(block3.x, block3.y, 40, 40);

  collisionDetection(block1.x, block1.y, block3.x, block3.y);
  collisionDetection(block2.x, block2.y, block3.x, block3.y);
};

setInterval(animationLoop, 100);

document.addEventListener('DOMContentLoaded', function(event) {
  window.addEventListener('keydown', moveBlock);
});
