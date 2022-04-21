import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { I_Location } from "../home/search/location.model";
import { I_Trip } from "../home/trip.model";

@Injectable()

export class HomeService {
    private cityURL = 'https://developerfunnel.herokuapp.com/location';
    private tripURL = 'https://developerfunnel.herokuapp.com/booking';

    constructor(private http: HttpClient) { }

    getCity(): Observable<I_Location[]> {
        return this.http.get<I_Location[]>(this.cityURL);
    }

    getTrip(): Observable<I_Trip[]> {
        return this.http.get<I_Trip[]>(this.tripURL);
    }
}