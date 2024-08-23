/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

function PostsList({ posts, onDelete }) {
  return (
    <div className="row">
      {posts.map((post) => (
        <div key={post.id} className="col-sm-6 col-lg-4 mb-3 mb-sm-0">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/preview/${post.id}`}>{post.title}</Link>
              </h5>
              <p className="card-text">#{post.category}</p>
              <Link
                to={`/edit/${post.id}`}
                className="btn btn-outline-primary me-2"
              >
                Edit
              </Link>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  onDelete({
                    id: post.id,
                    title: post.title,
                    content: post.content,
                    category: post.category,
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
