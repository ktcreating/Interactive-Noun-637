let colour, mono;

function preload() {
  colour = loadImage("noun637.png");
  mono = loadImage("mono.jpg");
}
function setup() {
let canvas = createCanvas(500, 500);
  canvas.parent('sketch-container');
  noCursor();
  cursor("glasscur.png", 30, -10);
  image(colour, 0, 0);
  image(mono, 0, 0);
}
function mouseDragged() {
  copy(colour, mouseX, mouseY, 50, 30, mouseX, mouseY, 50, 30);
}
