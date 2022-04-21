import { Component, OnInit } from "@angular/core";
import { HomeService } from "src/app/services/home.service";
import { I_Trip } from "../trip.model";

@Component({
    selector: 'app-quick-search',
    templateUrl: './quickSearch.component.html',
    styleUrls: ['./quickSearch.component.css']
})

export class QuickSearchComponent implements OnInit {
    title: string = 'Discover your trip with us...';
    hotelTypes: I_Trip[];

    constructor(private homeService: HomeService) { }

    ngOnInit(): void {
        this.homeService.getTrip().subscribe(data => this.hotelTypes = data);
    }
}