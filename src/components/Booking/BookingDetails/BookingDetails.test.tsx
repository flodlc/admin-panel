import React from 'react';
import BookingDetails from './BookingDetails';
import {Booking} from "../../../modeles/booking";
import '@testing-library/jest-dom/extend-expect';
import {render, screen} from "@testing-library/react";
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";

function renderWidthTestEnvironement(booking: Booking) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <BookingDetails booking={booking}/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<BookingDetails/>', () => {
    test('it should mount', () => {
        renderWidthTestEnvironement({
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
        expect(screen.queryByText(/client_firstname/)).toBeInTheDocument();
        expect(screen.queryByText(/client_lastname/)).toBeInTheDocument();
        expect(screen.queryByText(/room_number/)).toBeInTheDocument();
        expect(screen.queryByText(/room_price/)).toBeInTheDocument();
        expect(screen.queryByText(/apartment_name/)).toBeInTheDocument();
    });
});
