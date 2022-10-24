export default class ManageData {
	constructor(averageSessionsData, performanceData, activityData) {
		this.averageSessionsData = averageSessionsData;
		this.performanceData = performanceData;
		this.activityData = activityData;
	}
	//Functions for creating new tables/objects where new exploitable data are added

	manageAverageSessionsData() {
		let newSessionsArray = [];
		const sessions = this.averageSessionsData?.sessions;
		const newDays = [
			{ dayLetter: "L" },
			{ dayLetter: "M" },
			{ dayLetter: "M" },
			{ dayLetter: "J" },
			{ dayLetter: "V" },
			{ dayLetter: "S" },
			{ dayLetter: "D" },
		];
		for (let i = 0; i < sessions?.length; i++) {
			const newSessionsAverage = Object.assign(newDays[i], sessions[i]);
			newSessionsArray.push(newSessionsAverage);
		}
		return newSessionsArray;
	}

	managePerformanceData() {
		const newPerformanceArray = [];
		const performance = this.performanceData?.data;
		const type = [
			{ type: "Cardio" },
			{ type: "Energie" },
			{ type: "Endurance" },
			{ type: "Force" },
			{ type: "Vitesse" },
			{ type: "Intensité" },
		];
		for (let i = 0; i < performance?.length; i++) {
			const newPerformance = Object.assign(type[i], performance[i]);
			newPerformanceArray.push(newPerformance);
		}
		return newPerformanceArray;
	}

	manageActivityData() {
		let newActivityArray = [];
		const activity = this.activityData?.sessions;

		for (let i = 0; i < activity?.length; i++) {
			const activityObj = Object.assign(activity[i], { dayNum: i + 1 });
			newActivityArray.push(activityObj);
		}

		return newActivityArray;
	}
}
