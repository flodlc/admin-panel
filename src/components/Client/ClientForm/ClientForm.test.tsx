import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientForm from './ClientForm';
import {Client} from "../../../modeles/client";
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";

function renderWidthTestEnvironement(handleSubmit: (client: Client) => Promise<Client | null>) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ClientForm handleSubmit={handleSubmit}/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<ClientForm />', () => {
    test('it should mount', () => {

        const mockedPostFunction = jest.fn(async (client: Client) => Client) as (client: Client) => Promise<Client | null>
        renderWidthTestEnvironement(mockedPostFunction);
        [/Prénom/, /Nom/, /Email/, /Téléphone/, /Nationality/, /Date de naissance/].forEach(text => {
            expect(screen.queryByText(text)).toBeInTheDocument();
        });
    });
});
