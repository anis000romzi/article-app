import { Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Home from './pages/Home';
import Preview from './pages/Preview';
import NewPost from './pages/NewPost';
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <HeaderBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Routes>
    </>
  );
}

export default App;
