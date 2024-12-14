// src/components/Navbar.js
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Job Board</div>
      <div className="auth-links">
        <Link to="/login">
          <button>Log In</button>
        </Link>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
