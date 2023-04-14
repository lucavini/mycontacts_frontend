import React from 'react';
import Spinner from '@Components/Spinner';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
  error?: string;
  isLoading?: boolean;
};

function FormGroup({ children, error = '', isLoading }: Props) {
  return (
    <Container>
      <div className="formItem">
        {children}

        {isLoading && (
          <div className="loader">
            <Spinner size={16} />
          </div>
        )}
      </div>

      {error && <small>{error}</small>}
    </Container>
  );
}

export default FormGroup;
