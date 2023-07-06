import React from "react";
import TopMenuContainer from "./components/top-menu/Container";
import { Outlet } from "react-router-dom";
import UserContextWrapper from './contexts/UserContext';

function App() {
  return (
    <UserContextWrapper>
      <div>
        <TopMenuContainer />
        <Outlet /> 
      </div>
    </UserContextWrapper>
  );
}

export default App;
