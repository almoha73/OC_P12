import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Reglage from "./pages/Reglage";
import Community from "./pages/Community";

function App() {
  
  return (
   
    <Routes>
      <Route path="/" element={<Home id/>}></Route>
      <Route path="/user/:id" element={<Dashboard />}></Route>
      <Route path="/reglage" element={<Reglage />}></Route>
      <Route path="/community" element={<Community />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>

  );
}

export default App;
