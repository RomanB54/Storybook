import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ParagraphWithText } from './ParagraphWithText';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyApp/ParagraphWithText',
  component: ParagraphWithText,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ParagraphWithText>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const p1: Story = {
  args: {
    text: 'otus serif small',
    family: 'serif',
    size: 'small',
  },
};

export const p2: Story = {
  args: {
    text: 'otus sans-serif',
    family: 'sans-serif',
  },
};

export const p3: Story = {
  args: {
    text: 'otus sans-serif',
    family: 'sans-serif',
    size: 'large',
  },
};
