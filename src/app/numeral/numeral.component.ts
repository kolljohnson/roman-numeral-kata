import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
        let roman = {M: 1000, CM: 900, D: 500, C: 100, L: 50, LX: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
        let currentNumber: number = parseInt(this.numeral);
        for(let i in roman) {
            while(currentNumber >= roman[i]) {
                this.result += i;
                currentNumber -= roman[i];
            }
        }
    }
}