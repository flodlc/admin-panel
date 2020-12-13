import React from 'react';
import {Apartment} from "../../../modeles/apartment";
import styled from "styled-components";
import {
    Button,
    Card,
    CardBody,
    CardsList,
    CardWrapper,
    Container,
    PageHead,
    PropTitle,
    PropValue,
    Title1
} from "../../UI/Styled";
import {Link} from "react-router-dom";

const StyledAppartment = styled(Card)`
    width: 100%;
    cursor: pointer;
    min-height: 100%;
`;

const Appartments: React.FC<{ apartments: Apartment[] }> = (props) => (
    <Container size="normal">
        <PageHead>
            <Title1>Appartements {props.apartments && (' (' + props.apartments.length + ')')}</Title1>
            <Button as={Link} to={'/apartments/add'} style={{marginLeft: 'auto'}}>
                Ajouter
            </Button>
        </PageHead>
        <CardsList data-testid="Appartments">
            {props.apartments.map(apartment => (
                <CardWrapper perRow={3} key={apartment.id}>
                    <StyledAppartment as={Link} to={'/apartments/' + apartment.id}>
                        <CardBody>
                            <PropTitle>ID</PropTitle>
                            <PropValue>{apartment.id || 'N / A'}</PropValue>
                            <PropTitle>Nom</PropTitle>
                            <PropValue>{apartment.name || 'N / A'}</PropValue>
                            <PropTitle>Numéro</PropTitle>
                            <PropValue>{apartment.number || 'N / A'}</PropValue>
                            <PropTitle>Nombre de chambres</PropTitle>
                            <PropValue>{apartment.rooms ? apartment.rooms.length : 'N / A'}</PropValue>
                            <PropTitle>Rue</PropTitle>
                            <PropValue>{apartment.street || 'N / A'}</PropValue>
                            <PropTitle>Code postal</PropTitle>
                            <PropValue>{apartment.zipCode || 'N / A'}</PropValue>
                        </CardBody>
                    </StyledAppartment>
                </CardWrapper>
            ))}
        </CardsList>
    </Container>
);

export default Appartments;
