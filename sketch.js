function setup() {
    createCanvas(windowWidth, windowHeight / 2);
}

function draw() {
    // background(0);
    clear();
    translate(width, 0);
    rotate(PI / 2);
    fill(255, 0, 0);
    textSize(32);
    textAlign(LEFT, TOP);
    text("hello", 0, 0);
}