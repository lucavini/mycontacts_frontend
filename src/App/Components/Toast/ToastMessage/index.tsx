import React from 'react';

import { Container } from './styles';

import xCircleIcon from '~Assets/icons/x-circle.svg';
import checkCircleIcon from '~Assets/icons/check-circle.svg';

type Props = {
  message: {
    id: number;
    text: string;
    type: toast.ToastTypes['type'];
  };
  onRemoveMessage: (id: number) => void;
};

function ToastMessage({
  message: { id, text, type = 'default' },
  onRemoveMessage,
}: Props) {
  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <Container
      tabIndex={0}
      role="button"
      type={type}
      onClick={handleRemoveToast}
    >
      {type === 'danger' && <img src={xCircleIcon} alt="error" />}
      {type === 'success' && <img src={checkCircleIcon} alt="success" />}
      <strong>{text}</strong>
    </Container>
  );
}

export default ToastMessage;
