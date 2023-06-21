import React from "react";
import TopMenuContainer from "./components/top-menu/Container";
import { BasicTable } from "./components/table/BasicTable";
// import Home from "./pages/Home";

function App() {
  return (
    <div>
      <TopMenuContainer />
      <div className="mt-[150px]">Add Question</div>
      <BasicTable />
    </div>
  );
}

export default App;
