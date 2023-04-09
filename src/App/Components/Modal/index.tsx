import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@Components/Button';
import { Overlay, Container, Footer } from './styles';

type Props = {
  danger?: boolean;
};

function Modal({ danger = false }: Props) {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button className="cancelButton" type="button">
            Cancelar
          </button>

          <Button danger={danger} type="button">
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    modalRoot,
  );
}

export default Modal;
