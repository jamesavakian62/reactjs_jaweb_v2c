import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar4() {
  return (
    <div className="navbar1">
      <NavLink to="/" className={`navMenuItem`}>
        Home4
      </NavLink>
      <NavLink to="/roadmap" className={`navMenuItem`}>
        Roadmap
      </NavLink>
      <NavLink to="/news" className={`navMenuItem`}>
        News
      </NavLink>
      <NavLink to="/faqs" className={`navMenuItem`}>
        FAQ's
      </NavLink>
    </div>
  );
}

export default Navbar4;
