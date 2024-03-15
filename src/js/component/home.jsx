import React from "react";
import Todos from "./Todos";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	
	return (
		
		<div className="text-center">
			<Todos />
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
		</div>
		
	);
};

export default Home;
