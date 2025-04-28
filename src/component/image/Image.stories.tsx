import type { Meta, StoryObj } from '@storybook/react';
import imageSrc from './assets/11467062.png';
import { fn } from '@storybook/test';

import { Image } from './Image';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyApp/Image',
  component: Image,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Block: Story = {
  args: {
    source: imageSrc,
    widthImg: '400',
    heightImg: '400',
  },
};
