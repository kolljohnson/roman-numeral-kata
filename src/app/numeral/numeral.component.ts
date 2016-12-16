import { Component } from '@angular/core';

import { Roman } from './roman';

@Component({
    selector: 'numeral',
    templateUrl: 'numeral.component.html'
})

export class NumeralComponent {
    public numberNumeral: string = "";
    public result: string = "";


    convert():void {
        this.result= "";
        // Arabic number to Roman Numeral
        if(parseInt(this.numberNumeral) > 0) {
            this.arabicToRoman();
        // Roman Numeral to number (also check for valid Roman numeral)
        } else if (this.numberNumeral.match('[MDCLXVI]+') != null &&
          this.numberNumeral.match('(VV)+|(LL)+|(DD)+') == null) {
            this.romanToArabic();
        } else {
            this.result = "Error, please enter a number or valid Roman numberNumeral";
        }
    }

    arabicToRoman():void {
        let currentNumber: number = parseInt(this.numberNumeral);
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
            // check if the next character in numberNumeral matches roman
            while(this.numberNumeral.indexOf(keys[i]) === 0) {
                arabic += roman.roman[keys[i]];
                this.numberNumeral = this.numberNumeral.replace(keys[i], '');
            }
        }

        // accounts for inputs like XXC
        if (this.numberNumeral.length > 0) {
           this.result = 'Error, please enter a number or valid Roman numberNumeral';
        } else {
            this.result = arabic.toString();
        }
    }
}