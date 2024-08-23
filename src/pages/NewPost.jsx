import { useNavigate } from 'react-router-dom';
import { addPost } from '../utils/api';
import PostInput from '../components/PostInput';

function NewPost() {
  const navigate = useNavigate();

  const onSubmitPostHandler = async (post) => {
    const { error } = await addPost(post);
    if (error) {
      return;
    }
    navigate(-1);
  };

  return (
    <main className="container py-4 px-3 mx-auto">
      <h1 className="mb-4 text-center">New Post</h1>
      <PostInput submit={onSubmitPostHandler} draft={onSubmitPostHandler} />
    </main>
  );
}

export default NewPost;
