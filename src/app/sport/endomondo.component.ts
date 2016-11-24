import { Component } from '@angular/core';
import { EndomondoService } from './endomondo.service';

@Component({
    selector: 'activities',
    template: `<h2>aktiviteter fra Endomondo</h2>
    <table>
    <tr *ngFor="let activity of activities">
     <td>{{ activity.date }}</td>
     <td>{{ activity.activity }}</td>
     <td>{{ activity.distance }}</td>
     <td>{{ activity.time }}</td>
    </tr>
    </table>`
})
export class EndomondoComponent {
    private activities;
    constructor(private _endomondoService:EndomondoService) {
        this.activities = _endomondoService.getActivities();
    }
}
