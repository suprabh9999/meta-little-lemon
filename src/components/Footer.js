import React from "react";
import { Link } from "react-router-dom"; // Import the Link component
import small_logo from "../images/small_logo.png";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <img src={small_logo} alt="Small Logo" />
        </div>
        <div>
          <h3>Document Navigation</h3>
          <ul className="footer-links">
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
        </div>
        <div>
          <h3>Contact</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Address</Link>
            </li>
            <li>
              <Link to="/">Phone Number</Link>
            </li>
            <li>
              <Link to="/">Email</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">Twitter</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
