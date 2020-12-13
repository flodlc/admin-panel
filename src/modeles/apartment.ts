import {Room} from "./room";

export class Apartment {
    id?: string;
    number?: string;
    name?: string;
    street?: string;
    zipCode?: string;
    rooms?: Room[];
}
