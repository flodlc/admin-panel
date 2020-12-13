import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginRoute from './LoginRoute';
import {MemoryRouter} from "react-router";

describe('<LoginRoute />', () => {
    test('it should mount', () => {
        render(<MemoryRouter><LoginRoute/></MemoryRouter>);
        expect(true).toBe(true)
    });
});
