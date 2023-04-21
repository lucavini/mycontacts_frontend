import React from 'react';

import { Container } from './styles';
import ToastMessage from '../ToastMessage';

interface Message {
  id: number;
  type: toast.ToastTypes['type'];
  text: string;
}

function ToastContainer() {
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    function handleAddToats(event: Event) {
      const customEvent = event as CustomEvent<toast.ToastDetails>;
      const { text, type } = customEvent.detail;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), text, type },
      ]);
    }

    document.addEventListener('addtoast', handleAddToats);

    return () => {
      document.removeEventListener('addtoast', handleAddToats);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          text={message.text}
          type={message.type}
        />
      ))}
    </Container>
  );
}

export default ToastContainer;
