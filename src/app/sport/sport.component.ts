import { Component, Injectable } from '@angular/core';
import { EndomondoService } from './endomondo.service';
//import { EndomondoComponent} from './endomondo.component';

@Component({
    selector: 'my-app',
    templateUrl: "src/app/sport/sport.html",
 //   directives: [EndomondoComponent],
    providers: [EndomondoService]

})


export class SportComponent {
    private endPoint: String = 'http://localhost:3000/endomondo.js';

    private activities;
    constructor(private _endomondoService:EndomondoService) {
        this.activities = _endomondoService.getActivities();
    }
}
