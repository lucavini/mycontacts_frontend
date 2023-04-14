import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '@Components/Spinner';
import { Overlay } from './styles';

type Props = {
  isLoading: boolean;
};

function Loader({ isLoading }: Props) {
  if (!isLoading) {
    return null;
  }
  const element = document.getElementById('loader-root') as HTMLElement;
  return ReactDOM.createPortal(
    <Overlay>
      <Spinner size={90} />
    </Overlay>,
    element,
  );
}

export default Loader;
