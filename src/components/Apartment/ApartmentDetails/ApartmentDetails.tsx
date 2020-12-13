import React from 'react';
import {Room} from "../../../modeles/room";
import {
    Card,
    CardBody,
    CardsList,
    CardWrapper,
    Container, NoDataText,
    PageHead,
    PropTitle,
    PropValue,
    Title1
} from "../../UI/Styled";

const ApartmentDetails: React.FC<{ rooms: Room[] }> = (props) => {
    return (
        <Container size="normal" data-testid="ApartmentDetails">
            <PageHead><Title1>Liste des chambres de l'appartement</Title1></PageHead>
            {props.rooms && props.rooms.length > 0 &&
            <CardsList>
                {props.rooms.map(room => (
                    <CardWrapper key={room.number}>
                        <Card>
                            <CardBody>
                                <PropTitle>Numero</PropTitle>
                                <PropValue>{(room.number) || 'N / A'}</PropValue>
                                <PropTitle>Area</PropTitle>
                                <PropValue>{room.area || 'N / A'}</PropValue>
                                <PropTitle>Prix</PropTitle>
                                <PropValue>{room.price || 'N / A'}</PropValue>
                            </CardBody>
                        </Card>
                    </CardWrapper>))
                }
            </CardsList>}
            {(!props.rooms || !props.rooms.length) && <NoDataText>Aucune chambre dans cet appartment</NoDataText>}
        </Container>
    );
};

export default ApartmentDetails;
