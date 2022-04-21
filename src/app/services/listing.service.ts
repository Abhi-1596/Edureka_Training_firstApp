import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { I_Hotel } from "../home/listing/hotel.model";
import { Observable } from "rxjs";

@Injectable()

export class ListingService {
    private hotelURL = 'https://developerfunnel.herokuapp.com/hoteltrip';

    constructor(private http: HttpClient) { }
    getHotelPerTrip(id): Observable<I_Hotel[]> {
        return this.http.get<I_Hotel[]>(`${this.hotelURL}/${id}`);
    }
}