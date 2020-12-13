import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ClientDetails from './ClientDetails';
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";
import {Client} from "../../../modeles/client";

function renderWidthTestEnvironement(client: Client) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ClientDetails client={client}/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<ClientDetails />', () => {
    test('it should mount with 1 booking', async () => {
        renderWidthTestEnvironement({
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

        await screen.findByText('client_id').then((client) => {
            expect(client).toBeInTheDocument();
            expect(screen.queryAllByText(/client_firstname/).length).toBe(2)
            expect(screen.queryByText(/room_number/)).toBeInTheDocument();
            expect(screen.queryByText(/room_price/)).toBeInTheDocument();
        })
    });
});
