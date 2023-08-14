const CANVAS_SIZE = 1600; // In pixels
const CANVAS_HALF = CANVAS_SIZE / 2;
const UNIT = CANVAS_SIZE / 4;
const X_ORIGIN = CANVAS_HALF;
const Y_ORIGIN = CANVAS_HALF;
const PI = Math.PI;

const UNIT_CIRCLE_ANGLES = [0*PI, PI/6, PI/4, PI/3, PI/2, 2*PI/3, 3*PI/4, 5*PI/6, 7*PI/6, 5*PI/4, 4*PI/3, 3*PI/2, 5*PI/3, 7*PI/4, 11*PI/6].reverse();
let unitCircleInc = 0;



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
    textSize(20);
    fill(255, 255, 255);


}

// P5 function.
function preload() {
}

// P5 function that drives the entire animation.
function draw() {
    background('#545454');
    angleMode(RADIANS);


    push();
    rotate(3 * Math.PI / 2);
    translate(-CANVAS_SIZE, 0);
    drawCircle();
    drawGrid();
    drawAxis();
    drawPoints();
    drawUnitCirc();
    pop();

    drawArc();
    drawTriangle();

    drawPosInfo();
    drawMousePoint();

}

// UTIL FUNCTIONS

function snapUnitCircle(ang) {
    mouseX = relX(Math.cos(ang));
    mouseY = relY(Math.sin(ang));
}

// P5 function.
function keyPressed() {



    if(keyCode === RIGHT_ARROW) {
        unitCircleInc--;
        if(unitCircleInc < 0) {
            unitCircleInc = UNIT_CIRCLE_ANGLES.length - 1;
        }
    
        snapUnitCircle(UNIT_CIRCLE_ANGLES[unitCircleInc]);
    }
    if(keyCode === LEFT_ARROW) {
        unitCircleInc++;
        if (unitCircleInc > UNIT_CIRCLE_ANGLES.length - 1) {
            unitCircleInc = 0;
        }    
        snapUnitCircle(UNIT_CIRCLE_ANGLES[unitCircleInc]);
    }
    console.log(unitCircleInc);

}

function relX(x) {
    return (x * UNIT) + X_ORIGIN;
}

function relY(y) {
    return (y * UNIT) + Y_ORIGIN;
}

function relMouseX() {
    return ((mouseX - X_ORIGIN) / CANVAS_SIZE) * 4;
}
function relMouseY() {
    return (-1 * (mouseY - Y_ORIGIN) / CANVAS_SIZE) * 4;
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
    return NaN;
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

    line(CANVAS_SIZE/4, CANVAS_HALF, CANVAS_SIZE * 3/4, CANVAS_HALF);
    line(CANVAS_HALF, CANVAS_SIZE/4, CANVAS_HALF, CANVAS_SIZE * 3/4);

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
    fill('rgba(0, 255, 0, .5)');

    arc(X_ORIGIN, Y_ORIGIN, UNIT * 2, UNIT * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    fill('rgba(0, 0, 255, .5)');
    
    arc(X_ORIGIN, Y_ORIGIN, UNIT, UNIT, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
}

function drawUnitCirc() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(0, 0, 0, 0)')


    // QUAD I
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(PI/6)), relY(Math.sin(PI/6)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(PI/4)), relY(Math.sin(PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(PI/3)), relY(Math.sin(PI/3)));

    // QUAD II
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(2*PI/3)), relY(Math.sin(2*PI/3)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(3*PI/4)), relY(Math.sin(3*PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(5*PI/6)), relY(Math.sin(5*PI/6)));


    // QUAD III
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(7*PI/6)), relY(Math.sin(7*PI/6)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(5*PI/4)), relY(Math.sin(5*PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(4*PI/3)), relY(Math.sin(4*PI/3)));



    // QUAD IV

    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(5*PI/3)), relY(Math.sin(5*PI/3)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(7*PI/4)), relY(Math.sin(7*PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(11*PI/6)), relY(Math.sin(11*PI/6)));



    CosMan.strokeColor('black');
    CosMan.strokeWeight(16);

    // QUAD I
    point(relX(Math.cos(PI/6)), relY(Math.sin(PI/6)));
    point(relX(Math.cos(PI/4)), relY(Math.sin(PI/4)));
    point(relX(Math.cos(PI/3)), relY(Math.sin(PI/3)));

    // QUAD II
    point(relX(Math.cos(2*PI/3)), relY(Math.sin(2*PI/3)));
    point(relX(Math.cos(3*PI/4)), relY(Math.sin(3*PI/4)));
    point(relX(Math.cos(5*PI/6)), relY(Math.sin(5*PI/6)));


    // QUAD III
    point(relX(Math.cos(7*PI/6)), relY(Math.sin(7*PI/6)));
    point(relX(Math.cos(5*PI/4)), relY(Math.sin(5*PI/4)));
    point(relX(Math.cos(4*PI/3)), relY(Math.sin(4*PI/3)));



    // QUAD IV

    point(relX(Math.cos(5*PI/3)), relY(Math.sin(5*PI/3)));
    point(relX(Math.cos(7*PI/4)), relY(Math.sin(7*PI/4)));
    point(relX(Math.cos(11*PI/6)), relY(Math.sin(11*PI/6)));

    CosMan.strokeDashed(false);

}

function drawTriangle() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(255,0,0, 0.5)');

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
    CosMan.strokeWeight(1);
    let ang = quadArcTan(relMouseX(), relMouseY()) / PI;
    if(ang < 0) {
        ang = quadArcTan(relMouseX(), relMouseY()) / PI;
        ang += 2;
    }
    fill('white');
    rect(30, 20, 400, 250)
    fill('black');
    text('Mouse Posistion (x, y) = (' + parseFloat(relMouseX()).toFixed(3) + ', ' + parseFloat(relMouseY()).toFixed(3) + ')', 50, 50);
    text('Angle (θ) = ' + parseFloat(ang).toFixed(3) + '𝜋 / ' + parseInt(ang * 180) + '°', 50, 100);
    text('sin(θ) = ' + parseFloat(relMouseY()).toFixed(3), 50, 150);
    text('cos(θ) = ' + parseFloat(relMouseX()).toFixed(3), 50, 200);
    text('tan(θ) = ' + parseFloat(relMouseY() / relMouseX()).toFixed(3), 50, 250);


}
