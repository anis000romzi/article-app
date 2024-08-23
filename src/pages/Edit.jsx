import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost, getPostById } from '../utils/api';
import PostInput from '../components/PostInput';

function Edit() {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchPostDetail = async () => {
      const { data } = await getPostById(id);
      setPost(data);
      setLoading(false);
    };

    fetchPostDetail();
  }, [id]);

  const onSubmitPostHandler = async (post) => {
    const { error } = await updatePost(post);
    if (error) {
      return;
    }
    navigate(-1);
  };

  if (loading) {
    return <main className="container py-4 px-3 mx-auto">loading ...</main>;
  }

  return (
    <main className="container py-4 px-3 mx-auto">
      <h1 className="mb-4 text-center">New Post</h1>
      <PostInput
        post={post}
        submit={onSubmitPostHandler}
        draft={onSubmitPostHandler}
      />
    </main>
  );
}

export default Edit;
