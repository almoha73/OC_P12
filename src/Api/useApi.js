import axios from "axios";
import { useState, useEffect } from "react";

const useApi = (userId) => {
	const [mainData, setMainData] = useState();
	const [activityData, setActivityData] = useState();
	const [averageSessionsData, setAverageSessionsData] = useState();
	const [performanceData, setPerformanceData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.all([
				axios.get(`http://localhost:3000/user/${userId}`),
				axios.get(`http://localhost:3000/user/${userId}/activity`),
				axios.get(`http://localhost:3000/user/${userId}/average-sessions`),
				axios.get(`http://localhost:3000/user/${userId}/performance`),
			])
			.then(
				axios.spread((...res) => {
					setMainData(res[0]?.data?.data);
					setActivityData(res[1]?.data?.data);
					setAverageSessionsData(res[2]?.data?.data);
					setPerformanceData(res[3]?.data?.data);
					setIsLoading(false);
				})
			)

			.catch((errors) => {
				setError(errors);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [userId]);

	return {
		mainData,
		activityData,
		averageSessionsData,
		performanceData,
		isLoading,
		error,
	};
};

export default useApi;
