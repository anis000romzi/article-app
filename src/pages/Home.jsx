import { useState, useEffect } from 'react';
import { getPosts, updatePost, deletePost } from '../utils/api';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DataTable from '../components/DataTable';
import 'react-tabs/style/react-tabs.css';

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [posts, setPosts] = useState([]);

  const fetchPost = async () => {
    const { data } = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const movePostToTrashHandler = async ({ id, title, content, category }) => {
    await updatePost({ id, title, content, category, status: 'trash' });
    const { data } = await getPosts();
    setPosts(data);
  };

  const recoverPostHandler = async ({ id, title, content, category }) => {
    await updatePost({ id, title, content, category, status: 'publish' });
    const { data } = await getPosts();
    setPosts(data);
  };

  const deletePosthandler = async (id) => {
    await deletePost(id);
    const { data } = await getPosts();
    setPosts(data);
  };

  const filterData = () => {
    switch (activeTab) {
      case 0:
        return posts.filter((item) => item.status === 'publish');
      case 1:
        return posts.filter((item) => item.status === 'draft');
      case 2:
        return posts.filter((item) => item.status === 'trash');
      default:
        return posts;
    }
  };

  return (
    <main className="container py-4 px-3 mx-auto">
      <h1>All Posts</h1>
      <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
        <TabList>
          <Tab>Published</Tab>
          <Tab>Draft</Tab>
          <Tab>Trash</Tab>
        </TabList>

        <TabPanel>
          <DataTable
            data={filterData()}
            movePostToTrash={movePostToTrashHandler}
            deletePost={deletePosthandler}
            recoverPost={recoverPostHandler}
          />
        </TabPanel>
        <TabPanel>
          <DataTable
            data={filterData()}
            movePostToTrash={movePostToTrashHandler}
            deletePost={deletePosthandler}
            recoverPost={recoverPostHandler}
          />
        </TabPanel>
        <TabPanel>
          <DataTable
            data={filterData()}
            movePostToTrash={movePostToTrashHandler}
            deletePost={deletePosthandler}
            recoverPost={recoverPostHandler}
          />
        </TabPanel>
      </Tabs>
    </main>
  );
}

export default Home;
