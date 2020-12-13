import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";
import BookingDetailsContainer from "./BookingDetailsContainer";
import bookingService from "../../../services/booking.service";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <BookingDetailsContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/booking.service');

describe('<BookingDetailsContainer />', () => {
    test('it should display the booking details', async () => {
        bookingService.getBooking = async (id: string) => ({
            client: {
                firstName: 'client_firstname',
                lastName: 'client_lastname',
            },
            room: {
                number: 'room_number',
                price: 'room_price',
                apartment: {
                    name: 'apartment_name'
                }
            }
        });

        renderWidthTestEnvironement();

        await screen.findByText('client_firstname').then((clientFirstname) => {
            expect(clientFirstname).toBeInTheDocument();
            expect(screen.queryByText(/client_firstname/)).toBeInTheDocument();
            expect(screen.queryByText(/client_lastname/)).toBeInTheDocument();
            expect(screen.queryByText(/room_number/)).toBeInTheDocument();
            expect(screen.queryByText(/room_price/)).toBeInTheDocument();
            expect(screen.queryByText(/apartment_name/)).toBeInTheDocument();
        })
    });

    test('it should display the missing booking sentence', async () => {
        bookingService.getBooking = async () => null;

        renderWidthTestEnvironement();

        await screen.findByText('Réservation non trouvée').then((nodata) => {
            expect(nodata).toBeInTheDocument();
        })
    });
});
