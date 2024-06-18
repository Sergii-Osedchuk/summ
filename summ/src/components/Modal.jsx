import classes from './Modal.module.css';

const Modal = ({onClose, children}) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}/>
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;