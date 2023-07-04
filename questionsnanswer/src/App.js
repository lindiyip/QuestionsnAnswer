import React from "react";
// import { Link } from "react-router-dom";
import TopMenuContainer from "./components/top-menu/Container";
import { Outlet } from "react-router-dom";
import UserContextWrapper from './contexts/UserContext';

function App() {
  return (
    <UserContextWrapper>
      <div>
        <TopMenuContainer />
        {/* <div className="mt-[100px] flex justify-end px-5 py-5">
          <Link to={`/NewQuestion`}className="primary-button text-lg">New Question</Link>
        </div> */}
        <Outlet /> 
      </div>
    </UserContextWrapper>
  );
}

export default App;
