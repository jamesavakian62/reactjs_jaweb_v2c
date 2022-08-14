import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar2() {
  return (
    <div className="navbar1">
      <NavLink to="/react1" className={`navMenuItem`}>
        Software Creation
      </NavLink>
      <NavLink to="/websites" className={`navMenuItem`}>
        Website
      </NavLink>
      <NavLink to="/webs" className={`navMenuItem`}>
        Website Access
      </NavLink>
      <NavLink to="/apps" className={`navMenuItem`}>
        Mobile
      </NavLink>
      <NavLink to="/news" className={`navMenuItem`}>
        Search
      </NavLink>
      <NavLink to="/watch" className={`navMenuItem`}>
        Watch Faces
      </NavLink>
    </div>
  );
}

export default Navbar2;
