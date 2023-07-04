import React from "react";
import { Link } from "react-router-dom";
import TopMenuContainer from "./components/top-menu/Container";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <TopMenuContainer />
      <div className="mt-[100px] flex justify-end px-5 py-5 bg-white text-gray-700">
        <Link to={`/NewQuestion`}className="primary-button">New Question</Link>
      </div>
      <Outlet /> 
    </div>
  );
}

export default App;
