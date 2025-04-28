import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { HeaderWithSize } from './HeaderWithSize';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyApp/HeaderWithSize',
  component: HeaderWithSize,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderWithSize>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const h1: Story = {
  args: {
    text: 'Otus',
    size: 1,
  },
};

export const h2: Story = {
  args: {
    text: 'Otus',
    size: 2,
  },
};

export const h3: Story = {
  args: {
    text: 'Otus',
    size: 3,
  },
};
