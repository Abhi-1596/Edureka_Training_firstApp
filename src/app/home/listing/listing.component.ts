import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from 'src/app/services/listing.service';
import { I_Hotel } from './hotel.model';

@Component({
    templateUrl: './listing.component.html',
    styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
    _id: number;
    userInput: string;
    hotels_List: I_Hotel[];

    constructor(private route: ActivatedRoute, private listingService: ListingService) { }
    ngOnInit(): void {
        this._id = this.route.snapshot.params['_id'];
        this.listingService.getHotelPerTrip(this._id).subscribe(data => this.hotels_List = data)
    }
}