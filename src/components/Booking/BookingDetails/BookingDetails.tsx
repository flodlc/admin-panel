import React from 'react';
import {Booking} from "../../../modeles/booking";
import {
    Card,
    CardBody,
    CardHeader,
    Container,
    PageHead,
    PropTitle,
    PropValue,
    Title1
} from "../../UI/Styled";

const BookingDetails: React.FC<{ booking: Booking }> = (props) => {
    const booking = props.booking;
    return (
        <Container>
            <PageHead>
                <Title1>Réservation</Title1>
            </PageHead>
            <Card>
                <CardHeader>Détails</CardHeader>
                <CardBody>
                    <PropTitle>Prénom</PropTitle>
                    <PropValue>{(booking.client && booking.client.firstName) || 'N / A'}</PropValue>
                    <PropTitle>Nom</PropTitle>
                    <PropValue>{(booking.client && booking.client.lastName) || 'N / A'}</PropValue>
                    <PropTitle>Apartement</PropTitle>
                    <PropValue>{(booking.room && booking.room.apartment && booking.room.apartment.name) || 'N / A'}</PropValue>
                    <PropTitle>Adresse</PropTitle>
                    <PropValue>{(booking.room && booking.room.apartment && booking.room.apartment.street) || 'N / A'}</PropValue>
                    <PropTitle>Chambre</PropTitle>
                    <PropValue>{(booking.room && booking.room.number) || 'N / A'}</PropValue>
                    <PropTitle>Prix</PropTitle>
                    <PropValue>{(booking.room && booking.room.price) || 'N / A'}</PropValue>
                </CardBody>
            </Card>
        </Container>
    )
};

export default BookingDetails;
