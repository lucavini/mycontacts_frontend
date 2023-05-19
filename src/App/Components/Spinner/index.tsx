import React from 'react';
import { StyledSpinner } from './styles';

type Props = {
  size?: number;
  danger?: boolean;
};

function Spinner({ size = 32, danger = false }: Props) {
  return <StyledSpinner danger={danger} size={size} />;
}

export default Spinner;
