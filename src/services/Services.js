import Fetch from "../Api/Fetch";
import { useParams } from "react-router-dom";
import React from "react";


const Services = () => {

	const {userId} = useParams();
	console.log(userId);

	let endpointsApiMocked = [
		"../MockedApi/UserMainDataMock.json",
		"../MockedApi/UserAverageSessionMock.json",
		"../MockedApi/UserActivityMock.json",
		"../MockedApi/UserPerformanceMock.json",
	];
	const endpointsApi = [
		`http://localhost:3000/user/${userId}`,
		`http://localhost:3000/user/${userId}/activity`,
		`http://localhost:3000/user/${userId}/average-sessions`,
		`http://localhost:3000/user/${userId}/performance`,
	];

	let dataArrayMocked = [];
	let dataArray = [];

	for (let elt of endpointsApiMocked) {
		console.log(elt);
		dataArrayMocked.push(Fetch(elt));
	}
	for (let elt of endpointsApi) {
		console.log(elt);
		dataArray.push(Fetch(elt));
	}
 console.log(dataArray, dataArrayMocked);


return(
	<div></div>
)

};

export default Services;
