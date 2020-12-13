import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Secured from './Secured';
import {MemoryRouter} from "react-router";
import {theme} from "../../components/UI/Styled";
import {ThemeProvider} from "styled-components";

describe('<Secured/>',  () => {
  test('it should mount', () => {
    render(<ThemeProvider theme={theme}><MemoryRouter><Secured /></MemoryRouter></ThemeProvider>);

    expect(true).toBe(true);
  });
});
