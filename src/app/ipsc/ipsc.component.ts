import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
    selector: 'my-app',
    templateUrl: "src/app/ipsc/ipsc.html"
})
export class IpscComponent {
    constructor (private _location: Location) {
    }
    goBack() {
        this._location.back();
    }
}
