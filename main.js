const CANVAS_SIZE = 1000; // In pixels
const UNIT = CANVAS_SIZE / 2;
const PI = 3.14;

let CosMan;

function main() {
    CosMan = new CosmeticManager();
}

// P5 function.
function setup() {
    createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    textSize(24);
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
    drawTriangle();
    drawMousePoint();
    drawPosInfo();

}

// UTIL FUNCTIONS

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

}





function relMouseX() { return ((mouseX - UNIT) / CANVAS_SIZE) * 4; }
function relMouseY() { return (-1 * (mouseY - UNIT) / CANVAS_SIZE) * 4; }



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
    CosMan.strokeColor('black');
    CosMan.strokeWeight(4);
    fill('#d3d3d3');

    circle(CANVAS_SIZE/2, CANVAS_SIZE / 2, UNIT);
}

function drawGrid() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    drawingContext.setLineDash([5, 15]);
    line(CANVAS_SIZE/4, CANVAS_SIZE/2, CANVAS_SIZE * 3/4, CANVAS_SIZE/2);
    line(CANVAS_SIZE/2, CANVAS_SIZE/4, CANVAS_SIZE/2, CANVAS_SIZE * 3/4);
    drawingContext.setLineDash([0, 0]);
}

function drawPoints() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(16);
    point(UNIT, UNIT);

    point(CANVAS_SIZE/4, CANVAS_SIZE/2);
    point(CANVAS_SIZE * 3/4, CANVAS_SIZE/2);
    point(CANVAS_SIZE/2, CANVAS_SIZE/4);
    point(CANVAS_SIZE/2, CANVAS_SIZE * 3/4); 

}

function drawArc() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(4);
    fill('pink');

    arc(UNIT, UNIT, UNIT, UNIT, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    fill('white');
    
    arc(UNIT, UNIT, UNIT/3, UNIT/3, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
}

function drawUnitCirc() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
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

    CosMan.strokeDashed(false);

}

function drawTriangle() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(0,0,255, 0.25)');

    triangle(UNIT, UNIT, mouseX, UNIT, mouseX, mouseY);
    CosMan.strokeDashed(false);

}

function drawMousePoint() {
    CosMan.strokeColor('red');
    CosMan.strokeWeight(16);
    point(mouseX, mouseY);
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
}

function drawPosInfo() {
    let ang = quadArcTan(relMouseX(), relMouseY()) / PI;
    if(ang < 0) {
        ang = quadArcTan(relMouseX(), relMouseY()) / PI;
        ang += 2;
    }
    fill('black');
    text('Mouse Posistion (x, y) = (' + parseFloat(relMouseX()).toFixed(2) + ', ' + parseFloat(relMouseY()).toFixed(2) + ')', 50, 50);
    text('Angle = ' + parseFloat(ang).toFixed(2) + '𝜋 / ' + parseInt(ang * 180) + '°', 50, 100);


}