import React from 'react';
import { render, screen } from '@testing-library/react';
import { ParagraphWithText } from './ParagraphWithText';
import '@testing-library/jest-dom';

describe('Paragraph with text', () => {
  test('renders paragraph text', async () => {
    render(
      <ParagraphWithText
        text="paragraph"
        family="serif"
        size="small"
      ></ParagraphWithText>,
    );
    const paragraphElement = await screen.findByText('paragraph');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.style.fontFamily).toBe('serif');
    expect(paragraphElement.style.fontSize).toBe('12px');
  });

  test('renders paragraph text with default size', async () => {
    render(
      <ParagraphWithText text="paragraph" family="serif"></ParagraphWithText>,
    );
    const paragraphElement = await screen.findByText('paragraph');
    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement.style.fontFamily).toBe('serif');
    expect(paragraphElement.style.fontSize).toBe('16px');
  });
});
