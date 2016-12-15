import { Component } from '@angular/core';

import { Roman } from './roman';

@Component({
    selector: 'numeral',
    templateUrl: 'numeral.component.html'
})

export class NumeralComponent {
    public numeral: string = "";
    public result: string = "";


    convert():void {
        this.result= "";
        // lookup table of roman numerals and respective values
        if(parseInt(this.numeral) > 0) {
            this.arabicToRoman();
        } else {
            this.romanToArabic();
        }
    }

    arabicToRoman():void {
        let currentNumber: number = parseInt(this.numeral);
        const roman: Roman = new Roman();
        for(let i in roman.roman) {
            while(currentNumber >= roman.roman[i]) {
                this.result += i;
                currentNumber -= roman.roman[i];
            }
        }
    }

    romanToArabic():void {

    }
}