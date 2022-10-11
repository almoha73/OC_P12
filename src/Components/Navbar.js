import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="navbar-link">
          <NavLink to="/" className={({isActive}) => (isActive ? "nav-active" : "")}end>
            <li className="navbar-item">Accueil</li>
          </NavLink>
          <NavLink to="/user/:id" className={({isActive}) => (isActive ? "nav-active" : "")}end>
            <li className="navbar-item">Profil</li>
          </NavLink>
          <NavLink to="/reglage" className={({isActive}) => (isActive ? "nav-active" : "")}end>
            <li className="navbar-item">Réglage</li>
          </NavLink>
          <NavLink to="/community" className={({isActive}) => (isActive ? "nav-active" : "")}end>
            <li className="navbar-item">Communauté</li>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
