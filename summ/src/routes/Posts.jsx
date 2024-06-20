import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

function Posts() {

  return (
    <>
      <main>
        <PostsList/>
        <Outlet />
      </main>
    </>
  );
}

export default Posts;

export async function postsLoader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();
  return resData.posts;
}
