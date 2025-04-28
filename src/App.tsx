import { useState } from 'react';
import { Messages } from './component/Messages';
import { Form } from './component/form/Form';
import React from 'react';
import { HeaderWithSize } from './component/headerWithSize/HeaderWithSize';
import { ParagraphWithText } from './component/paragraph/ParagraphWithText';
import { SpaceBlock } from './component/spaceBlock/SpaceBlock';
import { Image } from './component/image/Image';
import { CollapsingBlock } from './component/collapsingBlock/CollapsingBlock';

const count: number = 1;
const initMessages = [
  {
    value: 'Hello',
    author: 'Otus',
  },
  {
    value: 'Hi',
    author: 'React',
  },
];

export default function App() {
  const handleCount = () => {
    setCount(count + 1);
  };

  const [count, setCount] = useState(0); // хук возвращает массив, позволяет запомнить состояние и вызвать перерендер
  const [messages, setMessages] = useState(initMessages);
  const [value, setValue] = useState('');
  const imagePath = '/images/11467062.png';

  const handleSend = () => {
    setMessages([
      ...messages,
      {
        value,
        author: 'Otus',
      },
    ]);
    setValue('');
  };

  return (
    <div className="App">
      <h1>Hello123</h1>
      <button onClick={handleCount}>{count}</button>
      <hr />
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={handleSend}>send</button>
      <Messages messages={messages} />
      <Form login="alex" password="alex" />
    </div>
  );
}
