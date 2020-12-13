import {Booking} from "../../modeles/booking";

class BookingService {
    async getBooking(id: string): Promise<Booking | null> {
        try {
            return await null;
        } catch (e) {
            return null;
        }
    }

    async getBookings(): Promise<Booking[]> {
        try {
            return await [];
        } catch (e) {
            return []
        }
    }
}

const bookingService = new BookingService();
export default bookingService;
