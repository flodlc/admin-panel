import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientsContainer from './ClientsContainer';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";
import clientService from "../../../services/client.service";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ClientsContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/client.service');

describe('<ClientsContainer />', () => {
    test('it should mount with 1 clients', async () => {
        clientService.getClients = async () => [{
            id: 'client_id',
            firstName: 'client_firstname'
        }];

        renderWidthTestEnvironement();

        await screen.findByText('client_id').then((clients) => {
            expect(clients).toBeInTheDocument();
            expect(screen.queryByText(/client_firstname/)).toBeInTheDocument();
            expect(screen.queryByText(/\(1\)/)).toBeInTheDocument();
        })
    });

    test('it should mount with 0 clients', async () => {
        clientService.getClients = async () => [];

        renderWidthTestEnvironement();

        await screen.findByText(/\(0\)/).then((numberOfClients) => {
            expect(numberOfClients).toBeInTheDocument();
        })
    });
});
