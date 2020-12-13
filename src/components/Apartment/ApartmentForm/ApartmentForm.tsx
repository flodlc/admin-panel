import React from 'react';
import {Card, CardBody, Container, PageHead, Title1} from "../../UI/Styled";
import DynamicForm, {FieldConfig, FieldTypes} from "../../UI/Form/Form";
import {Apartment} from "../../../modeles/apartment";

const ApartmentForm: React.FC<{ handleSubmit: (values: Apartment) => void }> = (props) => {
    const formConfig: FieldConfig[] = [
        {
            type: FieldTypes.INPUT,
            name: 'name',
            label: 'Nom',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'number',
            label: 'Numero',
            required: true
        },
        {
            type: FieldTypes.INPUT,
            name: 'rooms',
            label: 'Chambres',
            required: true
        },
        {
            type: FieldTypes.SUBMIT,
            name: 'submit',
            label: 'Enregistrer'
        }
    ];

    return (
        <Container size="small" data-testid="ApartmentForm">
            <PageHead>
                <Title1>Ajout d'un appartment</Title1>
            </PageHead>
            <Card>
                <CardBody>
                    <DynamicForm fields={formConfig} onSubmit={props.handleSubmit}/>
                </CardBody>
            </Card>
        </Container>
    )
};

export default ApartmentForm;
