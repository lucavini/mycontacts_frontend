import React from 'react';

import { Container } from './styles';

import xCircleIcon from '~Assets/icons/x-circle.svg';
import checkCircleIcon from '~Assets/icons/check-circle.svg';

type Props = {
  message: {
    id: number;
    text: string;
    type: toast.ToastTypes['type'];
    duration?: number;
  };
  onRemoveMessage: (id: number) => void;
};

function ToastMessage({ message, onRemoveMessage }: Props) {
  React.useEffect(() => {
    const timeoutId = setTimeout(
      () => onRemoveMessage(message.id),
      message.duration || 4000,
    );

    return () => {
      clearTimeout(timeoutId);
    };
  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);
  }

  return (
    <Container
      tabIndex={0}
      role="button"
      type={message.type}
      onClick={handleRemoveToast}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="error" />}
      {message.type === 'success' && (
        <img src={checkCircleIcon} alt="success" />
      )}
      <strong>{message.text}</strong>
    </Container>
  );
}

export default ToastMessage;
