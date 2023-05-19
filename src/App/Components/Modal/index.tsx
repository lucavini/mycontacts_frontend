import React from 'react';
import Button from '@Components/Button';
import ReactPortal from '@Components/ReactPortal';
import { Overlay, Container, Footer } from './styles';

type ButtonProps = {
  label?: string;
  onClick: () => void;
};

type Props = {
  danger?: boolean;
  title: string;
  visible: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  cancelButtonProps?: ButtonProps;
  confirmButtonProps?: ButtonProps;
};

function Modal({
  danger = false,
  title,
  children,
  visible,
  cancelButtonProps,
  confirmButtonProps,
  isLoading = false,
}: Props) {
  if (!visible) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay>
        <Container danger={danger}>
          <h1 className="modal-title">{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              onClick={cancelButtonProps?.onClick}
              className="cancelButton"
              type="button"
              disabled={isLoading}
            >
              {cancelButtonProps?.label ?? 'Cancelar'}
            </button>

            <Button
              onClick={confirmButtonProps?.onClick}
              danger={danger}
              type="button"
              isLoading={isLoading}
            >
              {confirmButtonProps?.label ?? 'Confirmar'}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
}

export default Modal;
