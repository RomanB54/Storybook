import { SpaceBlock } from './SpaceBlock';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

describe('Space block', () => {
  it('should render space block ', async () => {
    render(<SpaceBlock blockHeight={50} data-testid="test" />);
    const spaceBlkElement = await screen.findByRole('separator');
    const divElement = screen.getByTestId('test');
    expect(spaceBlkElement).toBeInTheDocument();
    expect(divElement.style.height).toBe('50px');
  });
});
