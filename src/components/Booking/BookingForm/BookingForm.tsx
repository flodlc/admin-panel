import React from 'react';
import DynamicForm, {FieldConfig, FieldTypes} from "../../UI/Form/Form";
import {Card, CardBody, Container, PageHead, Title1} from "../../UI/Styled";
import {Booking} from "../../../modeles/booking";


const BookingForm: React.FC<{handleSubmit: (booking: Booking) => void}> = (props) => {
    const formConfig: FieldConfig[] = [
        {
            type: FieldTypes.INPUT,
            name: 'clientId',
            label: 'Id du client',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'roomId',
            label: 'Id de la chambre',
            required: true
        },
        {
            type: FieldTypes.SUBMIT,
            name: 'submit',
            label: 'Enregistrer'
        }
    ];

    return (
        <Container size="small" data-testid="BookingForm">
            <PageHead>
                <Title1>Ajout d'une réservation</Title1>
            </PageHead>
            <Card>
                <CardBody>
                    <DynamicForm fields={formConfig} onSubmit={props.handleSubmit}/>
                </CardBody>
            </Card>
        </Container>
    );
};

export default BookingForm;
