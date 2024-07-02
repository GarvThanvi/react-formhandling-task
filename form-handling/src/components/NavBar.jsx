import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <header>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contactInfo">ContactForm</Link>
        </li>
      </ul>
    </header>
  );
}
