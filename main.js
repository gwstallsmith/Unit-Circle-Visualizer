// COSMETIC MANAGER AND SETTINGS MANAGER
//
// CosMan useful for normalizing domain\
//
// SetMan allows us to talk to the HTML page
// Interacts with HTML elements
//

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
            
            this.unitArc_ = false;
            this.unitArc_ = false;
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

            this.posInfo_ = false
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
            
            this.unitArc_ = false;
            this.mouseArc_ = false;

            this.cardPoints_ = false;
            this.xAxis_ = true;
            this.yAxis_ = true;
            this.grid_ = false;
            this.gridDensity_ = 1;
            this.origin_ = false;

            this.circle_ = true;
            this.unitCirc_ = false;
            this.quadi_ = false;
            this.quadii_ = false;
            this.quadiii_ = false;
            this.quadiv_ = false;
            this.hidePanels_ = true;

            this.posInfo_ = true;

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
            
            this.unitArc_ = true;
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

            this.posInfo_ = true
        }

        this.openPanel_ = 0;

        this.pythIdenOne_ = false;

    }

    getSin() {
        if(this.sin_) {
            document.getElementById('sin2').innerHTML = 'On';
        } else {
            document.getElementById('sin2').innerHTML = 'Off'; 
        }
        return this.sin_;
    }
    getCos() {
        if(this.cos_) {
            document.getElementById('cos2').innerHTML = 'On';
        } else {
            document.getElementById('cos2').innerHTML = 'Off'; 
        }
        return this.cos_;
    }

    getTan() {
        if(this.tan_) {
            document.getElementById('tan2').innerHTML = 'On';
        } else {
            document.getElementById('tan2').innerHTML = 'Off'; 
        }

        return this.tan_;
    }
    getCsc() {
        if(this.csc_) {
            document.getElementById('csc2').innerHTML = 'On';
        } else {
            document.getElementById('csc2').innerHTML = 'Off'; 
        }

        return this.csc_;
    }
    getSec() {
        if(this.sec_) {
            document.getElementById('sec2').innerHTML = 'On';
        } else {
            document.getElementById('sec2').innerHTML = 'Off'; 
        }

        return this.sec_;
    }
    getCot() {
        if(this.cot_) {
            document.getElementById('cot2').innerHTML = 'On';
        } else {
            document.getElementById('cot2').innerHTML = 'Off'; 
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
            document.getElementById('cardPoints1').innerHTML = 'On';
        } else {
            document.getElementById('cardPoints').innerHTML = 'Off'; 
            document.getElementById('cardPoints1').innerHTML = 'Off'; 
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

    getUnitArc() {
        if(this.unitArc_) {
            document.getElementById('unitArc').innerHTML = 'On';
        } else {
            document.getElementById('unitArc').innerHTML = 'Off'; 
        }

        return this.unitArc_;
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

    getPosInfo() {
        if(this.posInfo_) {
            document.getElementById('posInfo').innerHTML = 'On'
        } else {
            document.getElementById('posInfo').innerHTML = 'Off'
        }
        return this.posInfo_;
    }

    getPythIdenOne() {
        if(this.pythIdenOne_) {
            document.getElementById('pythIdenOne').innerHTML = 'On'
        } else {
            document.getElementById('pythIdenOne').innerHTML = 'Off'
        }
        return this.pythIdenOne_;
    }

    // Buttons

    butSin() {
        this.sin_ = !this.sin_;

        if(this.sin_) {
            document.getElementById('sin2').innerHTML = 'On';

        } else {
            document.getElementById('sin2').innerHTML = 'Off';
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false;
        }

    }

    butCos() {
        this.cos_ = !this.cos_;
        if(this.cos_) {
            document.getElementById('cos').innerHTML = 'On';
        } else {
            document.getElementById('cos').innerHTML = 'Off';
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            this.allTrigFunc_ = false;
        }

        this.getCos();
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
            this.quadi_ = true;
            this.quadii_ = true;
            this.quadiii_ = true;
            this.quadiv_ = true;
            this.cardPoints_ = true;
        } else {
            document.getElementById('unitCirc').innerHTML = 'Off';
            this.quadi_ = false;
            this.quadii_ = false;
            this.quadiii_ = false;
            this.quadiv_ = false;
            this.cardPoints_ = false;

        }


        this.getQuadI();
        this.getQuadII();
        this.getQuadIII();
        this.getQuadIV();
        this.getCardPoints();
    }

    butCardPoints() {
        this.cardPoints_ = !this.cardPoints_;
        if(this.cardPoints_) {
            console.log('true')
            document.getElementById('cardPoints').innerHTML = 'On';
            document.getElementById('cardPoints1').innerHTML = 'On';

        } else {
            console.log('false')
            document.getElementById('cardPoints').innerHTML = 'Off'; 
            document.getElementById('cardPoints1').innerHTML = 'Off';

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
            this.gridDensity_ 
            = 1;
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

    butUnitArc() {
        this.unitArc_ = !this.unitArc_;
        if(this.unitArc_) {
            document.getElementById('unitArc').innerHTML = 'On';
        } else {
            document.getElementById('unitArc').innerHTML = 'Off'; 
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


    butAllTrigFunc(set = !this.allTrigFunc_) {
        this.allTrigFunc_ = set
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
        this.getSin();
        this.getCos();
        this.getTan();
        this.getCsc();
        this.getSec();
        this.getCot();
    }

    butNextPanel(reverse, panelNo) {
        this.getHidePanels();
        if(this.hidePanels_ == true) {
            this.hidePanels_ = false;
            document.getElementById('panel0').style.display="block";
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

        if(panelNo >= 0) this.openPanel_ = panelNo;

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
            } else if(this.openPanel_ == 2) {
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

            } else if (this.openPanel_ == 5) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
            }
        
    }

    butHidePanels() {
        if(!this.hidePanels_) {
            hidePanels();
        } else {
            this.openPanel_ = 0;
            document.getElementById('panel0').style.display="block";
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

    butPosInfo() {
        this.posInfo_ = !this.posInfo_
        if(this.posInfo) {
            document.getElementById('quadIV').innerHTML = 'On';
        } else {
            document.getElementById('quadIV').innerHTML = 'Off'; 
        }
    }

    butPythIdenOne() {
        this.pythIdenOne_ = !this.pythIdenOne_;
        if(this.pythIdenOne_) {
            document.getElementById('pythIdenOne').innerHTML = 'On';
        } else {
            this.butAllTrigFunc(false);
            document.getElementById('pythIdenOne').innerHTML = 'Off'; 
        }
    }

};

/////

let CANVAS_SIZE = 900;
let CANVAS_HALF = CANVAS_SIZE / 2;

const username = 'gwstallsmith';
const repoName = 'Trigonometry-Visualizer';

const apiUrl = `https://api.github.com/repos/${username}/${repoName}`;


let CosMan;
function main() {
    CosMan = new CosmeticManager();
    SetMan = new SettingsManager();
    
    hidePanels();

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const lastUpdated = new Date(data.updated_at);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('last-updated').textContent = lastUpdated.toLocaleDateString(undefined, options);
      })
      .catch(error => {
        console.error('Error fetching repository information:', error);
      });
}

function newSetMan(set) {
    SetMan = new SettingsManager(set);

    if(set == 'off') {
        SetMan.getHidePanels();
    }

    if(set == 'default') {
        CANVAS_SIZE = 900;
        CANVAS_HALF = CANVAS_SIZE / 2;
        UNIT = CANVAS_SIZE / 4;
        X_ORIGIN = CANVAS_HALF;
        Y_ORIGIN = CANVAS_HALF;

        setup();
        let innerPanelSize = (CANVAS_SIZE * 1.1 - 60);
        root.style.setProperty('--canvas-size',(CANVAS_SIZE * 1.1) + 'px');
        root.style.setProperty('--inner-panel-size', innerPanelSize + 'px');
    }

}

// UTIL
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let cssCanvasSize = rootStyles.getPropertyValue('--canvas-size');
root.style.setProperty('--canvas-size', (CANVAS_SIZE * 1.2) + 'px');
root.style.setProperty('--panel-width', (CANVAS_SIZE * .8) + 'px');
root.style.setProperty('--inner-panel-size', (CANVAS_SIZE * 1.2 - 60) + 'px');


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
    return Math.cos(theta) * UNIT;
}

function relativeSin(theta) {
    return -Math.sin(theta) * UNIT;
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
    if(CANVAS_SIZE <= 1500 && CANVAS_SIZE >= 1000) {
        root.style.setProperty('--canvas-size', CANVAS_SIZE * 1.2 + 'px');
        root.style.setProperty('--inner-panel-size', (CANVAS_SIZE * 1.2 - 60) + 'px');
    }
}

function decreaseCanvasSize() {
    CANVAS_SIZE -= 100;

    if(CANVAS_SIZE < 500 || CANVAS_SIZE > 2000) {
        CANVAS_SIZE = 500
    }

    CANVAS_HALF = CANVAS_SIZE / 2;
    UNIT = CANVAS_SIZE / 4;

    if(CANVAS_SIZE >= 1000 && CANVAS_SIZE <= 1500) {
        root.style.setProperty('--canvas-size', CANVAS_SIZE * 1.2 + 'px');
        root.style.setProperty('--inner-panel-size', (CANVAS_SIZE * 1.2 - 60) + 'px');
    }
    setup();

}

function hidePanels() {
    document.getElementById('panel0').style.display="block";
    document.getElementById('panel1').style.display="none";
    document.getElementById('panel2').style.display="none";
    document.getElementById('panel3').style.display="none";
    document.getElementById('panel4').style.display="none";
}

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

function snapUnitCircle(angle) {
    // CARDINAL ANGLES
    if(angle == 0) {
        mouseX = 3*CANVAS_SIZE/4;
        mouseY = CANVAS_SIZE/2;
    } else if(angle == PI/2) {
        mouseX = CANVAS_SIZE/2;
        mouseY = CANVAS_SIZE/4;
    } else if(angle == PI) {
        mouseX = CANVAS_SIZE/4;
        mouseY = CANVAS_SIZE/2;
    } else if(angle == 3 * PI/2) {
        mouseX = CANVAS_SIZE/2;
        mouseY = 3*CANVAS_SIZE/4
    }


    // Some rounding error is occuring preventing the angles from being exact.
    // relativeSin / relativeCos not working for this purpose.
    // Hard coding the angles in because I am sick of doing this dynamically.

    // QUAD I
    if(angle == PI/6) {
        mouseX = CANVAS_HALF + Math.sqrt(3) * UNIT / 2;
        mouseY = CANVAS_HALF - UNIT/2;
    } else if (angle == PI/4) {
        mouseX = CANVAS_HALF + Math.sqrt(2) * UNIT / 2;
        mouseY = CANVAS_HALF - Math.sqrt(2) * UNIT / 2;
    } else if (angle == PI/3) {
        mouseX = CANVAS_HALF + UNIT/2;
        mouseY = CANVAS_HALF - Math.sqrt(3) * UNIT / 2;
    }
    // QUAD II
    else if(angle == 2 * PI/3) {
        mouseX = CANVAS_HALF - UNIT/2;
        mouseY = CANVAS_HALF - Math.sqrt(3) * UNIT / 2;
    } else if (angle == 3 * PI/4) {
        mouseX = CANVAS_HALF - Math.sqrt(2) * UNIT / 2;
        mouseY = CANVAS_HALF - Math.sqrt(2) * UNIT / 2;
    } else if (angle == 5 * PI/6) {
        mouseX = CANVAS_HALF - Math.sqrt(3) * UNIT / 2;
        mouseY = CANVAS_HALF - UNIT/2;
    }
    // QUAD III
    else if(angle == 7 * PI/6) {
        mouseX = CANVAS_HALF - Math.sqrt(3) * UNIT / 2;
        mouseY = CANVAS_HALF + UNIT/2;
    } else if (angle == 5 * PI/4) {
        mouseX = CANVAS_HALF - Math.sqrt(2) * UNIT / 2;
        mouseY = CANVAS_HALF + Math.sqrt(2) * UNIT / 2;
    } else if (angle == 4 * PI/3) {
        mouseX = CANVAS_HALF - UNIT/2;
        mouseY = CANVAS_HALF + Math.sqrt(3) * UNIT / 2;
    }
    // QUAD IV
    else if(angle == 5 * PI/3) {
        mouseX = CANVAS_HALF + UNIT/2;
        mouseY = CANVAS_HALF + Math.sqrt(3) * UNIT / 2;
    } else if (angle == 7 * PI/4) {
        mouseX = CANVAS_HALF + Math.sqrt(2) * UNIT / 2;
        mouseY = CANVAS_HALF + Math.sqrt(2) * UNIT / 2;
    } else if (angle == 11 * PI/6) {
        mouseX = CANVAS_HALF + Math.sqrt(3) * UNIT / 2;
        mouseY = CANVAS_HALF + UNIT/2;
    }


}

// P5 function.
let canvas;
function setup() {
    canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE, WEBGL);
    canvas.parent('p5');

    
    textAlign(CENTER);
    textSize(24);

    document.getElementById("canvasSize").innerHTML = CANVAS_SIZE + 'px';
}

// P5 function.
let myFont;
function preload() {
    myFont = loadFont("./assets/arial.ttf");
}

// P5 function.
let unitCircleInc = 0;
function keyPressed() {
    if(keyCode === 187 || keyCode == 61) {
        increaseCanvasSize();
    }
    if(keyCode === 189 || keyCode == 173) {
        decreaseCanvasSize();
    }
    if(keyCode === LEFT_ARROW) {
        unitCircleInc--;
        if(unitCircleInc < 0) {
            unitCircleInc = UNIT_CIRCLE_ANGLES.length - 1;
        }
    
        snapUnitCircle(UNIT_CIRCLE_ANGLES[unitCircleInc]);
    }
    if(keyCode === RIGHT_ARROW) {
        unitCircleInc++;
        if (unitCircleInc > UNIT_CIRCLE_ANGLES.length - 1) {
            unitCircleInc = 0;
        }    
        snapUnitCircle(UNIT_CIRCLE_ANGLES[unitCircleInc]);
    }
    if(keyCode === 49) {
        SetMan.butNextPanel(false, 0);
    }
    if(keyCode === 50) {
        SetMan.butNextPanel(false, 1);
    }
    if(keyCode === 51) {
        SetMan.butNextPanel(false, 2);
    }
    if(keyCode === 52) {
        SetMan.butNextPanel(false, 3);
    }
    if(keyCode === 53) {
        SetMan.butNextPanel(false, 4);
    }



}

// P5 function that drives the entire animation.
function draw() {
    frameRate(FRAME_RATE);
    background('#101111');
    fill('#101111');
    angleMode(RADIANS);
    textFont(myFont)

    CosMan.strokeColor('white');

    CosMan.strokeWeight(2);

    if(SetMan.getCircle()) drawCircle();

    drawAxis(SetMan.getXAxis(), SetMan.getYAxis());

    if(SetMan.getOrigin())drawOrigin();
    if(SetMan.getCardPoints()) drawCardinalPoints();

    if(SetMan.getUnitCirc()) drawUnitCircle();

    if(SetMan.getQuadI()) drawQuadI();
    if(SetMan.getQuadII()) drawQuadII();
    if(SetMan.getQuadIII()) drawQuadIII();
    if(SetMan.getQuadIV()) drawQuadIV();

    if(SetMan.getCardPoints()) drawCardinalPoints();
    if(SetMan.getGrid()) drawGrid();

    if(SetMan.getUnitArc()) drawArc();
    if(SetMan.getMouseArc()) drawMouseArc();

    if(SetMan.getTriangle()) drawTriangle();
    if(SetMan.getUnitTriangle()) drawUnitTriangle();

    if(SetMan.getSin()) drawSin();
    if(SetMan.getCos()) drawCos();
    if(SetMan.getTan()) drawTan();

    if(SetMan.getCsc()) drawCsc();
    if(SetMan.getSec()) drawSec();
    if(SetMan.getCot()) drawCot();


    unitCoordinateInfo();
    triangleAreaInfo();
    sinInfo();
    cosInfo();
    tanInfo();

    cscInfo();
    secInfo();
    cotInfo();

    if(SetMan.getPosInfo()) drawPosInfo();

    if(SetMan.getPythIdenOne()) drawPythagoreanIdentityOne();




    drawUnitPoint();
    drawMousePoint();
}

// DRAW FUNCTIONS
function drawOrigin() {
    CosMan.strokeWeight(12);
    point(0, 0);
}

function drawAxis(xAxis, yAxis) {
    if(xAxis)
        drawXAxis();
    if(yAxis)
        drawYAxis();
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

function drawUnitPoint() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(12);

    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;


    point(relativeCos(angle), -relativeSin(angle));
}

function drawUnitCircle() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
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

function drawGrid(gridDensity = SetMan.getGridDensity()) {
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
    fill('rgba(0, 0, 255, .5)');


    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    arc(0, 0, UNIT * 2, UNIT * 2, angle, 0, PIE);
}

function drawMouseArc() {
    CosMan.strokeColor('white');
    CosMan.strokeWeight(2);
    fill('rgba(0, 255, 0, .5)');

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
    CosMan.strokeColor('blue');
    CosMan.strokeWeight(4);
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    line(relativeCos(angle), 0, relativeCos(angle), relativeSin(angle));
}

function drawCos() {
    CosMan.strokeColor('lime');
    CosMan.strokeWeight(4);
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    line(0, 0, relativeCos(angle), 0);
}

function drawTan() {
    CosMan.strokeColor('red');
    CosMan.strokeWeight(4);
    line(UNIT, 0, UNIT, (relativeMouseY()/relativeMouseX() * UNIT))
}

function drawCsc() {
    CosMan.strokeColor('cyan');
    CosMan.strokeWeight(4);
    line(0, 0, 0, (UNIT/relativeMouseY()) * UNIT);
}

function drawSec() {
    CosMan.strokeColor('yellow');
    CosMan.strokeWeight(4);
    line(0, 0, UNIT, (relativeMouseY()/relativeMouseX()) * UNIT)
}

function drawCot() {
    CosMan.strokeColor('magenta');
    CosMan.strokeWeight(4);

    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    line(0, (UNIT/relativeMouseY() * UNIT), relativeCos(angle), -relativeSin(angle));

}

function unitCoordinateInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    document.getElementById('unitCoordinates').innerHTML = '(x, y) = (' + parseFloat(relativeCos(angle*PI)/UNIT).toFixed(3) + ', ' + parseFloat(-relativeSin(angle*PI)/UNIT).toFixed(3) + ')';
}

function triangleAreaInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);

    let base = relativeCos(angle*PI)/UNIT;
    let height = -relativeSin(angle*PI)/UNIT;
    let area = parseFloat(Math.abs((base * height) / 2)).toFixed(3);

    document.getElementById('triangleArea').innerHTML = 'Triangle Area = ' + area;
    document.getElementById('triangleArea1').innerHTML = 'Triangle Area = ' + area;
}

function sinInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    let yCoord = parseFloat(-relativeSin(angle*PI)/UNIT).toFixed(3)
    if(angle == 0) {
        yCoord = 0;
    }
    document.getElementById('sin').innerHTML = 'sin(' + angle + 'π) = ' + (yCoord == '-0.000' ? Math.abs(yCoord) : yCoord);
    document.getElementById('sin1').innerHTML = 'sin(' + angle + 'π) = ' + (yCoord == '-0.000' ? Math.abs(yCoord) : yCoord);
}

function cosInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    let xCoord = parseFloat(relativeCos(angle*PI)/UNIT).toFixed(3)
    if(angle == 0) {
        xCoord = 1;
    }
    document.getElementById('cos').innerHTML = 'cos(' + angle + 'π) = ' + (xCoord == '-0.000' ? Math.abs(xCoord) : xCoord);
    document.getElementById('cos1').innerHTML = 'cos(' + angle + 'π) = ' + (xCoord == '-0.000' ? Math.abs(xCoord) : xCoord);
}

function tanInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    let tan = -relativeMouseY()/relativeMouseX();
    tan = parseFloat(tan).toFixed(3);
    if(tan == 'Infinity') {
        tan = 'Undefined';
    }
    document.getElementById('tan').innerHTML = 'tan(' + angle + 'π) = ' + tan;
    document.getElementById('tan1').innerHTML = 'tan(' + angle + 'π) = ' + tan;
}

function cscInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    let sin = -relativeSin(angle*PI)/UNIT;
    //console.log(sin);
    csc = parseFloat(1/sin).toFixed(3);
    csc = (csc == '-0.000' ? Math.abs(csc) : csc);

    if(Math.abs(csc) > 1000) {
        csc = 'Undefined';
    } else if (angle == 0) {
        csc = 'Undefined';
    }



    document.getElementById('csc').innerHTML = 'csc(' + angle + 'π) = ' + csc;
    document.getElementById('csc1').innerHTML = 'csc(' + angle + 'π) = ' + csc;
}

function secInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    let sec = parseFloat(1/relativeCos(angle*PI)*UNIT).toFixed(3);
    sec = (sec == '-0.000' ? Math.abs(sec) : sec);
    if(angle == 0) {
        sec = 1;
    } else if (angle == 0.5) {
        sec = 'Undefined';
    }
    if(Math.abs(sec) > 1000) {
        sec = 'Undefined';
    }

    document.getElementById('sec').innerHTML = 'sec(' + angle + 'π) = ' + sec;
    document.getElementById('sec1').innerHTML = 'sec(' + angle + 'π) = ' + sec;

}

function cotInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    let cot = (1/Math.tan(angle));
    cot = parseFloat(cot).toFixed(3)
    if(angle == 0) {
        cot = 'Undefined';
    }
    document.getElementById('cot').innerHTML = 'cot(' + angle + 'π) = ' + cot;
    document.getElementById('cot1').innerHTML = 'cot(' + angle + 'π) = ' + cot;

}

function drawPosInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }

    angle *= PI;
    fill('white');
    textSize(24);
    let coordinates = '(x, y) = (' + parseFloat(relativeCos(angle)/UNIT).toFixed(3) + ', ' + parseFloat(-relativeSin(angle)/UNIT).toFixed(3) + ')';
    let offset = UNIT * .45; 

    angle = parseFloat(angle).toFixed(3);

    if(angle >= 0 && angle < PI/2) {
        text(coordinates, relativeCos(angle) + offset, relativeSin(angle) - offset);
        text('θ = ' + parseFloat(angle/PI).toFixed(3) + 'π', relativeCos(angle) + offset, relativeSin(angle) - offset + 30);
    } else if(angle >= PI/2 && angle < PI) {
        text(coordinates, relativeCos(angle) - offset, relativeSin(angle) - offset);
        text('θ = ' + parseFloat(angle/PI).toFixed(3) + 'π', relativeCos(angle) - offset, relativeSin(angle) - offset + 30);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(coordinates, relativeCos(angle) - offset, relativeSin(angle) + offset);
        text('θ = ' + parseFloat(angle/PI).toFixed(3) + 'π', relativeCos(angle) - offset, relativeSin(angle) + offset + 30);

    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(coordinates, relativeCos(angle) + offset, relativeSin(angle) + offset);
        text('θ = ' + parseFloat(angle/PI).toFixed(3) + 'π', relativeCos(angle) + offset, relativeSin(angle) + offset + 30);
    }
}

function drawPythagoreanIdentityOne() {
    SetMan.butAllTrigFunc(false);
    SetMan.butSin();
    SetMan.butCos();
    
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    let xCoord = parseFloat(relativeCos(angle)/UNIT).toFixed(3);
    let yCoord = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);

    CosMan.strokeColor('red');
    CosMan.strokeWeight(3);
    line(0, 0, xCoord * UNIT, -yCoord * UNIT);

    fill('white');
    textSize(24);

    let explanation = 'Pythagorean Identity #1\n\nsin²(' + parseFloat(angle/PI).toFixed(3) + 'π) + cos²(' + parseFloat(angle/PI).toFixed(3) + 'π) = 1\n\n(' + xCoord + ')² + (' + yCoord + ')² = 1\n\n' + parseFloat(Math.pow(xCoord, 2)).toFixed(3) + ' + '+ parseFloat(Math.pow(yCoord, 2)).toFixed(3) + ' = 1';

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

}