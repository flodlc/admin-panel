import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bookings from './Bookings';
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";
import {Booking} from "../../../modeles/booking";

function renderWidthTestEnvironement(bookings: Booking[]) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <Bookings bookings={bookings}/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/booking.service');

describe('<Bookings />', () => {
    test('it should mount with 1 booking', async () => {
        renderWidthTestEnvironement([{
            id: 'booking_id',
            client: {
                firstName: 'client_firstname'
            }
        }]);

        await screen.findByText('booking_id').then((bookings) => {
            expect(bookings).toBeInTheDocument();
            expect(screen.queryByText(/client_firstname/)).toBeInTheDocument();
            expect(screen.queryByText(/\(1\)/)).toBeInTheDocument();
        })
    });

    test('it should mount with 0 booking', async () => {
        renderWidthTestEnvironement([]);

        await screen.findByText(/\(0\)/).then((numberOfBookings) => {
            expect(numberOfBookings).toBeInTheDocument();
        })
    });
});
