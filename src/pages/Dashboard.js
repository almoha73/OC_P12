import React from "react";
import FetchData from "../Api/MockedApi/FetchData";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Error from "../pages/Error";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  let { id } = useParams();
  
let userId = Number(id);

  const { userMainData} = FetchData(userId);
  

  if (!id) return <Error />;
  if (!userMainData) return <Error />
  
  return (
    <>
      {userMainData !== undefined && (
        <div>
          <Navbar  />
          <main className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
              <h1>
                Bonjour{" "}
                <span className="dashboard-name">
                  {userMainData.userInfos.firstName}
                </span>
              </h1>
              <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Dashboard;
