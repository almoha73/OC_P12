import React from "react";
import Navbar from "../Components/Navbar";
import logo from "../assets/logo.svg";
//import FetchData from "../Api/MockedApi/FetchData";

const Home = () => {
  // const { userMainData } =FetchData(id);
  // console.log(userMainData);
  return (
    <div>
      <Navbar id/>
      <main className="home-main">
        <div className="home-title">
          <h1>Bienvenu sur</h1>
          <img src={logo} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
