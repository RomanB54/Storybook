import React, { useState } from 'react';
import { FC } from 'react';

type Props = {
  initialHidden?: boolean;
  childrenElements: childElement[];
  headerText: string;
};

type State = {
  isHidden: boolean;
};

type childElement = {
  tag: keyof React.JSX.IntrinsicElements;
  text: string;
};

export const CollapsingBlock: FC<Props> = ({
  headerText,
  initialHidden = false,
  childrenElements,
}) => {
  const [isHidden, setIsHidden] = useState(initialHidden);

  const handleCollapse = () => {
    setIsHidden((previousValue) => !previousValue);
  };

  return (
    <>
      <h1 onClick={handleCollapse} style={{ cursor: 'pointer' }}>
        {headerText} {isHidden ? 'Show' : 'Hide'}
      </h1>
      <div>
        {childrenElements.map((child, index) => {
          const Tag = child.tag;
          return (
            <Tag key={index} hidden={isHidden}>
              {child.text}
            </Tag>
          );
        })}
      </div>
    </>
  );
};
