import "./HeaderNavbar.css";

const HeaderNavbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
        Site logo
      </a>
      <ul className="navbar-nav">
        <li className="navbar-nav-item">
          <a className="navbar-nav-link" href="#">
            Link 1
          </a>
        </li>
        <li className="navbar-nav-item">
          <a className="navbar-nav-link" href="#">
            Link 2
          </a>
        </li>
        <li className="navbar-nav-item">
          <a className="navbar-nav-link" href="#">
            Link 3
          </a>
        </li>
        <li className="navbar-nav-item">
          <a className="navbar-nav-link" href="#">
            Link 4
          </a>
        </li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default HeaderNavbar;
