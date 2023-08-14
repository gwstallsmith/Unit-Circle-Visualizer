const CANVAS_SIZE = 1000; // In pixels
const UNIT = CANVAS_SIZE / 4;
const X_ORIGIN = CANVAS_SIZE / 2;
const Y_ORIGIN = CANVAS_SIZE / 2;
const PI = 3.14;

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
    //drawArc();
    drawGrid();
    drawAxis();
    drawPoints();
    drawUnitCirc();
    //drawTriangle();
    drawMousePoint();
    //drawPosInfo();

}

// UTIL FUNCTIONS

function relMouseX() {
    return ((mouseX - X_ORIGIN) / CANVAS_SIZE) * 4;
}
function relMouseY() {
    return (-1 * (mouseY - Y_ORIGIN) / CANVAS_SIZE) * 4;
}

function relCos(ang) {
    return (Math.cos(ang) * UNIT);
}

function relSin(ang) {
    return (Math.sin(ang) * UNIT);
}

function relTheta(ang) {
    return ang - (PI/2);
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
    CosMan.strokeColor('black');
    CosMan.strokeWeight(4);
    fill('#d3d3d3');

    circle(X_ORIGIN, Y_ORIGIN, 2 * UNIT);
}

function drawAxis() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);

    line(CANVAS_SIZE/4, CANVAS_SIZE/2, CANVAS_SIZE * 3/4, CANVAS_SIZE/2);
    line(CANVAS_SIZE/2, CANVAS_SIZE/4, CANVAS_SIZE/2, CANVAS_SIZE * 3/4);

    CosMan.strokeDashed(false);
}

function drawGrid() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    for(let i = 0; i <= CANVAS_SIZE; i += (UNIT)) {
        for(let j = 0; j <= CANVAS_SIZE; j += (UNIT)) {
            line(0, j, CANVAS_SIZE, j);
        }
        line(i, 0, i, CANVAS_SIZE);

    }
    CosMan.strokeDashed(false);
}

function drawPoints() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(16);
    point(X_ORIGIN, Y_ORIGIN);

    point(X_ORIGIN - UNIT, Y_ORIGIN);
    point(X_ORIGIN + UNIT, Y_ORIGIN);
    point(X_ORIGIN, Y_ORIGIN - UNIT);
    point(X_ORIGIN, Y_ORIGIN + UNIT);
    

}

function drawArc() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(4);
    fill('lime');

    arc(X_ORIGIN, Y_ORIGIN, UNIT * 2, UNIT * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    fill('blue');
    
    arc(X_ORIGIN, Y_ORIGIN, UNIT, UNIT, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
}

function drawUnitCirc() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(0, 0, 0, 0)')


    // QUAD I
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(PI / 6), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(PI / 4), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(PI / 3), 0, PIE);

    // QUAD II
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(2 * PI / 3), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(3 * PI / 4), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(5 * PI / 6), 0, PIE);

    // QUAD III
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(7 * PI / 6), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(5 * PI / 4), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(4 * PI / 3), 0, PIE);

    // QUAD IV
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(5 * PI / 3), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(7 * PI / 4), 0, PIE);
    arc(X_ORIGIN, Y_ORIGIN, 2 * UNIT, 2 * UNIT, relTheta(11 * PI / 6), 0, PIE);


    CosMan.strokeColor('black');
    CosMan.strokeWeight(16);

    // QUAD I
    point(X_ORIGIN + relCos(PI/6), Y_ORIGIN + relSin(PI/6));
    point(X_ORIGIN + relCos(PI/4), Y_ORIGIN + relSin(PI/4));
    point(X_ORIGIN + relCos(PI/3), Y_ORIGIN + relSin(PI/3));

    // QUAD II
    point(X_ORIGIN + relCos(2 * PI / 3), Y_ORIGIN + relSin(2 * PI / 3));
    point(X_ORIGIN + relCos(3 * PI / 4), Y_ORIGIN + relSin(3 * PI / 4));
    point(X_ORIGIN + relCos(5 * PI / 6), Y_ORIGIN + relSin(5 * PI / 6));

    // QUAD III
    point(X_ORIGIN + relCos(7 * PI / 6), Y_ORIGIN + relSin(7 * PI / 6));
    point(X_ORIGIN + relCos(5 * PI / 4), Y_ORIGIN + relSin(5 * PI / 4));
    point(X_ORIGIN + relCos(4 * PI / 3), Y_ORIGIN + relSin(4 * PI / 3));

    // QUAD IV
    point(X_ORIGIN + relCos(5 * PI / 3), Y_ORIGIN + relSin(5 * PI / 3));
    point(X_ORIGIN + relCos(7 * PI / 4), Y_ORIGIN + relSin(7 * PI / 4));
    point(X_ORIGIN + relCos(11 * PI / 6), Y_ORIGIN + relSin(11 * PI / 6));


    CosMan.strokeDashed(false);

}

function drawTriangle() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(255,0,0, 0.33)');

    triangle(X_ORIGIN, Y_ORIGIN, mouseX, Y_ORIGIN, mouseX, mouseY);
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
    text('Mouse Posistion (x, y) = (' + parseFloat(relMouseX()).toFixed(3) + ', ' + parseFloat(relMouseY()).toFixed(3) + ')', 50, 50);
    text('Angle (θ) = ' + parseFloat(ang).toFixed(3) + '𝜋 / ' + parseInt(ang * 180) + '°', 50, 100);
    text('sin(θ) = ' + parseFloat(relMouseY()).toFixed(3), 50, 150);
    text('cos(θ) = ' + parseFloat(relMouseX()).toFixed(3), 50, 200);
    text('tan(θ) = ' + parseFloat(relMouseY() / relMouseX()).toFixed(3), 50, 250);


}