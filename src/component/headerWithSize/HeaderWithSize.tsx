import React from 'react';
import { FC } from 'react';

type Props = {
  text: string;
  size: 1 | 2 | 3;
};

export const HeaderWithSize: FC<Props> = ({ text, size }) => {
  const Tag = `h${size}` as keyof React.JSX.IntrinsicElements;
  return <Tag>{text}</Tag>;
};
