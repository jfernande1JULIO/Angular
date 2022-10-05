import { Component, NgModule } from "@angular/core";
import { ContadorComponent } from './contador/contador.component';

let=5;


@NgModule ({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
})



export class ContadorModule {

}
