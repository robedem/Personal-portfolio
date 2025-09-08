import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">Roberto</Link>
        <ul className="nav-menu">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;