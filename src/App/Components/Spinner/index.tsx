import React from 'react';
import { StyledSpinner } from './styles';

type Props = {
  size?: number;
};

function Spinner({ size = 32 }: Props) {
  return <StyledSpinner size={size} />;
}

export default Spinner;
