import React from "react";
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";
import apartmentService from "../../../services/apartment.service";
import ApartmentsContainer from "./ApartmentsContainer";
import {Apartment} from "../../../modeles/apartment";
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

function renderWidthTestEnvironement(apartmentsData: Apartment[]) {
    jest.mock('../../../services/apartment.service');
    apartmentService.getAppartments = async () => {
        return apartmentsData;
    };
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ApartmentsContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<AppartmentsContainer/>', () => {
    test('it should display 1 apartment', async () => {
        renderWidthTestEnvironement([{
            id: 'apartment_id',
            name: 'apartment_name'
        }]);
        await screen.findByText(/apartment_id/).then((apartmentId) => {
            expect(apartmentId).toBeInTheDocument();
        });
    });
});
