import React from 'react';

import { Container } from './styles';

import xCircleIcon from '~Assets/icons/x-circle.svg';
import checkCircleIcon from '~Assets/icons/check-circle.svg';

type Props = {
  text: string;
  type: toast.ToastTypes['type'];
};

function ToastMessage({ text, type = 'default' }: Props) {
  return (
    <Container type={type}>
      {type === 'danger' && <img src={xCircleIcon} alt="error" />}
      {type === 'success' && <img src={checkCircleIcon} alt="success" />}
      <strong>{text}</strong>
    </Container>
  );
}

export default ToastMessage;
