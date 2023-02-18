import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  error?: string;
};

function FormGroup({ children, error = '' }: Props) {
  return (
    <Container>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}

export default FormGroup;
