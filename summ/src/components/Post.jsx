const names = ['Sergio', 'Olegio'];

const Post = () => {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <p>{chosenName}</p>
      <p>I like coding in JS</p>
    </div>
  );
}

export default Post;