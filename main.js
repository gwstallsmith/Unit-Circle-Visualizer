const CANVAS_SIZE = 1600; // In pixels
const CANVAS_HALF = CANVAS_SIZE / 2;
const UNIT = CANVAS_SIZE / 4;
const X_ORIGIN = CANVAS_HALF;
const Y_ORIGIN = CANVAS_HALF;
const PI = Math.PI;

const UNIT_CIRCLE_ANGLES = [0*PI, PI/6, PI/4, PI/3, PI/2, 2*PI/3, 3*PI/4, 5*PI/6, PI, 7*PI/6, 5*PI/4, 4*PI/3, 3*PI/2, 5*PI/3, 7*PI/4, 11*PI/6].reverse();

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

// P5 function.
let unitCircleInc = 0;
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
    drawCardinal();
    drawUnitCirc();
    pop();

    drawArc();
    drawTriangle();
    drawUnitTriangle();
    //drawSin();
    //drawCos();
    //drawTan();

    //drawSin();
    //drawSec();
    //drawCot();

    drawPosInfo();
    drawMousePoint();
    drawOrigin()

}

// UTIL FUNCTIONS

function snapUnitCircle(ang) {
    mouseX = relX(Math.cos(ang));
    mouseY = relY(Math.sin(ang));
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

function originDist() {
    return (Math.sqrt(Math.pow(mouseX - X_ORIGIN, 2) + (Math.pow(mouseY - Y_ORIGIN, 2))))
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

function triArea(x, y) {
    let area = 0;

    area = ((relX(x) - X_ORIGIN) * (relY(y) - Y_ORIGIN)) / 2;
    return area / CANVAS_SIZE / 100;
}

function mouseInCirc() {
    return originDist() <= UNIT;
}


// DRAW FUNCTIONS

function drawOrigin() {
    CosMan.strokeColor('red');
    CosMan.strokeWeight(16);

    point(X_ORIGIN, Y_ORIGIN);   
}

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

function drawGrid(gridDensity = 1) {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    for(let i = 0; i <= CANVAS_SIZE; i += (UNIT/gridDensity)) {
        for(let j = 0; j <= CANVAS_SIZE; j += (UNIT/gridDensity)) {
            line(0, j, CANVAS_SIZE, j);
        }
        line(i, 0, i, CANVAS_SIZE);

    }
    CosMan.strokeDashed(false);
}

function drawCardinal() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(16);

    point(X_ORIGIN - UNIT, Y_ORIGIN);
    point(X_ORIGIN + UNIT, Y_ORIGIN);
    point(X_ORIGIN, Y_ORIGIN - UNIT);
    point(X_ORIGIN, Y_ORIGIN + UNIT);
}

function drawArc(arcFollow = false) {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(4);
    fill('rgba(0, 255, 0, .5)');

    arc(X_ORIGIN, Y_ORIGIN, UNIT * 2, UNIT * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);

    if(mouseInCirc() && arcFollow) {
        fill('rgba(0, 0, 255, .5)');
        arc(X_ORIGIN, Y_ORIGIN, originDist() * 2, originDist() * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    }
    else {
        fill('rgba(0, 0, 255, .5)');
        arc(X_ORIGIN, Y_ORIGIN, UNIT, UNIT, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    }
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
    fill('rgba(255,180,180, 0.5)');

    triangle(X_ORIGIN, Y_ORIGIN, mouseX, Y_ORIGIN, mouseX, mouseY);
    CosMan.strokeDashed(false);
    CosMan.strokeColor('red');
    CosMan.strokeWeight(16);

    point(mouseX, Y_ORIGIN);   

}

function drawUnitTriangle() {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(255,150,150, 0.5)');

    if(mouseInCirc()) {
        triangle(X_ORIGIN, Y_ORIGIN, mouseX, Y_ORIGIN, mouseX, mouseY);

    } else {
        triangle(X_ORIGIN, Y_ORIGIN, X_ORIGIN + Math.cos(relMouseX()) * UNIT, Y_ORIGIN, X_ORIGIN + Math.cos(relMouseX()) * UNIT, X_ORIGIN + Math.cos(relMouseY()) * UNIT, Y_ORIGIN + Math.sin(relMouseY()) * UNIT);

    }

    //triangle(X_ORIGIN, Y_ORIGIN, X_ORIGIN + Math.cos(relMouseX()) * UNIT, Y_ORIGIN, X_ORIGIN + Math.cos(relMouseX()) * UNIT, X_ORIGIN, Y_ORIGIN + Math.sin(relMouseY()) * UNIT);
    CosMan.strokeDashed(false);
    CosMan.strokeColor('red');
    CosMan.strokeWeight(16);

    point(mouseX, Y_ORIGIN);   

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
    CosMan.strokeColor('black');
    let ang = quadArcTan(relMouseX(), relMouseY()) / PI;
    if(ang < 0) {
        ang = quadArcTan(relMouseX(), relMouseY()) / PI;
        ang += 2;
    }
    fill('white');
    rect(30, 20, 400, 300)
    fill('black');
    text('Mouse Posistion (x, y) = (' + parseFloat(relMouseX()).toFixed(3) + ', ' + parseFloat(relMouseY()).toFixed(3) + ')', 50, 50);
    text('Angle (θ) = ' + parseFloat(ang).toFixed(3) + '𝜋\t/\t' + parseInt(ang * 180) + '°', 50, 100);
    text('sin(θ) = ' + parseFloat(relMouseY()).toFixed(3), 50, 150);
    text('cos(θ) = ' + (Math.abs(parseFloat(relMouseX()).toFixed(3)) == 0 ? "0.000" : parseFloat(relMouseX()).toFixed(3)), 50, 200); // Negative 0 is more of a misnomer. This is a corner case catcher.
    text('tan(θ) = ' + (Math.abs(parseFloat(relMouseY() / relMouseX()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(relMouseY() / relMouseX()).toFixed(3)), 50, 250); // Tangent goes to infinity corner case. Set it to undefined instead of a huge number.

    text('Triangle area = ' + (Math.abs(parseFloat(triArea(relMouseX(), relMouseY())).toFixed(3)) < 0.00001 ? 0 : Math.abs(parseFloat(triArea(relMouseX(), relMouseY())).toFixed(3))), 50, 300);

    text('csc(θ) = ' + (Math.abs(parseFloat(1/relMouseY()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(1/relMouseY()).toFixed(3)), 250, 150);
    text('sec(θ) = ' + (Math.abs(parseFloat(1/relMouseX()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(1/relMouseX()).toFixed(3)), 250, 200); // Negative 0 is more of a misnomer. This is a corner case catcher.
    text('cot(θ) = ' + (Math.abs(parseFloat(relMouseX() / relMouseY()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(relMouseX() / relMouseY()).toFixed(3)), 250, 250); // Tangent goes to infinity corner case. Set it to undefined instead of a huge number.
}

function drawSin() {
    CosMan.strokeColor('cyan');
    CosMan.strokeWeight(4);
    line(mouseX, Y_ORIGIN, mouseX, mouseY);
    
}

function drawCos() {
    CosMan.strokeColor('yellow');
    CosMan.strokeWeight(4);

    line(X_ORIGIN, mouseY, mouseX, mouseY);

    CosMan.strokeColor('red');
    CosMan.strokeWeight(16);
    point(mouseX, Y_ORIGIN);   

}

function drawTan() {
    CosMan.strokeColor('magenta');
    CosMan.strokeWeight(4);


    line(mouseX, Y_ORIGIN, mouseX, relMouseY()/relMouseX() * UNIT);

}

function drawSec() {
    CosMan.strokeColor('indigo');
    CosMan.strokeWeight(4);

    line(X_ORIGIN, Y_ORIGIN, mouseX, mouseY);

}