import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import BarchartActivity from "../Components/BarchartActivity";
import useApi from "../Api/useApi";
import Loader from "./Loader"
import Error from "./Error";
import { useParams } from "react-router-dom";
import ManageData from "../services/ManageData";
import LineChartSessions from "../Components/LineChartSessions";
import RadarChartPerformance from "../Components/RadarChartPerformance";
import OneLevelPieChart from "../Components/OneLevelPieChart";
import Nutriments from "../Components/Nutriments";

const Dashboard = () => {
	let { userId } = useParams();
	
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
		activityData,
		mainData
	);

	const manageAverageSessions = new ManageData(
		averageSessionsData,
		performanceData,
		activityData,
		mainData
	);
	const managePerformance = new ManageData(
		averageSessionsData,
		performanceData,
		activityData,
		mainData
	);
	const manageData = new ManageData(
		averageSessionsData,
		performanceData,
		activityData,
		mainData
	);
	const dataMainData = manageData?.manageMainData();
	const dataActivity = manageActivity?.manageActivityData();
	const dataAverageSessions =
		manageAverageSessions?.manageAverageSessionsData();
	const dataPerformance = managePerformance?.managePerformanceData();
	console.log(dataMainData);
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
					<div className="health-info">
						<div className="dashboard">
							<div className="dashboard-title">
								<h1>
									Bonjour &nbsp;
									<span className="dashboard-name">
										{mainData.userInfos.firstName}
									</span>
								</h1>
								<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
							</div>
							<div className="dashboard-graph">
								<div className="dashboard-content">
									<div className="barchart-activity">
										{dataActivity && (
											<BarchartActivity dataActivity={dataActivity} />
										)}
									</div>
									<div className="charts">
										{dataAverageSessions && (
											<LineChartSessions dataSessions={dataAverageSessions} />
										)}

										{dataPerformance && (
											<RadarChartPerformance
												dataPerformance={dataPerformance}
											/>
										)}

										<OneLevelPieChart dataMainData={dataMainData} />
									</div>
								</div>
								<div className="nutritional-infos">
									<Nutriments calorie={dataMainData[0]?.keyData.calorieCount} />
									<Nutriments protein={dataMainData[0]?.keyData.proteinCount} />
									<Nutriments
										carbo={dataMainData[0]?.keyData.carbohydrateCount}
									/>
									<Nutriments lipid={dataMainData[0]?.keyData.lipidCount} />
								</div>
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
};
export default Dashboard;
