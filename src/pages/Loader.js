import React from "react";
import loader from "../assets/loader.gif";

/**
 * Component page that displays the loader
 * @component
 */

const Loader = () => {
	return (
		
			<div style={{paddingTop: "89.950%", position:"relative", backgroundColor: "black"}}>
				<iframe
                title="loader"
					src={loader}
					width="100%"
					height="100%"
					style={{position:"absolute", top:"45vh", left:"45vw"}}
					frameBorder="0"
					allowFullScreen
				></iframe>
			</div>
			
		
	);
};

export default Loader;
