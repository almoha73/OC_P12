import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import LineChart from "../Components/LineChart";
import useApi from "../Api/useApi";
import Loader from "./Loader";
import Error from '../pages/Error';
import { useParams } from "react-router-dom";
import ManageData from "../services/ManageData";

const Dashboard = () => {
	const {userId} = useParams()
	let { mainData, activityData, averageSessionsData, performanceData, isLoading, error } = useApi(userId);
	console.log(mainData, activityData, averageSessionsData, performanceData);

	const manageData = new ManageData(averageSessionsData)
		const dataSessions = manageData.manageAverageSessionsData()
		console.log(dataSessions);
	

    if (error) {
        return (<Error />)
    } else if (isLoading) {
        return <Loader />
    } else {
		
		return (
			<>
				<Navbar />
				<main className="dashboard">
					<Sidebar />
					<div className="dashboard-content">
						<h1>
							Bonjour
							<span className="dashboard-name"> {mainData.userInfos.firstName}</span>
						</h1>
						<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
						<LineChart />
					</div>
				</main>
			</>
		);
	}

}
export default Dashboard;
