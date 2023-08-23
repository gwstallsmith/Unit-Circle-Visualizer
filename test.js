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

    fill(fill) {
        if(fill) fill(fill);
    }
};


/////

let CANVAS_SIZE = 900;
let CANVAS_HALF = CANVAS_SIZE / 2;

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

function quadArcTan(x, y) {
    let angle;
    if(x > 0) {
        angle = Math.atan(y/x);
    } else if (x < 0 && y >= 0) {
        angle = Math.atan(y/x) + PI;
    } else if(x < 0 && y < 0) {
        angle = Math.atan(y/x) - PI;
    } else if (x == 0 && y > 0) {
        angle = PI/2;
    } else if (x == 0 && y < 0) {
        angle = -1 * PI/2;
    } else if (x == 0 && y == 0) {
        angle = NaN;
    }

    return angle;
}

function originDist() {
    return (Math.sqrt(Math.pow(relativeMouseX(), 2) + (Math.pow(relativeMouseY(), 2))));
}

function mouseInCircle() {
    return originDist <= UNIT;
}


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

let fontInconsolata;
// P5 function.
let canvas;
function setup() {
    canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE, WEBGL);
    canvas.parent('p5');

    textFont(fontInconsolata);
    
    textAlign(CENTER);
    textSize(24);
}

// P5 function.
function preload() {
    fontInconsolata = loadFont('Inconsolata.otf');

}

// P5 function.
function keyPressed() {
    if(keyCode === RIGHT_ARROW) {
        increaseCanvasSize();
    }
    if(keyCode === LEFT_ARROW) {
        decreaseCanvasSize();
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

    //drawOrigin();
    //drawCardinalPoints();

    //drawQuadI();
    //drawQuadII();
    //drawQuadIII();
    //drawQuadIV();

    drawGrid();

    drawArc();
    //drawUnitArc();

    drawTriangle()
    drawUnitTriangle();

    drawSin();
    drawCos();
    //drawTan();

    //drawCsc();
    //drawSec();
    //drawCot();
    drawMousePoint();

}

// DRAW FUNCTIONS
function drawOrigin() {
    CosMan.strokeWeight(12);
    point(0, 0);
}

function drawXAxis() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(4);
    line(-CANVAS_SIZE, 0, CANVAS_SIZE, 0); // X-AXIS
}

function drawYAxis() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(4);
    line(0, -CANVAS_SIZE, 0, CANVAS_SIZE); // Y-AXIS
}

function drawCircle(diameter = UNIT * 2) {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(4);
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

function drawCardinalPoints() {
    CosMan.strokeWeight(12);
    CosMan.strokeColor('white');
    point(relativeCos(2*PI), relativeSin(2*PI));
    point(relativeCos(PI/2), relativeSin(PI/2));
    point(relativeCos(PI), relativeSin(PI));
    point(relativeCos(3*PI/2), relativeSin(3*PI/2));
}

function drawGrid(gridDensity = 1) {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(1);

    for(i = -CANVAS_HALF; i <= CANVAS_HALF; i+= UNIT/gridDensity) {
        for(j = -CANVAS_HALF; j <= CANVAS_HALF; j+= UNIT/gridDensity) {
            line(-CANVAS_HALF, j, CANVAS_HALF, j);
        }
        line(i, -CANVAS_HALF, i, CANVAS_HALF);
    }
    
    line(-CANVAS_HALF + 1, CANVAS_HALF, -CANVAS_HALF + 1, -CANVAS_HALF);
    line(-CANVAS_HALF, CANVAS_HALF - 1, CANVAS_HALF, CANVAS_HALF - 1);

}

// TRIANGLES
function drawTriangle() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(1);
    fill('rgba(255,180,180, 0.5)');
    triangle(0, 0, relativeMouseX(), 0, relativeMouseX(), relativeMouseY());
    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);
}

function drawUnitTriangle() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(1);

    fill('rgba(255,80,80, 0.5)');


    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    if(mouseInCircle()) {
        triangle(0, 0, relativeMouseX(), 0, relativeMouseX(), relativeMouseY());
    } else {
        triangle(0, 0, relativeCos(angle), 0, relativeCos(angle), relativeSin(angle));


    }
}

// ARCS

function drawArc() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
    fill('rgba(0, 255, 0, .5)');


    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    arc(0, 0, UNIT * 2, UNIT * 2, angle, 0, PIE);
}

function drawUnitArc() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
    fill('rgba(0, 0, 255, .5)');

    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    arc(0, 0, originDist() * 2, originDist() * 2, angle, 0, PIE)
}

// TRIG FUNCTIONS
function drawSin() {
    CosMan.strokeColor('cyan');
    CosMan.strokeWeight(4);
    line(relativeMouseX(), 0, relativeMouseX(), relativeMouseY());

    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);
    point(relativeMouseX(), 0);
}

function drawCos() {
    CosMan.strokeColor('yellow');
    CosMan.strokeWeight(4);
    line(0, relativeMouseY(), relativeMouseX(), relativeMouseY());

    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);
    point(0, relativeMouseY());
}

function drawTan() {
    CosMan.strokeColor('magenta');
    CosMan.strokeWeight(4);
    line(UNIT, 0, UNIT, (relativeMouseX()/relativeMouseY() * UNIT))
}

function drawCsc() {
    CosMan.strokeColor('lime');
    CosMan.strokeWeight(4);
    line(0, 0, 0, UNIT/(relativeMouseY()/UNIT));

}

function drawSec() {
    CosMan.strokeColor('orange');
    CosMan.strokeWeight(4);
    line(0, 0, UNIT, (relativeMouseX()/relativeMouseY()) * UNIT)
}

function drawCot() {
    CosMan.strokeColor('indigo');
    CosMan.strokeWeight(4);


}