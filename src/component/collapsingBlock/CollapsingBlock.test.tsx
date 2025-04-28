import { CollapsingBlock } from './CollapsingBlock';
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Collapsing block', () => {
  it('should show content by click ', async () => {
    render(
      <CollapsingBlock
        initialHidden={true}
        childrenElements={[
          { tag: 'div', text: 'subElement1' },
          { tag: 'div', text: 'subElement2' },
        ]}
        headerText="header of list"
      />,
    );
    const collapsingBlockHeader = await screen.findByText(/header of list/i);
    expect(collapsingBlockHeader).toBeInTheDocument();
    await userEvent.click(screen.getByText(/Show/i));
    const firstChildrenElement = await screen.findByText('subElement1');
    expect(firstChildrenElement).toBeInTheDocument();
  });
  it('should show content by default ', async () => {
    render(
      <CollapsingBlock
        childrenElements={[
          { tag: 'div', text: 'subElement3' },
          { tag: 'div', text: 'subElement4' },
        ]}
        headerText="header of list"
      />,
    );
    const collapsingBlockHeader = await screen.findByText(/header of list/i);
    expect(collapsingBlockHeader).toBeInTheDocument();
    const firstChildrenElement = await screen.findByText('subElement3');
    expect(firstChildrenElement).toBeInTheDocument();
  });
});
