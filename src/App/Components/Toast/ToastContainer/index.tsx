import React from 'react';

import { toastEventManager } from 'Shared/utils/toast';
import { Container } from './styles';
import ToastMessage from '../ToastMessage';

interface Message extends toast.ToastDetails {
  id: number;
}

function ToastContainer() {
  const [messages, setMessages] = React.useState<Message[]>([]);

  React.useEffect(() => {
    function handleAddToats(event: toast.ToastDetails) {
      const { text, type, duration } = event;

      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), text, type, duration },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToats);

    return () => {
      toastEventManager.removeListener('addtoast', handleAddToats);
    };
  }, []);

  const handleRemoveMessage = React.useCallback((id: number) => {
    setMessages((prevState) =>
      prevState.filter((message) => message.id !== id),
    );
  }, []);

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
