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
            
            this.unitArc_ = false;
            this.unitArc_ = false;

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
            this.radius_ = false;

            this.names_ = false;

        } else if(mode == 'default') {
            this.sin_ = false;
            this.cos_ = false;
            this.tan_ = false;

            this.csc_ = false;
            this.sec_ = false;
            this.cot_ = false;

            this.allTrigFunc_ = false;

            this.unitTriangle_ = true;
            
            this.unitArc_ = false;

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
            this.radius_ = true;

            this.names_ = false;

        } else if(mode == 'on') {
            this.sin_ = true;
            this.cos_ = true;
            this.tan_ = true;

            this.csc_ = true;
            this.sec_ = true;
            this.cot_ = true;

            this.allTrigFunc_ = true;

            this.unitTriangle_ = true;
            
            this.unitArc_ = true;

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
            this.radius_ = true;

            this.names_ = true;
        }

        this.openPanel_ = 0;

        this.pythIdenOne_ = false;
        this.pythIdenTwo_ = false;
        this.pythIdenThree_ = false;

        this.cofuncIdenOne_ = false;
        this.cofuncIdenTwo_ = false;
        this.cofuncIdenThree_ = false;
        this.cofuncIdenFour_ = false;
        this.cofuncIdenFive_ = false;
        this.cofuncIdenSix_ = false;

        this.evenOddIdenOne_ = false;
        this.evenOddIdenTwo_ = false;
        this.evenOddIdenThree_ = false;
        this.evenOddIdenFour_ = false;
        this.evenOddIdenFive_ = false;
        this.evenOddIdenSix_ = false;


        this.spinMode_ = false;
    }

    getSin() {
        if(this.sin_) {
            document.getElementById('sin2').innerHTML = 'On';
            document.getElementById('sin2').style = 'border-color: rgb(0,255,0);';

        } else {
            document.getElementById('sin2').innerHTML = 'Off'; 
            document.getElementById('sin2').style = 'border-color: rgb(255,0,0);';

        }
        return this.sin_;
    }
    getCos() {
        if(this.cos_) {
            document.getElementById('cos2').innerHTML = 'On';
            document.getElementById('cos2').style = 'border-color: rgb(0,255,0);';

        } else {
            document.getElementById('cos2').innerHTML = 'Off';
            document.getElementById('cos2').style = 'border-color: rgb(255,0,0);'; 
        }
        return this.cos_;
    }

    getTan() {
        if(this.tan_) {
            document.getElementById('tan2').innerHTML = 'On';
            document.getElementById('tan2').style = 'border-color: rgb(0,255,0);';

        } else {
            document.getElementById('tan2').innerHTML = 'Off'; 
            document.getElementById('tan2').style = 'border-color: rgb(255,0,0);';
        }

        return this.tan_;
    }
    getCsc() {
        if(this.csc_) {
            document.getElementById('csc2').innerHTML = 'On';
            document.getElementById('csc2').style = 'border-color: rgb(0,255,0);';

        } else {
            document.getElementById('csc2').innerHTML = 'Off'; 
            document.getElementById('csc2').style = 'border-color: rgb(255,0,0);';
        }

        return this.csc_;
    }
    getSec() {
        if(this.sec_) {
            document.getElementById('sec2').innerHTML = 'On';
            document.getElementById('sec2').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('sec2').innerHTML = 'Off'; 
            document.getElementById('sec2').style = 'border-color: rgb(255,0,0);';
        }

        return this.sec_;
    }
    getCot() {
        if(this.cot_) {
            document.getElementById('cot2').innerHTML = 'On';
            document.getElementById('cot2').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('cot2').innerHTML = 'Off'; 
            document.getElementById('cot2').style = 'border-color: rgb(255,0,0);';
        }

        return this.cot_;
    }

    getCircle() {
        if(this.circle_) {
            document.getElementById('circle').innerHTML = 'On';
            document.getElementById('circle').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('circle').innerHTML = 'Off'; 
            document.getElementById('circle').style = 'border-color: rgb(255,0,0);';
        }
        return this.circle_
    }

    getCardPoints() {
        if(this.cardPoints_) {
            document.getElementById('cardPoints').innerHTML = 'On';
            document.getElementById('cardPoints').style = 'border-color: rgb(0,255,0);';

            document.getElementById('cardPoints1').innerHTML = 'On';
            document.getElementById('cardPoints1').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('cardPoints').innerHTML = 'Off';
            document.getElementById('cardPoints').style = 'border-color: rgb(255,0,0);';
            
            document.getElementById('cardPoints1').innerHTML = 'Off'; 
            document.getElementById('cardPoints1').style = 'border-color: rgb(255,0,0);';
        }
        return this.cardPoints_;
    }

    getUnitCirc() {
        if(this.unitCirc_) {
            document.getElementById('unitCirc').innerHTML = 'On';
            document.getElementById('unitCirc').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('unitCirc').innerHTML = 'Off'; 
            document.getElementById('unitCirc').style = 'border-color: rgb(255,0,0);';
        }

        return this.unitCirc_;
    }

    getGrid() {
        if(this.grid_) {
            document.getElementById('grid').innerHTML = 'On';
            document.getElementById('grid').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('grid').innerHTML = 'Off'; 
            document.getElementById('grid').style = 'border-color: rgb(255,0,0);';
        }
        return this.grid_;
    }

    getGridDensity() { return this.gridDensity_; }

    getOrigin() {
        if(this.origin_) {
            document.getElementById('origin').innerHTML = 'On';
            document.getElementById('origin').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('origin').innerHTML = 'Off'; 
            document.getElementById('origin').style = 'border-color: rgb(255,0,0);';
        }
        return this.origin_;
    }

    getXAxis() {
        if(this.xAxis_) {
            document.getElementById('xAxis').innerHTML = 'On';
            document.getElementById('xAxis').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('xAxis').innerHTML = 'Off'; 
            document.getElementById('xAxis').style = 'border-color: rgb(255,0,0);';
        }
        return this.xAxis_
    }

    getYAxis() {
        if(this.yAxis_) {
            document.getElementById('yAxis').innerHTML = 'On';
            document.getElementById('yAxis').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('yAxis').innerHTML = 'Off'; 
            document.getElementById('yAxis').style = 'border-color: rgb(255,0,0);';
        }

        return this.yAxis_
    }

    getUnitArc() {
        if(this.unitArc_) {
            document.getElementById('unitArc').innerHTML = 'On';
            document.getElementById('unitArc').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('unitArc').innerHTML = 'Off'; 
            document.getElementById('unitArc').style = 'border-color: rgb(255,0,0);';
        }

        return this.unitArc_;
    }

    getUnitTriangle() {
        if(this.unitTriangle_) {
            document.getElementById('unitTriangle').innerHTML = 'On';
            document.getElementById('unitTriangle').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('unitTriangle').innerHTML = 'Off'; 
            document.getElementById('unitTriangle').style = 'border-color: rgb(255,0,0);';
        }
        return this.unitTriangle_;
    }
    
    getHidePanels() {
        return this.hidePanels_;
    }

    getPosInfoOffset() {
        return (((this.quadi_ || this.quadii_)||(this.quadiii_ || this.quadiv_)) && this.names_)
    }

    getQuadI() {
        if(this.quadi_) {
            document.getElementById('quadI').innerHTML = 'On';
            document.getElementById('quadI').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('quadI').innerHTML = 'Off'; 
            document.getElementById('quadI').style = 'border-color: rgb(255,0,0);';
        }

        return this.quadi_;
    }

    getQuadII() {
        if(this.quadii_) {
            document.getElementById('quadII').innerHTML = 'On';
            document.getElementById('quadII').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('quadII').innerHTML = 'Off'; 
            document.getElementById('quadII').style = 'border-color: rgb(255,0,0);';
        }

        return this.quadii_;
    }

    getQuadIII() {
        if(this.quadiii_) {
            document.getElementById('quadIII').innerHTML = 'On';
            document.getElementById('quadIII').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('quadIII').innerHTML = 'Off'; 
            document.getElementById('quadIII').style = 'border-color: rgb(255,0,0);';
        }

        return this.quadiii_;
    }

    getQuadIV() {
        if(this.quadiv_) {
            document.getElementById('quadIV').innerHTML = 'On';
            document.getElementById('quadIV').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('quadIV').innerHTML = 'Off'; 
            document.getElementById('quadIV').style = 'border-color: rgb(255,0,0);';
        }

        return this.quadiv_;
    }

    getPosInfo() {
        if(this.posInfo_) {
            document.getElementById('posInfo').innerHTML = 'On'
            document.getElementById('posInfo').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('posInfo').innerHTML = 'Off'
            document.getElementById('posInfo').style = 'border-color: rgb(255,0,0);';
        }
        return this.posInfo_;
    }

    getPythIdenOne() {
        if(this.pythIdenOne_) {
            document.getElementById('pythIdenOne').innerHTML = 'On'
            document.getElementById('pythIdenOne').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('pythIdenOne').innerHTML = 'Off'
            document.getElementById('pythIdenOne').style = 'border-color: rgb(255,0,0);';
        }
        return this.pythIdenOne_;
    }

    getPythIdenTwo() {
        if(this.pythIdenTwo_) {
            document.getElementById('pythIdenTwo').innerHTML = 'On'
            document.getElementById('pythIdenTwo').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('pythIdenTwo').innerHTML = 'Off'
            document.getElementById('pythIdenTwo').style = 'border-color: rgb(255,0,0);';
        }
        return this.pythIdenTwo_;
    }

    getPythIdenThree() {
        if(this.pythIdenThree_) {
            document.getElementById('pythIdenThree').innerHTML = 'On'
            document.getElementById('pythIdenThree').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('pythIdenThree').innerHTML = 'Off'
            document.getElementById('pythIdenThree').style = 'border-color: rgb(255,0,0);';
        }
        return this.pythIdenThree_;
    }

    getSpinMode() {
        if(this.spinMode_) {
            document.getElementById('spinMode').innerHTML = 'On'
            document.getElementById('spinMode').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('spinMode').innerHTML = 'Off'
            document.getElementById('spinMode').style = 'border-color: rgb(255,0,0);';
        }
        return this.spinMode_;
    }

    getRadius() {
        if(this.radius_) {
            document.getElementById('radius').innerHTML = 'On'
            document.getElementById('radius').style = 'border-color: rgb(0,255,0);';

            document.getElementById('hypotenuse').innerHTML = 'On'
            document.getElementById('hypotenuse').style = 'border-color: rgb(0,255,0);';

        } else {
            document.getElementById('radius').innerHTML = 'Off'
            document.getElementById('radius').style = 'border-color: rgb(255,0,0);';

            document.getElementById('hypotenuse').innerHTML = 'Off'
            document.getElementById('hypotenuse').style = 'border-color: rgb(255,0,0);';

        }
        return this.radius_;
    }

    getNames() {
        if(this.names_) {
            document.getElementById('names').innerHTML = 'On'
            document.getElementById('names').style = 'border-color: rgb(0,255,0);';

            document.getElementById('names1').innerHTML = 'On'
            document.getElementById('names1').style = 'border-color: rgb(0,255,0);';
        } else {
            document.getElementById('names').innerHTML = 'Off'
            document.getElementById('names').style = 'border-color: rgb(255,0,0);';

            document.getElementById('names1').innerHTML = 'Off'
            document.getElementById('names1').style = 'border-color: rgb(255,0,0);';
        }
        return this.names_;
    }

    getCofuncIdenOne() {
        if(this.cofuncIdenOne_) {
            document.getElementById('cofuncIdenOne').innerHTML = 'On'
            document.getElementById('cofuncIdenOne').style = 'border-color: rgb(0,255,0);'
        } else {
            document.getElementById('cofuncIdenOne').innerHTML = 'Off'
            document.getElementById('cofuncIdenOne').style = 'border-color:rgb(255,0,0);'
        }
        return this.cofuncIdenOne_;
    }
    getCofuncIdenTwo() {
        if(this.cofuncIdenTwo_) {
            document.getElementById('cofuncIdenTwo').innerHTML = 'On'
            document.getElementById('cofuncIdenTwo').style = 'border-color: rgb(0,255,0);'
        } else {
            document.getElementById('cofuncIdenTwo').innerHTML = 'Off'
            document.getElementById('cofuncIdenTwo').style = 'border-color:rgb(255,0,0);'
        }
        return this.cofuncIdenTwo_
    }
    getCofuncIdenThree() {
        if(this.cofuncIdenThree_) {
            document.getElementById('cofuncIdenThree').innerHTML = 'On'
            document.getElementById('cofuncIdenThree').style = 'border-color: rgb(0,255,0);'
        } else {
            document.getElementById('cofuncIdenThree').innerHTML = 'Off'
            document.getElementById('cofuncIdenThree').style = 'border-color:rgb(255,0,0);'
        }
        return this.cofuncIdenThree_;
    }
    getCofuncIdenFour() {
        if(this.cofuncIdenFour_) {
            document.getElementById('cofuncIdenFour').innerHTML = 'On'
            document.getElementById('cofuncIdenFour').style = 'border-color: rgb(0,255,0);'
        } else {
            document.getElementById('cofuncIdenFour').innerHTML = 'Off'
            document.getElementById('cofuncIdenFour').style = 'border-color:rgb(255,0,0);'
        }
        return this.cofuncIdenFour_;
    }
    getCofuncIdenFive() {
        if(this.cofuncIdenFive_) {
            document.getElementById('cofuncIdenFive').innerHTML = 'On'
            document.getElementById('cofuncIdenFive').style = 'border-color: rgb(0,255,0);'
        } else {
            document.getElementById('cofuncIdenFive').innerHTML = 'Off'
            document.getElementById('cofuncIdenFive').style = 'border-color:rgb(255,0,0);'
        }
        return this.cofuncIdenFive_;
    }
    getCofuncIdenSix() {
        if(this.cofuncIdenSix_) {
            document.getElementById('cofuncIdenSix').innerHTML = 'On'
            document.getElementById('cofuncIdenSix').style = 'border-color:rgb(0,255,0);'
        } else {
            document.getElementById('cofuncIdenSix').innerHTML = 'Off'
            document.getElementById('cofuncIdenSix').style = 'border-color:rgb(255,0,0);'
        }
        return this.cofuncIdenSix_
    }
    getEvenOddIdenOne() {
        if(this.evenOddIdenOne_) {
            document.getElementById('evenOddIdenOne').innerHTML = 'On'
            document.getElementById('evenOddIdenOne').style = 'border-color:rgb(0,255,0);'
        } else {
            document.getElementById('evenOddIdenOne').innerHTML = 'Off'
            document.getElementById('evenOddIdenOne').style = 'border-color:rgb(255,0,0);'
        }
        return this.evenOddIdenOne_
    }
    getEvenOddIdenTwo() {
        if(this.evenOddIdenTwo_) {
            document.getElementById('evenOddIdenTwo').innerHTML = 'On'
            document.getElementById('evenOddIdenTwo').style = 'border-color:rgb(0,255,0);'
        } else {
            document.getElementById('evenOddIdenTwo').innerHTML = 'Off'
            document.getElementById('evenOddIdenTwo').style = 'border-color:rgb(255,0,0);'
        }
        return this.evenOddIdenTwo_
    }
    getEvenOddIdenThree() {
        if(this.evenOddIdenThree_) {
            document.getElementById('evenOddIdenThree').innerHTML = 'On'
            document.getElementById('evenOddIdenThree').style = 'border-color:rgb(0,255,0);'
        } else {
            document.getElementById('evenOddIdenThree').innerHTML = 'Off'
            document.getElementById('evenOddIdenThree').style = 'border-color:rgb(255,0,0);'
        }
        return this.evenOddIdenThree_
    }
    getEvenOddIdenFour() {
        if(this.evenOddIdenFour_) {
            document.getElementById('evenOddIdenFour').innerHTML = 'On'
            document.getElementById('evenOddIdenFour').style = 'border-color:rgb(0,255,0);'
        } else {
            document.getElementById('evenOddIdenFour').innerHTML = 'Off'
            document.getElementById('evenOddIdenFour').style = 'border-color:rgb(255,0,0);'
        }
        return this.evenOddIdenFour_
    }
    getEvenOddIdenFive() {
        if(this.evenOddIdenFive_) {
            document.getElementById('evenOddIdenFive').innerHTML = 'On'
            document.getElementById('evenOddIdenFive').style = 'border-color:rgb(0,255,0);'
        } else {
            document.getElementById('evenOddIdenFive').innerHTML = 'Off'
            document.getElementById('evenOddIdenFive').style = 'border-color:rgb(255,0,0);'
        }
        return this.evenOddIdenFive_
    }
    getEvenOddIdenSix() {
        if(this.evenOddIdenSix_) {
            document.getElementById('evenOddIdenSix').innerHTML = 'On'
            document.getElementById('evenOddIdenSix').style = 'border-color:rgb(0,255,0);'
        } else {
            document.getElementById('evenOddIdenSix').innerHTML = 'Off'
            document.getElementById('evenOddIdenSix').style = 'border-color:rgb(255,0,0);'
        }
        return this.evenOddIdenSix_
    }


    // Buttons

    butSin() {
        this.sin_ = !this.sin_;

        if(this.sin_) {
            document.getElementById('sin2').innerHTML = 'On';

        } else {
            document.getElementById('sin2').innerHTML = 'Off';
            document.getElementById('allTrigFunc').innerHTML = 'Off';
            document.getElementById('allTrigFunc').style = 'border-color:rgb(255,0,0);'

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
            document.getElementById('allTrigFunc').style = 'border-color:rgb(255,0,0);'

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
            document.getElementById('allTrigFunc').style = 'border-color:rgb(255,0,0);'

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
            document.getElementById('allTrigFunc').style = 'border-color:rgb(255,0,0);'

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
            document.getElementById('allTrigFunc').style = 'border-color:rgb(255,0,0);'

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
            document.getElementById('allTrigFunc').style = 'border-color:rgb(255,0,0);'

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
            document.getElementById('cardPoints').innerHTML = 'On';
            document.getElementById('cardPoints1').innerHTML = 'On';

        } else {
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


    butUnitTriangle(set = !this.unitTriangle_) {
        this.unitTriangle_ = set;
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
            document.getElementById('allTrigFunc').style = 'border-color:rgb(0,255,0);'
            this.sin_ = true;
            this.cos_ = true;
            this.tan_ = true;
    
            this.csc_ = true;
            this.sec_ = true;
            this.cot_ = true;

            this.radius_ = true;

            this.unitTriangle_ = false;
    
        } else {

            document.getElementById('allTrigFunc').innerHTML = 'Off';
            document.getElementById('allTrigFunc').style = 'border-color:rgb(255,0,0);'

            this.sin_ = false;
            this.cos_ = false;
            this.tan_ = false;

            this.csc_ = false;
            this.sec_ = false;
            this.cot_ = false;

            this.radius_ = false;
        
            this.unitTriangle_ = true;
        }

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
                document.getElementById('panel5').style.display="none";

                document.getElementById('welcomeButton0').style='border-color:rgb(255,255,255);';
                document.getElementById('gridButton0').style='border-color:rgb(0,0,0);';
                document.getElementById('circleButton0').style='border-color:rgb(0,0,0);';
                document.getElementById('triangleButton0').style='border-color:rgb(0,0,0);';
                document.getElementById('piButton0').style='border-color:rgb(0,0,0);';
                document.getElementById('calcButton0').style='border-color:rgb(0,0,0);';
                
            } else if(this.openPanel_ == 1) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="block";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="none";

                document.getElementById('welcomeButton1').style='border-color:rgb(0,0,0);';
                document.getElementById('gridButton1').style='border-color:rgb(255,255,255);';
                document.getElementById('circleButton1').style='border-color:rgb(0,0,0);';
                document.getElementById('triangleButton1').style='border-color:rgb(0,0,0);';
                document.getElementById('piButton1').style='border-color:rgb(0,0,0);';
                document.getElementById('calcButton1').style='border-color:rgb(0,0,0);';


            } else if(this.openPanel_ == 2) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="block";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="none";

                document.getElementById('welcomeButton2').style='border-color:rgb(0,0,0);';
                document.getElementById('gridButton2').style='border-color:rgb(0,0,0);';
                document.getElementById('circleButton2').style='border-color:rgb(255,255,255);';
                document.getElementById('triangleButton2').style='border-color:rgb(0,0,0);';
                document.getElementById('piButton2').style='border-color:rgb(0,0,0);';
                document.getElementById('calcButton2').style='border-color:rgb(0,0,0);';


            } else if (this.openPanel_ == 3) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="block";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="none";

                document.getElementById('welcomeButton3').style='border-color:rgb(0,0,0);';
                document.getElementById('gridButton3').style='border-color:rgb(0,0,0);';
                document.getElementById('circleButton3').style='border-color:rgb(0,0,0);';
                document.getElementById('triangleButton3').style='border-color:rgb(255,255,255);';
                document.getElementById('piButton3').style='border-color:rgb(0,0,0);';
                document.getElementById('calcButton3').style='border-color:rgb(0,0,0);';

            } else if (this.openPanel_ == 4) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="block";
                document.getElementById('panel5').style.display="none";

                document.getElementById('welcomeButton4').style='border-color:rgb(0,0,0);';
                document.getElementById('gridButton4').style='border-color:rgb(0,0,0);';
                document.getElementById('circleButton4').style='border-color:rgb(0,0,0);';
                document.getElementById('triangleButton4').style='border-color:rgb(0,0,0);';
                document.getElementById('piButton4').style='border-color:rgb(255,255,255);';
                document.getElementById('calcButton4').style='border-color:rgb(0,0,0);';


            } else if (this.openPanel_ == 5) {
                document.getElementById('panel0').style.display="none";
                document.getElementById('panel1').style.display="none";
                document.getElementById('panel2').style.display="none";
                document.getElementById('panel3').style.display="none";
                document.getElementById('panel4').style.display="none";
                document.getElementById('panel5').style.display="block";

                document.getElementById('welcomeButton5').style='border-color:rgb(0,0,0);';
                document.getElementById('gridButton5').style='border-color:rgb(0,0,0);';
                document.getElementById('circleButton5').style='border-color:rgb(0,0,0);';
                document.getElementById('triangleButton5').style='border-color:rgb(0,0,0);';
                document.getElementById('piButton5').style='border-color:rgb(0,0,0);';
                document.getElementById('calcButton5').style='border-color:rgb(255,255,255);';

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
        if(this.posInfo_) {
            document.getElementById('quadIV').innerHTML = 'On';
        } else {
            document.getElementById('quadIV').innerHTML = 'Off'; 
        }
    }

    butPythIdenOne(set = !this.pythIdenOne_) {
        this.pythIdenOne_ = set;
        if(this.pythIdenOne_) {
            document.getElementById('pythIdenOne').innerHTML = 'On';
            document.getElementById('pythIdenOne').style = 'border-color: rgb(0,255,0);'; 
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false)
            this.butCofuncIdenFour(false)
            this.butCofuncIdenFive(false)
            this.butCofuncIdenSix(false)

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('pythIdenOne').innerHTML = 'Off'; 
            document.getElementById('pythIdenOne').style = 'border-color: rgb(255,0,0);'; 

        }
    }

    butPythIdenTwo(set = !this.pythIdenTwo_) {
        this.pythIdenTwo_ = set;
        if(this.pythIdenTwo_) {
            document.getElementById('pythIdenTwo').innerHTML = 'On';
            document.getElementById('pythIdenTwo').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false)
            this.butCofuncIdenFour(false)
            this.butCofuncIdenFive(false)
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('pythIdenTwo').innerHTML = 'Off';
            document.getElementById('pythIdenTwo').style = 'border-color: rgb(255,0,0);'; 
 
        }
    }

    butPythIdenThree(set = !this.pythIdenThree_) {
        this.pythIdenThree_ = set;
        if(this.pythIdenThree_) {
            document.getElementById('pythIdenThree').innerHTML = 'On';
            document.getElementById('pythIdenThree').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false)
            this.butCofuncIdenFour(false)
            this.butCofuncIdenFive(false)
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('pythIdenThree').innerHTML = 'Off'; 
            document.getElementById('pythIdenThree').style = 'border-color: rgb(255,0,0);'; 

        }
    }

    butCofuncIdenOne(set = !this.cofuncIdenOne_) {
        this.cofuncIdenOne_ = set;
        if(this.cofuncIdenOne_) {
            document.getElementById('cofuncIdenOne').innerHTML = 'On';
            document.getElementById('cofuncIdenOne').style = 'border-color: rgb(0,255,0);'; 
            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false)
            this.butCofuncIdenFour(false)
            this.butCofuncIdenFive(false)
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('cofuncIdenOne').innerHTML = 'Off';
            document.getElementById('cofuncIdenOne').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butCofuncIdenTwo(set = !this.cofuncIdenTwo_) {
        this.cofuncIdenTwo_ = set;
        if(this.cofuncIdenTwo_) {
            document.getElementById('cofuncIdenTwo').innerHTML = 'On';
            document.getElementById('cofuncIdenTwo').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenThree(false)
            this.butCofuncIdenFour(false)
            this.butCofuncIdenFive(false)
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('cofuncIdenTwo').innerHTML = 'Off';
            document.getElementById('cofuncIdenTwo').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butCofuncIdenThree(set = !this.cofuncIdenThree_) {
        this.cofuncIdenThree_ = set;
        if(this.cofuncIdenThree_) {
            document.getElementById('cofuncIdenThree').innerHTML = 'On';
            document.getElementById('cofuncIdenThree').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false)
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenFour(false)
            this.butCofuncIdenFive(false)
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('cofuncIdenThree').innerHTML = 'Off'
            document.getElementById('cofuncIdenThree').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butCofuncIdenFour(set = !this.cofuncIdenFour_) {
        this.cofuncIdenFour_ = set;
        if(this.cofuncIdenFour_) {
            document.getElementById('cofuncIdenFour').innerHTML = 'On';
            document.getElementById('cofuncIdenFour').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false)
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false)
            this.butCofuncIdenFive(false)
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('cofuncIdenFour').innerHTML = 'Off'
            document.getElementById('cofuncIdenFour').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butCofuncIdenFive(set = !this.cofuncIdenFive_) {
        this.cofuncIdenFive_ = set;
        if(this.cofuncIdenFive_) {
            document.getElementById('cofuncIdenFive').innerHTML = 'On';
            document.getElementById('cofuncIdenFive').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false)
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false)
            this.butCofuncIdenFour(false)
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);

        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('cofuncIdenFive').innerHTML = 'Off'
            document.getElementById('cofuncIdenFive').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butCofuncIdenSix(set = !this.cofuncIdenSix_) {
        this.cofuncIdenSix_ = set;
        if(this.cofuncIdenSix_) {
            document.getElementById('cofuncIdenSix').innerHTML = 'On';
            document.getElementById('cofuncIdenSix').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false);
            this.butCofuncIdenFour(false);
            this.butCofuncIdenFive(false);

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);



        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('cofuncIdenSix').innerHTML = 'Off'
            document.getElementById('cofuncIdenSix').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butEvenOddIdenOne(set = !this.evenOddIdenOne_) {
        this.evenOddIdenOne_ = set;
        if(this.evenOddIdenOne_) {
            document.getElementById('evenOddIdenOne').innerHTML = 'On';
            document.getElementById('evenOddIdenOne').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false);
            this.butCofuncIdenFour(false);
            this.butCofuncIdenFive(false);
            this.butCofuncIdenSix(false)

            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);



        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('evenOddIdenOne').innerHTML = 'Off'
            document.getElementById('evenOddIdenOne').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butEvenOddIdenTwo(set = !this.evenOddIdenTwo_) {
        this.evenOddIdenTwo_ = set;
        if(this.evenOddIdenTwo_) {
            document.getElementById('evenOddIdenTwo').innerHTML = 'On';
            document.getElementById('evenOddIdenTwo').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false);
            this.butCofuncIdenFour(false);
            this.butCofuncIdenFive(false);
            this.butCofuncIdenSix(false);

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);



        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('evenOddIdenTwo').innerHTML = 'Off'
            document.getElementById('evenOddIdenTwo').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butEvenOddIdenThree(set = !this.evenOddIdenThree_) {
        this.evenOddIdenThree_ = set;
        if(this.evenOddIdenThree_) {
            document.getElementById('evenOddIdenThree').innerHTML = 'On';
            document.getElementById('evenOddIdenThree').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false);
            this.butCofuncIdenFour(false);
            this.butCofuncIdenFive(false);
            this.butCofuncIdenSix(false);


            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);



        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('evenOddIdenThree').innerHTML = 'Off'
            document.getElementById('evenOddIdenThree').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butEvenOddIdenFour(set = !this.evenOddIdenFour_) {
        this.evenOddIdenFour_ = set;
        if(this.evenOddIdenFour_) {
            document.getElementById('evenOddIdenFour').innerHTML = 'On';
            document.getElementById('evenOddIdenFour').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false);
            this.butCofuncIdenFour(false);
            this.butCofuncIdenFive(false);

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFive(false);
            this.butEvenOddIdenSix(false);



        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('evenOddIdenFour').innerHTML = 'Off'
            document.getElementById('evenOddIdenFour').style = 'border-color: rgb(255,0,0);'; 

        }
    }
    butEvenOddIdenFive(set = !this.evenOddIdenFive_) {
        this.evenOddIdenFive_ = set;
        if(this.evenOddIdenFive_) {
            document.getElementById('evenOddIdenFive').innerHTML = 'On';
            document.getElementById('evenOddIdenFive').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false);
            this.butCofuncIdenFour(false);
            this.butCofuncIdenFive(false);

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenSix(false);



        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('evenOddIdenFive').innerHTML = 'Off'
            document.getElementById('evenOddIdenFive').style = 'border-color: rgb(255,0,0);'; 

        }
    }    
    butEvenOddIdenSix(set = !this.evenOddIdenSix_) {
        this.evenOddIdenSix_ = set;
        if(this.evenOddIdenSix_) {
            document.getElementById('evenOddIdenSix').innerHTML = 'On';
            document.getElementById('evenOddIdenSix').style = 'border-color: rgb(0,255,0);'; 

            this.butPythIdenOne(false);
            this.butPythIdenTwo(false);
            this.butPythIdenThree(false);

            this.butCofuncIdenOne(false);
            this.butCofuncIdenTwo(false);
            this.butCofuncIdenThree(false);
            this.butCofuncIdenFour(false);
            this.butCofuncIdenFive(false);

            this.butEvenOddIdenOne(false);
            this.butEvenOddIdenTwo(false);
            this.butEvenOddIdenThree(false);
            this.butEvenOddIdenFour(false);
            this.butEvenOddIdenFive(false);



        } else {
            this.butAllTrigFunc(false);
            this.butRadius(false);
            document.getElementById('evenOddIdenSix').innerHTML = 'Off'
            document.getElementById('evenOddIdenSix').style = 'border-color: rgb(255,0,0);'; 

        }
    }

    butSpinMode() {
        this.spinMode_ = !this.spinMode_;
        if(this.spinMode_) {
            document.getElementById('spinMode').innerHTML = 'On';
            document.getElementById('spinMode').style = 'border-color: rgb(0,255,0);'; 
        } else {
            document.getElementById('spinMode').innerHTML = 'Off'; 
            document.getElementById('spinMode').style = 'border-color: rgb(255,0,0);'; 

        }
    }

    butRadius(set = !this.radius_) {
        this.radius_ = set;
        if(this.radius_) {
            document.getElementById('radius').innerHTML = 'On';
            document.getElementById('hypotenuse').innerHTML = 'On';
        } else {
            document.getElementById('radius').innerHTML = 'Off';
            document.getElementById('hypotenuse').innerHTML = 'Off'; 

        }
    }

    butNames() {
        this.names_ = !this.names_;
        if(this.names_) {
            document.getElementById('names').innerHTML = 'On';
            document.getElementById('names1').innerHTML = 'On';

        } else { 
            document.getElementById('names').innerHTML = 'Off';
            document.getElementById('names1').innerHTML = 'Off';
        }
    }

};

/////
function buttonMessage(msg) {
    alert(msg);
}



let CANVAS_SIZE = 900;
let CANVAS_HALF = CANVAS_SIZE / 2;



let CosMan;
function main() {
    CosMan = new CosmeticManager();
    SetMan = new SettingsManager();
    
    SetMan.butAllTrigFunc(false);
    hidePanels();
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
        root.style.setProperty('--panel-height', (CANVAS_SIZE * 1.3) + 'px');
        root.style.setProperty('--panel-width', (CANVAS_SIZE) + 'px');
        root.style.setProperty('--inner-panel-size', (CANVAS_SIZE * 1.3 - 60) + 'px');
        
     }

}

// UTIL
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let cssCanvasSize = rootStyles.getPropertyValue('--canvas-size');
root.style.setProperty('--panel-height', (CANVAS_SIZE * 1.3) + 'px');
root.style.setProperty('--panel-width', (CANVAS_SIZE) + 'px');
root.style.setProperty('--inner-panel-size', (CANVAS_SIZE * 1.3 - 60) + 'px');


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
        root.style.setProperty('--panel-height', (CANVAS_SIZE * 1.3) + 'px');
        root.style.setProperty('--panel-width', (CANVAS_SIZE) + 'px');
        root.style.setProperty('--inner-panel-size', (CANVAS_SIZE * 1.3 - 60) + 'px');
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
        root.style.setProperty('--panel-height', (CANVAS_SIZE * 1.3) + 'px');
        root.style.setProperty('--panel-width', (CANVAS_SIZE) + 'px');
        root.style.setProperty('--inner-panel-size', (CANVAS_SIZE * 1.3 - 60) + 'px');
    }
    setup();

}

function hidePanels() {
    SetMan.butNextPanel(false, 0);
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
    if(keyCode === 190) {
        increaseCanvasSize();
    }
    if(keyCode === 188) {
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
    if(keyCode === 81) {
        SetMan.butNextPanel(false, 0);
    }
    if(keyCode === 87) {
        SetMan.butNextPanel(false, 1);
    }
    if(keyCode === 69) {
        SetMan.butNextPanel(false, 2);
    }
    if(keyCode === 82) {
        SetMan.butNextPanel(false, 3);
    }
    if(keyCode === 84) {
        SetMan.butNextPanel(false, 4);
    }
    if(keyCode === 89) {
        SetMan.butNextPanel(false, 5);
    }


    if(keyCode === 83) {
        SetMan.butSpinMode();
    }

    if(keyCode === 76) {
        SetMan.butNames();
    }

    if(keyCode === 85) {
        SetMan.butUnitCirc();
    }

    if(keyCode === 70) {
        SetMan.butRadius();
    }

    if(keyCode === 65) {
        SetMan.butUnitArc();
    }

    if(keyCode === 68) {
        newSetMan('default');
    }


    if(keyCode === 88) {
        SetMan.butXAxis();
    }
    if(keyCode === 90) {
        SetMan.butYAxis();
    }
    if(keyCode === 67) {
        SetMan.butCircle();
    }

}

// P5 function that drives the entire animation.
function draw() {
    //if(mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {

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

    if(SetMan.getUnitTriangle()) drawUnitTriangle();

    if(SetMan.getSin()) drawSin();

    if(SetMan.getCos() && (!SetMan.getPythIdenOne()))
        drawCos();
    else if (SetMan.getCos() && SetMan.getPythIdenOne())
        drawCos(true);

    if(SetMan.getTan()) drawTan();

    if(SetMan.getCsc()) drawCsc();
    if(SetMan.getSec()) drawSec();
    if(SetMan.getCot()) drawCot();

    if(SetMan.getRadius()) drawRadius();

    if(SetMan.getNames()) drawFuncNames();

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
    if(SetMan.getPythIdenTwo()) drawPythagoreanIdentityTwo();
    if(SetMan.getPythIdenThree()) drawPythagoreanIdentityThree();

    if(SetMan.getCofuncIdenOne()) drawCofuncIdenOne();
    if(SetMan.getCofuncIdenTwo()) drawCofuncIdenTwo();
    if(SetMan.getCofuncIdenThree()) drawCofuncIdenThree();
    if(SetMan.getCofuncIdenFour()) drawCofuncIdenFour();
    if(SetMan.getCofuncIdenFive()) drawCofuncIdenFive();
    if(SetMan.getCofuncIdenSix()) drawCofuncIdenSix();

    if(SetMan.getEvenOddIdenOne()) drawEvenOddIdenOne();
    if(SetMan.getEvenOddIdenTwo()) drawEvenOddIdenTwo();
    if(SetMan.getEvenOddIdenThree()) drawEvenOddIdenThree();
    if(SetMan.getEvenOddIdenFour()) drawEvenOddIdenFour();
    if(SetMan.getEvenOddIdenFive()) drawEvenOddIdenFive();
    if(SetMan.getEvenOddIdenSix()) drawEvenOddIdenSix();


    if(SetMan.getSpinMode()) spinMode();

    if(SetMan.getCircle()) drawUnitPoint();
    drawMousePoint();

    //}
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

    fill('rgba(100, 100, 100, 0.5)');


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
    let xCoord = parseFloat(relativeCos(angle)/UNIT).toFixed(3);
    let yCoord = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);

}

function drawRadius() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    let xCoord = parseFloat(relativeCos(angle)/UNIT).toFixed(3);
    let yCoord = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);

    CosMan.strokeColor('brown');
    CosMan.strokeWeight(3);
    line(0, 0, xCoord * UNIT, -yCoord * UNIT);
}

// ARCS

function drawArc() {
    CosMan.strokeColor('rgb(230, 190, 140)');
    CosMan.strokeWeight(2);
    fill('rgba(230, 190, 140, .5)');


    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    arc(0, 0, UNIT * 0.5, UNIT * 0.5, angle, 0, PIE);
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

function drawCos(identity = false) {
    CosMan.strokeColor('lime');
    CosMan.strokeWeight(4);
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    if(identity) {
        line(0, 0, relativeCos(angle), 0);
    } else {
        line(0, relativeSin(angle), relativeCos(angle), relativeSin(angle));
    }
}

function drawTan() {
    CosMan.strokeColor('red');
    CosMan.strokeWeight(4);
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    
    line(relativeCos(angle), relativeSin(angle), UNIT/relativeCos(angle) * UNIT, 0)
}

function drawCsc() {
    CosMan.strokeColor('cyan');
    CosMan.strokeWeight(4);
    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    line(0, 0, 0, -(1/(relativeSin(angle)/UNIT)) * UNIT);
}

function drawSec() {
    CosMan.strokeColor('yellow');
    CosMan.strokeWeight(4);
    let angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    line(0, 0, UNIT/relativeCos(angle) * UNIT, 0)
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

    line(0, -(1/(relativeSin(angle)/UNIT)) * UNIT, relativeCos(angle), -relativeSin(angle));

}

function unitCoordinateInfo() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle = parseFloat(angle).toFixed(3);
    document.getElementById('unitCoordinates').innerHTML = '(x, y) = (' + parseFloat(relativeCos(angle*PI)/UNIT).toFixed(3) + ', ' + parseFloat(-relativeSin(angle*PI)/UNIT).toFixed(3) + ')';
    document.getElementById('unitCoordinates1').innerHTML = '(x, y) = (' + parseFloat(relativeCos(angle*PI)/UNIT).toFixed(3) + ', ' + parseFloat(-relativeSin(angle*PI)/UNIT).toFixed(3) + ')';

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
    let cot = -relativeMouseX()/relativeMouseY();
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
    let offset = SetMan.getPosInfoOffset() ? UNIT * 0.65 : UNIT * 0.45; 

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

// PYTHAGOREAN

function drawPythagoreanIdentityOne() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(true);
    SetMan.butUnitTriangle(false);
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


    fill('white');
    textSize(24);

    let explanation = 'Pythagorean Identity\n\nsin²(' + parseFloat(angle/PI).toFixed(3) + 'π) + cos²(' + parseFloat(angle/PI).toFixed(3) + 'π) = 1\n\n(' + xCoord + ')² + (' + yCoord + ')² = 1\n\n' + parseFloat(Math.pow(xCoord, 2)).toFixed(3) + ' + '+ parseFloat(Math.pow(yCoord, 2)).toFixed(3) + ' = 1';

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

function drawPythagoreanIdentityTwo() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(true);
    SetMan.butUnitTriangle(false);
    SetMan.butTan();
    SetMan.butSec();


    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    let xCoord = parseFloat(relativeCos(angle)/UNIT).toFixed(3);
    let yCoord = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);

    CosMan.strokeColor('brown');
    CosMan.strokeWeight(3);
    line(0, 0, xCoord * UNIT, -yCoord * UNIT);

    fill('white');
    textSize(24);

    let explanation = 'Pythagorean Identity\n\ntan²(' + parseFloat(angle/PI).toFixed(3) + 'π) + 1 = sec²(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n(' + parseFloat(yCoord/xCoord).toFixed(3) + ')² + 1 = (' + parseFloat(1/xCoord).toFixed(3) + ')²\n\n' + parseFloat(Math.pow(yCoord/xCoord, 2)).toFixed(3) + ' + 1 = '+ parseFloat(1 + Math.pow(yCoord/xCoord, 2)).toFixed(3);

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    }

}

function drawPythagoreanIdentityThree() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(true);
    SetMan.butUnitTriangle(false);
    SetMan.butCot();
    SetMan.butCsc();


    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    let xCoord = parseFloat(relativeCos(angle)/UNIT).toFixed(3);
    let yCoord = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);


    fill('white');
    textSize(24);

    let explanation = 'Pythagorean Identity\n\n1 + cot²(' + parseFloat(angle/PI).toFixed(3) + 'π) = csc²(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n1 + (' + parseFloat(xCoord/yCoord).toFixed(3) + ')² = (' + parseFloat(1/yCoord).toFixed(3) + ')²\n\n1 + ' + parseFloat(Math.pow(xCoord/yCoord, 2)).toFixed(3) + ' = '+ parseFloat(1 + Math.pow(xCoord/yCoord, 2)).toFixed(3);

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    }

}

// COFUNCTION

function drawCofuncIdenOne() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeWeight(4)

    CosMan.strokeColor('lime');
    line(0, 0, relativeCos(angle), 0);

    CosMan.strokeColor('blue');
    line(relativeCos(angle), 0, relativeCos(angle), relativeSin(PI/2 - angle));
    CosMan.strokeColor('brown')
    line(0, 0, relativeCos(angle), relativeSin(PI/2 - angle));


    let cosVal = parseFloat(relativeCos(angle)/UNIT).toFixed(3);
    let sinVal = parseFloat(-relativeSin(PI/2 - angle)/UNIT).toFixed(3);

    let explanation = 'Cofunction Identity\n\nsin(0.5π - ' + parseFloat(angle/PI).toFixed(3) + 'π) = cos(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\nsin(' + parseFloat(0.5 - angle/PI).toFixed(3) + 'π) = cos(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + sinVal + ' = ' + cosVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('blue');
        text('sin(π/2 - θ)', relativeCos(angle) * 1.4, relativeSin(PI/2 - angle) * 0.5);
        fill('lime');
        text('cos(θ)', relativeCos(angle) * 0.5, (angle > PI/2 && angle < 3*PI/2)  ? -50 : 50);
        fill('brown');
    }

}

function drawCofuncIdenTwo() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeWeight(4)

    CosMan.strokeColor('lime');
    line(0, 0, relativeCos(PI/2 - angle), 0);

    CosMan.strokeColor('blue');
    line(relativeCos(PI/2 -  angle), 0, relativeCos(PI/2 - angle), relativeSin(angle));
    CosMan.strokeColor('brown')
    line(0, 0, relativeCos(PI/2 - angle), relativeSin(angle));


    let cosVal = parseFloat(relativeCos(PI/2 - angle)/UNIT).toFixed(3);
    let sinVal = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);

    let explanation = 'Cofunction Identity\n\ncos(0.5π - ' + parseFloat(angle/PI).toFixed(3) + 'π) = sin(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\ncos(' + parseFloat(0.5 - angle/PI).toFixed(3) + 'π) = sin(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + cosVal + ' = ' + sinVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('blue');
        text('sin(θ)', relativeCos(PI/2 - angle) * 1.2, relativeSin(angle) * 0.5);
        fill('lime');
        text('cos(π/2 - θ)', relativeCos(PI/2 - angle) * 0.5, (angle > 0 && angle < PI)  ? 50 : -50);
        fill('brown');
    }
}

function drawCofuncIdenThree() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeWeight(4);

    CosMan.strokeColor('red');
    line(relativeCos(PI/2-angle), relativeSin(PI/2-angle), UNIT/relativeCos(PI/2-angle) * UNIT, 0);

    CosMan.strokeColor('magenta');
    line(0, (1/(relativeSin(angle)/UNIT)) * UNIT, relativeCos(angle), relativeSin(angle));


    let tanVal = parseFloat(-relativeSin(PI/2-angle)/relativeCos(PI/2-angle)).toFixed(3);
    let cotVal = parseFloat(-relativeCos(angle)/relativeSin(angle)).toFixed(3);
    //let cosVal = parseFloat(relativeCos(PI/2 - angle)/UNIT).toFixed(3);
    //let sinVal = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);

    let explanation = 'Cofunction Identity\n\ntan(0.5π - ' + parseFloat(angle/PI).toFixed(3) + 'π) = cot(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\ntan(' + parseFloat(0.5 - angle/PI).toFixed(3) + 'π) = cot(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + tanVal + ' = ' + cotVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('red');
        text('tan(π/2 - θ)', (relativeCos(PI/2 - angle) + UNIT/relativeCos(PI/2 - angle) * UNIT) * 0.6, relativeSin(angle) * 0.5);
        fill('magenta');
        text('cot(θ)', relativeCos(angle) * 0.75, ((1/(relativeSin(angle)/UNIT)) * UNIT));
        fill('brown');
    }
}

function drawCofuncIdenFour() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeWeight(4);

    CosMan.strokeColor('red');
    line(relativeCos(angle), relativeSin(angle), UNIT/relativeCos(angle) * UNIT, 0);

    CosMan.strokeColor('magenta');
    line(0, (1/(relativeSin(PI/2-angle)/UNIT)) * UNIT, relativeCos(PI/2-angle), relativeSin(PI/2-angle));


    let tanVal = parseFloat(-relativeSin(angle)/relativeCos(angle)).toFixed(3);
    let cotVal = parseFloat(-relativeCos(PI/2-angle)/relativeSin(PI/2-angle)).toFixed(3);
    //let cosVal = parseFloat(relativeCos(PI/2 - angle)/UNIT).toFixed(3);
    //let sinVal = parseFloat(-relativeSin(angle)/UNIT).toFixed(3);

    let explanation = 'Cofunction Identity\n\ncot(0.5π - ' + parseFloat(angle/PI).toFixed(3) + 'π) = tan(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\ncot(' + parseFloat(0.5 - angle/PI).toFixed(3) + 'π) = tan(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + tanVal + ' = ' + cotVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('red');
        text('tan(θ)', (relativeCos(angle) + UNIT/relativeCos(angle) * UNIT) * 0.6, relativeSin(angle) * 0.5);
        fill('magenta');
        text('cot(π/2 - θ)', relativeCos(PI/2-angle) * 0.75, ((1/(relativeSin(PI/2-angle)/UNIT)) * UNIT));
        fill('brown');
    }
}

function drawCofuncIdenFive() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeWeight(4)

    CosMan.strokeColor('cyan');
    line(0, 0, 0, (1/(relativeSin(PI/2-angle)/UNIT)) * UNIT);
    CosMan.strokeColor('yellow')
    line(0, 0, UNIT/relativeCos(angle) * UNIT, 0)


    let secVal = parseFloat(1/relativeCos(angle)*UNIT).toFixed(3);
    secVal = (secVal == '-0.000' ? Math.abs(secVal) : secVal);
    
    let sinVal = -relativeSin(PI/2-angle)/UNIT;
    let cscVal = parseFloat(1/sinVal).toFixed(3);
    cscVal = (cscVal == '-0.000' ? Math.abs(cscVal) : cscVal);

    let explanation = 'Cofunction Identity\n\ncsc(0.5π - ' + parseFloat(angle/PI).toFixed(3) + 'π) = sec(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\ncsc(' + parseFloat(0.5 - angle/PI).toFixed(3) + 'π) = sec(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + cscVal + ' = ' + secVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('cyan');
        text('csc(π/2 - θ)', (angle > PI/2 && angle < 3*PI/2) ? 100 : -100, ((1/(relativeSin(PI/2-angle)/UNIT)) * UNIT) * 0.5);
        fill('yellow');
        text('sec(θ)',(UNIT/relativeCos(angle) * UNIT) * 0.5, (angle > 0 && angle < PI)  ? 50 : -50);
    }
}

function drawCofuncIdenSix() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeWeight(4)

    CosMan.strokeColor('cyan');
    line(0, 0, 0, (1/(relativeSin(angle)/UNIT)) * UNIT);
    CosMan.strokeColor('yellow')
    line(0, 0, UNIT/relativeCos(PI/2-angle) * UNIT, 0)


    let secVal = parseFloat(1/relativeCos(PI/2-angle)*UNIT).toFixed(3);
    secVal = (secVal == '-0.000' ? Math.abs(secVal) : secVal);
    
    let sinVal = -relativeSin(angle)/UNIT;
    let cscVal = parseFloat(1/sinVal).toFixed(3);
    cscVal = (cscVal == '-0.000' ? Math.abs(cscVal) : cscVal);

    let explanation = 'Cofunction Identity\n\nsec(0.5π - ' + parseFloat(angle/PI).toFixed(3) + 'π) = csc(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\nsec(' + parseFloat(0.5 - angle/PI).toFixed(3) + 'π) = csc(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + secVal + ' = ' + cscVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('cyan');
        text('csc(θ)', (angle > PI/2 && angle < 3*PI/2) ? 50 : -50, ((1/(relativeSin(angle)/UNIT)) * UNIT) * 0.5);
        fill('yellow');
        text('sec(π/2 - θ)',(UNIT/relativeCos(PI/2 - angle) * UNIT) * 0.5, (angle > 0 && angle < PI)  ? 50 : -50);
    }

}

// EVEN / ODD

function drawEvenOddIdenOne() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;


    CosMan.strokeColor('blue');
    line(relativeCos(angle), 0, relativeCos(angle), relativeSin(-angle));


    let sinLeft = parseFloat(-relativeSin(-angle)/UNIT).toFixed(3);
    let sinRight = parseFloat(relativeSin(angle)/UNIT).toFixed(3);


    let explanation = 'Even / Odd Identity\n\nsin(-' + parseFloat(angle/PI).toFixed(3) + 'π) = -sin(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + sinLeft + ' = ' + sinRight;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('blue');
        text('sin(-θ)\n\n-sin(θ)', relativeCos(angle) * 1.4, relativeSin(-angle) * 0.5);
    }

}

function drawEvenOddIdenTwo() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;


    CosMan.strokeColor('lime');
    line(0, relativeSin(angle), -relativeCos(angle), relativeSin(angle));


    let cosLeft = parseFloat(-relativeCos(-angle)/UNIT).toFixed(3);
    let cosRight = parseFloat(-relativeCos(angle)/UNIT).toFixed(3);


    let explanation = 'Even / Odd Identity\n\ncos(-' + parseFloat(angle/PI).toFixed(3) + 'π) = -cos(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + cosLeft + ' = ' + cosRight;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('lime');
        text('cos(-θ)\n\n-cos(θ)', -relativeCos(angle) * 0.5, relativeSin(angle) * 1.4);
    }

}

function drawEvenOddIdenThree() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeWeight(4);
    CosMan.strokeColor('red');
    line(relativeCos(-angle), relativeSin(-angle), UNIT/relativeCos(-angle) * UNIT, 0);


    let tanLeft = parseFloat(-relativeSin(-angle)/relativeCos(-angle)).toFixed(3);
    let tanRight = parseFloat(relativeSin(angle)/relativeCos(angle)).toFixed(3);


    let explanation = 'Even / Odd Identity\n\ntan(-' + parseFloat(angle/PI).toFixed(3) + 'π) = -tan(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + tanLeft + ' = ' + tanRight;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('red');
        text('tan(θ)\n\n-tan(θ)', (relativeCos(angle) + UNIT/relativeCos(angle) * UNIT) * 0.6, relativeSin(angle) * 0.5);
    }
}

function drawEvenOddIdenFour() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;


    CosMan.strokeColor('cyan');
    line(0, 0, 0, (1/(relativeSin(-angle)/UNIT)) * UNIT);


    let sinVal = -relativeSin(-angle)/UNIT;
    let cscVal = parseFloat(1/sinVal).toFixed(3);
    cscVal = (cscVal == '-0.000' ? Math.abs(cscVal) : cscVal);


    let explanation = 'Even / Odd Identity\n\ncsc(-' + parseFloat(angle/PI).toFixed(3) + 'π) = -csc(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + cscVal + ' = ' + cscVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('cyan');
        text('csc(-θ)\n\n-csc(θ)', (angle > 0 && angle < PI) ? 100 : -100, ((1/(relativeSin(-angle)/UNIT)) * UNIT) * 0.5);
    }

}

function drawEvenOddIdenFive() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;


    CosMan.strokeColor('yellow')
    line(0, 0, -UNIT/relativeCos(angle) * UNIT, 0)

    let secVal = parseFloat(-1/relativeCos(angle)*UNIT).toFixed(3);
    secVal = (secVal == '-0.000' ? Math.abs(secVal) : secVal);

    let explanation = 'Even / Odd Identity\n\nsec(-' + parseFloat(angle/PI).toFixed(3) + 'π) = -sec(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + secVal + ' = ' + secVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('yellow');
        text('sec(-θ)\n\n-sec(θ)',(-UNIT/relativeCos(angle) * UNIT) * 0.5, (angle > 0 && angle < PI)  ? 50 : -100);
    }
}

function drawEvenOddIdenSix() {
    SetMan.butAllTrigFunc(false);
    SetMan.butRadius(false);
    SetMan.butUnitTriangle(false);

    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    CosMan.strokeColor('magenta');
    line(0, (1/(relativeSin(-angle)/UNIT)) * UNIT, relativeCos(-angle), relativeSin(-angle));


    let cotVal = parseFloat(-relativeCos(-angle)/relativeSin(-angle)).toFixed(3);

    let explanation = 'Even / Odd Identity\n\ncot(-' + parseFloat(angle/PI).toFixed(3) + 'π) = -cot(' + parseFloat(angle/PI).toFixed(3) + 'π)\n\n' + cotVal + ' = ' + cotVal;

    if(angle >= 0 && angle < PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI/2 && angle < PI) {
        text(explanation, UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= PI && angle < 3*PI/2) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    } else if(angle >= 3*PI/2 && angle < 2*PI) {
        text(explanation, -UNIT * 1.2, -UNIT * 1.6);
    }

    if(SetMan.getNames()) {
        fill('magenta');
        text('cot(-θ)\n\n-cot(θ)', relativeCos(-angle) * 0.75, ((1/(relativeSin(-angle)/UNIT)) * UNIT));
    }
}


let spinAngle = 2 * PI
function spinMode() {
    mouseX = relativeCos(spinAngle) * UNIT;
    mouseY = -relativeSin(spinAngle) * UNIT;

    spinAngle -= PI/1000;
    if(spinAngle > 2 * PI || spinAngle <= 0) {
        spinAngle = 2 * PI;
    }
} 

function drawFuncNames() {
    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }
    angle *= PI;

    if(SetMan.getRadius()) {
        fill('brown');
        text('1', relativeCos(angle) * 0.5, relativeSin(angle) * 0.75);
    }

    if(SetMan.getSin()) {
        fill('blue');
        text('sin(θ)', relativeCos(angle) * 1.2, relativeSin(angle) * 0.5);

    }    
    if(SetMan.getCos()) {
        fill('lime');
        if(SetMan.getPythIdenOne()) {
            text('cos(θ)', relativeCos(angle) * 0.5, (angle > 0 && angle < PI)  ? 50 : -50);
        } else {
            text('cos(θ)', relativeCos(angle) * 0.5, relativeSin(angle) * 1.2);
        }
    }
    if(SetMan.getTan()) {
        fill('red')
        text('tan(θ)', (relativeCos(angle) + UNIT/relativeCos(angle) * UNIT) * 0.6, relativeSin(angle) * 0.5);

        //     line(relativeCos(angle), relativeSin(angle), UNIT/relativeCos(angle) * UNIT, 0)

    }
    if(SetMan.getCsc()) {
        fill('cyan');
        text('csc(θ)', (angle > PI/2 && angle < 3*PI/2) ? 50 : -50, ((1/(relativeSin(angle)/UNIT)) * UNIT) * 0.5);
    }
    if(SetMan.getSec()) {
        fill('yellow');
        text('sec(θ)',(UNIT/relativeCos(angle) * UNIT) * 0.5, (angle > 0 && angle < PI)  ? 50 : -50);
        
        //    line(0, 0, UNIT/relativeCos(angle) * UNIT, 0)

    }
    if(SetMan.getCot()) {
        fill('magenta');
        text('cot(θ)', relativeCos(angle) * 0.75, ((1/(relativeSin(angle)/UNIT)) * UNIT));
    }

    if(SetMan.getUnitArc()) {
        fill('rgb(230, 190, 140)');
        text('θ', relativeCos(angle/2) * 0.30, relativeSin(angle/2) * 0.30);
    }

    if(SetMan.getQuadI()) {
        fill('white');
        textSize(20);
        text('(√3/2, 1/2)\nθ = π/6', relativeCos(PI/6)*1.4, relativeSin(PI/6)*1.2);
        text('(√2/2, √2/2)\nθ = π/4', relativeCos(PI/4)*1.4, relativeSin(PI/4)*1.3);
        text('(1/2, √3/2)\nθ = π/3', relativeCos(PI/3)*1.3, relativeSin(PI/3)*1.4);
    }

    if(SetMan.getQuadII()) {
        fill('white');
        textSize(20);
        text('(-1/2, √3/2)\nθ = 2π/3', relativeCos(2*PI/3)*1.2, relativeSin(2*PI/3)*1.4);
        text('(-√2/2, √2/2)\nθ = 3π/4', relativeCos(3*PI/4)*1.4, relativeSin(3*PI/4)*1.3);
        text('(-√3/2, 1/2)\nθ = 5π/6', relativeCos(5*PI/6)*1.4, relativeSin(5*PI/6)*1.2);

    }

    if(SetMan.getQuadIII()) {
        fill('white');
        textSize(20);
        text('(-√3/2, -1/2)\nθ = 7π/6', relativeCos(7*PI/6)*1.5, relativeSin(7*PI/6)*1.1);
        text('(-√2/2, -√2/2)\nθ = 5π/4', relativeCos(5*PI/4)*1.5, relativeSin(5*PI/4)*1.2);
        text('(-1/2, -√3/2)\nθ = 4π/3', relativeCos(4*PI/3)*1.3, relativeSin(4*PI/3)*1.3);

    }

    if(SetMan.getQuadIV()) {
        fill('white');
        textSize(20);
        text('(1/2, -√3/2)\nθ = 5π/3', relativeCos(5*PI/3)*1.3, relativeSin(5*PI/3)*1.3);
        text('(√2/2, -√2/2)\nθ = 7π/4', relativeCos(7*PI/4)*1.5, relativeSin(7*PI/4)*1.2);
        text('(√3/2, -1/2)\nθ = 11π/6', relativeCos(11*PI/6)*1.5, relativeSin(11*PI/6)*1.1);

    }

    if(SetMan.getCardPoints()) {
        fill('white');
        textSize(20);

        text('(1, 0)\nθ = 0' , relativeCos(0) + 50, relativeSin(0) - 50);
        text('(0, 1)\nθ = π/2' , relativeCos(PI/2) - 50, relativeSin(PI/2) - 50);
        text('(-1, 0)\nθ = π', relativeCos(PI) - 50, relativeSin(PI) + 50);
        text('(0, -1)\nθ = 3π/2', relativeCos(3*PI/2) + 50, relativeSin(3*PI/2) + 50);

    }

}

function calcCoords() {
    let x = document.getElementById('xInput').value;
    let y = document.getElementById('yInput').value;

    mouseX = x * UNIT + CANVAS_HALF;
    mouseY = -y * UNIT + CANVAS_HALF;


    let angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
    if(angle < 0) {
        angle = quadArcTan(relativeMouseX(), -relativeMouseY()) / PI;
        angle += 2;
    }

    document.getElementById('thetaInput').value = parseFloat(angle%2).toFixed(3);
}

function calcTheta() {
    let theta = (document.getElementById('thetaInput').value % 2)* PI;

    mouseX = relativeCos(theta) + CANVAS_HALF;
    mouseY = relativeSin(theta) + CANVAS_HALF;


    document.getElementById('xInput').value = parseFloat(relativeCos(theta)/UNIT).toFixed(3);
    document.getElementById('yInput').value = parseFloat(-relativeSin(theta)/UNIT).toFixed(3);

}
