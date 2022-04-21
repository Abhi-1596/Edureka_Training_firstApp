import { I_Room } from "./room.model";

export interface I_Hotel {
    _id: string,
    name: string,
    city_name: string,
    city: string,
    locality: string,
    thumb: string,
    cost: number,
    address: string,
    roomtype: I_Room,
    tripType: number,
    tripname: string
}