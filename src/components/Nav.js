import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h1>Times Top Stories</h1>
      </Link>
    </nav>
  );
};

export default Nav;
