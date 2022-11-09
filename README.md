<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" /><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" /><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" /> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> 
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" /> <img src="https://img.shields.io/badge/Recharts-FF0000?style=for-the-badge&logo=recharts&logoColor=white" /> <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" /> <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" /> <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white" /> 


# SportSee, a dashboard of charts made with the Recharts library

## 1. Le projet
This project consists in recovering sports and health data from users, making graphs in order to have an image of it.\
This project is built with create-react-app.\

The deployment of the project works only with mocked data.\
To switch from backend data to mocked data, go to the `dashbord.js`\

Uncomment the useMockApi import and comment out useApi:\
`import useApi from "../Api/useApi";`\
`//import useMockApi from "../Api/useMockApi";`\

In the Dashboard component, replace useApi function by useMockApi.\
`let {
		mainData,
		activityData,
		averageSessionsData,
		performanceData,
		isLoading,
		error,
	} = useApi(userId);`



## 2 Prerequisites

- [NodeJS (**version 14**)](https://nodejs.org/en/) minimum
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## 3 Launching first the Backend

- Fork the repository [Backend](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)
- Clone it on your computer.
- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.

## 4 Then Launching the Frontend
- The `npm install` command will allow you to install the dependencies.
- The `npm run start` command will allow you to run the micro API.