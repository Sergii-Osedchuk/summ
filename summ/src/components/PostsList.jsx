import Post from './Post';
import NewPost from './NewPost';
import Modal from './Modal';
import classes from './PostsList.module.css';
import { useState, useEffect } from 'react';

const PostsList = ({ modalIsVisible, modalVisibilityHandler }) => {


  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, [])
  

  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {'Content-Type': 'application/json'}
    });
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