import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <li><Post name='Sergio' occupation='developer'/></li>
        <li><Post name='Osadchuk' occupation='developer'/></li>
        <li><Post name='Sergii' occupation='developer'/></li>
      </ul>
    </>
  );
}

export default PostsList;