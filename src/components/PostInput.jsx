/* eslint-disable react/prop-types */
import useInput from '../hooks/useInput';

function PostInput({ submit, draft, post }) {
  const [title, onTitleChange] = useInput(post ? post.title : '');
  const [content, onContentChange] = useInput(post ? post.content : '');
  const [category, onCategoryChange] = useInput(post ? post.category : '');

  const onSubmitHandler = (event) => {
    event.preventDefault();

    submit({
      id: post ? post.id : '',
      title,
      content,
      category,
      status: 'publish',
    });
  };

  const onDraftHandler = (event) => {
    event.preventDefault();

    draft({
      id: post ? post.id : '',
      title,
      content,
      category,
      status: 'draft',
    });
  };


  return (
    <form onSubmit={onSubmitHandler} className="col-lg-7 col-sm-8 mx-auto">
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          placeholder="Title"
          onChange={onTitleChange}
        />
        <label htmlFor="title">Title</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <input
          type="text"
          className="form-control"
          id="category"
          value={category}
          placeholder="Category"
          onChange={onCategoryChange}
        />
        <label htmlFor="category">Category</label>
      </div>
      <div className="form-floating col-auto mb-2">
        <textarea
          style={{ height: '200px' }}
          className="form-control"
          placeholder="Content"
          id="content"
          value={content}
          onChange={onContentChange}
        ></textarea>
        <label htmlFor="content">Content</label>
      </div>
      <div className="col-auto mb-2">
        <button type="submit" className="btn btn-outline-primary m-2">
          Publish
        </button>
        <button type="button" onClick={onDraftHandler} className="btn btn-outline-warning m-2">
          Draft
        </button>
      </div>
    </form>
  );
}

export default PostInput;
