import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ApartmentForm from './ApartmentForm';
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";
import {Apartment} from "../../../modeles/apartment";
import {render, screen} from "@testing-library/react";

function renderWidthTestEnvironement(handleSubmit: (apartment: Apartment) => void) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ApartmentForm handleSubmit={handleSubmit}/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<ApartmentForm />', () => {
    test('it should display the dynamic form', () => {
        const mockedHandleSubmit = jest.fn(() => {
        }) as (apartment: Apartment) => void;
        renderWidthTestEnvironement(mockedHandleSubmit);
        expect(screen.queryByLabelText(/Nom/)).toBeInTheDocument();
        expect(screen.queryByLabelText(/Numero/)).toBeInTheDocument();
        expect(screen.queryByLabelText(/Chambres/)).toBeInTheDocument();
    });
});
