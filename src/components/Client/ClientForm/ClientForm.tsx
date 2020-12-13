import React from 'react';
import DynamicForm, {FieldConfig, FieldTypes} from "../../UI/Form/Form";
import {Card, CardBody, Container, PageHead, Title1} from "../../UI/Styled";
import {Client} from "../../../modeles/client";


const ClientForm: React.FC<{ handleSubmit: (client: Client) => void }> = props => {
    const formConfig: FieldConfig[] = [
        {
            type: FieldTypes.INPUT,
            name: 'firstName',
            label: 'Prénom',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'lastName',
            label: 'Nom',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'email',
            label: 'Email',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'phone',
            label: 'Téléphone',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'nationnalité',
            label: 'Nationality',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'birthDate',
            label: 'Date de naissance',
            required: true
        },
        {
            type: FieldTypes.SUBMIT,
            name: 'submit',
            label: 'Enregistrer'
        }
    ];

    return (
        <Container size="small" data-testid="ClientForm">
            <PageHead>
                <Title1>Ajout d'un client</Title1>
            </PageHead>
            <Card>
                <CardBody>
                    <DynamicForm fields={formConfig} onSubmit={props.handleSubmit}/>
                </CardBody>
            </Card>
        </Container>
    );
};

export default ClientForm;
