import React from 'react';
import ReactDOM from 'react-dom';

type Props = {
  containerId: string;
  children: React.ReactNode;
};

function ReactPortal({ containerId, children }: Props) {
  let container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    container.setAttribute('id', containerId);
    document.body.appendChild(container);
  }
  return ReactDOM.createPortal(children, container);
}

export default ReactPortal;
