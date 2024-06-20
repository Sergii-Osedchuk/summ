import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

const Modal = ({children}) => {
  const navigate = useNavigate();
  const backdropHandler = () => {
    navigate('/');
  }
  return (
    <>
      <div className={classes.backdrop} onClick={backdropHandler}/>
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;