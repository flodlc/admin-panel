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
import {Client} from "../../../modeles/client";
import {Link} from "react-router-dom";

const StyledAppartment = styled(Card)`
    width: 100%;
    cursor: pointer;
    min-height: 100%;
`;

const Clients: React.FC<{ clients: Client[] }> = (props) => (
    <Container size="normal">
        <PageHead>
            <Title1>Clients {props.clients && (' (' + props.clients.length + ')')}</Title1>
            <Button as={Link} to={'/clients/add'} style={{marginLeft: 'auto'}}>
                Ajouter
            </Button>
        </PageHead>
        <CardsList data-testid="Clients">
            {props.clients && props.clients.map(client => (
                <CardWrapper perRow={3} key={client.id}>
                    <StyledAppartment as={Link} to={'/clients/' + client.id}>
                        <CardBody>
                            <PropTitle>ID</PropTitle>
                            <PropValue>{client.id || 'N / A'}</PropValue>
                            <PropTitle>Prénom</PropTitle>
                            <PropValue>{client.firstName || 'N / A'}</PropValue>
                            <PropTitle>Nom</PropTitle>
                            <PropValue>{client.lastName || 'N / A'}</PropValue>
                            <PropTitle>Nationnalité</PropTitle>
                            <PropValue>{client.nationality || 'N / A'}</PropValue>
                            <PropTitle>Téléphone</PropTitle>
                            <PropValue>{client.phone || 'N / A'}</PropValue>
                            <PropTitle>Date de naissance</PropTitle>
                            <PropValue>{(client.birthDate) || 'N / A'}</PropValue>
                        </CardBody>
                    </StyledAppartment>
                </CardWrapper>
            ))}
        </CardsList>
    </Container>
);

export default Clients;
