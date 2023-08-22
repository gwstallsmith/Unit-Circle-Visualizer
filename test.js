class CosmeticManager {
    constructor() {
        this.strokeWeight_ = 2;
        this.strokeColor_ = 'black';
        this.strokeDashed_ = false;
    }

    strokeWeight(weight) {
        if(weight) strokeWeight(weight);
    }

    strokeColor(color) {
        if(color) stroke(color);
    }

    strokeDashed(dashed) {
        if(dashed)
            drawingContext.setLineDash([5, 15]);
        else
            drawingContext.setLineDash([0, 0]);
    }

    fill(fill) {
        if(fill) fill(fill);
    }
};


/////

let CANVAS_SIZE = 900;
let CANVAS_HALF = CANVAS_SIZE / 2;

let X_AXIS = CANVAS_HALF;
let Y_AXIS = CANVAS_HALF;


let CosMan;
function main() {
    CosMan = new CosmeticManager();
}


// UTIL

const PI = Math.PI;
const UNIT_CIRCLE_ANGLES = [0*PI, PI/6, PI/4, PI/3, PI/2, 2*PI/3, 3*PI/4, 5*PI/6, PI, 7*PI/6, 5*PI/4, 4*PI/3, 3*PI/2, 5*PI/3, 7*PI/4, 11*PI/6];

let UNIT = CANVAS_SIZE / 4;

let FRAME_RATE = 60;


// Returns mouse positions relative to center.
// Mouse pointer is off by CANVAS_HALF
// Use with drawing functions, not calculations.
function relativeMouseX() {
    return mouseX - CANVAS_HALF;
}

function relativeMouseY() {
    return mouseY - CANVAS_HALF;
}

function relativeCos(theta) {
    if(theta) {
        return Math.cos(theta) * UNIT;
    }
}

function relativeSin(theta) {
    if(theta) {
        return -Math.sin(theta) * UNIT;
    }
}


// Returns true positition of x / y.
// Use with calculations, not drawing functions
function trueX(relativeX, unitAdjust = 1) { return relativeX/unitAdjust; }

// Adjusts for Canvas flipping the y coordinates
function trueY(relativeY, unitAdjust = 1) { return -relativeY/unitAdjust; }



function increaseCanvasSize() {
    CANVAS_SIZE += 100;

    if(CANVAS_SIZE < 500 || CANVAS_SIZE > 2000) {
        CANVAS_SIZE = 2000
    }

    CANVAS_HALF = CANVAS_SIZE / 2;
    UNIT = CANVAS_SIZE / 4;

    setup();
}

function decreaseCanvasSize() {
    CANVAS_SIZE -= 100;

    if(CANVAS_SIZE < 500 || CANVAS_SIZE > 2000) {
        CANVAS_SIZE = 500
    }

    CANVAS_HALF = CANVAS_SIZE / 2;
    UNIT = CANVAS_SIZE / 4;

    setup();
}

// P5 function.
let canvas;
function setup() {
    canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE, WEBGL);
    canvas.parent('p5');


    textSize(24);
}

// P5 function.
function preload() {
}

// P5 function.
function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        increaseCanvasSize();
    }
    if(keyCode === LEFT_ARROW) {
        decreaseCanvasSize();
    }
    if(keyCode === UP_ARROW) {
        zoomOnMouse();
    }

}



// P5 function that drives the entire animation.
function draw() {
    frameRate(FRAME_RATE);
    background('#101111');
    fill('#101111');
    angleMode(RADIANS);

    CosMan.strokeColor('white');

    CosMan.strokeWeight(2);


    drawCircle();

    drawXAxis();
    drawYAxis();

    drawOrigin();

    //drawQuadI();
    //drawQuadII();
    //drawQuadIII();
    //drawQuadIV();

    drawMousePoint();

}

// DRAW FUNCTIONS
function drawOrigin() {
    CosMan.strokeWeight(12);
    point(0, 0);
}

function drawXAxis() {
    CosMan.strokeColor
    line(-CANVAS_SIZE, 0, CANVAS_SIZE, 0); // X-AXIS
}

function drawYAxis() {
    line(0, -CANVAS_SIZE, 0, CANVAS_SIZE); // Y-AXIS
}

function drawCircle(diameter = 2 * UNIT) {
    fill('#101111');
    ellipse(0, 0, diameter, diameter, 50);
}

function drawMousePoint() {
    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);
    point(relativeMouseX(), relativeMouseY());
}

function drawQuadI() {
    CosMan.strokeWeight(2)
    CosMan.strokeColor('white');
    line(0, 0, relativeCos(PI/6), relativeSin(PI/6))
    line(0, 0, relativeCos(PI/4), relativeSin(PI/4))
    line(0, 0, relativeCos(PI/3), relativeSin(PI/3))
    CosMan.strokeWeight(12);
    point(relativeCos(PI/6), relativeSin(PI/6));
    point(relativeCos(PI/4), relativeSin(PI/4));
    point(relativeCos(PI/3), relativeSin(PI/3));
}

function drawQuadII() {
    CosMan.strokeWeight(2)
    CosMan.strokeColor('white');
    line(0, 0, relativeCos(2*PI/3), relativeSin(2*PI/3));
    line(0, 0, relativeCos(3*PI/4), relativeSin(3*PI/4));
    line(0, 0, relativeCos(5*PI/6), relativeSin(5*PI/6));
    CosMan.strokeWeight(12);
    point(relativeCos(2*PI/3), relativeSin(2*PI/3))
    point(relativeCos(3*PI/4), relativeSin(3*PI/4))
    point(relativeCos(5*PI/6), relativeSin(5*PI/6))
}

function drawQuadIII() {
    CosMan.strokeWeight(2)
    CosMan.strokeColor('white');
    line(0, 0, relativeCos(7*PI/6), relativeSin(7*PI/6))
    line(0, 0, relativeCos(5*PI/4), relativeSin(5*PI/4))
    line(0, 0, relativeCos(4*PI/3), relativeSin(4*PI/3))
    CosMan.strokeWeight(12);
    point(relativeCos(7*PI/6), relativeSin(7*PI/6));
    point(relativeCos(5*PI/4), relativeSin(5*PI/4));
    point(relativeCos(4*PI/3), relativeSin(4*PI/3));
}

function drawQuadIV() {
    CosMan.strokeWeight(2)
    CosMan.strokeColor('white');
    line(0, 0, relativeCos(5*PI/3), relativeSin(5*PI/3));
    line(0, 0, relativeCos(7*PI/4), relativeSin(7*PI/4));
    line(0, 0, relativeCos(11*PI/6), relativeSin(11*PI/6));
    CosMan.strokeWeight(12);
    point(relativeCos(5*PI/3), relativeSin(5*PI/3))
    point(relativeCos(7*PI/4), relativeSin(7*PI/4))
    point(relativeCos(11*PI/6), relativeSin(11*PI/6))
}
