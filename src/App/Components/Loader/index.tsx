import React from 'react';
import ReactPortal from '@Components/ReactPortal';
import Spinner from '@Components/Spinner';
import { Overlay } from './styles';

type Props = {
  isLoading: boolean;
};

function Loader({ isLoading }: Props) {
  if (!isLoading) {
    return null;
  }

  return (
    <ReactPortal containerId="loader-root">
      <Overlay>
        <Spinner size={90} />
      </Overlay>
    </ReactPortal>
  );
}

export default Loader;
