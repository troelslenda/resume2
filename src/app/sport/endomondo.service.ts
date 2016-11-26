import { Injectable} from "@angular/core"
import { Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Activity } from './activity';
import 'rxjs/Rx';

@Injectable()
export class EndomondoService{

    private endpoint_url:string = "http://localhost:3000/endomondo.js";
    constructor (private http: Http) {}

    getActivities (): Observable<Activity[]> {
        return this.http.get(this.endpoint_url).map(res => res.json())
    }
}
