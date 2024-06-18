import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useState } from 'react';

const PostsList = ({ modalIsVisible, modalVisibilityHandler }) => {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((prev) => [...prev, postData]);
  } 

  return (
    <>
      {modalIsVisible && <Modal onClose={modalVisibilityHandler}>
        <NewPost 
          onCancel={modalVisibilityHandler}
          onAddPost={addPostHandler}
        />
      </Modal>}
      {posts.length > 0 ? 
        (<ul className={classes.posts}>
          {posts.map(post => 
            <Post name={post.author} occupation={post.body} key={post.body}/>
          )}
        </ul>) : 
          <div style={{textAlign: 'center', color: 'white'}}>
            <h2>There are no posts yet</h2>
            <p>Add some</p>
          </div>
        }
      
    </>
  );
}

export default PostsList;