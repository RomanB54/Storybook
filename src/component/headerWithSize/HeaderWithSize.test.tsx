import { HeaderWithSize } from './HeaderWithSize';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('Space block', () => {
  it('should render space block ', async () => {
    render(<HeaderWithSize text="header1" size={2} />);
    const headerElement = await screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
  });
});
