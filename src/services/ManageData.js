export default class ManageData {
	constructor(averageSessionsData, performanceData, activityData, mainData) {
		this.averageSessionsData = averageSessionsData;
		this.performanceData = performanceData;
		this.activityData = activityData;
		this.mainData = mainData;
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
		let newArray;
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
			newPerformanceArray?.push(newPerformance);
			 newArray = newPerformanceArray?.slice().reverse()
			 
		}
		return newArray;
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

	manageMainData(){
		const score = this.mainData?.score * 100
		console.log(score);
		const mainDataObj = Object.assign({scorePurcent: `${score} %`}, this.mainData);
		return mainDataObj
	}
}
 