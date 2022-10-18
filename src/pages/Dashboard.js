import React from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import LineChart from "../Components/LineChart";
import Services from "../services/Services";
import { useParams } from "react-router-dom";



const Dashboard = () => {
 const {userId} = useParams()
 console.log(userId);

const data = Services()
 console.log(data);
  
  return (
    <>
      
        <div>
          <Navbar  />
          <main className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
              <h1>
                Bonjour{" "}
                <span className="dashboard-name">
                 {''}
                </span>
              </h1>
              <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
              <LineChart />
            </div>
          </main>
        </div>
      
    </>
  );
};

export default Dashboard;
