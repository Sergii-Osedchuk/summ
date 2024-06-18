import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [ modalIsVisible, setModalIsVisible ] = useState(false);

  const modalVisibilityHandler = () => {
    setModalIsVisible(false);
  }

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList modalIsVisible={modalIsVisible} modalVisibilityHandler={modalVisibilityHandler}/>
      </main>
    </>
  );
}

export default App;