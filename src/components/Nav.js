import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img src={littlelemon_logo} alt="Little Lemon Logo" />
      </Link>
      <ul className="navs">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/">Reservations</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
