const BASE_URL = 'http://localhost:8080';

async function getPosts() {
  const response = await fetch(`${BASE_URL}/article`, {
    headers: {
      Accept: 'application/json',
    },
  });
  const responseJson = await response.json();

  if (responseJson.error) {
    alert(responseJson.error);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function getPostById(id) {
  const response = await fetch(`${BASE_URL}/article/${id}`, {
    headers: {
      Accept: 'application/json',
    },
  });
  const responseJson = await response.json();

  if (responseJson.error) {
    alert(responseJson.error);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function addPost({ title, content, category, status }) {
  const response = await fetch(`${BASE_URL}/article`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
      category,
      status,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.error) {
    alert(responseJson.error);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function updatePost({ id, title, content, category, status }) {
  const response = await fetch(`${BASE_URL}/article/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      content,
      category,
      status,
    }),
  });

  const responseJson = await response.json();

  if (responseJson.error) {
    alert(responseJson.error);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson };
}

async function deletePost(id) {
  const response = await fetch(`${BASE_URL}/article/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJson = await response.json();

  if (responseJson.error) {
    return { error: true };
  }

  return { error: false };
}

export { getPosts, getPostById, addPost, updatePost, deletePost };
