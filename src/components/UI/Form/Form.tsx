import React, {SyntheticEvent, useState} from 'react';
import styled from "styled-components";
import {Button} from "../Styled";

export enum FieldTypes {
    INPUT = 'INPUT',
    SUBMIT = 'SUBMIT'
}

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin: -1rem 0;
`;

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-size: 0.8rem;
    font-weight: 600;
`;

const FormField = styled.input`
    outline: none;
    padding: 10px 12px;
    font-size: 15px;
    border: 1px solid #eaeaea;
    background-color: white;
    display: block;
    max-width: 100%;
`;

export interface FieldConfig {
    name: string;
    label: string;
    type: FieldTypes;
    value?: FieldTypes.INPUT;
    condition?: (values: any) => boolean;
    cascade?: (values: any) => any;
    required?: boolean;
}

const FormButton = styled(Button)`
    align-self: flex-end;
`;

const DynamicField: React.FC<{ handler: (name: string, value: any) => void, value: any, fieldConfig: FieldConfig }> = (props) => {
    const eventHandler = (e: SyntheticEvent<HTMLInputElement>) => {
        props.handler(props.fieldConfig.name, e.currentTarget.value);
    };

    switch (props.fieldConfig.type) {
        case  FieldTypes.INPUT:
            return (
                <FieldGroup key={props.fieldConfig.name}>
                    <Label htmlFor={props.fieldConfig.name}>{props.fieldConfig.label}</Label>
                    <FormField name={props.fieldConfig.name}
                               id={props.fieldConfig.name}
                               role="textbox"
                               required={props.fieldConfig.required}
                               value={props.value || ''}
                               placeholder={props.fieldConfig.label}
                               onChange={eventHandler}/>
                </FieldGroup>
            );
        case  FieldTypes.SUBMIT:
            return (
                <FieldGroup key={props.fieldConfig.name}>
                    <FormButton type="submit">{props.fieldConfig.label}</FormButton>
                </FieldGroup>
            );
    }
};

const DynamicForm: React.FC<{ fields: FieldConfig[], onSubmit: (values: any) => void }> = props => {
    const [values, setValues] = useState(() => {
        const values = {} as any;
        props.fields
            .filter(field => field.type !== FieldTypes.SUBMIT)
            .forEach(field => values[field.name] = field.value);
        return values;
    });
    const changeHandler = (name: string, value: any) => {
        const patch = {} as any;
        patch[name] = value;
        setValues(Object.assign({}, values, patch));
    };

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault();
        const missingRequired = props.fields.some(field => {
            return field.required && !values[field.name]
        });
        if (!missingRequired) {
            props.onSubmit(values);
        }
    };

    return (
        <FormWrapper onSubmit={submitHandler} data-testid="Form">
            {props.fields.map(fieldConfig => (
                <DynamicField key={fieldConfig.name}
                              handler={changeHandler}
                              value={values[fieldConfig.name]}
                              fieldConfig={fieldConfig}/>
            ))}
            <button type={"submit"} hidden/>
        </FormWrapper>
    )
};

export default DynamicForm;
