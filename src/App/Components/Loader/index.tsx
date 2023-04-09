import React from 'react';
import ReactDOM from 'react-dom';
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
      <div className="loader" />
    </Overlay>,
    element,
  );
}

export default Loader;
