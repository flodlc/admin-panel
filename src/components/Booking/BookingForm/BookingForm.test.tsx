import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingForm from './BookingForm';
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";
import {Booking} from "../../../modeles/booking";

function renderWidthTestEnvironement(handleSubmit: (booking: Booking) => void) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <BookingForm handleSubmit={handleSubmit}/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<BookingForm />', () => {
    test('it should display the dynamic form', () => {
        const mockedHandleSubmit = jest.fn(() => {
        }) as (booking: Booking) => void;
        renderWidthTestEnvironement(mockedHandleSubmit);
        expect(screen.queryByLabelText(/Id du client/)).toBeInTheDocument();
        expect(screen.queryByLabelText(/Id de la chambre/)).toBeInTheDocument();
    });
});
