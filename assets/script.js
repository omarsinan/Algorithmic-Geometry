var angleSlider;
var lenSlider;
var angle;
var len;
var angleText;

function createFractalTreeBranch(leng) {
    line(0, 0, 0, -leng);
    translate(0, -leng);
    if (leng > 3) {
        push();
        rotate(angle);
        createFractalTreeBranch(leng * 0.7);
        pop();
        push();
        rotate(-angle);
        createFractalTreeBranch(leng * 0.7);
        pop();
    }
}

function createFractalTree() {
    line(width / 2, height - len, width / 2, height - 2 * len);
    translate(width / 2, height - len);
    createFractalTreeBranch(len);
}

function setup() {
    createCanvas(600, 600);
    angleSlider = createSlider(0, PI, PI / 4, 0.01);
    angleSlider.position(90, 30);
    lenSlider = createSlider(0, 200, 100, 0.01);
    lenSlider.position(90, 70);
    frameRate(10);
}

function draw() {
    background(255);
    angle = angleSlider.value();
    len = lenSlider.value();
    fill(0);
    stroke(0);
    textSize(18);
    text("Angle", 30, 45);
    text(angle, 240, 45);
    text("Length", 30, 85);
    text(len, 240, 85);
    createFractalTree(len);
}
