import { Children, useRef } from "react";

function Modal() {
  const dRef = useRef();

  function handleClickOpen() {
    dRef.current.showModal();
  }

  return (
    <div>
      <dialog
        ref={dRef}
        className="-translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      >
        Hello
      </dialog>
    </div>
  );
}

function Button({ children }) {
  return <button onClick={handleClickOpen}>{children}</button>;
}

Modal.Button = Button;

export default Modal;
