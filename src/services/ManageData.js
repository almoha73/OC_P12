export default class ManageData {
	constructor(averageSessionsData, performanceData, activityData) {
		this.averageSessionsData = averageSessionsData;
		this.performanceData = performanceData;
		this.activityData = activityData;
	}
	//Functions for creating new tables/objects where new exploitable data are added

	manageAverageSessionsData() {
		let newSessionsArray=[];
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
		for(let i = 0; i < sessions?.length; i++){
				const newSessionsAverage = Object.assign(newDays[i], sessions[i])
				newSessionsArray.push(newSessionsAverage)
		}
		return newSessionsArray
	}

	managePerformanceData(){
		const type = {
			1: "Cardio",
			2: "Energie",
			3: "Endurance",
			4: "Force",
			5: "Vitesse",
			6: "Intensité"
		}
		const performances = Object.assign({type}, this.performanceData)
		return performances
	}

	manageActivityData(){
		let newActivityArray = []
		const activity = this.activityData?.sessions;
		
		for(let i = 0; i < activity?.length; i++){
			const activityObj= Object.assign(activity[i], {dayNum : i + 1})
			newActivityArray.push(activityObj)
		}
		
		return newActivityArray
	}
}