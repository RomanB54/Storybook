import React from 'react';
import { FC } from 'react';

type Props = {
  text: string;
  family?: string;
  size?: 'small' | 'medium' | 'large';
};

const fontSizeMap = {
  small: '12px',
  medium: '16px',
  large: '24px',
};

export const ParagraphWithText: FC<Props> = ({ text, family, size }) => {
  const stylePara = {
    fontFamily: family,
    fontSize: size ? fontSizeMap[size] : '16px',
  };
  return <p style={stylePara}>{text}</p>;
};
