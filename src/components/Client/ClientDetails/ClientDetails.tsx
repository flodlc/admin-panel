import React from 'react';
import {Client} from "../../../modeles/client";
import {
    Card,
    CardBody,
    CardHeader, CardWrapper,
    Container,
    PageHead,
    PropTitle,
    PropValue,
    Title1
} from "../../UI/Styled";
import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
`;

const HR = styled.div`
  margin: 20px 0;
  border-top: 1px solid ${props => props.theme.border_color};
`;

const ClientDetails: React.FC<{ client: Client }> = (props) => {
    return (
        <Container data-testid="ClientDetails">
            <PageHead>
                <Title1> {props.client.firstName + ' ' + props.client.lastName}</Title1>
            </PageHead>
            <DetailsWrapper>
                <CardWrapper perRow={2}>
                    <Card>
                        <CardHeader>Détails</CardHeader>
                        <CardBody>
                            <PropTitle>ID</PropTitle>
                            <PropValue>{props.client.id || 'N / A'}</PropValue>
                            <PropTitle>Prénom</PropTitle>
                            <PropValue>{props.client.firstName || 'N / A'}</PropValue>
                            <PropTitle>Nom</PropTitle>
                            <PropValue>{props.client.lastName || 'N / A'}</PropValue>
                            <PropTitle>Nationnalité</PropTitle>
                            <PropValue>{props.client.nationality || 'N / A'}</PropValue>
                            <PropTitle>Téléphone</PropTitle>
                            <PropValue>{props.client.phone || 'N / A'}</PropValue>
                            <PropTitle>Date de naissance</PropTitle>
                            <PropValue>{(props.client.birthDate) || 'N / A'}</PropValue>
                        </CardBody>
                    </Card>
                </CardWrapper>
                <CardWrapper perRow={2}>
                    <Card>
                        <CardHeader>Réservations</CardHeader>
                        <CardBody>
                            {props.client.bookings && props.client.bookings.map((booking, i, bookings) => (
                                <React.Fragment key={booking.createdAt}>
                                    <PropTitle>Date</PropTitle>
                                    <PropValue>{booking.createdAt || 'N / A'}</PropValue>
                                    <PropTitle>Chambre</PropTitle>
                                    <PropValue>{(booking.room && booking.room.number) || 'N / A'}</PropValue>
                                    <PropTitle>Prix</PropTitle>
                                    <PropValue>{(booking.room && booking.room.price) || 'N / A'}</PropValue>
                                    {i < bookings.length - 1 && <HR/>}
                                </React.Fragment>
                            ))}
                        </CardBody>
                    </Card>
                </CardWrapper>
            </DetailsWrapper>
        </Container>
    );
};

export default ClientDetails;
