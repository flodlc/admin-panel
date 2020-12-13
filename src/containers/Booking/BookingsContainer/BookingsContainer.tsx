import React, {useEffect, useState} from 'react';
import {Booking} from "../../../modeles/booking";
import bookingService from "../../../services/booking.service";
import {Spinner} from "../../../components/UI/Styled";
import Bookings from "../../../components/Booking/Bookings/Bookings";


function useLoadBookings() {
    const [bookings, setBookings] = useState<Booking[]>();
    useEffect(() => {
        bookingService
            .getBookings()
            .then(bookings => {
                setBookings(bookings);
            });
    }, []);
    return bookings;
}

const BookingsContainer: React.FC = () => {
    const bookings = useLoadBookings();
    if (bookings === undefined) {
        return <Spinner/>
    } else {
        return <Bookings bookings={bookings}/>
    }
};

export default BookingsContainer;
