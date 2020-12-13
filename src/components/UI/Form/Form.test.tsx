import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form, {FieldConfig, FieldTypes} from './Form';
import userEvent from "@testing-library/user-event";
import {ThemeProvider} from "styled-components";
import {theme} from "../Styled";

describe('<Form />', () => {
    test('it should mount', () => {
        const fields: FieldConfig[] = [
            {
                type: FieldTypes.INPUT,
                name: 'name',
                label: 'label'
            },
            {
                type: FieldTypes.SUBMIT,
                name: 'submit',
                label: 'submit'
            }
        ];
        const mockedHandleSubmit = jest.fn(async (values: any) => undefined)
        render(<ThemeProvider theme={theme}><Form fields={fields} onSubmit={mockedHandleSubmit}/></ThemeProvider>);

        const clientForm = screen.getByTestId('Form');
        const buttonSubmit = screen.getByText(/submit/);
        expect(clientForm).toBeInTheDocument();
        expect(buttonSubmit).toBeInTheDocument();
        userEvent.click(buttonSubmit, {button: 1});
        expect(mockedHandleSubmit).toBeCalledTimes(1);
    });
});
