import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import BarchartActivity from "../Components/BarchartActivity";
import useApi from "../Api/useApi";
import Loader from "./Loader";
import Error from "../pages/Error";
import { useParams } from "react-router-dom";
import ManageData from "../services/ManageData";
import LineChartSessions from "../Components/LineChartSessions";
//import RadarChart from "../Components/RadarChart";
const Dashboard = () => {
	const { userId } = useParams();
	let {
		mainData,
		activityData,
		averageSessionsData,
		performanceData,
		isLoading,
		error,
	} = useApi(userId);
	
	const manageActivity = new ManageData(
		averageSessionsData,
		performanceData,
		activityData
	);
	// const managePerformance = new ManageData(
	// 	averageSessionsData,
	// 	performanceData,
	// 	activityData
	// );
	const manageAverageSessions = new ManageData(
		averageSessionsData,
		performanceData,
		activityData
	);
	const dataActivity = manageActivity?.manageActivityData();
	//const dataPerformance = managePerformance?.managePerformanceData();
	const dataAverageSessions = manageAverageSessions?.manageAverageSessionsData();
	

	if (error) {
		return <Error />;
	} else if (isLoading) {
		return <Loader />;
	} else {
		return (
			<>
				<Navbar />
				<main className="container">
					<Sidebar />
					<div className="dashboard">
						<div className="dashboard-title">
							<h1>
								Bonjour
								<span className="dashboard-name">
									{mainData.userInfos.firstName}
								</span>
							</h1>
							<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
						</div>
						<div className="dashboard-content">
							<div className="barchart-activity">
								<BarchartActivity dataActivity={dataActivity} />
							</div>
							<div className="charts">
								<LineChartSessions dataSessions={dataAverageSessions} />
								{/* <RadarChart dataPerformance={dataPerformance}/> */}
							
							</div>
							<div className="health-infos"></div>
						</div>
						
					</div>
				</main>
			</>
		);
	}
};
export default Dashboard;
