import React, {useEffect, useState} from 'react';
import {Booking} from "../../../modeles/booking";
import {useParams} from "react-router";
import {NoDataText, Spinner} from "../../../components/UI/Styled";
import BookingDetails from "../../../components/Booking/BookingDetails/BookingDetails";
import bookingService from "../../../services/booking.service";

function useLoadBooking(id: string) {
    const [booking, setBooking] = useState<Booking | null>();
    useEffect(() => {
        bookingService
            .getBooking(id)
            .then(booking => {
                setBooking(booking);
            });
    }, [id]);
    return booking;
}

const BookingDetailsContainer: React.FC = () => {
    const params = useParams<{ id?: any }>();
    const booking = useLoadBooking(params.id);
    if (booking === undefined) {
        return <Spinner/>
    } else if (booking === null) {
        return <NoDataText>Réservation non trouvée</NoDataText>
    } else {
        return <BookingDetails booking={booking}/>
    }
};

export default BookingDetailsContainer;
