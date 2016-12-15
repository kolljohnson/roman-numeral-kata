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
        const roman: Roman = new Roman();
        let keys = Object.keys(roman.roman);
        let arabic: number = 0;
        // loop through keys in roman object
        for(let i = 0; i <= keys.length; i++) {
            // check if the next character in numeral matches roman
            while(this.numeral.indexOf(keys[i]) === 0) {
                arabic += roman.roman[keys[i]];
                this.numeral = this.numeral.replace(keys[i], '');
            }
        }
        this.result = arabic.toString();
    }
}