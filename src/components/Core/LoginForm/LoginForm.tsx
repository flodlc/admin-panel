import React from 'react';
import DynamicForm, {FieldConfig, FieldTypes} from "../../UI/Form/Form";
import {Card, CardBody, CardHeader} from "../../UI/Styled";


const LoginForm: React.FC<{ submitHandler: (data: any) => void }> = (props) => {
    const formConfig: FieldConfig[] = [
        {
            name: 'email',
            type: FieldTypes.INPUT,
            label: 'Email',
            required: true
        },
        {
            name: 'password',
            type: FieldTypes.INPUT,
            label: 'Password',
            required: true
        },
        {
            name: 'submit',
            type: FieldTypes.SUBMIT,
            label: 'Se connecter'
        }
    ];

    return (
        <Card data-testid="LoginForm">
            <CardHeader>Login</CardHeader>
            <CardBody>
                <DynamicForm fields={formConfig} onSubmit={props.submitHandler}/>
            </CardBody>
        </Card>
    );
};

export default LoginForm;
