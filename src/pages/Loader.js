import React from "react";
import loader from "../assets/loader.gif";

const Loader = () => {
	return (
		
			<div style={{paddingTop: "89.950%", position:"relative", backgroundColor: "black"}}>
				
				<iframe
                title="loader"
					src={loader}
					width="100%"
					height="100%"
					style={{position:"absolute", top:"40vh", left:"40vw"}}
					frameBorder="0"
					allowFullScreen
				></iframe>
			</div>
			
		
	);
};

export default Loader;
