import React from 'react';
import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>Titulo do modal</h1>
        <p>Corpo do modal</p>

        <Footer>
          <button className="cancelButton" type="button">
            Cancelar
          </button>

          <Button type="button">Deletar</Button>
        </Footer>
      </Container>
    </Overlay>
  );
}

export default Modal;
