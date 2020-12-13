import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import ApartmentDetails from './ApartmentDetails';
import {ThemeProvider} from "styled-components";
import {theme} from "../../UI/Styled";
import {MemoryRouter} from "react-router";
import {Room} from "../../../modeles/room";
import {render, screen} from "@testing-library/react";

function renderWidthData(data: Room[]) {
    return render(
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <ApartmentDetails rooms={data}/>
            </MemoryRouter>
        </ThemeProvider>);
}

describe('<ApartmentDetails />', () => {
    test('it should mount', () => {
        renderWidthData([{
            number: 'room_number',
            area: 'room_area',
            price: 'room_price'
        }]);
        ['room_number', 'room_number', 'room_area', 'room_price'].forEach(text => {
            expect(screen.queryByText(new RegExp(text))).toBeInTheDocument();
        });
    });
});
