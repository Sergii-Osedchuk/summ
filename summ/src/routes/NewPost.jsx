import classes from './NewPost.module.css';
import { useState } from 'react';
import Modal from '../components/Modal';
import { Link } from 'react-router-dom';

function NewPost({onCancel, onAddPost}) {
  const [ enteredText, setEnteredText ] = useState('');
  const [ name, setName ] = useState('');
  
  const changeBodyHandler = (event) => {
      setEnteredText(event.target.value);
    }

  const changeNameHandler = (event) => {
    setName(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const postData = {
      body: enteredText,
      author: name
    };
    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={changeBodyHandler}/>
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={changeNameHandler}/>
        </p>
        <p className={classes.actions}>
          <Link type='button' to='/'>Cancel</Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;