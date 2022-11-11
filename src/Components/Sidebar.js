import React from "react";
import { NavLink } from "react-router-dom";
import zen from "../assets/zen.svg";
import bike from "../assets/bike.svg";
import swimming from "../assets/swiming.svg";
import strengthTraining from "../assets/strengthTraining.svg";

/**
 * Component that displays the project sidebar 
 * @component
 */

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <NavLink to="#">
        <img src={zen} alt="" />
      </NavLink>
      <NavLink to="#">
        <img src={bike} alt="" />
      </NavLink>
      <NavLink to="#">
        <img src={swimming} alt="" />
      </NavLink>
      <NavLink to="#">
        <img src={strengthTraining} alt="" />
      </NavLink>
      <p className="copyright">Copyright, SportSee 2020</p>
    </div>
  );
};

export default Sidebar;
