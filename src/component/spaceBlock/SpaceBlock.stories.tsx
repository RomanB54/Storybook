import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SpaceBlock } from './SpaceBlock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyApp/SpaceBlock',
  component: SpaceBlock,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof SpaceBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const sb1: Story = {
  args: {
    blockHeight: 50,
  },
};

export const sb2: Story = {
  args: {
    blockHeight: 70,
  },
};

export const sb3: Story = {
  args: {
    blockHeight: 90,
  },
};
