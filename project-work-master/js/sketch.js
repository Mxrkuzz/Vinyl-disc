let angle = 0;
let dragX, dragY, moveX, moveY
function setup() {
createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);
background(255);
}

function mouseDragged() {
	rectMode(CENTER);
ellipse(mouseX, mouseY, 25);
noStroke()
}
function draw() {

	translate(windowWidth/2, windowHeight/2);
	rotate(angle);
	rectMode(CENTER);
	circle(0, 0, 600);
	fill('#49393B');

	angle = angle + 1;
}
