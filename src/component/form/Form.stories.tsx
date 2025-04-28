import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Form } from './Form';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'MyApp/Form',
  component: Form,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Login1: Story = {
  args: {
    login: 'Otus',
    password: 'otus',
  },
};

export const Login2: Story = {
  args: {
    login: 'alex',
    password: 'alex',
    backgroundColor: 'red',
  },
};

export const Login3: Story = {
  args: {
    login: 'bob',
    password: 'bob',
    backgroundColor: 'green',
    display: 'flex',
  },
};
