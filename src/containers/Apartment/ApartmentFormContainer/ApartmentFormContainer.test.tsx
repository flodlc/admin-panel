import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ApartmentFormContainer from './ApartmentFormContainer';
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";
import {MemoryRouter} from "react-router";

function renderWidthTestEnvironement() {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ApartmentFormContainer/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<ApartmentFormContainer/>', () => {
    test('it should display the form', async () => {
        renderWidthTestEnvironement();
        await screen.findByLabelText(/Nom/).then((apartmentId) => {
            expect(apartmentId).toBeInTheDocument();
            expect(screen.queryByLabelText(/Numero/)).toBeInTheDocument();
            expect(screen.queryByLabelText(/Chambres/)).toBeInTheDocument();
        });
    });
});
