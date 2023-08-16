const CANVAS_SIZE = 900; // In pixels
const CANVAS_HALF = CANVAS_SIZE / 2;
const UNIT = CANVAS_SIZE / 4;
const X_ORIGIN = CANVAS_HALF;
const Y_ORIGIN = CANVAS_HALF;
const PI = Math.PI;


let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let cssCanvasSize = rootStyles.getPropertyValue('--canvas-size');
root.style.setProperty('--canvas-size', CANVAS_SIZE + 'px');
root.style.setProperty('--inner-panel-size', (CANVAS_SIZE - 60) + 'px');

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
};

class SettingsManager {
    constructor() {
        this.sin_ = false;
        this.cos_ = false;
        this.tan_ = false;

        this.csc_ = false;
        this.sec_ = false;
        this.cot_ = false;

        this.unitTriangle_ = true;
        this.triangle_ = true;
        
        this.arc_ = true;
        this.innerArc_ = true;
        this.outterArc_ = true;
        this.mouseArc_ = false;

        this.cardPoints_ = true;
        this.xAxis_ = true;
        this.yAxis_ = true;
        this.grid_ = true;
        this.gridDensity_ = 1;

        this.circle_ = true;
        this.unitCirc_ = true;
        this.quadi_ = true;
        this.quadii_ = true;
        this.quadiii_ = true;
        this.quadiv_ = true;

    }

    getSin() { return this.sin_; }
    getCos() { return this.cos_; }
    getTan() { return this.tan_; }
    getCsc() { return this.csc_; }
    getSec() { return this.sec_; }
    getCot() { return this.cot_; }

    getCircle() { return this.circle_ }
    getUnitCirc() { return this.unitCirc_; }
    getCardPoints() { return this.cardPoints_; }

    getArc() { return this.arc_; }

    getTriangle() { return this.triangle_; }
    getUnitTriangle() { return this.unitTriangle_; }
    


    butSin() { this.sin_ = !(this.sin_); }
    butCos() { this.cos_ = !this.cos_; }
    butTan() { this.tan_ = !this.tan_; }
    butCsc() { this.csc_ = !this.csc_; }
    butSec() { this.sec_ = !this.sec_; }
    butCot() { this.cot_ = !this.cot_; }

    butCircle() { this.circle_ = !this.circle_; }
    butUnitCirc() { this.unitCirc_ = !this.unitCirc_; }
    butCardPoints() { this.cardPoints_ = !this.cardPoints_; }

    butArc() { this.arc_ = !this.arc_; }

    butTriangle() { this.triangle_ = !this.triangle_; }
    butUnitTriangle() { this.unitTriangle_ = !this.unitTriangle_; }



};

let CosMan;
let SetMan;


function main() {
    CosMan = new CosmeticManager();
    SetMan = new SettingsManager();
}

// P5 function.

function setup() {
    const canvas = createCanvas(CANVAS_SIZE * 5/3, CANVAS_SIZE);
    canvas.parent('p5');

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
    if(SetMan.getCircle())drawCircle();
    drawGrid();
    drawAxis();
    if(SetMan.getCardPoints()) drawCardinal();
    if(SetMan.getUnitCirc()) drawUnitCirc();
    pop();


    //if(mouseX < CANVAS_SIZE) {


    if(SetMan.getArc()) drawArc(false);
    if(SetMan.getTriangle()) drawTriangle();
    if(SetMan.getUnitTriangle()) drawUnitTriangle();
    if(SetMan.getSin()) drawSin(); 
    if(SetMan.getCos()) drawCos(); 
    //drawTan();

    //drawSin();
    //drawSec();
    //drawCot();
    //}
    drawSettingsRect();

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
    let ang;
    if(x > 0) {
        ang = Math.atan(y/x);
    } else if (x < 0 && y >= 0) {
        ang = Math.atan(y/x) + PI;
    } else if(x < 0 && y < 0) {
        ang = Math.atan(y/x) - PI;
    } else if (x == 0 && y > 0) {
        ang = PI/2;
    } else if (x == 0 && y < 0) {
        ang = -1 * PI/2;
    } else if (x == 0 && y == 0) {
        ang = NaN;
    }

    return ang;
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
            if(j == X_ORIGIN){
                CosMan.strokeWeight(2);
                CosMan.strokeDashed(false);
            } else{
                CosMan.strokeWeight(2);
                CosMan.strokeDashed(true);
            }


            line(0, j, CANVAS_SIZE, j);
        }

        if(i == Y_ORIGIN)
            CosMan.strokeDashed(false);
        else
            CosMan.strokeDashed(true);

        

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
    fill('rgba(255,100,100, 0.5)');
    let ang = quadArcTan(relMouseX(), relMouseY()) / PI;
    if(ang < 0) {
        ang = quadArcTan(relMouseX(), relMouseY()) / PI;
        ang += 2;
    }
    ang *= PI;

    if(mouseInCirc()) {
        triangle(X_ORIGIN, Y_ORIGIN, mouseX, Y_ORIGIN, mouseX, mouseY);

    } else {

        triangle(X_ORIGIN, Y_ORIGIN,
            relX(Math.cos(ang)), Y_ORIGIN,
            relX(Math.cos(ang)), relY(-Math.sin(ang)));

            CosMan.strokeColor('red');
            CosMan.strokeWeight(16);

            point(relX(Math.cos(ang)), Y_ORIGIN);   
            point(relX(Math.cos(ang)), relY(-Math.sin(ang)));   


    }
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
    CosMan.strokeColor('black');
    let ang = quadArcTan(relMouseX(), relMouseY()) / PI;
    if(ang < 0) {
        ang = quadArcTan(relMouseX(), relMouseY()) / PI;
        ang += 2;
    }
    fill('white');
    rect(CANVAS_SIZE + 20, 20, CANVAS_HALF, CANVAS_SIZE - 40);
    fill('black');
    text('Mouse Posistion (x, y) = (' + parseFloat(relMouseX()).toFixed(3) + ', ' + parseFloat(relMouseY()).toFixed(3) + ')', CANVAS_SIZE + 50, 50);
    text('Angle (θ) = ' + parseFloat(ang).toFixed(3) + '𝜋\t/\t' + parseInt(ang * 180) + '°', CANVAS_SIZE + 50, 100);
    text('sin(θ) = ' + parseFloat(relMouseY()).toFixed(3), CANVAS_SIZE + 50, 150);
    text('cos(θ) = ' + (Math.abs(parseFloat(relMouseX()).toFixed(3)) == 0 ? "0.000" : parseFloat(relMouseX()).toFixed(3)), CANVAS_SIZE + 50, 200); // Negative 0 is more of a misnomer. This is a corner case catcher.
    text('tan(θ) = ' + (Math.abs(parseFloat(relMouseY() / relMouseX()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(relMouseY() / relMouseX()).toFixed(3)), CANVAS_SIZE + 50, 250); // Tangent goes to infinity corner case. Set it to undefined instead of a huge number.

    text('Triangle area = ' + (Math.abs(parseFloat(triArea(relMouseX(), relMouseY())).toFixed(3)) < 0.00001 ? 0 : Math.abs(parseFloat(triArea(relMouseX(), relMouseY())).toFixed(3))), CANVAS_SIZE + 50, 300);

    text('csc(θ) = ' + (Math.abs(parseFloat(1/relMouseY()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(1/relMouseY()).toFixed(3)), CANVAS_SIZE + 250, 150);
    text('sec(θ) = ' + (Math.abs(parseFloat(1/relMouseX()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(1/relMouseX()).toFixed(3)), CANVAS_SIZE + 250, 200); // Negative 0 is more of a misnomer. This is a corner case catcher.
    text('cot(θ) = ' + (Math.abs(parseFloat(relMouseX() / relMouseY()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(relMouseX() / relMouseY()).toFixed(3)), CANVAS_SIZE + 250, 250); // Tangent goes to infinity corner case. Set it to undefined instead of a huge number.

    text('Amplitude = ' + parseFloat(originDist()/UNIT).toFixed(3), CANVAS_SIZE + 50, 350);
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

function drawSettingsRect() {
    fill('#d3d3d3')
    CosMan.strokeWeight(4);
    CosMan.strokeColor('black');
    rect(CANVAS_SIZE, 0, CANVAS_SIZE, CANVAS_SIZE)
}

