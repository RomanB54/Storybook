import { Image } from './Image';
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Image', () => {
  it('should add image ', async () => {
    const imageUrl = 'testPath';
    render(<Image source={imageUrl} widthImg="400" heightImg="400" />);
    const image = await screen.findByRole('img');
    expect(image).toBeInTheDocument();
    expect((image as HTMLImageElement).src).toBe('http://localhost/testPath');
  });
});
