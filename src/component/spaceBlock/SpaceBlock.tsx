import React from 'react';
import { FC } from 'react';

type Props = {
  blockHeight: number;
  testId?: string;
};

export const SpaceBlock: FC<Props> = ({ blockHeight, ...props }) => {
  return (
    <div
      style={{
        height: blockHeight,
      }}
      {...props}
    >
      <hr></hr>
    </div>
  );
};
