import { useSelector /* useDispatch  */ } from "react-redux";
import {
  selectPostIds,
  // selectAllPosts,
  getPostsStatus,
  getPostsError,
  // fetchPosts,
} from "./postSlice";
// import { useEffect } from "react";

import PostExcerpt from "./PostExcerpt";

function PostsList() {
  // const dispatch = useDispatch();

  const orderedPostIds = useSelector(selectPostIds);
  // const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post) => (
    //   <PostExcerpt key={post.id} post={post} />
    // ));

    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p> {postsError} </p>;
  }

  return (
    <section>
      {/* <h2>Posts</h2> */}
      {content}
    </section>
  );
}

export default PostsList;
