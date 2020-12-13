import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingsContainer from './BookingsContainer';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";
import bookingService from "../../../services/booking.service";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <BookingsContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/booking.service');

describe('<BookingsContainer />', () => {
    test('it should mount with one booking', async () => {

        bookingService.getBookings = async () => [
            {
                id: 'booking_id',
                client: {
                    firstName: 'client_firstname'
                }
            }
        ];
        renderWidthTestEnvironement();

        await screen.findByText(/booking_id/).then(bookingId => {
            expect(bookingId).toBeInTheDocument();
            expect(screen.queryByText(/client_firstname/)).toBeInTheDocument();
        });
    });
});
