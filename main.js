const CANVAS_SIZE = 1200; // In pixels
const UNIT = CANVAS_SIZE / 2;
const PI = 3.14;


// P5 function.
function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    textSize(16);
    fill(255, 255, 255);

}

// P5 function.
function preload() {
}

// P5 function that drives the entire animation.
function draw() {
    background('#545454');
    angleMode(RADIANS);

    drawCircle();
    drawArc();
    drawGrid();
    drawPoints();
    drawUnitCirc();
    //drawTriangle();

}

// UTIL FUNCTIONS

function relMouseX() { return ((mouseX - UNIT) / CANVAS_SIZE); }
function relMouseY() { return (-1 * (mouseY - UNIT) / CANVAS_SIZE); }


function strokeWeightColor(weight, color) {
    if(weight) strokeWeight(weight);
    if(color) stroke(color);
}

function quadArcTan(x, y) {
    if(x > 0) {
        return Math.atan(y/x);
    } else if (x < 0 && y >= 0) {
        return Math.atan(y/x) + PI;
    } else if(x < 0 && y < 0) {
        return Math.atan(y/x) - PI;
    } else if (x == 0 && y > 0) {
        return PI/2;
    } else if (x == 0 && y < 0) {
        return -1 * PI/2;
    } else if (x == 0 && y == 0) {
        return NaN;
    }
}

// DRAW FUNCTIONS

function drawCircle() {
    strokeWeightColor(4, 'black');
    fill('#d3d3d3');

    circle(CANVAS_SIZE/2, CANVAS_SIZE / 2, UNIT);
}

function drawGrid() {
    strokeWeightColor(2, 'black');
    drawingContext.setLineDash([5, 15]);
    line(CANVAS_SIZE/4, CANVAS_SIZE/2, CANVAS_SIZE * 3/4, CANVAS_SIZE/2);
    line(CANVAS_SIZE/2, CANVAS_SIZE/4, CANVAS_SIZE/2, CANVAS_SIZE * 3/4);
    drawingContext.setLineDash([0, 0]);
}

function drawPoints() {
    strokeWeightColor(16, 'black');

    point(UNIT, UNIT);

    point(CANVAS_SIZE/4, CANVAS_SIZE/2);
    point(CANVAS_SIZE * 3/4, CANVAS_SIZE/2);
    point(CANVAS_SIZE/2, CANVAS_SIZE/4);
    point(CANVAS_SIZE/2, CANVAS_SIZE * 3/4); 

}

function drawTriangle() {

}

function drawArc() {
    strokeWeightColor(4, 'black');
    fill('pink');

    arc(UNIT, UNIT, UNIT, UNIT, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    fill('white');
    arc(UNIT, UNIT, UNIT/3, UNIT/3, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);

    drawingContext.setLineDash([5, 15]);
    line(UNIT, UNIT, mouseX, mouseY);
    strokeWeightColor(16, 'black');
    point(mouseX, mouseY);
    drawingContext.setLineDash([0, 0]);

}


function drawUnitCirc() {
    strokeWeightColor(2, 'black');
    drawingContext.setLineDash([5, 15]);

    // QUAD I
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(PI / 6), UNIT - UNIT * Math.sin(PI / 6));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(PI / 4), UNIT - UNIT * Math.sin(PI / 4));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(PI / 3), UNIT - UNIT * Math.sin(PI / 3));

    // QUAD II
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(2 * PI / 3), UNIT - UNIT * Math.sin(2 * PI / 3));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(3 * PI / 4), UNIT - UNIT * Math.sin(3 * PI / 4));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(5 * PI / 6), UNIT - UNIT * Math.sin(5 * PI / 6));
    
    // QUAD III
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(7 * PI / 6), UNIT - UNIT * Math.sin(7 * PI / 6));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(5 * PI / 4), UNIT - UNIT * Math.sin(5 * PI / 4));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(4 * PI / 3), UNIT - UNIT * Math.sin(4 * PI / 3));

    // QUAD IV
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(5 * PI / 3), UNIT - UNIT * Math.sin(5 * PI / 3));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(7 * PI / 4), UNIT - UNIT * Math.sin(7 * PI / 4));
    line(UNIT, UNIT, UNIT + UNIT * Math.cos(11 * PI / 6), UNIT - UNIT * Math.sin(11 * PI / 6));

    drawingContext.setLineDash([0, 0]);

}