import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="navMenuFooter">
        <NavLink to="/" className={`navMenuItem`}>
          Home
        </NavLink>

        <NavLink to="/about" className={`navMenuItem`}>
          AboutMe
        </NavLink>

        <NavLink to="/software" className={`navMenuItem`}>
          Software
        </NavLink>

        <NavLink to="/news" className={`navMenuItem`}>
          News
        </NavLink>
      </div>

      <div className="copyrightText">
        &copy; 2022 James L. Avakian, Optical Automation, LLC. All rights
        reserved.
      </div>
    </div>
  );
};

export default Footer;
