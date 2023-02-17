import React from 'react';
import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

type Props = {
  danger?: boolean;
};

function Modal({ danger = false }: Props) {
  return (
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
    </Overlay>
  );
}

export default Modal;
