import axios from "axios";
import { useState, useEffect } from "react";

/**
 *
 * @param {string} userId userId will be retrieved by useParams in the Dashboard file
 *
 * @returns {object} returns an object of objects that are retrieved by the API calls. this object is retrieved in the dashboard file
 * 		@property {object} mainData
 * 		@property {object} activityData
 * 		@property {object} averageSessionsData
 * 		@property {object} performanceData
 * 		@property {boolean} isLoading 
 * 		@property {null|string} error 
 */

const useApiMock = (userId) => {
	const [mainData, setMainData] = useState();
	const [activityData, setActivityData] = useState();
	const [averageSessionsData, setAverageSessionsData] = useState();
	const [performanceData, setPerformanceData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		axios
			.all([
				axios.get(`../MockedApi/UserMainDataMock.json`),
				axios.get(`../MockedApi/UserActivityMock.json`),
				axios.get(`../MockedApi/UserAverageSessionMock.json`),
				axios.get(`../MockedApi/UserPerformanceMock.json`),
			])
			.then(
				axios.spread((...res) => {
					setMainData(res[0].data.data);
					setActivityData(res[1].data.data);
					setAverageSessionsData(res[2].data.data);
					setPerformanceData(res[3].data.data);
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

export default useApiMock;