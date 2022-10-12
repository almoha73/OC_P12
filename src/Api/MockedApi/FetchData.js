import { USER_MAIN_DATA, USER_PERFORMANCE, USER_AVERAGE_SESSIONS, USER_ACTIVITY } from "./data";




const FetchData = (userId) => {
    const userMainData = USER_MAIN_DATA.find(elt => parseInt(userId) === elt.id)
    const userPerformance = USER_PERFORMANCE.find(elt => parseInt(userId) === elt.userId)
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(elt => parseInt(userId) === elt.userId)
    const userActivity = USER_ACTIVITY.find(elt => parseInt(userId) === elt.userId)
    const errorData = USER_MAIN_DATA.find(elt => elt.id === undefined)
    console.log(userMainData, userPerformance, userAverageSessions, userActivity, errorData)
    return {userMainData, userPerformance, userAverageSessions, userActivity, errorData}
}

export default FetchData;