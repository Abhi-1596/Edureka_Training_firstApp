import { Pipe, PipeTransform } from '@angular/core';
import { I_Hotel } from '../home/listing/hotel.model';

@Pipe({
    name: 'hotelSearch'
})

export class HotelSearchPipe implements PipeTransform {
    transform(value: I_Hotel[], userInput: string, roomType: string) {
        if (userInput) {
            // Convert userInput to Upper Case
            userInput = userInput ? userInput.toLocaleUpperCase() : null;
            // Filter user input from list of hotels
            return userInput ?
                value.filter(data =>
                    data.name.toUpperCase().indexOf(userInput) !== -1 ||
                    data.city_name.toUpperCase().indexOf(userInput) !== -1) :
                value;
        } else if (roomType) {
            return roomType ?
                value.filter(data => data.roomtype.toString() == roomType.toString())
                : value;
        }
        return value;
    }
}