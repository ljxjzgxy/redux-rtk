// import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";
import SinglePostPage from "./features/posts/SinglePostPage";
import EditPostForm from "./features/posts/EditPostForm";
import Layout from "./components/Layout";

import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  return (
    //  <main className="App">
    //     <Counter />
    //     <AddPostForm />
    //     <PostsList />
    //   </main>

    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
