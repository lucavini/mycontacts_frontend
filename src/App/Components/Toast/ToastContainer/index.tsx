import React from 'react';

import { toastEventManager } from 'Shared/utils/toast';
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
    function handleAddToats(event: toast.ToastDetails) {
      const { text, type } = event;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), text, type },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToats);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToats);
    };
  }, []);

  function handleRemoveMessage(id: number) {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id),
    );
  }

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}

export default ToastContainer;
