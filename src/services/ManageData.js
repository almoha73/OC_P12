export default class ManageData {
	/**
	 * created a formatting of the data in order to exploit them
	 *
	 * @param {{Object}} averageSessionsData the initial data of the api that contains the sessions table that will be modified
	 * @param {Object} performanceData the initial data of the api that contains the kind object that will be modified
	 * @param {Object} activityData the initial data of the api that contains the sessions table that will be modified
	 * @param {Object} mainData the initial data of the api that contains the keyData table that will be modified
	 */
	constructor(averageSessionsData, performanceData, activityData, mainData) {
		this.averageSessionsData = averageSessionsData;
		this.performanceData = performanceData;
		this.activityData = activityData;
		this.mainData = mainData;
	}
	//Functions for creating new tables/objects where new exploitable data are added

	/**
	 * @property {Function}
	 * @returns {Object[]} the new object contains in addition the Obj newDays[i] with the usable values
	 */

	manageAverageSessionsData() {
		let newSessionsArray = [];
		/**
		 * @type {Array<day: number, sessionsLength: number>} sessions
		 */
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

		/**
		 * @type {Array<dayLetter: string, day: number, sessionsLength: number>} newSessionsArray
		 */
		return newSessionsArray;
	}

	/**
	 * @property {Function}
	 * @returns {Object[]} the new object contains in addition the object with the usable values
	 */
	managePerformanceData() {
		const newPerformanceArray = [];
		let newArray;

		/**
		 * @type {Array<value: number, kind: number>} performance
		 */
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
			newArray = newPerformanceArray?.slice().reverse();
		}
		/**
		 * @type {Array<type: string, value: number, kind: number>} newArray
		 */

		return newArray;
	}

	/**
	 * @property {Function}
	 * @returns {Object[]} the new object contains in addition the object with the usable values
	 */
	manageActivityData() {
		let newActivityArray = [];
		/**
		 * @type {Array<Object>} activity
		 */
		const activity = this.activityData?.sessions;

		for (let i = 0; i < activity?.length; i++) {
			const activityObj = Object.assign(activity[i], { dayNum: i + 1 });
			newActivityArray.push(activityObj);
		}

		/**
		 * @type {Array<day: string, kilogram: number, calories: number, dayNum: number>} newActivityArray
		 */

		return newActivityArray;
	}

	/**
	 * @property {Function}
	 * @returns {Object[]} the new object contains in addition the object with the usable values
	 */
	manageMainData() {
		let newManageDataArray = [];
		/**
		 * @type {number} score
		 */
		const score = (this.mainData?.todayScore || this.mainData?.score) * 100;

		const mainDataObj = Object.assign({ scorePourcent: score }, this.mainData);

		newManageDataArray.push(mainDataObj);

		/**
		 * @type {Array<scorePourcent: number, id: number, userInfos: <Object>, score: number, keyData: <Object>} newActivityArray
		 */
		return newManageDataArray;
	}
}
