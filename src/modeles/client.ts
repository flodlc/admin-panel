import {Booking} from "./booking";

export class Client {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    nationality?: string;
    birthDate?: string;
    bookings?: Booking[];
}
