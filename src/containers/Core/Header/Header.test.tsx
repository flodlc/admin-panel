import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';
import {MemoryRouter} from "react-router";
import {ThemeProvider} from "styled-components";
import {theme} from "../../../components/UI/Styled";

function renderWidthTestEnvironement(TestedComponent: React.ComponentType) {
    render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <TestedComponent/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<Header />', () => {
    test('it should mount', () => {
        renderWidthTestEnvironement(Header);

        const header = screen.getByTestId('Header');

        expect(header).toBeInTheDocument();
    });
});
