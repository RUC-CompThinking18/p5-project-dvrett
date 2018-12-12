let fighters = [];
let stage;

function preload(){
  stage = loadImage('stage.jpg');
  fighters = [loadImage('link.jpg'), loadImage('mario.jpg'), loadImage('luigi.jpg')];

function setup() {
  createCanvas(1024, 576);
  background(0);
}

//fighters will move each time the mouse is pressed
function mousePressed() {
  let r = random(100, 100);
  let f = Fighter
}


function draw() {
  background(stage);
  for (let i = 0; i < fighters.length; i++) {
    fighters[i].move();
    fighters[i].show();
  }
}
//creating class for individual fighter objects to be able to move across canvas
class Fighter {
  constructor(x, y, r){
      this.x = x;
      this.y = y;
      this.r = r;
  }
move() {
  this.x = this.x + random(-0.5, 0.5);
  this.y = this.y + random(-0.5, 0.5);
}
  //show function to get images to appear
  show() {
    image(stage, this.x, this.y, this.r, this.r);
    fill(0)
  }
}
