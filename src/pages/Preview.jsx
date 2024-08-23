import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getPostById } from '../utils/api';

function Preview() {
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

  if (post.status !== 'publish') {
    navigate('/');
  }

  if (loading) {
    return <main className="container py-4 px-3 mx-auto">loading ...</main>;
  }

  return (
    <main className="container py-4 px-3 mx-auto">
      <div>
        <h1 className="mb-2">{post.title}</h1>
        <p className="fs-5 text-secondary">#{post.category}</p>
      </div>
      <div style={{ whiteSpace: 'pre-line' }}>{post.content}</div>
    </main>
  );
}

export default Preview;
