import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import LineChart from "../Components/LineChart";
import Fetch from "../Api/Fetch";
import { useParams } from "react-router-dom";

const Dashboard =  () => {
	const { userId } = useParams();
	const[firstName, setFirstName]= useState()
	

	useEffect(() => {
		
		const getMainData = async () => {
			const data = await Fetch(userId);
			setFirstName(data[0].data.userInfos.firstName)
		};
		getMainData();
	}, [userId])
	
	
	return (
		<>
			<Navbar />
			<main className="dashboard">
				<Sidebar />
				<div className="dashboard-content">
					<h1>
						Bonjour
						<span className="dashboard-name"> {firstName}</span>
					</h1>
					<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
					<LineChart />
				</div>
			</main>
		</>
	);
};

export default Dashboard;
