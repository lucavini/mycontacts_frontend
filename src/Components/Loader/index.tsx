import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay } from './styles';

function Loader() {
  const element = document.getElementById('loader-root') as HTMLElement;
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    element,
  );
}

export default Loader;
