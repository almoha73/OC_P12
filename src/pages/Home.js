import React from "react";
import Navbar from "../Components/Navbar";
import logo from "../assets/logo.svg";


/**
 * Component page that displays home page
 * @component
 */
//Only the dashboard page had to be done, but in order for the links to work, the home page is functional and ready to receive future data.
const Home = () => {
	return (
		<div>
			<Navbar />
			<main className="home-main">
				<div className="home-title">
					<h1>Bienvenu sur</h1>
					<img src={logo} alt="" />
				</div>
			</main>
		</div>
	);
};

export default Home;
