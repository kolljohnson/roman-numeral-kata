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
        // Arabic number to Roman Numeral
        if(parseInt(this.numeral) > 0) {
            this.arabicToRoman();
        // Roman Numeral to number (also check for valid numeral)
        } else if (this.numeral.match('[MDCLXVI]+') != null &&
          this.numeral.match('(VV)+|(LL)+|(DD)+') == null) {
            this.romanToArabic();
        } else {
            this.result = "Error, please enter a number or valid Roman numeral";
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