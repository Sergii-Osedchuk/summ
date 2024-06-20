import { string } from 'prop-types';
import classes from './Post.module.css';
import { Link } from 'react-router-dom';

const Post = ({ id, name, occupation }) => {

  return (
    <div className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{name}</p>
        <p className={classes.text}>{occupation}</p>
      </Link>
    </div>
  );
}

Post.propTypes = {
  name: string,
  occupation: string
}

export default Post;