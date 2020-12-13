import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientFormContainer from './ClientFormContainer';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ClientFormContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/client.service');

describe('<ClientFormContainer />', () => {
    test('it should mount', async () => {
        renderWidthTestEnvironement();
        await screen.findByText(/Prénom/).then(firstname => {
            expect(firstname).toBeInTheDocument();
            [/Prénom/, /Nom/, /Email/, /Téléphone/, /Nationality/, /Date de naissance/].forEach(text => {
                expect(screen.queryByText(text)).toBeInTheDocument();
            });
        });
    });
});
