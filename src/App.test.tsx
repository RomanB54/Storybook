import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import React from 'react';

test('renders', () => {
  render(<App />);
  const h1Element: HTMLElement = screen.getByText(/Hello123/i);
  expect(h1Element).toBeInTheDocument();
  expect(screen.queryAllByRole('button').length).toBe(3);
});
