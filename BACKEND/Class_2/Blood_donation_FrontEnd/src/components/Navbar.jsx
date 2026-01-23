import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
          <Link to="/" style={{color:"white", textDecoration:"none"}}>Khoon Do</Link>
      </div>

      <ul className="navbar-links">
        
        <li>
          <Link to="/donate">Khoondo Donate Khoon</Link>
        </li>

        <li>
          <Link to="/collect">Collect Khoon</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
