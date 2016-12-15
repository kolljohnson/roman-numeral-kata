import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NumeralComponent } from './numeral/numeral.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        NumeralComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }