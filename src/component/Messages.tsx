import { FC } from 'react';

type Messages = {
  value: string;
  author: string;
};

type Props = {
  messages: Message[];
};

export const Messages: FC<Props> = ({ messages }) => {
  return (
    <div>
      <p>Messages</p>
      <ul>
        {messages.map(({ value, author }) => (
          <li>
            <span>
              {author}: {value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
