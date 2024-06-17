import { string } from 'prop-types';
import classes from './Post.module.css';

const Post = ({ name, occupation }) => {

  return (
    <div className={classes.post}>
      <p className={classes.author}>{name}</p>
      <p className={classes.text}>{occupation}</p>
    </div>
  );
}

Post.propTypes = {
  name: string,
  occupation: string
}

export default Post;