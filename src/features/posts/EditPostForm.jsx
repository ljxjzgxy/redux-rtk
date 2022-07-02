import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostById, updatePost, deletePost } from "./postSlice";
import { useParams, useNavigate } from "react-router-dom";
import { selectAllUsers } from "../users/userSlice";

function EditPostForm() {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, postId));
  const users = useSelector((state) => selectAllUsers(state));

  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const [userId, setUserId] = useState(null);
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error(error, "in onSavePostClicked catch");
      } finally {
        setRequestStatus("idle");
      }
    }
  };

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onDeletePostClicked = () => {
    try {
      setRequestStatus("pending");
      dispatch(
        deletePost({
          id: post.id,
        })
      ).unwrap();
      setTitle("");
      setContent("");
      setUserId("");
      navigate("/");
    } catch (error) {
      console.log(error, "failed to delete");
    } finally {
      setRequestStatus("idle");
    }
  };

  // console.log(post?.userId, "userId");

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title ?? post?.title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          onChange={onAuthorChanged}
          value={userId ?? post?.userId}
        >
          <option value=""></option>
          {userOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content ?? post?.body}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
        <button
          className="deleteButton"
          type="button"
          onClick={onDeletePostClicked}
        >
          Delete Post
        </button>
      </form>
    </section>
  );
}

export default EditPostForm;
