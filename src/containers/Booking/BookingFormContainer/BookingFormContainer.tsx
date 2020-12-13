import React from 'react';
import BookingForm from "../../../components/Booking/BookingForm/BookingForm";
import {Booking} from "../../../modeles/booking";


const BookingFormContainer: React.FC = () => {
    const handleSubmit = (booking: Booking) => {
        alert('the form works but does not submit data to the server');
    };

    return (
        <BookingForm handleSubmit={handleSubmit}/>
    )
};

export default BookingFormContainer;
