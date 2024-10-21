import { forwardRef, ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export interface ModalHandler {
  open: () => void;
}

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};
const Modal = forwardRef<ModalHandler, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        dialog.current?.showModal();
      },
    }),
    []
  );

  return createPortal(
    <dialog ref={dialog} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
