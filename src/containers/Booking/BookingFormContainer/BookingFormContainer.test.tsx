import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingFormContainer from './BookingFormContainer';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <BookingFormContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/booking.service');

describe('<BookingFormContainer />', () => {
    test('it should display the form', async () => {
        renderWidthTestEnvironement();

        await screen.findByLabelText(/Id du client/).then(clientId => {
            expect(clientId).toBeInTheDocument();
            expect(screen.queryByLabelText(/Id de la chambre/)).toBeInTheDocument();
        });
    });
});
