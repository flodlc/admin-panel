import React from 'react';
import styled from "styled-components";
import {
    Button,
    Card,
    CardBody, CardsList,
    CardWrapper,
    Container,
    PageHead,
    PropTitle,
    PropValue,
    Title1
} from "../../UI/Styled";
import {Booking} from "../../../modeles/booking";
import {Link} from "react-router-dom";

const StyledAppartment = styled(Card)`
    width: 100%;
    cursor: pointer;
    min-height: 100%;
`;

const Bookings: React.FC<{ bookings: Booking[] }> = (props) => (
    <Container size="normal">
        <PageHead>
            <Title1>Réservations {props.bookings && (' (' + props.bookings.length + ')')}</Title1>
            <Button as={Link} to={'/bookings/add'} style={{marginLeft: 'auto'}}>
                Ajouter
            </Button>
        </PageHead>
        <CardsList data-testid="Bookings">
            {props.bookings && props.bookings.map(booking => (
                <CardWrapper perRow={3} key={booking.id}>
                    <StyledAppartment as={Link} to={'/bookings/' + booking.id}>
                        <CardBody>
                            <PropTitle>ID</PropTitle>
                            <PropValue>{booking.id || 'N / A'}</PropValue>
                            <PropTitle>Client</PropTitle>
                            <PropValue>{booking.client && (booking.client.firstName + ' ' + booking.client.lastName)}</PropValue>
                            <PropTitle>Appartement</PropTitle>
                            <PropValue>{booking.room && booking.room.apartment && booking.room.apartment.name}</PropValue>
                            <PropTitle>Chambre</PropTitle>
                            <PropValue>{booking.room && booking.room.number}</PropValue>
                        </CardBody>
                    </StyledAppartment>
                </CardWrapper>
            ))}
        </CardsList>
    </Container>
);

export default Bookings;
