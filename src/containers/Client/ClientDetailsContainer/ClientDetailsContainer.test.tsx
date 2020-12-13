import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientDetailsContainer from './ClientDetailsContainer';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";
import clientService from "../../../services/client.service";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ClientDetailsContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/client.service');

describe('<ClientDetailsContainer />', () => {
    test('it should mount display the client details', async () => {
        clientService.getClient = async (id: string) => ({
            id: 'client_id',
            firstName: 'client_firstname',
            bookings: [
                {
                    createdAt: (Math.random() * 100) + '',
                    room: {
                        number: 'room_number',
                        price: 'room_price'
                    }
                }
            ]
        });

        renderWidthTestEnvironement();

        await screen.findByText('client_id').then((client) => {
            expect(client).toBeInTheDocument();
            expect(screen.queryAllByText(/client_firstname/).length).toBe(2)
            expect(screen.queryByText(/room_number/)).toBeInTheDocument();
            expect(screen.queryByText(/room_price/)).toBeInTheDocument();
        })
    });

    test('it should display the missing client sentence', async () => {
        clientService.getClient = async () => null;

        renderWidthTestEnvironement();

        await screen.findByText('Client non trouvé').then((nodata) => {
            expect(nodata).toBeInTheDocument();
        })
    });
});
