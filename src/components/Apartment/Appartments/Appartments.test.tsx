import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import Appartments from './Appartments';
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";
import {Apartment} from "../../../modeles/apartment";
import {render, screen} from "@testing-library/react";

function renderWidthData(data: Apartment[]) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <Appartments apartments={data}/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<Appartments />', () => {
    test('it should display 1 apartment', async () => {
        renderWidthData([{
            id: 'apartment_id',
            name: 'apartment_name'
        }]);
        expect(screen.queryByText(/apartment_id/)).toBeInTheDocument();
        expect(screen.queryByText(/apartment_name/)).toBeInTheDocument()
        expect(screen.queryByText(/\(1\)/)).toBeInTheDocument()
    });

    test('it should display 0 apartment', async () => {
        renderWidthData([]);
        expect(screen.queryByText(/\(0\)/)).toBeInTheDocument()
    });
});
