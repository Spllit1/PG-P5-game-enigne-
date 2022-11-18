let pg = new PgSetup;
pg.Hello()

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke()
  ellipse(mouseX, mouseY, 25, 25);
}