import { string } from 'prop-types';

const Post = ({ name, occupation }) => {

  return (
    <div>
      <p>{name}</p>
      <p>{occupation}</p>
    </div>
  );
}

Post.propTypes = {
  name: string,
  occupation: string
}

export default Post;