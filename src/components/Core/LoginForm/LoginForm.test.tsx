import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginForm from './LoginForm';

describe('<LoginForm />', () => {
    test('it should mount', () => {
        render(<LoginForm submitHandler={(values: any) => {
        }}/>);

        expect(screen.queryByLabelText(/Email/)).toBeInTheDocument();
        expect(screen.queryByLabelText(/Password/)).toBeInTheDocument();
    });
});
