import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApartmentContainer from './ApartmentContainer';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";
import apartmentService from "../../../services/apartment.service";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ApartmentContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

jest.mock('../../../services/apartment.service');

describe('<ApartmentContainer />',  () => {
    test('it should mount', async () => {

        apartmentService.getAppartment = async () => [
            {
                area: 'room_area',
                number: 'room_number',
                price: 'room_price'
            }
        ];
        renderWidthTestEnvironement();

        await screen.findByText(/room_area/).then(roomArea => {
            expect(roomArea).toBeInTheDocument();
            expect(screen.queryByText(/room_number/)).toBeInTheDocument();
            expect(screen.queryByText(/room_price/)).toBeInTheDocument();
        });
    });
});
