import React from "react";
import "../styles/navbar.css";
import { NavLink } from "react-router-dom";

import {
  handleAuth,
  handleLogout,
  signInWithGoogle,
} from "../utils/firebase/auth";
import { useWeb3 } from "@3rdweb/hooks";

const Navbar = ({ user, walletAddress }) => {
  const { connectWallet, disconnectWallet } = useWeb3();
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <NavLink to="/" className="logo111">
            James L. Avakian
          </NavLink>
        </div>
        <div className="navbarRight">
          <div className="navMenu">
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

            {!walletAddress && !user && (
              <>
                <a
                  className="TextSize"
                  href="https://todo-firebase-login.vercel.app/"
                >
                  <i className="TextSize fas fa-user-circle navAvatar navMenuItem "></i>
                </a>
                <div
                  className="TextSize navMenuItem loginBtn"
                  onClick={() => handleAuth(connectWallet)}
                >
                  <a
                    className="TextSize"
                    href=" https://todo-firebase-login.vercel.app/   "
                  >
                    Login
                  </a>
                </div>
              </>
            )}

            {walletAddress && !user && (
              <>
                <i className="fas fa-user-circle navAvatar navMenuItem"></i>
                <div
                  className="navMenuItem loginBtn"
                  onClick={() => handleAuth(connectWallet)}
                >
                  Login
                </div>
              </>
            )}

            {!walletAddress && user && (
              <>
                <i className="fas fa-user-circle navAvatar navMenuItem"></i>
                <div
                  className="navMenuItem loginBtn"
                  onClick={() => handleAuth(connectWallet)}
                >
                  Connect Wallet
                </div>
              </>
            )}

            {walletAddress && user && (
              <>
                <i className="fas fa-user-circle navAvatar navMenuItem"></i>
                <div
                  className="navMenuItem loginBtn"
                  onClick={() => handleLogout(disconnectWallet)}
                >
                  Logout
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
