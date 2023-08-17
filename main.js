let CANVAS_SIZE = 900; // In pixels (default)
let CANVAS_HALF = CANVAS_SIZE / 2;
let UNIT = CANVAS_SIZE / 4;
let X_ORIGIN = CANVAS_HALF;
let Y_ORIGIN = CANVAS_HALF;

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
    constructor(mode = 'default') {
        if(mode == 'off') {
            this.sin_ = false;
            this.cos_ = false;
            this.tan_ = false;

            this.csc_ = false;
            this.sec_ = false;
            this.cot_ = false;

            this.unitTriangle_ = false;
            this.triangle_ = false;
            
            this.arc_ = false;
            this.innerArc_ = false;
            this.outterArc_ = false;
            this.mouseArc_ = false;

            this.cardPoints_ = false;
            this.xAxis_ = false;
            this.yAxis_ = false;
            this.grid_ = false;
            this.gridDensity_ = 1;
            this.origin_ = false;

            this.circle_ = false;
            this.unitCirc_ = false;
            this.quadi_ = false;
            this.quadii_ = false;
            this.quadiii_ = false;
            this.quadiv_ = false;

        } else if(mode == 'default') {
            this.sin_ = false;
            this.cos_ = false;
            this.tan_ = false;

            this.csc_ = false;
            this.sec_ = false;
            this.cot_ = false;

            this.unitTriangle_ = true;
            this.triangle_ = false;
            
            this.arc_ = true;
            this.mouseArc_ = false;

            this.cardPoints_ = true;
            this.xAxis_ = true;
            this.yAxis_ = true;
            this.grid_ = false;
            this.gridDensity_ = 1;
            this.origin_ = true;

            this.circle_ = true;
            this.unitCirc_ = false;
            this.quadi_ = true;
            this.quadii_ = true;
            this.quadiii_ = true;
            this.quadiv_ = true;
        } else if(mode == 'on') {
            this.sin_ = true;
            this.cos_ = true;
            this.tan_ = true;

            this.csc_ = true;
            this.sec_ = true;
            this.cot_ = true;

            this.unitTriangle_ = true;
            this.triangle_ = true;
            
            this.arc_ = true;
            this.mouseArc_ = true;

            this.cardPoints_ = true;
            this.xAxis_ = true;
            this.yAxis_ = true;
            this.grid_ = true;
            this.gridDensity_ = 1;
            this.origin_ = true;

            this.circle_ = true;
            this.unitCirc_ = true;
            this.quadi_ = true;
            this.quadii_ = true;
            this.quadiii_ = true;
            this.quadiv_ = true;

        }

        this.openPanel_ = 0;
        this.hidePanels_ = true;

    }

    getSin() {
        if(this.sin_) {
            document.getElementById('sin').innerHTML = 'On';
        } else {
            document.getElementById('sin').innerHTML = 'Off'; 
        }
        return this.sin_;
    }
    getCos() {
        if(this.cos_) {
            document.getElementById('cos').innerHTML = 'On';
        } else {
            document.getElementById('cos').innerHTML = 'Off'; 
        }
        return this.cos_;
    }
    getTan() { return this.tan_; }
    getCsc() { return this.csc_; }
    getSec() { return this.sec_; }
    getCot() { return this.cot_; }

    getCircle() {
        if(this.circle_) {
            document.getElementById('circle').innerHTML = 'On';
        } else {
            document.getElementById('circle').innerHTML = 'Off'; 
        }
        return this.circle_
    }
    getCardPoints() {
        if(this.cardPoints_) {
            document.getElementById('cardPoints').innerHTML = 'On';
        } else {
            document.getElementById('cardPoints').innerHTML = 'Off'; 
        }
        return this.cardPoints_;
    }

    getUnitCirc() {
        if(this.unitCirc_) {
            document.getElementById('unitCirc').innerHTML = 'On';
        } else {
            document.getElementById('unitCirc').innerHTML = 'Off'; 
        }

        return this.unitCirc_;
    }

    getGrid() {
        if(this.grid_) {
            document.getElementById('grid').innerHTML = 'On';
        } else {
            document.getElementById('grid').innerHTML = 'Off'; 
        }
        return this.grid_;
    }
    getGridDensity() { return this.gridDensity_; }
    getOrigin() {
        if(this.origin_) {
            document.getElementById('origin').innerHTML = 'On';
        } else {
            document.getElementById('origin').innerHTML = 'Off'; 
        }
        return this.origin_;
    }
    getXAxis() {
        if(this.xAxis_) {
            document.getElementById('xAxis').innerHTML = 'On';
        } else {
            document.getElementById('xAxis').innerHTML = 'Off'; 
        }
        return this.xAxis_
    }
    getYAxis() {
        if(this.yAxis_) {
            document.getElementById('yAxis').innerHTML = 'On';
        } else {
            document.getElementById('yAxis').innerHTML = 'Off'; 
        }

        return this.yAxis_
    }


    getArc() {
        if(this.arc_) {
            document.getElementById('arc').innerHTML = 'On';
        } else {
            document.getElementById('arc').innerHTML = 'Off'; 
        }

        return this.arc_;
    }
    getMouseArc() {
        if(this.mouseArc_) {
            document.getElementById('mouseArc').innerHTML = 'On';
        } else {
            document.getElementById('mouseArc').innerHTML = 'Off'; 
        }

        return this.mouseArc_;
    }

    getTriangle() {
        if(this.triangle_) {
            document.getElementById('triangle').innerHTML = 'On';
        } else {
            document.getElementById('triangle').innerHTML = 'Off'; 
        }
        return this.triangle_;
    }
    getUnitTriangle() {
        if(this.unitTriangle_) {
            document.getElementById('unitTriangle').innerHTML = 'On';
        } else {
            document.getElementById('unitTriangle').innerHTML = 'Off'; 
        }
        return this.unitTriangle_;
    }
    
    getHidePanels() {
        if(this.hidePanels_) {
            document.getElementById('hidePanels').innerHTML = 'Show';
        } else {
            document.getElementById('hidePanels').innerHTML = 'Hide'; 
        }

        return this.hidePanels_;
    }

    butSin() {
        this.sin_ = !this.sin_;

        if(this.sin_) {
            document.getElementById('sin').innerHTML = 'On';
        } else {
            document.getElementById('sin').innerHTML = 'Off'; 
        }

    }
    butCos() {
        this.cos_ = !this.cos_;
        if(this.cos_) {
            document.getElementById('cos').innerHTML = 'On';
        } else {
            document.getElementById('cos').innerHTML = 'Off'; 
        }
    }

    butTan() { this.tan_ = !this.tan_; }
    butCsc() { this.csc_ = !this.csc_; }
    butSec() { this.sec_ = !this.sec_; }
    butCot() { this.cot_ = !this.cot_; }

    butCircle() {
        this.circle_ = !this.circle_;
        if(this.circle_) {
            document.getElementById('circle').innerHTML = 'On';
        } else {
            document.getElementById('circle').innerHTML = 'Off'; 
        }

    }
    butUnitCirc() {
        this.unitCirc_ = !this.unitCirc_;
        this.cardPoints_ = this.unitCirc_;

        if(this.unitCirc_) {
            document.getElementById('unitCirc').innerHTML = 'On';
        } else {
            document.getElementById('unitCirc').innerHTML = 'Off'; 
        }
        if(this.cardPoints_) {
            document.getElementById('cardPoints').innerHTML = 'On';
        } else {
            document.getElementById('cardPoints').innerHTML = 'Off'; 
        }

    }
    butCardPoints() {
        this.cardPoints_ = !this.cardPoints_;
        if(this.cardPoints_) {
            document.getElementById('cardPoints').innerHTML = 'On';
        } else {
            document.getElementById('cardPoints').innerHTML = 'Off'; 
        }

    }

    butOrigin() {
        this.origin_ = !this.origin_;
        if(this.origin_) {
            document.getElementById('origin').innerHTML = 'On';
        } else {
            document.getElementById('origin').innerHTML = 'Off'; 
        }

    }
    butGrid() {
        this.grid_ = !this.grid_
        if(this.grid_) {
            document.getElementById('grid').innerHTML = 'On';
        } else {
            document.getElementById('grid').innerHTML = 'Off'; 
        }

    }

    butGridDensity(inc) {
        this.grid_ = true;
        if(inc) {
            ++this.gridDensity_;
        } else {
            --this.gridDensity_;
        }

        if(this.gridDensity_ < 1 || this.gridDensity_ > 4) {
            this.gridDensity_ = 1;
        }
    }
    butXAxis() { this.xAxis_ = !this.xAxis_; }
    butYAxis() { this.yAxis_ = !this.yAxis_; }

    butArc() {
        this.arc_ = !this.arc_;
        if(this.arc_) {
            document.getElementById('arc').innerHTML = 'On';
        } else {
            document.getElementById('arc').innerHTML = 'Off'; 
        }
    }
    butMouseArc() {
        this.mouseArc_ = !this.mouseArc_;
        if(this.mouseArc_) {
            document.getElementById('mouseArc').innerHTML = 'On';
        } else {
            document.getElementById('mouseeArc').innerHTML = 'Off'; 
        }
}

    butTriangle() { this.triangle_ = !this.triangle_; }
    butUnitTriangle() { this.unitTriangle_ = !this.unitTriangle_; }


    butNextPanel(reverse) {
        if(this.hidePanels_ == true) {
            this.hidePanels_ = false;
            document.getElementById('panel0').style.display="none";
            document.getElementById('panel1').style.display="none";
            document.getElementById('panel2').style.display="none";
            document.getElementById('panel3').style.display="none";
            document.getElementById('panel4').style.display="none";
            this.getHidePanels();
        }
            if(reverse) {
                --this.openPanel_;
                if(this.openPanel_ < 0) { this.openPanel_ = 4; }

            } else {
                ++this.openPanel_;
                if(this.openPanel_ > 4) { this.openPanel_ = 0; }

            }

            if(this.openPanel_ == 0) {
                document.getElementById('panel0').style.display="block";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";

            } else if(this.openPanel_ == 1) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="block";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";


            } else if (this.openPanel_ == 2) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="block";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";

            } else if (this.openPanel_ == 3) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="block";
                document.getElementById('panel4').style.display="none";

            } else if (this.openPanel_ == 4) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="block";

            }
        
    }

    butHidePanels() {
        if(!this.hidePanels_) {
            document.getElementById('hidePanels').innerHTML = 'Show';
            hidePanels();
        } else {
            document.getElementById('hidePanels').innerHTML = 'Hide';
            this.openPanel_ = 0;
            document.getElementById('panel0').style.display="block";
        }
        this.hidePanels_ = !this.hidePanels_;

    }
};



let CosMan;
let SetMan;


function main() {
    CosMan = new CosmeticManager();
    SetMan = new SettingsManager();
    hidePanels();
}

function hidePanels() {
        document.getElementById('panel0').style.display="none";
        document.getElementById('panel1').style.display="none";
        document.getElementById('panel2').style.display="none";
        document.getElementById('panel3').style.display="none";
        document.getElementById('panel4').style.display="none";
}

function newSetMan(set) {
    SetMan = new SettingsManager(set);

    if(set == 'off') {
        hidePanels();
        SetMan.getHidePanels();
    }

    if(set == 'default') {
        CANVAS_SIZE = 900;
        CANVAS_HALF = CANVAS_SIZE / 2;
        UNIT = CANVAS_SIZE / 4;
        X_ORIGIN = CANVAS_HALF;
        Y_ORIGIN = CANVAS_HALF;

        setup();
        root.style.setProperty('--canvas-size', CANVAS_SIZE + 'px');
        root.style.setProperty('--inner-panel-size', (CANVAS_SIZE - 60) + 'px');
    }

}

// P5 function.
let canvas;
function setup() {
    canvas = createCanvas(CANVAS_SIZE + CANVAS_HALF, CANVAS_SIZE);
    canvas.parent('p5');

    textSize(20);
    fill(255, 255, 255);

    document.getElementById("canvasSize").innerHTML = 'Current Size: ' + CANVAS_SIZE + 'px';

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
    if(SetMan.getCircle()) drawCircle();
    if(SetMan.getGrid()) drawGrid(SetMan.getGridDensity());
    drawAxis(SetMan.getXAxis(), SetMan.getYAxis());
    if(SetMan.getCardPoints()) drawCardinal();
    if(SetMan.getUnitCirc()) drawUnitCirc();
    pop();

    drawArc(SetMan.getArc(), SetMan.getMouseArc());
    if(SetMan.getTriangle()) drawTriangle();
    if(SetMan.getUnitTriangle()) drawUnitTriangle();
    if(SetMan.getSin()) drawSin(); 
    if(SetMan.getCos()) drawCos(); 
    //drawTan();

    //drawSin();
    //drawSec();
    //drawCot();
    //}
    drawInfoBackground();

    drawPosInfo();
    drawMousePoint();
    if(SetMan.getOrigin()) drawOrigin();

}

// UTIL FUNCTIONS

function forwardUnitCircle() {
    unitCircleInc--;
    if(unitCircleInc < 0) {
        unitCircleInc = UNIT_CIRCLE_ANGLES.length - 1;
    }

    snapUnitCircle(UNIT_CIRCLE_ANGLES[unitCircleInc]);
}
function backwardUnitCircle() {
    unitCircleInc++;
    if (unitCircleInc > UNIT_CIRCLE_ANGLES.length - 1) {
        unitCircleInc = 0;
    }    
    snapUnitCircle(UNIT_CIRCLE_ANGLES[unitCircleInc]);

}

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

function increaseCanvasSize() {
    CANVAS_SIZE += 100;

    if(CANVAS_SIZE < 900 || CANVAS_SIZE > 1600) {
        CANVAS_SIZE = 1600
    }

    CANVAS_HALF = CANVAS_SIZE / 2;
    UNIT = CANVAS_SIZE / 4;
    X_ORIGIN = CANVAS_HALF;
    Y_ORIGIN = CANVAS_HALF;

    setup();
    root.style.setProperty('--canvas-size', CANVAS_SIZE + 'px');
    root.style.setProperty('--inner-panel-size', (CANVAS_SIZE - 60) + 'px');
}

function decreaseCanvasSize() {
    CANVAS_SIZE -= 100;

    if(CANVAS_SIZE < 900 || CANVAS_SIZE > 1600) {
        CANVAS_SIZE = 900
    }

    CANVAS_HALF = CANVAS_SIZE / 2;
    UNIT = CANVAS_SIZE / 4;
    X_ORIGIN = CANVAS_HALF;
    Y_ORIGIN = CANVAS_HALF;

    setup();
    root.style.setProperty('--canvas-size', CANVAS_SIZE + 'px');
    root.style.setProperty('--inner-panel-size', (CANVAS_SIZE - 60) + 'px');
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

function drawAxis(xAxis, yAxis) {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(false);

    if(xAxis) line(CANVAS_HALF, 0, CANVAS_HALF, CANVAS_SIZE);
    if(yAxis) line(0, CANVAS_HALF, CANVAS_SIZE, CANVAS_HALF);

}

function drawGrid(gridDensity = 1) {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    for(let i = 0; i <= CANVAS_SIZE; i += (UNIT/gridDensity)) {
        for(let j = 0; j <= CANVAS_SIZE; j += (UNIT/gridDensity)) {
            if(j == X_ORIGIN && SetMan.getYAxis()){
                CosMan.strokeWeight(2);
                CosMan.strokeDashed(false);
            } else{
                CosMan.strokeWeight(2);
                CosMan.strokeDashed(true);
            }


            line(0, j, CANVAS_SIZE, j);
        }

        if(i == Y_ORIGIN && SetMan.getXAxis())
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

function drawArc(unitArc = true, arcFollow = false) {
    CosMan.strokeColor('black');
    CosMan.strokeWeight(4);

    if(unitArc) {
        fill('rgba(0, 255, 0, .5)');
        arc(X_ORIGIN, Y_ORIGIN, UNIT * 2, UNIT * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    }
    if(arcFollow) {
        fill('rgba(0, 0, 255, .5)');
        arc(X_ORIGIN, Y_ORIGIN, originDist() * 2, originDist() * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
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
    fill('#545454');
    rect(CANVAS_SIZE + 20, 10, CANVAS_HALF - 40, CANVAS_SIZE - 20);
    fill('white');
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

function drawInfoBackground() {
    fill('#d3d3d3')
    CosMan.strokeWeight(4);
    CosMan.strokeColor('black');
    rect(CANVAS_SIZE, 0, CANVAS_SIZE, CANVAS_SIZE)
}
