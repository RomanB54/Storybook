import React from 'react';
import { FC } from 'react';

type Props = {
  login?: string;
  password?: string;
  backgroundColor?: string;
  display?: string;
};

export const Form: FC<Props> = ({
  login,
  password,
  backgroundColor,
  display,
}) => {
  const handleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void = (
    ev: React.FormEvent<HTMLFormElement>,
  ) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={login} />
      <br />
      <input type="password" value={password} />
      <br />
      <button className="storybook-button" style={{ backgroundColor, display }}>
        login
      </button>
    </form>
  );
};
