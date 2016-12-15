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
        let roman = {V: 5, IV: 4, I: 1};
        let currentNumber: number = parseInt(this.numeral);
        for(let i in roman) {
            while(currentNumber >= roman[i]) {
                this.result += i;
                currentNumber -= roman[i];
            }
        }
    }
}