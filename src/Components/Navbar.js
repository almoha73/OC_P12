import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

/**
 * Component that displays the project navigation bar
 * @component
 */

const Navbar = () => {
	let userId = '18'
	return (
		<nav className="navbar-container">
			<div className="navbar">
				<div className="logo">
					<img src={logo} alt="" />
				</div>
				<ul className="navbar-link">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? "nav-active" : "")}
						end
					>
						<li className="navbar-item">Accueil</li>
					</NavLink>
					<NavLink
						to={`/user/${userId}`}
						className={({ isActive }) => (isActive ? "nav-active" : "")}
						end
					>
						<li className="navbar-item">Profil</li>
					</NavLink>

					<NavLink
						to="/reglage"
						className={({ isActive }) => (isActive ? "nav-active" : "")}
						end
					>
						<li className="navbar-item">Réglage</li>
					</NavLink>
					<NavLink
						to="/community"
						className={({ isActive }) => (isActive ? "nav-active" : "")}
						end
					>
						<li className="navbar-item">Communauté</li>
					</NavLink>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
