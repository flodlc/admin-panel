import {Client} from "./client";
import {Room} from "./room";

export class Booking {
    id?: string;
    createdAt?: string;
    updatedAt?: string;
    client?: Client;
    room?: Room;
}
