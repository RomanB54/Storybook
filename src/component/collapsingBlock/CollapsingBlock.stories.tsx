import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { CollapsingBlock } from './CollapsingBlock';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyApp/CollapsingBlock',
  component: CollapsingBlock,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CollapsingBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Block: Story = {
  args: {
    initialHidden: true,
    childrenElements: [
      {
        tag: 'div',
        text: 'subElement 1',
      },
      {
        tag: 'div',
        text: 'subElement 2',
      },
      {
        tag: 'div',
        text: 'subElement 3',
      },
    ],
    headerText: 'Header of Block2',
  },
};
