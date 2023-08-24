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

            this.allTrigFunc_ = false;

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

            this.hidePanels_ = false;
        } else if(mode == 'default') {
            this.sin_ = false;
            this.cos_ = false;
            this.tan_ = false;

            this.csc_ = false;
            this.sec_ = false;
            this.cot_ = false;

            this.allTrigFunc_ = false;

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
            this.hidePanels_ = true;

        } else if(mode == 'on') {
            this.sin_ = true;
            this.cos_ = true;
            this.tan_ = true;

            this.csc_ = true;
            this.sec_ = true;
            this.cot_ = true;

            this.allTrigFunc_ = true;

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

            this.hidePanels_ = false;
        }

        this.openPanel_ = 0;


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

    getTan() {
        if(this.tan_) {
            document.getElementById('tan').innerHTML = 'On';
        } else {
            document.getElementById('tan').innerHTML = 'Off'; 
        }

        return this.tan_;
    }
    getCsc() {
        if(this.csc_) {
            document.getElementById('csc').innerHTML = 'On';
        } else {
            document.getElementById('csc').innerHTML = 'Off'; 
        }

        return this.csc_;
    }
    getSec() {
        if(this.sec_) {
            document.getElementById('sec').innerHTML = 'On';
        } else {
            document.getElementById('sec').innerHTML = 'Off'; 
        }

        return this.sec_;
    }
    getCot() {
        if(this.cot_) {
            document.getElementById('cot').innerHTML = 'On';
        } else {
            document.getElementById('cot').innerHTML = 'Off'; 
        }

        return this.cot_;
    }

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

    getQuadI() {
        if(this.quadi_) {
            document.getElementById('quadI').innerHTML = 'On';
        } else {
            document.getElementById('quadI').innerHTML = 'Off'; 
        }

        return this.quadi_;
    }

    getQuadII() {
        if(this.quadii_) {
            document.getElementById('quadII').innerHTML = 'On';
        } else {
            document.getElementById('quadII').innerHTML = 'Off'; 
        }

        return this.quadii_;
    }

    getQuadIII() {
        if(this.quadiii_) {
            document.getElementById('quadIII').innerHTML = 'On';
        } else {
            document.getElementById('quadIII').innerHTML = 'Off'; 
        }

        return this.quadiii_;
    }

    getQuadIV() {
        if(this.quadiv_) {
            document.getElementById('quadIV').innerHTML = 'On';
        } else {
            document.getElementById('quadIV').innerHTML = 'Off'; 
        }

        return this.quadiv_;
    }

    // Buttons

    butSin() {
        this.sin_ = !this.sin_;

        if(this.sin_) {
            document.getElementById('sin').innerHTML = 'On';
        } else {
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false;
        }

    }

    butCos() {
        this.cos_ = !this.cos_;
        if(this.cos_) {
            document.getElementById('cos').innerHTML = 'On';
        } else {
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false;
        }
    }

    butTan() {  
        this.tan_ = !this.tan_;
        if(this.tan_) {
            document.getElementById('tan').innerHTML = 'On';
        } else {
            document.getElementById('sin').innerHTML = 'Off';
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false;
        }
    }
    butCsc() {
        this.csc_ = !this.csc_;
        if(this.csc_) {
            document.getElementById('csc').innerHTML = 'On';
        } else {
            document.getElementById('csc').innerHTML = 'Off';
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false; 
        }
    }

    butSec() {
        this.sec_ = !this.sec_;
        if(this.sec_) {
            document.getElementById('sec').innerHTML = 'On';
        } else {
            document.getElementById('sec').innerHTML = 'Off';
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false;
        }
    }

    butCot() {
        this.cot_ = !this.cot_;
        if(this.cot_) {
            document.getElementById('cot').innerHTML = 'On';
        } else {
            document.getElementById('cot').innerHTML = 'Off'; 
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false;
        }
    }

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

        this.getQuadI();
        this.getQuadII();
        this.getQuadIII();
        this.getQuadIV();
        this.getCardPoints();
    }

    butCardPoints() {
        this.cardPoints_ = !this.cardPoints_;
        console.log(this.cardPoints_)
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

    butXAxis() {
        this.xAxis_ = !this.xAxis_;
        if(this.xAxis_) {
            document.getElementById('xAxis').innerHTML = 'On';
        } else {
            document.getElementById('xAxis').innerHTML = 'Off'; 
        }
    }
    butYAxis() {
        this.yAxis_ = !this.yAxis_;
        if(this.yAxis_) {
            document.getElementById('xAxis').innerHTML = 'On';
        } else {
            document.getElementById('xAxis').innerHTML = 'Off'; 
        }
    }

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
            document.getElementById('mouseArc').innerHTML = 'Off'; 
        }
    }

    butTriangle() {
        this.triangle_ = !this.triangle_;
        if(this.triangle_) {
            document.getElementById('triangle').innerHTML = 'On';
        } else {
            document.getElementById('triangle').innerHTML = 'Off'; 
        }

    }

    butUnitTriangle() {
        this.unitTriangle_ = !this.unitTriangle_;
        if(this.unitTriangle_) {
            document.getElementById('unitTriangle').innerHTML = 'On';
        } else {
            document.getElementById('unitTriangle').innerHTML = 'Off'; 
        }
    }


    butAllTrigFunc() {
        this.allTrigFunc_ = !this.allTrigFunc_;
        if(this.allTrigFunc_) {
            document.getElementById('allTrigFunc').innerHTML = 'On';
            this.sin_ = true;
            this.cos_ = true;
            this.tan_ = true;
    
            this.csc_ = true;
            this.sec_ = true;
            this.cot_ = true;
    
        } else {
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.sin_ = false;
            this.cos_ = false;
            this.tan_ = false;

            this.csc_ = false;
            this.sec_ = false;
            this.cot_ = false;
        }

    }

    butNextPanel(reverse, panelNo) {
        this.getHidePanels();
        if(this.hidePanels_ == true) {
            this.hidePanels_ = false;
            document.getElementById('panel1').style.display="block";
            document.getElementById('panel1').style.display="none";
            document.getElementById('panel2').style.display="none";
            document.getElementById('panel3').style.display="none";
            document.getElementById('panel4').style.display="none";
            document.getElementById('panel5').style.display="none";
            this.getHidePanels();
        }
            if(reverse) {
                --this.openPanel_;
                if(this.openPanel_ < 0) { this.openPanel_ = 5; }

            } else {
                ++this.openPanel_;
                if(this.openPanel_ > 5) { this.openPanel_ = 0; }

            }

        if(panelNo >= 0) this.openPanel_ = panelNo;
        
            if(this.openPanel_ == 0) {
                document.getElementById('panel0').style.display="block";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="none";
            }
            if(this.openPanel_ == 1) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="block";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="none";

            } else if(this.openPanel_ == 2) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="block";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="none";

            } else if (this.openPanel_ == 3) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="block";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="none";
            } else if (this.openPanel_ == 4) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="block";
                document.getElementById('panel5').style.display="none";
            } else if (this.openPanel_ == 5) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="block";
            }
        
    }

    butHidePanels() {
        if(!this.hidePanels_) {
            document.getElementById('hidePanels').innerHTML = 'Show';
            hidePanels();
        } else {
            document.getElementById('hidePanels').innerHTML = 'Hide';
            this.openPanel_ = 0;
            document.getElementById('panel1').style.display="block";
        }
        this.hidePanels_ = !this.hidePanels_;
    }

    butQuadI() {
        this.quadi_ = !this.quadi_;
        if(this.quadi_) {
            document.getElementById('quadI').innerHTML = 'On';
            this.unitCirc_ = true;
            this.getUnitCirc();
        } else {
            document.getElementById('quadI').innerHTML = 'Off'; 
        }
    }
    butQuadII() {
        this.quadii_ = !this.quadii_;
        if(this.quadii_) {
            document.getElementById('quadII').innerHTML = 'On';
        } else {
            document.getElementById('quadII').innerHTML = 'Off'; 
        }

    }

    butQuadIII() {
        this.quadiii_ = !this.quadiii_;
        if(this.quadi_) {
            document.getElementById('quadIII').innerHTML = 'On';
        } else {
            document.getElementById('quadIII').innerHTML = 'Off'; 
        }

    }

    butQuadIV() {
        this.quadiv_ = !this.quadiv_;
        if(this.quadiv_) {
            document.getElementById('quadIV').innerHTML = 'On';
        } else {
            document.getElementById('quadIV').innerHTML = 'Off'; 
        }

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
        document.getElementById('panel1').style.display="none";
        document.getElementById('panel2').style.display="none";
        document.getElementById('panel3').style.display="none";
        document.getElementById('panel4').style.display="none";
        document.getElementById('panel5').style.display="none";
}

function newSetMan(set) {
    SetMan = new SettingsManager(set);

    if(set == 'off') {
        SetMan.getHidePanels();
    }

    if(set == 'default') {
        CANVAS_SIZE = 1000;
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
    background('#101111');
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
    if(SetMan.getTan())drawTan();

    if(SetMan.getCsc()) drawCsc();
    if(SetMan.getSec()) drawSec();
    if(SetMan.getCot()) drawCot();
    drawInfoBackground();

    drawPosInfo();
    //drawWaveBackground();

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

function distanceForm(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}



// DRAW FUNCTIONS


function drawOrigin() {
    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);

    point(X_ORIGIN, Y_ORIGIN);   
}

function drawCircle() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
    fill('#101111');

    circle(X_ORIGIN, Y_ORIGIN, 2 * UNIT);
}

function drawAxis(xAxis, yAxis) {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(false);

    if(xAxis) line(CANVAS_HALF, 0, CANVAS_HALF, CANVAS_SIZE);
    if(yAxis) line(0, CANVAS_HALF, CANVAS_SIZE, CANVAS_HALF);

}

function drawGrid(gridDensity = 1) {
    CosMan.strokeColor('#5A5A5A');
    CosMan.strokeWeight(1);
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
    CosMan.strokeColor('white');
    CosMan.strokeWeight(12);

    point(X_ORIGIN - UNIT, Y_ORIGIN);
    point(X_ORIGIN + UNIT, Y_ORIGIN);
    point(X_ORIGIN, Y_ORIGIN - UNIT);
    point(X_ORIGIN, Y_ORIGIN + UNIT);
}

function drawArc(unitArc = true, arcFollow = false) {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);

    if(unitArc) {
        fill('rgba(255, 255, 255, .5)');
        arc(X_ORIGIN, Y_ORIGIN, UNIT * 2, UNIT * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    }
    if(arcFollow) {
        fill('rgba(0, 0, 255, .5)');
        arc(X_ORIGIN, Y_ORIGIN, originDist() * 2, originDist() * 2, -1 * quadArcTan(relMouseX(), relMouseY()), 0, PIE);
    }
}

function drawUnitCirc() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(0, 0, 0, 0)')


    // QUAD I
    if(SetMan.getQuadI()) {
        drawQuadI();    
    }

    // QUAD II
    if(SetMan.getQuadII()) {
        drawQuadII();
    }
    // QUAD III
    if(SetMan.getQuadIII()) {
        drawQuadIII();
    }
    // QUAD IV
    if(SetMan.getQuadIV()) {
        drawQuadIV();
    }


    CosMan.strokeColor('white');
    CosMan.strokeWeight(12);


    CosMan.strokeDashed(false);

}

function drawQuadI() {
    CosMan.strokeWeight(2)

    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(PI/6)), relY(Math.sin(PI/6)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(PI/4)), relY(Math.sin(PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(PI/3)), relY(Math.sin(PI/3)));
    CosMan.strokeWeight(12);
    point(relX(Math.cos(PI/6)), relY(Math.sin(PI/6)));
    point(relX(Math.cos(PI/4)), relY(Math.sin(PI/4)));
    point(relX(Math.cos(PI/3)), relY(Math.sin(PI/3)));
}

function drawQuadIV() {
    CosMan.strokeWeight(2)

    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(2*PI/3)), relY(Math.sin(2*PI/3)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(3*PI/4)), relY(Math.sin(3*PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(5*PI/6)), relY(Math.sin(5*PI/6)));
    CosMan.strokeWeight(12);
    point(relX(Math.cos(2*PI/3)), relY(Math.sin(2*PI/3)));
    point(relX(Math.cos(3*PI/4)), relY(Math.sin(3*PI/4)));
    point(relX(Math.cos(5*PI/6)), relY(Math.sin(5*PI/6)));
}

function drawQuadIII() {
    CosMan.strokeWeight(2)

    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(7*PI/6)), relY(Math.sin(7*PI/6)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(5*PI/4)), relY(Math.sin(5*PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(4*PI/3)), relY(Math.sin(4*PI/3)));
    CosMan.strokeWeight(12);
    point(relX(Math.cos(7*PI/6)), relY(Math.sin(7*PI/6)));
    point(relX(Math.cos(5*PI/4)), relY(Math.sin(5*PI/4)));
    point(relX(Math.cos(4*PI/3)), relY(Math.sin(4*PI/3)));    
}

function drawQuadII() {
    CosMan.strokeWeight(2)

    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(5*PI/3)), relY(Math.sin(5*PI/3)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(7*PI/4)), relY(Math.sin(7*PI/4)));
    line(X_ORIGIN, Y_ORIGIN, relX(Math.cos(11*PI/6)), relY(Math.sin(11*PI/6)));
    CosMan.strokeWeight(12);
    point(relX(Math.cos(5*PI/3)), relY(Math.sin(5*PI/3)));
    point(relX(Math.cos(7*PI/4)), relY(Math.sin(7*PI/4)));
    point(relX(Math.cos(11*PI/6)), relY(Math.sin(11*PI/6)));
}

function drawTriangle() {

    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
    CosMan.strokeDashed(true);
    fill('rgba(255,180,180, 0.5)');

    triangle(X_ORIGIN, Y_ORIGIN, mouseX, Y_ORIGIN, mouseX, mouseY);
    CosMan.strokeDashed(false);
    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);

    point(mouseX, Y_ORIGIN);   

}

function drawUnitTriangle() {
    CosMan.strokeColor('white');
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
            CosMan.strokeWeight(12);

            point(relX(Math.cos(ang)), Y_ORIGIN);   
            point(relX(Math.cos(ang)), relY(-Math.sin(ang)));   


    }
    CosMan.strokeDashed(false);

}

function drawMousePoint() {
    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);
    point(mouseX, mouseY);
    CosMan.strokeColor('white');
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
    ang *= PI;

    fill('#101111');
    rect(CANVAS_SIZE + 20, 10, CANVAS_HALF - 40, CANVAS_SIZE - 20);
    fill('white');
    text('Mouse Posistion (x, y) = (' + parseFloat(relMouseX()).toFixed(3) + ', ' + parseFloat(relMouseY()).toFixed(3) + ')', CANVAS_SIZE + 50, 50);
    text('Angle (θ) = ' + parseFloat(ang/PI).toFixed(3) + '𝜋\t/\t' + parseInt(ang * 180) + '°', CANVAS_SIZE + 50, 150);
    text('sin(θ) = ' + parseFloat(Math.sin(ang)).toFixed(3), CANVAS_SIZE + 50, 200);
    text('cos(θ) = ' + (Math.abs(parseFloat(Math.cos(ang)).toFixed(3)) == 0 ? "0.000" : parseFloat(Math.cos(ang)).toFixed(3)), CANVAS_SIZE + 50, 250); // Negative 0 is more of a misnomer. This is a corner case catcher.
    text('tan(θ) = ' + (Math.abs(parseFloat(Math.sin(ang) / Math.cos(ang)).toFixed(3)) > 1000 ? "Undefined" : parseFloat(relMouseY() / relMouseX()).toFixed(3)), CANVAS_SIZE + 50, 300); // Tangent goes to infinity corner case. Set it to undefined instead of a huge number.

    text('Triangle Area = ' + (Math.abs(parseFloat(triArea(relMouseX(), relMouseY())).toFixed(3)) < 0.00001 ? 0 : Math.abs(parseFloat(triArea(relMouseX(), relMouseY())).toFixed(3))), CANVAS_SIZE + 50, 350);

    text('csc(θ) = ' + (Math.abs(parseFloat(1/relMouseY()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(1/relMouseY()).toFixed(3)), CANVAS_SIZE + 250, 200);
    text('sec(θ) = ' + (Math.abs(parseFloat(1/relMouseX()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(1/relMouseX()).toFixed(3)), CANVAS_SIZE + 250, 250); // Negative 0 is more of a misnomer. This is a corner case catcher.
    text('cot(θ) = ' + (Math.abs(parseFloat(relMouseX() / relMouseY()).toFixed(3)) > 1000 ? "Undefined" : parseFloat(relMouseX() / relMouseY()).toFixed(3)), CANVAS_SIZE + 250, 300); // Tangent goes to infinity corner case. Set it to undefined instead of a huge number.

    text('Amplitude = ' + parseFloat(originDist()/UNIT).toFixed(3), CANVAS_SIZE + 50, 450);
}

function drawInfoBackground() {
    fill('#5A5A5A')
    CosMan.strokeWeight(2);
    CosMan.strokeColor('black');
    rect(CANVAS_SIZE, 0, CANVAS_SIZE, CANVAS_SIZE)
}


function drawSin() {
    CosMan.strokeColor('cyan');
    CosMan.strokeWeight(4);
    line(mouseX, Y_ORIGIN, mouseX, mouseY);
    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);
    point(mouseX, Y_ORIGIN);

}

function drawCos() {
    CosMan.strokeColor('yellow');
    CosMan.strokeWeight(4);

    line(X_ORIGIN, mouseY, mouseX, mouseY);

    CosMan.strokeColor('red');
    CosMan.strokeWeight(12);

}

function drawTan() {
    CosMan.strokeColor('magenta');
    CosMan.strokeWeight(4);
    line(X_ORIGIN + UNIT, Y_ORIGIN, X_ORIGIN + UNIT, Y_ORIGIN - relMouseY()/relMouseX() * UNIT);
}


function drawCsc() {
    CosMan.strokeColor('lime');
    CosMan.strokeWeight(4);
    line(X_ORIGIN, Y_ORIGIN, X_ORIGIN, Y_ORIGIN - 1/relMouseY() * UNIT);

}

function drawSec() {
    CosMan.strokeColor('indigo');
    CosMan.strokeWeight(4);

    line(X_ORIGIN, Y_ORIGIN, X_ORIGIN + UNIT, Y_ORIGIN - relMouseY()/relMouseX() * UNIT);

}

function drawCot() {
    CosMan.strokeColor('orange');
    CosMan.strokeWeight(4);
    let ang = quadArcTan(relMouseX(), relMouseY()) / PI;
    if(ang < 0) {
        ang = quadArcTan(relMouseX(), relMouseY()) / PI;
        ang += 2;
    }
    ang *= PI;

    line(X_ORIGIN, Y_ORIGIN - 1/relMouseY() * UNIT, relX(Math.cos(ang)), relY(-Math.sin(ang)));

}



//let waveXAxis;
//let waveYAxis;
//
//function drawWaveBackground() {
//    waveXAxis = CANVAS_SIZE - (CANVAS_HALF/2);
//    waveYAxis = CANVAS_SIZE + (CANVAS_HALF/2);
//    fill('#d3d3d3');
//    CosMan.strokeWeight(4);
//    CosMan.strokeColor('white');
//    rect(CANVAS_SIZE + 20, CANVAS_HALF + 20, CANVAS_HALF - 40, CANVAS_HALF - 40)
//
//    CosMan.strokeWeight(2);
//    line(CANVAS_SIZE + 20, waveXAxis, CANVAS_SIZE + CANVAS_HALF - 20, waveXAxis);
//
//    line(waveYAxis, CANVAS_HALF + 20, waveYAxis, CANVAS_SIZE - 20);
//    //console.log(calcWave());
//
//    //console.log(waveYAxis - CANVAS_HALF + 20);
//
//    CosMan.strokeWeight(12);
//    point(waveYAxis,  CANVAS_HALF + 20);
//    point(waveYAxis, CANVAS_SIZE - 20);
//
//    point(CANVAS_SIZE + 20, waveXAxis);
//    point(CANVAS_SIZE + CANVAS_HALF - 20, waveXAxis);
//
//    //console.log(distanceForm(waveYAxis, CANVAS_SIZE + 20, waveYAxis, CANVAS_SIZE - 20));
//    console.log(distanceForm(CANVAS_SIZE + 20, waveXAxis, CANVAS_SIZE + CANVAS_HALF - 20, waveXAxis));
//
//}
//
//
//
//function calcWave(unit = false) {
//    let x, y;
//
//    if(unit) {
//        let amp = originDist()/UNIT;
//        x = Math.cos(relMouseX()) * amp;
//        y = Math.cos(relMouseY()) * amp;
//    } else {
//        x = Math.cos(relMouseX());
//        y = Math.cos(relMouseY());
//    }
//
//
//    return [x, y];
//}



function drawWave() {




}
