import { Component, Injectable } from '@angular/core';
import { EndomondoComponent} from './endomondo.component';
import {Location} from '@angular/common';

@Component({
    selector: 'my-app',
    templateUrl: "src/app/sport/sport.html",
})

export class SportComponent {
    constructor (private _location: Location) {
    }

    goBack() {
        this._location.back();
    }
}
