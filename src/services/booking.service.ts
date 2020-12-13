import axios from "axios";
import {Booking} from "../modeles/booking";

class BookingService {
    async getBooking(id: string): Promise<Booking | null> {
        try {
            return await axios.get(process.env.REACT_APP_API_URL + '/api/booking/' + id).then(reponse => reponse.data.booking);
        } catch (e) {
            return null;
        }
    }

    async getBookings(): Promise<Booking[]> {
        try {
            return await axios.get(process.env.REACT_APP_API_URL + '/api/booking').then(reponse => reponse.data.bookings);
        } catch (e) {
            return []
        }
    }
}

const bookingService = new BookingService();
export default bookingService;
