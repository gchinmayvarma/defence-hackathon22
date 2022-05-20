const PI = 3.1415;
let text_font;
let sketch = function (p) {
    p.preload = function () {
        text_font = p.loadFont("demo/rockfont.ttf");
    }
    p.setup = function () {
        p5jscanvas = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
        p.disableFriendlyErrors = true;
        p.cam = p.createCamera();
        p.pixelDensity(1);
        p.fill(255, 0, 69);
        p.stroke(255, 0, 69);

        p.textFont(text_font);
        p.textSize(20);
    }
    p.draw = function () {
        // p.clear();
        p.background(0, 255, 0)
        p.translate(-p.width / 2, -p.height / 2);

        p.translate(p.width, 0);
        p.rotate(PI / 2);
        p.fill(255, 0, 0);
        p.textSize(32);
        p.textAlign(p.LEFT, p.TOP);
        p.text("VA Detector Not Found ", 0, 0);
        p.text("Motion Detector Found ", 0, 30);
        p.text("Voltage : " + (31 + p.random(-1.2, 2)).toFixed(1) + "V", 0, 60);
        p.text("Amp : " + (400 + p.random(-1, 10)).toFixed(1) + "A", 0, 90);
        p.text("Temprature : " + (p.random(3000, 3100)).toFixed(0) + "C", 0, 120);

        p.translate(0, p.width);
        p.text("Electrode Status : OK", 0, -30);
        p.text("Stick out Length : " + (10 + p.random(0, 0.055)).toFixed(1) + "mm", 0, -60);

        p.translate(p.height, -p.width);
        p.textAlign(p.RIGHT, p.TOP);
        p.text("Awake Time : 0", 0, 0);
        p.text("Travel Distance : 0", 0, 30);
        p.text("Travel Speed : 0", 0, 60);

        p.translate(0, p.width);
        p.text("Charge Left : 2h 32m", 0, -30);
        p.text("Battery : 80%", 0, -60);
    }

}


let monapple = new p5(sketch);