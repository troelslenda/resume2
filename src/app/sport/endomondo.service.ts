import {Injectable} from "@angular/core"
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';
import { Activity } from './activity';

@Injectable()
export class EndomondoService{
    private activities;

    endpoint_url:String = "http://localhost:3000/endomondo.js";

    constructor (http: Http) {
        this.activities = [
            {
                date: 'Nov 12, 2014',
                activity: 'Running',
                distance: '4.49 km',
                time: '24m:12s',
            },
            {
                date: 'Jun 14, 2015',
                activity: 'Running',
                distance: '4.49 km',
                time: '24m:12s',
            },
            {
                date: 'Nov 22, 2016',
                activity: 'Running',
                distance: '4.49 km',
                time: '24m:12s',
            }
        ];
    }

    getActivities () {
        return this.activities;
    }
}
