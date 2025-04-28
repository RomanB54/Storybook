import React from 'react';
import { FC } from 'react';

type Props = {
  source: string;
  widthImg?: string;
  heightImg?: string;
};

export const Image: FC<Props> = ({ source, widthImg, heightImg }) => {
  return <img src={source} width={widthImg} height={heightImg}></img>;
};
