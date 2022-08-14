import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

function Navbar3() {
  return (
    <div className="navbar1">
      <NavLink to="/React1" className={`navMenuItem`}>
        My Programming
      </NavLink>

      <NavLink to="/MyStory" className={`navMenuItem`}>
        My Story
      </NavLink>
      <NavLink to="/GreatThings" className={`navMenuItem`}>
        Great Things
      </NavLink>

      <NavLink to="/Resume" className={`navMenuItem`}>
        Resume
      </NavLink>
    </div>
  );
}

export default Navbar3;
