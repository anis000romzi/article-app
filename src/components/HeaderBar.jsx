import { Link } from 'react-router-dom';

function HeaderBar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 text-light h1" to="/">
          Article App
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/new">
                New Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default HeaderBar;
