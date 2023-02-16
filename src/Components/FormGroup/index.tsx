import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

function FormGroup({ children }: Props) {
  return <Container>{children}</Container>;
}

export default FormGroup;
