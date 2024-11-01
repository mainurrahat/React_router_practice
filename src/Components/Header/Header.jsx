// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      {/* <h1>Navber </h1> */}
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/about">about</NavLink>
        <NavLink to="/contact">contact Us</NavLink>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </div>
  );
};

export default Header;
