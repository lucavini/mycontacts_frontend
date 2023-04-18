/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Spinner from '@Components/Spinner';
import { StyledButton } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: any;
  isLoading?: boolean;
  disabled?: boolean;
  danger?: boolean;
}

function Button(props: Props) {
  return (
    <StyledButton {...props} disabled={props.isLoading || props.disabled}>
      {props.isLoading ? <Spinner size={16} /> : props.children}
    </StyledButton>
  );
}

export default Button;
