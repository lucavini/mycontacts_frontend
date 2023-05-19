import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@Components/Button';
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
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
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
    </Overlay>,
    modalRoot,
  );
}

export default Modal;
