export default class ManageData {
    constructor(averageSessionsData){
        // this.mainData = mainData;
        // this.activityData = activityData;
        this.averageSessionsData = averageSessionsData;
        // this.performanceData = performanceData;

    }

    manageAverageSessionsData (){
        const sessions = this.averageSessionsData.sessions
        
            console.log(sessions);
        return sessions
        
    }

}

