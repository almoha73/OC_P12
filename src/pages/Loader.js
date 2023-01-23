import React from "react";
import loader from "../assets/loader.gif";

/**
 * Component page that displays the loader
 * @component
 */

const Loader = () => {
	return (
		
			<div style={{width: "100%", height: "100vh", position:"relative", backgroundColor: "black"}}>
				<iframe
                title="loader"
					src={loader}
					width="100%"
					height="100%"
					style={{position:"absolute", top:"45%", left:"40%"}}
					frameBorder="0"
					allowFullScreen
				></iframe>
			</div>
			
		
	);
};

export default Loader;
