let p5jscanvas;
let capture;
let ready = false;
let setting_size = true;
let a;
let godhands = [];
let zoomscale = 2;
let videopointer;
let slider_resolution;
let show_markers = false;
let animation_working = true;
let curl_thrushold = 0.4;
let text_font;
// p5.disableFriendlyErrors = true;
let sketch = function (p) {
    p.preload = function () {
        text_font = p.loadFont("rockfont.ttf");
    }
    p.setup = function () {
        p5jscanvas = p.createCanvas(0, 0, p.WEBGL);
        p.disableFriendlyErrors = true;
        p.cam = p.createCamera();
        p.pixelDensity(1);
        p.fill(255, 0, 69);
        p.stroke(255, 0, 69);

        p.textSize(50);
        p.frameRate(144);
        p.textFont(text_font);
        p.textSize(20);
    }
    p.draw = function () {
        flow_time += flow_time_delta;
        p.clear();
        p.translate(-p.width / 2, -p.height / 2);
        if (detections != undefined) {
            if (detections.multiHandLandmarks != undefined) {
                if (detections.multiHandLandmarks.length < godhands.length)
                    godhands = [];

                for (let i = 0; i < detections.multiHandLandmarks.length; i++) {
                    if (!godhands[i])
                        godhands.push(new Customhand(detections.multiHandLandmarks[i]));
                    else godhands[i].seekhands(detections.multiHandLandmarks[i]);
                }
            }
        }
        for (let i = godhands.length - 1; i > -1; --i) {
            godhands[i].work();
        }
        if (show_markers) {
            // p.textAlign(p.BOTTOM, p.RIGHT);
            // p.text("Marker Display ON", 0 , p.height - 5);
        }

        p.textSize(20);
        p.translate(p.width, 0);
        p.rotate(PI / 2);
        p.fill(255, 0, 0);
        p.textSize(32);
        p.textAlign(p.LEFT, p.TOP);
        p.fill(255, 0, 0);
        p.text("VA Detector Not Found ", 0, 0);
        p.fill(0, 255, 0);
        p.text("Motion Detector Found ", 0, 30);
        p.text("Voltage : " + (31 + p.random(-1.2, 2)).toFixed(1) + "V", 0, 60);
        p.text("Amp : " + (400 + p.random(-1, 10)).toFixed(1) + "A", 0, 90);

        p.fill(255, 165, 0);
        p.text("Temprature : " + (p.random(3000, 3100)).toFixed(0) + "C", 0, 120);

        p.translate(0, p.width);
        p.fill(0, 255, 0);

        p.text("Electrode Status : OK", 0, -30);
        p.text("Stick out Length : " + (10 + p.random(0, 0.055)).toFixed(1) + "mm", 0, -60);

        p.translate(p.height, -p.width);
        p.textAlign(p.RIGHT, p.TOP);
        p.fill(0, 255, 0);
        p.text("Awake Time : 0", 0, 0);
        p.fill(255, 165, 0);
        p.text("Travel Distance : 0", 0, 30);
        p.text("Travel Speed : 0", 0, 60);

        p.translate(0, p.width);
        p.fill(0, 255, 0);
        p.text("Charge Left : 2h 32m", 0, -30);
        p.text("Battery : 80%", 0, -60);

    }

}


let monapple = new p5(sketch);