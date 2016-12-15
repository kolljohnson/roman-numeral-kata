import {browser, by} from "protractor";

describe('App', () => {
   browser.get('/');

   describe('NumeralComponent', () => {
       it('gives an error when invalid input is given', () => {
          let result = browser.findElement(by.css('p'));
          browser.element(by.buttonText('Convert')).click();
          expect(result.getText()).toBe("Error, please enter a number or valid Roman numeral");
       });

       it('returns I when 1 is return', () => {
          let result = browser.findElement(by.css('p'));
          let numeral = browser.findElement(by.model('numeral'));
          browser.element(by.buttonText('Convert')).click();
          expect(result.getText()).toBe('I');
       });
   })
});